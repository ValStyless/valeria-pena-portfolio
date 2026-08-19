import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  const setLanguage = (lang: 'es' | 'en') => {
    i18n.changeLanguage(lang);
  };

  return {
    t,
    currentLanguage: i18n.language,
    toggleLanguage,
    setLanguage,
  };
};