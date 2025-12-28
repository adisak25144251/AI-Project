import { test, gotoOK, clickTid, expectUrlContains, expectVisible, loginStudent, assertNoMissingI18nKeys } from "../helpers";
import { TID } from "../contract";
import { paths } from "../paths";

for (const loc of ["th", "en"] as const) {
  test(`[AUTH-001] nav login (${loc})`, async ({ page }) => {
    await gotoOK(page, paths.home(loc));
    await clickTid(page, TID.navLogin);
    await expectUrlContains(page, paths.signIn(loc));
    await expectVisible(page, TID.authRoot);
    await assertNoMissingI18nKeys(page);
  });

  test(`[AUTH-002] login success (${loc})`, async ({ page }) => {
    await loginStudent(page, loc);
    await assertNoMissingI18nKeys(page);
  });

  test(`[AUTH-003] login invalid shows error (${loc})`, async ({ page }) => {
    await gotoOK(page, paths.signIn(loc));
    await page.getByTestId(TID.authEmail).fill("wrong@example.com");
    await page.getByTestId(TID.authPassword).fill("wrongpass");
    await page.getByTestId(TID.authSubmit).click();
    await expectVisible(page, TID.authError);
    await assertNoMissingI18nKeys(page);
  });

  test(`[AUTH-004] guest redirected from dashboard (${loc})`, async ({ page }) => {
    await gotoOK(page, paths.appDashboard(loc));
    await expectUrlContains(page, paths.signIn(loc));
    await expectVisible(page, TID.authRoot);
    await assertNoMissingI18nKeys(page);
  });

  test(`[AUTH-006] logout (${loc})`, async ({ page }) => {
    await loginStudent(page, loc);
    await clickTid(page, TID.authLogout);
    await expectUrlContains(page, paths.home(loc));
  });
}