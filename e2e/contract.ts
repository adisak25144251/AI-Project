/**
 * ✅ E2E TestID Contract (สำคัญที่สุด)
 * ให้ใส่ data-testid ให้ครบอย่างน้อยตามนี้
 */
export const TID = {
  // Roots
  homeRoot: "home-root",
  curriculumRoot: "curriculum-root",
  tracksRoot: "tracks-root",
  pricingRoot: "pricing-root",
  checkoutRoot: "checkout-root",
  blogRoot: "blog-root",
  blogDetailRoot: "blog-detail-root",
  aboutRoot: "about-root",
  contactRoot: "contact-root",
  authRoot: "auth-root",
  dashboardRoot: "dashboard-root",
  courseRoot: "course-root",
  lessonRoot: "lesson-root",
  workshopRoot: "workshop-root",
  quizRoot: "quiz-root",
  capstoneRoot: "capstone-root",
  certificatesRoot: "certificates-root",
  profileRoot: "profile-root",
  forbiddenRoot: "forbidden-root",
  notFoundRoot: "notfound-root",
  i18nReady: "i18n-ready",

  // Navbar
  navHome: "nav-home",
  navCurriculum: "nav-curriculum",
  navTracks: "nav-tracks",
  navPricing: "nav-pricing",
  navBlog: "nav-blog",
  navAbout: "nav-about",
  navContact: "nav-contact",
  navLogin: "nav-login",
  navDashboard: "nav-dashboard",
  navLangSwitch: "nav-lang-switch",

  // Home CTAs
  heroCtaEnroll: "hero-cta-enroll",
  heroCtaCurriculum: "hero-cta-curriculum",
  homeDemoOpen: "home-demo-open",

  // Curriculum
  roadmapWeek1: "roadmap-week-1",
  roadmapWeek12: "roadmap-week-12",
  weekDetail: "week-detail",

  // Tracks
  trackChatbot: "track-chatbot",
  trackVision: "track-vision",
  trackAnalytics: "track-analytics",
  trackIot: "track-iot",
  trackDetailRoot: "track-detail-root",
  trackCtaEnroll: "track-cta-enroll",

  // Blog
  blogCard0: "blog-card-0",
  breadcrumbBlog: "breadcrumb-blog",

  // Contact form
  contactName: "contact-name",
  contactEmail: "contact-email",
  contactMessage: "contact-message",
  contactSubmit: "contact-submit",
  contactSuccess: "contact-success",
  formError: "form-error",

  // Pricing/Checkout
  planStandard: "pricing-plan-standard",
  planPro: "pricing-plan-pro",
  planSelected: "plan-selected",
  pricingCtaCheckout: "pricing-cta-checkout",
  checkoutPayNow: "checkout-pay-now",
  purchaseSuccess: "purchase-success",
  purchaseFailed: "purchase-failed",

  // Auth
  authEmail: "auth-email",
  authPassword: "auth-password",
  authSubmit: "auth-submit",
  authError: "auth-error",
  authLogout: "auth-logout",

  // LMS Dashboard
  dashContinue: "dash-continue",
  announcementItem0: "announcement-item-0",

  // Course
  courseTrackPicker: "course-track-picker",
  trackSelectedBadge: "track-selected-badge",

  // Lesson
  lessonOpenColab: "lesson-open-colab",
  lessonCopyCode: "lesson-copy-code",
  toastCopied: "toast-copied",
  lessonMarkComplete: "lesson-mark-complete",
  lessonCompleteBadge: "lesson-complete-badge",
  lessonPrev: "lesson-prev",
  lessonNext: "lesson-next",

  // Workshop
  workshopSubmit: "workshop-submit",
  workshopGithubLink: "workshop-github-link",
  submissionStatusSubmitted: "submission-status-submitted",

  // Quiz
  quizStart: "quiz-start",
  quizQuestion1: "quiz-question-1",
  quizSubmit: "quiz-submit",
  quizScore: "quiz-score",
  quizExplanations: "quiz-explanations",

  // Capstone
  capstoneDemoLink: "capstone-demo-link",
  capstoneSubmit: "capstone-submit",
  capstoneStatusSubmitted: "capstone-status-submitted",

  // Certificates
  certificateDownload: "certificate-download",

  // Profile
  profileSave: "profile-save",
  profileSaved: "profile-saved",

  // Admin
  adminSubmissionsBtn: "admin-submissions",
  adminSubmissionsRoot: "admin-submissions-root",
  adminGrade: "admin-grade",
  gradeSaved: "grade-saved",
  adminPublish: "admin-publish",
  publishSuccess: "publish-success",
  adminAnnounceMessage: "admin-announce-message",
  adminAnnounceSend: "admin-announce-send",
  announceSent: "announce-sent",
} as const;