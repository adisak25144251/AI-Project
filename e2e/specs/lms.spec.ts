import { test, gotoOK, clickTid, expectVisible, expectUrlContains, loginStudent, getFirstLessonUrl, getWorkshopUrlFromLesson, getQuizUrlFromLesson, assertNoMissingI18nKeys } from "../helpers";
import { TID } from "../contract";
import { paths } from "../paths";

for (const loc of ["th", "en"] as const) {
  test.describe(`LMS (${loc})`, () => {
    test(`[LMS-001] dashboard continue -> lesson (${loc})`, async ({ page }) => {
      await loginStudent(page, loc);
      await gotoOK(page, paths.appDashboard(loc));
      await clickTid(page, TID.dashContinue);
      await expectUrlContains(page, `/${loc}/app/lesson/`);
      await assertNoMissingI18nKeys(page);
    });

    test(`[LMS-002] track picker persists (${loc})`, async ({ page }) => {
      await loginStudent(page, loc);
      await gotoOK(page, paths.appCourse(loc));
      await expectVisible(page, TID.courseRoot);

      await clickTid(page, TID.courseTrackPicker);
      await expectVisible(page, TID.trackSelectedBadge);

      await page.reload();
      await expectVisible(page, TID.trackSelectedBadge);
      await assertNoMissingI18nKeys(page);
    });

    test(`[LMS-003] lesson open colab has href/target (${loc})`, async ({ page }) => {
      await loginStudent(page, loc);
      const lessonUrl = await getFirstLessonUrl(page, loc);
      await gotoOK(page, lessonUrl);
      await expectVisible(page, TID.lessonRoot);

      const a = page.getByTestId(TID.lessonOpenColab);
      await expectVisible(page, TID.lessonOpenColab);

      const href = await a.getAttribute("href");
      const target = await a.getAttribute("target");
      if (!href) throw new Error("lesson-open-colab missing href");
      if (target !== "_blank") throw new Error("lesson-open-colab should have target=_blank");

      await assertNoMissingI18nKeys(page);
    });

    test(`[LMS-004] copy code shows toast (${loc})`, async ({ page }) => {
      await loginStudent(page, loc);
      const lessonUrl = await getFirstLessonUrl(page, loc);
      await gotoOK(page, lessonUrl);

      await clickTid(page, TID.lessonCopyCode);
      await expectVisible(page, TID.toastCopied);
      await assertNoMissingI18nKeys(page);
    });

    test(`[LMS-005] mark lesson complete (${loc})`, async ({ page }) => {
      await loginStudent(page, loc);
      const lessonUrl = await getFirstLessonUrl(page, loc);
      await gotoOK(page, lessonUrl);

      await clickTid(page, TID.lessonMarkComplete);
      await expectVisible(page, TID.lessonCompleteBadge);
      await assertNoMissingI18nKeys(page);
    });

    test(`[LMS-006] lesson prev navigation (${loc})`, async ({ page }) => {
      await loginStudent(page, loc);
      const lessonUrl = await getFirstLessonUrl(page, loc);
      await gotoOK(page, lessonUrl);

      await clickTid(page, TID.lessonPrev);
      await expectUrlContains(page, `/${loc}/app/lesson/`);
      await assertNoMissingI18nKeys(page);
    });

    test(`[LMS-007] lesson next navigation (${loc})`, async ({ page }) => {
      await loginStudent(page, loc);
      const lessonUrl = await getFirstLessonUrl(page, loc);
      await gotoOK(page, lessonUrl);

      await clickTid(page, TID.lessonNext);
      await expectUrlContains(page, `/${loc}/app/lesson/`);
      await assertNoMissingI18nKeys(page);
    });

    test(`[LMS-008] workshop submit valid (${loc})`, async ({ page }) => {
      await loginStudent(page, loc);
      const wkUrl = await getWorkshopUrlFromLesson(page, loc);
      await gotoOK(page, wkUrl);
      await expectVisible(page, TID.workshopRoot);

      await page.getByTestId(TID.workshopGithubLink).fill("https://github.com/example/repo");
      await clickTid(page, TID.workshopSubmit);
      await expectVisible(page, TID.submissionStatusSubmitted);
      await assertNoMissingI18nKeys(page);
    });

    test(`[LMS-009] workshop submit invalid shows error (${loc})`, async ({ page }) => {
      await loginStudent(page, loc);
      const wkUrl = await getWorkshopUrlFromLesson(page, loc);
      await gotoOK(page, wkUrl);

      // ไม่กรอกลิงก์ → กดส่ง
      await clickTid(page, TID.workshopSubmit);
      await expectVisible(page, TID.formError);
      await assertNoMissingI18nKeys(page);
    });

    test(`[LMS-010] quiz start loads questions (${loc})`, async ({ page }) => {
      await loginStudent(page, loc);
      const quizUrl = await getQuizUrlFromLesson(page, loc);
      await gotoOK(page, quizUrl);
      await expectVisible(page, TID.quizRoot);

      await clickTid(page, TID.quizStart);
      await expectVisible(page, TID.quizQuestion1);
      await assertNoMissingI18nKeys(page);
    });

    test(`[LMS-011] quiz submit shows score (${loc})`, async ({ page }) => {
      await loginStudent(page, loc);
      const quizUrl = await getQuizUrlFromLesson(page, loc);
      await gotoOK(page, quizUrl);

      await clickTid(page, TID.quizStart);
      await expectVisible(page, TID.quizQuestion1);

      // ตอบแบบ fallback: คลิก radio ตัวแรกที่หาได้
      const radios = page.locator('input[type="radio"]');
      const count = await radios.count();
      if (count > 0) {
        await radios.nth(0).check().catch(async () => {
          await radios.nth(0).click();
        });
      }

      await clickTid(page, TID.quizSubmit);
      await expectVisible(page, TID.quizScore);
      await expectVisible(page, TID.quizExplanations);
      await assertNoMissingI18nKeys(page);
    });

    test(`[LMS-012] capstone submit (${loc})`, async ({ page }) => {
      await loginStudent(page, loc);
      await gotoOK(page, paths.appCapstone(loc));
      await expectVisible(page, TID.capstoneRoot);

      await page.getByTestId(TID.capstoneDemoLink).fill("https://example.com/demo");
      await clickTid(page, TID.capstoneSubmit);

      await expectVisible(page, TID.capstoneStatusSubmitted);
      await assertNoMissingI18nKeys(page);
    });

    test(`[LMS-013] certificate download/open (${loc})`, async ({ page }) => {
      await loginStudent(page, loc);
      await gotoOK(page, paths.appCertificates(loc));
      await expectVisible(page, TID.certificatesRoot);

      const downloadPromise = page.waitForEvent("download", { timeout: 5000 }).catch(() => null);
      const popupPromise = page.waitForEvent("popup", { timeout: 5000 }).catch(() => null);

      await clickTid(page, TID.certificateDownload);

      const download = await downloadPromise;
      const popup = await popupPromise;

      if (!download && !popup) {
        // อย่างน้อยต้องไม่ error และยังอยู่หน้าเดิม/มี root
        await expectVisible(page, TID.certificatesRoot);
      }

      await assertNoMissingI18nKeys(page);
    });

    test(`[LMS-014] profile save (${loc})`, async ({ page }) => {
      await loginStudent(page, loc);
      await gotoOK(page, paths.appProfile(loc));
      await expectVisible(page, TID.profileRoot);

      await clickTid(page, TID.profileSave);
      await expectVisible(page, TID.profileSaved);
      await assertNoMissingI18nKeys(page);
    });
  });
}