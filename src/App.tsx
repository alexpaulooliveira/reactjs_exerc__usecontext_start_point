import { useState } from "react";
import LanguageContext from './LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const App = () => {
  const [language, setLanguage] = useState("en");
  const value = { language, setLanguage };

  return (
    <LanguageContext.Provider value={value}>

      <h2> 
        {language == 'en' ? 
        `Current Language: ${language}` : 
        `Linguagem Atual: ${language}`}
      </h2>

      <LanguageSwitcher />

    </LanguageContext.Provider>
  );
};

export default App