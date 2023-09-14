import i18next from 'i18next';
import LanaguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

i18next
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      console.log({ language, namespace });
      return import(`./locales/${language}/${namespace}.json`);
    }),
  )
  .use(initReactI18next)
  .use(LanaguageDetector)
  .init({
    fallbackLng: 'es',
    debug: false,
  });
