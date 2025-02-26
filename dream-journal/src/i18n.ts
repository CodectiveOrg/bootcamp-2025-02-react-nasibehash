import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import faTranslation from "./locales/fa/translation.json";

import {
  changeLanguage,
  getLanguageFromLocalStorage,
} from "./utils/i18n-utils.ts";

export const defaultNS = "translation";

const resources = {
  en: {
    translation: enTranslation,
  },
  fa: {
    translation: faTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    ns: ["translation"],
    defaultNS,
    lng: getLanguageFromLocalStorage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })
  .then();

changeLanguage(i18n.language);
i18n.on("languageChanged", changeLanguage);

export default i18n;
