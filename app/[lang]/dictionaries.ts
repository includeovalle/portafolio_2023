import 'server-only'
import { Locale } from '../../i18n-config'

const dictionaries = {
  en: () => import('../copy/eng.json').then((module) => module.default),
  es: () => import('../copy/esp.json').then((module) => module.default),
  pt: () => import('../copy/por.json').then((module) => module.default),
};
 
export const getDictionary = async (locale: Locale) => dictionaries[locale]()
