import path from 'node:path';

export const getYandexManifest = ({ iconsPath = '/app/icons', color = '#fff', version = '1.0', apiVersion = 1, showTitle = true } = {}) => ({
  version,
  api_version: apiVersion,
  layout: {
    logo: path.posix.join(iconsPath, 'yandex-browser-50x50.png'),
    color,
    show_title: showTitle,
  },
});
