// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationAR from './locals/ar/translation.json';
import translationEN from './locals/en/translation.json'; 

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language if translation missing
    interpolation: {
      escapeValue: false, // react already escapes
    },
  });

export default i18n;
