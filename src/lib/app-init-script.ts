import { LOCALE_STORAGE_KEY } from '@/i18n/locales';
import { THEME_STORAGE_KEY } from '@/lib/theme';

/** Blocking inline script for <head> — sets theme + locale before paint. */
export const appInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');t=t==='light'||t==='dark'?t:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');window.__THEME__=t;document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=t;var l=localStorage.getItem('${LOCALE_STORAGE_KEY}');l=l==='en'||l==='ja'?l:'en';window.__LOCALE__=l;document.documentElement.lang=l;}catch(e){}})();`;
