import { paths, Locale } from "./paths";
import { TID } from "./contract";

export type Role = "guest" | "student" | "admin";

export type Case = {
  id: string;
  locales: Locale[];
  role: Role;
  page: (loc: Locale) => string;
  action?: (loc: Locale) => { type: "click"; tid: string } | { type: "noop" };
  expect: (loc: Locale) => {
    urlContains?: string;
    visibleTid?: string;
  };
};

const BOTH: Locale[] = ["th", "en"];

// ---------- Public ----------
export const PUBLIC_CASES: Case[] = [
  {
    id: "PUB-000",
    locales: BOTH,
    role: "guest",
    page: (l) => paths.home(l),
    action: () => ({ type: "noop" }),
    expect: () => ({ visibleTid: TID.homeRoot }),
  },
  { id: "PUB-001", locales: BOTH, role: "guest", page: (l) => paths.home(l), action: () => ({ type: "click", tid: TID.navCurriculum }), expect: (l) => ({ urlContains: paths.curriculum(l), visibleTid: TID.curriculumRoot }) },
  { id: "PUB-002", locales: BOTH, role: "guest", page: (l) => paths.home(l), action: () => ({ type: "click", tid: TID.navTracks }), expect: (l) => ({ urlContains: paths.tracks(l), visibleTid: TID.tracksRoot }) },
  { id: "PUB-003", locales: BOTH, role: "guest", page: (l) => paths.home(l), action: () => ({ type: "click", tid: TID.navPricing }), expect: (l) => ({ urlContains: paths.pricing(l), visibleTid: TID.pricingRoot }) },
  { id: "PUB-004", locales: BOTH, role: "guest", page: (l) => paths.home(l), action: () => ({ type: "click", tid: TID.navBlog }), expect: (l) => ({ urlContains: paths.blog(l), visibleTid: TID.blogRoot }) },
  { id: "PUB-005", locales: BOTH, role: "guest", page: (l) => paths.home(l), action: () => ({ type: "click", tid: TID.navAbout }), expect: (l) => ({ urlContains: paths.about(l), visibleTid: TID.aboutRoot }) },
  { id: "PUB-006", locales: BOTH, role: "guest", page: (l) => paths.home(l), action: () => ({ type: "click", tid: TID.navContact }), expect: (l) => ({ urlContains: paths.contact(l), visibleTid: TID.contactRoot }) },
  {
    id: "I18N-001",
    locales: BOTH,
    role: "guest",
    page: (l) => paths.home(l),
    action: () => ({ type: "click", tid: TID.navLangSwitch }),
    expect: (l) => ({ urlContains: l === "th" ? "/en" : "/th", visibleTid: TID.i18nReady }),
  },
  { id: "PUB-007", locales: BOTH, role: "guest", page: (l) => paths.home(l), action: () => ({ type: "click", tid: TID.heroCtaCurriculum }), expect: (l) => ({ urlContains: paths.curriculum(l), visibleTid: TID.curriculumRoot }) },
  { id: "PUB-008", locales: BOTH, role: "guest", page: (l) => paths.home(l), action: () => ({ type: "click", tid: TID.heroCtaEnroll }), expect: (l) => ({ urlContains: paths.pricing(l) }) },
  { id: "PUB-009", locales: BOTH, role: "guest", page: (l) => paths.home(l), action: () => ({ type: "click", tid: TID.homeDemoOpen }), expect: () => ({ /* just ensure no 404 via response guard */ }) },
];

// ---------- Curriculum ----------
export const CURRICULUM_CASES: Case[] = [
  { id: "CUR-001", locales: BOTH, role: "guest", page: (l) => paths.curriculum(l), action: () => ({ type: "click", tid: TID.roadmapWeek1 }), expect: () => ({ visibleTid: TID.weekDetail }) },
  { id: "CUR-002", locales: BOTH, role: "guest", page: (l) => paths.curriculum(l), action: () => ({ type: "click", tid: TID.roadmapWeek12 }), expect: () => ({ visibleTid: TID.weekDetail }) },
];

// ---------- Tracks ----------
export const TRACKS_CASES: Case[] = [
  { id: "TRK-001", locales: BOTH, role: "guest", page: (l) => paths.tracks(l), action: () => ({ type: "click", tid: TID.trackChatbot }), expect: () => ({ visibleTid: TID.trackDetailRoot }) },
  { id: "TRK-002", locales: BOTH, role: "guest", page: (l) => paths.tracks(l), action: () => ({ type: "click", tid: TID.trackVision }), expect: () => ({ visibleTid: TID.trackDetailRoot }) },
  { id: "TRK-003", locales: BOTH, role: "guest", page: (l) => paths.tracks(l), action: () => ({ type: "click", tid: TID.trackAnalytics }), expect: () => ({ visibleTid: TID.trackDetailRoot }) },
  { id: "TRK-004", locales: BOTH, role: "guest", page: (l) => paths.tracks(l), action: () => ({ type: "click", tid: TID.trackIot }), expect: () => ({ visibleTid: TID.trackDetailRoot }) },
  { id: "TRK-005", locales: BOTH, role: "guest", page: (l) => paths.tracks(l), action: () => ({ type: "click", tid: TID.trackCtaEnroll }), expect: (l) => ({ urlContains: paths.pricing(l) }) },
];

