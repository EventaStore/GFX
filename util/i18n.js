// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationAR from './locales/ar.json';

// Initialize i18next

  // var language = localStorage.getItem('language')
 i18n
  .use(initReactI18next)
  .init({
    lng: "ar", // Set the default language
    fallbackLng: 'en', // Fallback language if translation not found
    resources: {
      en: {
        translation: translationEN,
      },
      ar: {
        translation: translationAR,
      },
    },
  });

export default i18n;