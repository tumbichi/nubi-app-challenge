import {defaultNS, LanguageResource} from '..';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: LanguageResource;
  }
}
