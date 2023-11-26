import {defaultNS, resources} from '..';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['es'];
  }
}
