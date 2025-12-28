import { CURRICULUM_CASES } from "../testcases";
import { test, gotoOK, clickTid, expectVisible, assertNoMissingI18nKeys } from "../helpers";

for (const c of CURRICULUM_CASES) {
  for (const loc of c.locales) {
    test(`[${c.id}] (${loc})`, async ({ page }) => {
      await gotoOK(page, c.page(loc));
      const act = c.action?.(loc);
      if (act?.type === "click") await clickTid(page, act.tid);

      const exp = c.expect(loc);
      if (exp.visibleTid) await expectVisible(page, exp.visibleTid);

      await assertNoMissingI18nKeys(page);
    });
  }
}