import { useContext } from 'react';

import LanguageContext from './LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  
  return (
    <button onClick={ () => { language === 'en' ? setLanguage('pt-br'): setLanguage('en') } } >
      {  
         language == 'en' ? 
         `Switch Language to "pt-br" (Current: ${language})` 
         : 
         `Trocar Linguagem para "en" (Atual: ${language})`
      }      
    </button>
  );
};

export default LanguageSwitcher;