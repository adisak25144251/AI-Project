import { expect, Page, test as base } from "@playwright/test";
import { Locale, paths } from "./paths";
import { TID } from "./contract";

export const test = base.extend({
  page: async ({ page }, use) => {
    page.on("pageerror", (err) => {
      throw new Error(`Page error: ${String(err)}`);
    });

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        const text = msg.text();
        const allow = [
          // ใส่ whitelist ชั่วคราวได้ถ้าจำเป็น
        ];
        if (!allow.some((k) => text.includes(k))) {
          throw new Error(`Console error: ${text}`);
        }
      }
    });

    await use(page);
  },
});

export async function gotoOK(page: Page, url: string) {
  const resp = await page.goto(url);
  if (resp) {
    expect(resp.status(), `HTTP not OK for ${url}`).toBeLessThan(400);
  }
}

export async function clickTid(page: Page, tid: string) {
  await page.getByTestId(tid).click();
}

export async function expectUrlContains(page: Page, partial: string) {
  await expect(page).toHaveURL(new RegExp(escapeRegExp(partial)));
}

export async function expectVisible(page: Page, tid: string) {
  await expect(page.getByTestId(tid)).toBeVisible();
}

export function isPaymentMockMode(): boolean {
  return (process.env.E2E_PAYMENT_MODE ?? "").toLowerCase() === "mock";
}

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export async function loginStudent(page: Page, loc: Locale) {
  const email = process.env.E2E_USER_EMAIL;
  const password = process.env.E2E_USER_PASSWORD;
  if (!email || !password) throw new Error("Missing E2E_USER_EMAIL / E2E_USER_PASSWORD");

  await gotoOK(page, paths.signIn(loc));
  await expectVisible(page, TID.authRoot);

  await page.getByTestId(TID.authEmail).fill(email);
  await page.getByTestId(TID.authPassword).fill(password);
  await page.getByTestId(TID.authSubmit).click();

  await expectUrlContains(page, paths.appDashboard(loc));
  await expectVisible(page, TID.dashboardRoot);
}

export async function loginAdmin(page: Page, loc: Locale) {
  const email = process.env.E2E_ADMIN_EMAIL;
  const password = process.env.E2E_ADMIN_PASSWORD;
  if (!email || !password) throw new Error("Missing E2E_ADMIN_EMAIL / E2E_ADMIN_PASSWORD");

  await gotoOK(page, paths.signIn(loc));
  await page.getByTestId(TID.authEmail).fill(email);
  await page.getByTestId(TID.authPassword).fill(password);
  await page.getByTestId(TID.authSubmit).click();
  await expectUrlContains(page, paths.appDashboard(loc));
}

/**
 * Dynamic discovery: เพื่อไม่ต้อง hardcode lesson/workshop/quiz id
 * มาตรฐาน: dashboard มีปุ่ม dash-continue ที่พาไป /app/lesson/{id}
 */
export async function getFirstLessonUrl(page: Page, loc: Locale): Promise<string> {
  await gotoOK(page, paths.appDashboard(loc));
  await expectVisible(page, TID.dashboardRoot);
  await clickTid(page, TID.dashContinue);
  await expectUrlContains(page, `/${loc}/app/lesson/`);
  return page.url();
}

/**
 * ต้องมีทางไป workshop/quiz จาก lesson หรือ sidebar ในระบบจริง
 * ทางเลือก A: ใช้ link/button ที่มี testid ใน lesson page
 * ทางเลือก B: มี sidebar testid เช่น nav-workshop / nav-quiz (คุณเพิ่มเองได้)
 *
 * สำหรับชุดนี้: เราจะพยายามหา anchor ภายในหน้า lesson ที่ลิงก์ไป workshop/quiz
 * โดยคาดว่ามี testid:
 * - lesson-to-workshop
 * - lesson-to-quiz
 * ถ้าไม่มี ให้คุณเพิ่ม หรือแก้ฟังก์ชันนี้ให้ตรงระบบคุณ
 */
export async function getWorkshopUrlFromLesson(page: Page, loc: Locale): Promise<string> {
  const lessonUrl = await getFirstLessonUrl(page, loc);
  await gotoOK(page, lessonUrl);

  const link = page.getByTestId("lesson-to-workshop");
  if (await link.count()) {
    await link.click();
    await expectUrlContains(page, `/${loc}/app/workshop/`);
    return page.url();
  }

  // fallback: เข้า page course แล้วหา workshop 0
  await gotoOK(page, paths.appCourse(loc));
  const wk0 = page.getByTestId("workshop-card-0");
  if (await wk0.count()) {
    await wk0.click();
    await expectUrlContains(page, `/${loc}/app/workshop/`);
    return page.url();
  }

  throw new Error("Cannot discover workshop URL. Add data-testid lesson-to-workshop or workshop-card-0.");
}

export async function getQuizUrlFromLesson(page: Page, loc: Locale): Promise<string> {
  const lessonUrl = await getFirstLessonUrl(page, loc);
  await gotoOK(page, lessonUrl);

  const link = page.getByTestId("lesson-to-quiz");
  if (await link.count()) {
    await link.click();
    await expectUrlContains(page, `/${loc}/app/quiz/`);
    return page.url();
  }

  await gotoOK(page, paths.appCourse(loc));
  const q0 = page.getByTestId("quiz-card-0");
  if (await q0.count()) {
    await q0.click();
    await expectUrlContains(page, `/${loc}/app/quiz/`);
    return page.url();
  }

  throw new Error("Cannot discover quiz URL. Add data-testid lesson-to-quiz or quiz-card-0.");
}

export async function scanInternalLinksOnCurrentPage(page: Page) {
  const hrefs = await page.evaluate<string[]>(() => {
    const as = Array.from(document.querySelectorAll("a[href]"));
    return as.map((a) => (a as HTMLAnchorElement).href).filter(Boolean);
  });

  const origin = new URL(page.url()).origin;
  const uniqueHrefs = Array.from(new Set(hrefs)) as string[];

  const internal = uniqueHrefs
    .filter((h) => h.startsWith(origin))
    .filter((h) => !h.includes("#"))
    .filter((h) => !h.startsWith("mailto:"))
    .filter((h) => !h.startsWith("tel:"));

  for (const url of internal) {
    const resp = await page.request.get(url);
    expect(resp.status(), `Broken link: ${url}`).toBeLessThan(400);
  }
}

export async function assertNoMissingI18nKeys(page: Page) {
  // คุณสามารถเปลี่ยน token ตามระบบของคุณ เช่น "__MISSING__" หรือ "MISSING_TRANSLATION"
  const suspicious = [
    "__MISSING__",
    "MISSING_TRANSLATION",
    "missing translation",
    "undefined",
  ];

  const bodyText = await page.textContent("body");
  if (!bodyText) return;

  for (const s of suspicious) {
    if (bodyText.includes(s)) {
      throw new Error(`Possible missing i18n key found in body: "${s}"`);
    }
  }
}