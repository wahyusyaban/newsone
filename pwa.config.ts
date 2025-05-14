import type { Config } from './types';

export default {
  id: '/',
  name: 'News One Today',
  shortName: 'News One',
  description: 'Stay informed with News One – your trusted source. Get real-time updates, in-depth analysis, and accurate reporting to keep you ahead. Visit News One for today!',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Games',
      shortName: 'Games',
      description: 'Shortcut 1 description goes here...',
      url: '/search/label/Games?utm_source=homescreen',
    },
    {
      name: 'Technology',
      shortName: 'Technology',
      description: 'Shortcut 2 description goes here...',
      url: '/search/label/Technology?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'http://www.newsonetoday.com/',
} satisfies Config;
