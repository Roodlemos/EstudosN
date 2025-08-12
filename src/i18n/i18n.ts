import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations';

// Transform our translations object to i18next format
const resources = {
  'pt-BR': {
    translation: translations['pt-BR']
  },
  'en-US': {
    translation: translations['en-US']
  },
  'es': {
    translation: translations['es']
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt-BR', // default language
    fallbackLng: 'pt-BR',
    
    interpolation: {
      escapeValue: false // react already does escaping
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;