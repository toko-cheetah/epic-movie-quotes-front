import { createI18n } from "vue-i18n";
import en from "@/config/vue-i18n/locales/en/index";
import ka from "@/config/vue-i18n/locales/ka/index";

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  availableLocales: ["en", "ka"],
  messages: { en, ka },
});
