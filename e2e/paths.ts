export type Locale = "th" | "en";

export const paths = {
  home: (loc: Locale) => `/${loc}`,
  curriculum: (loc: Locale) => `/${loc}/curriculum`,
  tracks: (loc: Locale) => `/${loc}/tracks`,
  pricing: (loc: Locale) => `/${loc}/pricing`,
  checkout: (loc: Locale) => `/${loc}/checkout`,
  thankYou: (loc: Locale) => `/${loc}/thank-you`,
  blog: (loc: Locale) => `/${loc}/blog`,
  about: (loc: Locale) => `/${loc}/about`,
  contact: (loc: Locale) => `/${loc}/contact`,

  signIn: (loc: Locale) => `/${loc}/auth/sign-in`,

  appDashboard: (loc: Locale) => `/${loc}/app/dashboard`,
  appCourse: (loc: Locale) => `/${loc}/app/course`,
  appLesson: (loc: Locale, idOrSlug: string) => `/${loc}/app/lesson/${idOrSlug}`,
  appWorkshop: (loc: Locale, idOrSlug: string) => `/${loc}/app/workshop/${idOrSlug}`,
  appQuiz: (loc: Locale, idOrSlug: string) => `/${loc}/app/quiz/${idOrSlug}`,
  appCapstone: (loc: Locale) => `/${loc}/app/capstone`,
  appCertificates: (loc: Locale) => `/${loc}/app/certificates`,
  appProfile: (loc: Locale) => `/${loc}/app/profile`,

  adminRoot: (loc: Locale) => `/${loc}/app/admin`,
  adminSubmissions: (loc: Locale) => `/${loc}/app/admin/submissions`,
  adminLessons: (loc: Locale) => `/${loc}/app/admin/lessons`,
  adminAnnouncements: (loc: Locale) => `/${loc}/app/admin/announcements`,
};