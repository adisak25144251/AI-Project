import { test, gotoOK, scanInternalLinksOnCurrentPage, assertNoMissingI18nKeys, loginStudent, expectVisible } from "../helpers";
import { QUALITY_PAGES } from "../testcases";
import { TID } from "../contract";

for (const loc of ["th", "en"] as const) {
  test(`[QA-001] broken links scan (public pages) (${loc})`, async ({ page }) => {
    for (const p of QUALITY_PAGES) {
      await gotoOK(page, p(loc));
      await scanInternalLinksOnCurrentPage(page);
      await assertNoMissingI18nKeys(page);
    }
  });

  test(`[QA-001b] broken links scan (LMS key pages) (${loc})`, async ({ page }) => {
    await loginStudent(page, loc);

    // dashboard
    await scanInternalLinksOnCurrentPage(page);

    // course
    await gotoOK(page, `/${loc}/app/course`);
    await scanInternalLinksOnCurrentPage(page);
  });

  test(`[QA-003] 404 page (${loc})`, async ({ page }) => {
    await gotoOK(page, `/${loc}/this-page-should-not-exist`);
    await expectVisible(page, TID.notFoundRoot);
  });

  test(`[QA-004] i18n missing keys guard (${loc})`, async ({ page }) => {
    await gotoOK(page, `/${loc}`);
    await assertNoMissingI18nKeys(page);
  });
}