import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Translation } from '../i18n/translations';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>(() => {
    // Verificar se há idioma salvo no localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }
    
    // Detectar idioma do navegador
    const browserLanguage = navigator.language;
    if (browserLanguage.startsWith('pt')) return 'pt-BR';
    if (browserLanguage.startsWith('es')) return 'es';
    return 'en-US'; // Padrão
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleSetLanguage = (lang: string) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};