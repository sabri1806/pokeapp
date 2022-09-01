import { useState } from "react";
import PokemonList from "./PokemonList";
import LanguageContext from "./context/languageContext";
import { IntlProvider } from "react-intl";
import es from "./translations/es.json";
import en from "./translations/en.json";
import styled from "styled-components";
import pokemonIcon from "./assets/pokemon-icon.svg";
import { Header, Select } from "./App.styles";

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
            <img src={pokemonIcon} alt="pokemon icon" width="75px" />
            <div>Poke App</div>
          </Header>
          <PokemonList language={language} />
        </div>
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export default App;
