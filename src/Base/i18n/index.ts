import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import authES from './locales/es/auth.json';
import commonES from './locales/es/common.json';
import homeES from './locales/es/home.json';

import authEN from './locales/en/auth.json';
import commonEN from './locales/en/common.json';
import homeEN from './locales/en/home.json';

const es = {
  auth: authES,
  common: commonES,
  home: homeES,
};

const en = {
  auth: authEN,
  common: commonEN,
  home: homeEN,
};

export const defaultNS = 'common';

export const resources = {
  es,
  en,
} as const;

export type LanguageResource = typeof resources['es'];

i18n.use(initReactI18next).init({
  resources,
  defaultNS,
  lng: 'es',
  ns: ['common', 'auth', 'home'],
  fallbackLng: 'es',
  react: {
    nsMode: 'fallback',
  },
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});
