import { createContext } from 'react';

const LanguageContext = createContext({
  language: 'en',
  setLanguage: (value:string) => {}
});

export default LanguageContext;