import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import en from './locales/en.json'
import pt from './locales/pt.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { home: en },
      pt: { home: pt }
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });