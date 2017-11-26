import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
  siteTitle: string;
  contactTwitter: string;
  contactGitHub: string;
  contactEMail: string;
}

export const APP_DI_CONFIG: AppConfig = {
  siteTitle: 'PORING SOFT .NET',
  contactTwitter: 'https://twitter.com/mry_p',
  contactGitHub: 'https://github.com/mryp',
  contactEMail: 'mry@poringosft.net'
};
