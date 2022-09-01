import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import PokemonCard from "./components/PokemonCard";
import PokemonDetail from "./components/PokemonDetail";
import {
  getAllPokemons,
  getPokemonSpecieData,
} from "./services/pokemon.service";
import {
  Container,
  CardContainer,
  SpinerLoader,
  CardsAndNavContainer,
} from "./PokemonList.styles";

const PokemonList = (language) => {
  const [page, setPage] = useState({ offset: 0, size: 5 });
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonsData, setPokemonsData] = useState(null);
  const [openFlavorTextEntries, setOpenFlavorTextEntries] = useState(false);
  const [pokemonFLavorText, setPokemonFLavorText] = useState([]);

  useEffect(() => {
    getAllPokemons(page.offset, page.size).then(({ data }) => {
      setPokemonsData(data);
    });
  }, [page]);

  useEffect(() => {
    if (selectedPokemon?.species.url) {
      getPokemonSpecieData(selectedPokemon?.species.url).then(({ data }) => {
        setPokemonFLavorText(
          filterFlavorTextEntries(data["flavor_text_entries"])
        );
      });
    }
  }, [selectedPokemon, language]);

  const filterFlavorTextEntries = (flavorTextEntries) => {
    return flavorTextEntries
      ?.filter((flavorText) => {
        return flavorText.language.name === language.language
          ? flavorText["flavor_text"]
          : null;
      })
      .slice(0, 3);
  };

  const handleCardSelection = (pokemonData) => {
    setOpenFlavorTextEntries(false);
    setSelectedPokemon((prevState) => {
      if (!prevState || pokemonData.id !== prevState.id) {
        return pokemonData;
      }
    });
  };

  return (
    <Container>
      <CardsAndNavContainer>
        <CardContainer>
          {pokemonsData?.results?.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              onSelect={(pokemonData) => handleCardSelection(pokemonData)}
              selected={pokemon.name === selectedPokemon?.name}
              selectedPokemonData={selectedPokemon}
            />
          ))}
          {!pokemonsData && <SpinerLoader />}
        </CardContainer>
        <Pagination
          initialPage={page}
          nextPage={pokemonsData?.next}
          onChangePage={(page) => setPage(page)}
          setOpenFlavorTextEntries={setOpenFlavorTextEntries}
          prevPage={pokemonsData?.previous}
        />
      </CardsAndNavContainer>
      <PokemonDetail
        openFlavorTextEntries={openFlavorTextEntries}
        pokemon={selectedPokemon}
        pokemonFLavorText={pokemonFLavorText}
        setOpenFlavorTextEntries={setOpenFlavorTextEntries}
        setSelectedPokemon={setSelectedPokemon}
      />
    </Container>
  );
};

export default PokemonList;
