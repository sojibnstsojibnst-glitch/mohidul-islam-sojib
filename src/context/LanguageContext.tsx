import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  Language,
  TRANSLATIONS,
  TranslationDictionary,
  LANGUAGE_OPTIONS,
  LanguageOption
} from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
  options: LanguageOption[];
}

const STORAGE_KEY = 'sojib_portfolio_lang';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'bn' || saved === 'bng') {
        return saved;
      }
    } catch {
      // Fallback for private browsing
    }
    return 'en';
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // Ignore storage errors
    }
  };

  useEffect(() => {
    const langCode = language === 'bn' ? 'bn' : language === 'bng' ? 'bn-Latn' : 'en';
    document.documentElement.lang = langCode;
  }, [language]);

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      t: TRANSLATIONS[language] || TRANSLATIONS.en,
      options: LANGUAGE_OPTIONS
    };
  }, [language]);

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
