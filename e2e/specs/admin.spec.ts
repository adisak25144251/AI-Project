import { test, gotoOK, clickTid, expectVisible, expectUrlContains, loginAdmin, assertNoMissingI18nKeys } from "../helpers";
import { TID } from "../contract";
import { paths } from "../paths";

for (const loc of ["th", "en"] as const) {
  test.describe(`ADMIN (${loc})`, () => {
    test(`[ADM-001] open submissions queue (${loc})`, async ({ page }) => {
      await loginAdmin(page, loc);
      await gotoOK(page, paths.adminRoot(loc));
      await clickTid(page, TID.adminSubmissionsBtn);

      await expectUrlContains(page, paths.adminSubmissions(loc));
      await expectVisible(page, TID.adminSubmissionsRoot);
      await assertNoMissingI18nKeys(page);
    });

    test(`[ADM-002] grade submission (${loc})`, async ({ page }) => {
      await loginAdmin(page, loc);
      await gotoOK(page, paths.adminSubmissions(loc));

      await clickTid(page, TID.adminGrade);
      await expectVisible(page, TID.gradeSaved);
      await assertNoMissingI18nKeys(page);
    });

    test(`[ADM-003] publish lesson (${loc})`, async ({ page }) => {
      await loginAdmin(page, loc);
      await gotoOK(page, paths.adminLessons(loc));

      await clickTid(page, TID.adminPublish);
      await expectVisible(page, TID.publishSuccess);
      await assertNoMissingI18nKeys(page);
    });

    test(`[ADM-004] send announcement (${loc})`, async ({ page }) => {
      await loginAdmin(page, loc);
      await gotoOK(page, paths.adminAnnouncements(loc));

      await page.getByTestId(TID.adminAnnounceMessage).fill("New content released!");
      await clickTid(page, TID.adminAnnounceSend);
      await expectVisible(page, TID.announceSent);
      await assertNoMissingI18nKeys(page);
    });
  });
}