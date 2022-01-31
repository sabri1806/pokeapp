import { useState } from "react";
import PokemonList from "./PokemonList";
import LanguageContext from "./context/languageContext";
import { IntlProvider } from "react-intl";
import es from "./translations/es.json";
import en from "./translations/en.json";
import styled from "styled-components";

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 20px;
  & > div {
    display: flex;
    font-family: monospace;
    font-size: 26px;
    font-weight: 600;
    padding: 0 60px;
    white-space: nowrap;
  }
  @media (max-width: 1024px) {
    padding: 20px 5px;
  }
`;

const Select = styled.select`
  font-family: monospace;
  font-size: 16px;
  position: absolute;
  left: 9px;
  @media (max-width: 425px) {
    left: 1px;
    top: 3px;
  }
`;

const languages = {
  es,
  en,
};

function App() {
  const [language, setLanguage] = useState("es");

  return (
    <LanguageContext.Provider value={language}>
      <IntlProvider locale={language} messages={languages[language]}>
        <div className="App">
          <Header>
            <Select
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </Select>
            <div>Frav-Pokedex</div>
          </Header>
          <PokemonList language={language}/>
        </div>
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export default App;
