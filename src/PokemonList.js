import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Pagination from "./components/Pagination";
import PokemonCard from "./components/PokemonCard";
import PokemonDetail from "./components/PokemonDetail";
import { getAllPokemons, getPokemonSpecieData } from "./services/pokemon.service";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 1024px) {
  width: 100%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  min-height: 200px;
  position: relative;
  @media (max-width: 1024px) {
  flex-direction: column;
  }
`;

const spinerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const SpinerLoader = styled.div`
  animation-name: ${spinerAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #1e293b;
  border-radius: 47%;
  height: 36px;
  left:50%;
  position: absolute;
  top:50%;
  width: 36px;
`;

const CardsAndNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
  width: 100%;
  }
`;

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

  useEffect(()=>{
    if (selectedPokemon?.species.url) {
      getPokemonSpecieData(selectedPokemon?.species.url).then(({ data }) => {
        setPokemonFLavorText(filterFlavorTextEntries(data["flavor_text_entries"]));
      });
    }
  },[selectedPokemon, language])

  const filterFlavorTextEntries = (flavorTextEntries) => {
    return flavorTextEntries?.filter((flavorText)=> {
      return flavorText.language.name === language.language ? flavorText['flavor_text'] : null
    }).slice(0,3)
  };

  const handleCardSelection = (pokemonData) => {
    setOpenFlavorTextEntries(false) 
    setSelectedPokemon((prevState)=>{
      if(!prevState || pokemonData.id !== prevState.id){
        return pokemonData
      }
    })
  };

  return (
    <Container>
      <CardsAndNavContainer>
        <CardContainer>
          {pokemonsData?.results?.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              onSelect={(pokemonData)=> handleCardSelection(pokemonData)}
              selected={pokemon.name === selectedPokemon?.name}
              selectedPokemonData={selectedPokemon}
            />
          ))}
        {
          !pokemonsData &&
            <SpinerLoader/>
        }
        </CardContainer>
        <Pagination 
          initialPage={page} 
          nextPage={pokemonsData?.next} 
          onChangePage={(page) => setPage(page)} 
          setOpenFlavorTextEntries={setOpenFlavorTextEntries}  
          prevPage={pokemonsData?.previous} />
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
