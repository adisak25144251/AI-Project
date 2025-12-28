import { BLOG_CASES } from "../testcases";
import { test, gotoOK, clickTid, expectVisible, assertNoMissingI18nKeys } from "../helpers";
import { TID } from "../contract";

for (const loc of ["th", "en"] as const) {
  test(`[BLOG-001] open first blog (${loc})`, async ({ page }) => {
    await gotoOK(page, `/${loc}/blog`);
    await clickTid(page, TID.blogCard0);
    await expectVisible(page, TID.blogDetailRoot);
    await assertNoMissingI18nKeys(page);
  });

  test(`[BLOG-002] breadcrumb back (${loc})`, async ({ page }) => {
    await gotoOK(page, `/${loc}/blog`);
    await clickTid(page, TID.blogCard0);
    await expectVisible(page, TID.blogDetailRoot);

    await clickTid(page, TID.breadcrumbBlog);
    await expectVisible(page, TID.blogRoot);
    await assertNoMissingI18nKeys(page);
  });
}