// ---------- Blog ----------
export const BLOG_CASES: Case[] = [
  { id: "BLOG-001", locales: BOTH, role: "guest", page: (l) => paths.blog(l), action: () => ({ type: "click", tid: TID.blogCard0 }), expect: () => ({ visibleTid: TID.blogDetailRoot }) },
  { id: "BLOG-002", locales: BOTH, role: "guest", page: (l) => paths.blog(l), action: () => ({ type: "click", tid: TID.blogCard0 }), expect: () => ({ visibleTid: TID.blogDetailRoot }) }, // step1 open
];

// ---------- Contact ----------
export const CONTACT_CASES: Case[] = [
  { id: "CNT-001", locales: BOTH, role: "guest", page: (l) => paths.contact(l), action: () => ({ type: "click", tid: TID.contactSubmit }), expect: () => ({ visibleTid: TID.contactSuccess }) }, // valid flow handled in spec (fill)
  { id: "CNT-002", locales: BOTH, role: "guest", page: (l) => paths.contact(l), action: () => ({ type: "click", tid: TID.contactSubmit }), expect: () => ({ visibleTid: TID.formError }) }, // invalid
];

// ---------- Pricing/Checkout ----------
export const PRICING_CASES: Case[] = [
  { id: "PAY-001", locales: BOTH, role: "guest", page: (l) => paths.pricing(l), action: () => ({ type: "click", tid: TID.planStandard }), expect: () => ({ visibleTid: TID.planSelected }) },
  { id: "PAY-002", locales: BOTH, role: "guest", page: (l) => paths.pricing(l), action: () => ({ type: "click", tid: TID.planPro }), expect: () => ({ visibleTid: TID.planSelected }) },
  { id: "PAY-003", locales: BOTH, role: "guest", page: (l) => paths.pricing(l), action: () => ({ type: "click", tid: TID.pricingCtaCheckout }), expect: (l) => ({ urlContains: paths.checkout(l), visibleTid: TID.checkoutRoot }) },
  { id: "PAY-004", locales: BOTH, role: "guest", page: (l) => paths.checkout(l), action: () => ({ type: "click", tid: TID.checkoutPayNow }), expect: (l) => ({ urlContains: paths.thankYou(l), visibleTid: TID.purchaseSuccess }) },
  { id: "PAY-005", locales: BOTH, role: "guest", page: (l) => `${paths.checkout(l)}?forceFail=1`, action: () => ({ type: "click", tid: TID.checkoutPayNow }), expect: () => ({ visibleTid: TID.purchaseFailed }) },
];

// ---------- Auth ----------
export const AUTH_CASES: Case[] = [
  { id: "AUTH-001", locales: BOTH, role: "guest", page: (l) => paths.home(l), action: () => ({ type: "click", tid: TID.navLogin }), expect: (l) => ({ urlContains: paths.signIn(l), visibleTid: TID.authRoot }) },
  { id: "AUTH-004", locales: BOTH, role: "guest", page: (l) => paths.appDashboard(l), action: () => ({ type: "noop" }), expect: (l) => ({ urlContains: paths.signIn(l), visibleTid: TID.authRoot }) },
  { id: "AUTH-005", locales: BOTH, role: "student", page: (l) => paths.adminRoot(l), action: () => ({ type: "noop" }), expect: () => ({ visibleTid: TID.forbiddenRoot }) },
  { id: "AUTH-006", locales: BOTH, role: "student", page: (l) => paths.appDashboard(l), action: () => ({ type: "click", tid: TID.authLogout }), expect: (l) => ({ urlContains: paths.home(l) }) },
];

