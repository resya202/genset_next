"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { SupportedLanguages } from "../translations/home";

interface LanguageContextProps {
  language: SupportedLanguages; // Restrict to supported languages
  toggleLanguage: (lang: SupportedLanguages) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<SupportedLanguages>("en");

  const toggleLanguage = (lang: SupportedLanguages) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextProps {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
