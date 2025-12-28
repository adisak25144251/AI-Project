import { createContext } from 'react';
import { Section, Language } from './types';

export interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({ 
  lang: 'EN', 
  toggleLang: () => {} 
});

export interface NavigationContextType {
  navigate: (section: Section) => void;
}

export const NavigationContext = createContext<NavigationContextType>({ 
  navigate: () => {} 
});