// ---------- LMS ----------
export const LMS_CASES: Case[] = [
  { id: "LMS-001", locales: BOTH, role: "student", page: (l) => paths.appDashboard(l), action: () => ({ type: "click", tid: TID.dashContinue }), expect: (l) => ({ urlContains: `/${l}/app/lesson/` }) },
  { id: "LMS-002", locales: BOTH, role: "student", page: (l) => paths.appCourse(l), action: () => ({ type: "click", tid: TID.courseTrackPicker }), expect: () => ({ visibleTid: TID.trackSelectedBadge }) },

  // Lesson actions (spec จะค้นหา lesson url จริงแบบ dynamic)
  { id: "LMS-003", locales: BOTH, role: "student", page: (l) => paths.appLesson(l, "__DYNAMIC__"), action: () => ({ type: "click", tid: TID.lessonOpenColab }), expect: () => ({ /* assert href/target in spec */ }) },
  { id: "LMS-004", locales: BOTH, role: "student", page: (l) => paths.appLesson(l, "__DYNAMIC__"), action: () => ({ type: "click", tid: TID.lessonCopyCode }), expect: () => ({ visibleTid: TID.toastCopied }) },
  { id: "LMS-005", locales: BOTH, role: "student", page: (l) => paths.appLesson(l, "__DYNAMIC__"), action: () => ({ type: "click", tid: TID.lessonMarkComplete }), expect: () => ({ visibleTid: TID.lessonCompleteBadge }) },
  { id: "LMS-006", locales: BOTH, role: "student", page: (l) => paths.appLesson(l, "__DYNAMIC__"), action: () => ({ type: "click", tid: TID.lessonPrev }), expect: (l) => ({ urlContains: `/${l}/app/lesson/` }) },
  { id: "LMS-007", locales: BOTH, role: "student", page: (l) => paths.appLesson(l, "__DYNAMIC__"), action: () => ({ type: "click", tid: TID.lessonNext }), expect: (l) => ({ urlContains: `/${l}/app/lesson/` }) },

  // Workshop
  { id: "LMS-008", locales: BOTH, role: "student", page: (l) => paths.appWorkshop(l, "__DYNAMIC__"), action: () => ({ type: "click", tid: TID.workshopSubmit }), expect: () => ({ visibleTid: TID.submissionStatusSubmitted }) },
  { id: "LMS-009", locales: BOTH, role: "student", page: (l) => paths.appWorkshop(l, "__DYNAMIC__"), action: () => ({ type: "click", tid: TID.workshopSubmit }), expect: () => ({ visibleTid: TID.formError }) },

  // Quiz
  { id: "LMS-010", locales: BOTH, role: "student", page: (l) => paths.appQuiz(l, "__DYNAMIC__"), action: () => ({ type: "click", tid: TID.quizStart }), expect: () => ({ visibleTid: TID.quizQuestion1 }) },
  { id: "LMS-011", locales: BOTH, role: "student", page: (l) => paths.appQuiz(l, "__DYNAMIC__"), action: () => ({ type: "click", tid: TID.quizSubmit }), expect: () => ({ visibleTid: TID.quizScore }) },

  // Capstone
  { id: "LMS-012", locales: BOTH, role: "student", page: (l) => paths.appCapstone(l), action: () => ({ type: "click", tid: TID.capstoneSubmit }), expect: () => ({ visibleTid: TID.capstoneStatusSubmitted }) },

  // Certificates
  { id: "LMS-013", locales: BOTH, role: "student", page: (l) => paths.appCertificates(l), action: () => ({ type: "click", tid: TID.certificateDownload }), expect: () => ({ visibleTid: TID.certificatesRoot }) },

  // Profile
  { id: "LMS-014", locales: BOTH, role: "student", page: (l) => paths.appProfile(l), action: () => ({ type: "click", tid: TID.profileSave }), expect: () => ({ visibleTid: TID.profileSaved }) },
];

// ---------- Admin ----------
export const ADMIN_CASES: Case[] = [
  { id: "ADM-001", locales: BOTH, role: "admin", page: (l) => paths.adminRoot(l), action: () => ({ type: "click", tid: TID.adminSubmissionsBtn }), expect: (l) => ({ urlContains: paths.adminSubmissions(l), visibleTid: TID.adminSubmissionsRoot }) },
  { id: "ADM-002", locales: BOTH, role: "admin", page: (l) => paths.adminSubmissions(l), action: () => ({ type: "click", tid: TID.adminGrade }), expect: () => ({ visibleTid: TID.gradeSaved }) },
  { id: "ADM-003", locales: BOTH, role: "admin", page: (l) => paths.adminLessons(l), action: () => ({ type: "click", tid: TID.adminPublish }), expect: () => ({ visibleTid: TID.publishSuccess }) },
  { id: "ADM-004", locales: BOTH, role: "admin", page: (l) => paths.adminAnnouncements(l), action: () => ({ type: "click", tid: TID.adminAnnounceSend }), expect: () => ({ visibleTid: TID.announceSent }) },
];

// ---------- Quality ----------
export const QUALITY_PAGES = [
  (l: Locale) => paths.home(l),
  (l: Locale) => paths.curriculum(l),
  (l: Locale) => paths.tracks(l),
  (l: Locale) => paths.pricing(l),
  (l: Locale) => paths.blog(l),
  (l: Locale) => paths.about(l),
  (l: Locale) => paths.contact(l),
];