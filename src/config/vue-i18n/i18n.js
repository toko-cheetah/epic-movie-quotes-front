import { createI18n } from "vue-i18n";
import en from "./locales/en/index";
import ka from "./locales/ka/index";

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  availableLocales: ["en", "ka"],
  messages: { en, ka },
});
