import { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "./components/Pagination";
import PokemonCard from "./components/PokemonCard";
import PokemonDetail from "./components/PokemonDetail";
import { getAllPokemons } from "./services/pokemon.service";

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
  @media (max-width: 1024px) {
  flex-direction: column;
  }
`;

const CardsAndNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
  width: 100%;
  }
`;

const PokemonList = () => {
  const [page, setPage] = useState({ offset: 0, size: 5 });
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonsData, setPokemonsData] = useState([]);

  useEffect(() => {
    getAllPokemons(page.offset, page.size).then(({ data }) => {
      setPokemonsData(data);
    });
  }, [page]);

  const handleCardSelection = (pokemonData) => {
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
            />
          ))}
        </CardContainer>
        <Pagination initialPage={page} nextPage={pokemonsData?.next} onChangePage={(page) => setPage(page)} prevPage={pokemonsData?.previous} />
      </CardsAndNavContainer>
      <PokemonDetail pokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}/>
    </Container>
  );
};

export default PokemonList;
