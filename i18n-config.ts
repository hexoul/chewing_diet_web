export const i18n = {
  defaultLocale: "en",
  locales: ["en", "es", "hi", "ja", "ko"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
