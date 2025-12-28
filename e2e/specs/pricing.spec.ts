import { test, gotoOK, clickTid, expectVisible, expectUrlContains, isPaymentMockMode, assertNoMissingI18nKeys } from "../helpers";
import { TID } from "../contract";
import { paths } from "../paths";

for (const loc of ["th", "en"] as const) {
  test(`[PAY-001] select standard (${loc})`, async ({ page }) => {
    await gotoOK(page, paths.pricing(loc));
    await clickTid(page, TID.planStandard);
    await expectVisible(page, TID.planSelected);
    await assertNoMissingI18nKeys(page);
  });

  test(`[PAY-002] select pro (${loc})`, async ({ page }) => {
    await gotoOK(page, paths.pricing(loc));
    await clickTid(page, TID.planPro);
    await expectVisible(page, TID.planSelected);
    await assertNoMissingI18nKeys(page);
  });

  test(`[PAY-003] pricing to checkout (${loc})`, async ({ page }) => {
    await gotoOK(page, paths.pricing(loc));
    await clickTid(page, TID.pricingCtaCheckout);
    await expectUrlContains(page, paths.checkout(loc));
    await expectVisible(page, TID.checkoutRoot);
    await assertNoMissingI18nKeys(page);
  });

  test(`[PAY-004] checkout success mock (${loc})`, async ({ page }) => {
    test.skip(!isPaymentMockMode(), "E2E_PAYMENT_MODE is not 'mock'. Enable mock mode for stable CI.");
    await gotoOK(page, paths.checkout(loc));
    await clickTid(page, TID.checkoutPayNow);
    await expectUrlContains(page, paths.thankYou(loc));
    await expectVisible(page, TID.purchaseSuccess);
    await assertNoMissingI18nKeys(page);
  });

  test(`[PAY-005] checkout fail mock (${loc})`, async ({ page }) => {
    test.skip(!isPaymentMockMode(), "E2E_PAYMENT_MODE is not 'mock'. Enable mock mode for stable CI.");
    await gotoOK(page, `${paths.checkout(loc)}?forceFail=1`);
    await clickTid(page, TID.checkoutPayNow);
    await expectVisible(page, TID.purchaseFailed);
    await assertNoMissingI18nKeys(page);
  });
}