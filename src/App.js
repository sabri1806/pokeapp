import { useState } from "react";
import PokemonList from "./PokemonList";
import LanguageContext from "./context/languageContext";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={language}>
      <div className="App">
        <header>
          Frav-Pokedex
          <div>
            <select
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
        </header>
        <PokemonList />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
