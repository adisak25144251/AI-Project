import { test, gotoOK, clickTid, expectVisible, assertNoMissingI18nKeys } from "../helpers";
import { TID } from "../contract";

for (const loc of ["th", "en"] as const) {
  test(`[CNT-001] contact submit valid (${loc})`, async ({ page }) => {
    await gotoOK(page, `/${loc}/contact`);
    await expectVisible(page, TID.contactRoot);

    await page.getByTestId(TID.contactName).fill("Test User");
    await page.getByTestId(TID.contactEmail).fill("test@example.com");
    await page.getByTestId(TID.contactMessage).fill("Hello, I want to know more about AI Project 101.");

    await clickTid(page, TID.contactSubmit);
    await expectVisible(page, TID.contactSuccess);
    await assertNoMissingI18nKeys(page);
  });

  test(`[CNT-002] contact submit invalid shows error (${loc})`, async ({ page }) => {
    await gotoOK(page, `/${loc}/contact`);
    await clickTid(page, TID.contactSubmit);
    await expectVisible(page, TID.formError);
    await assertNoMissingI18nKeys(page);
  });
}