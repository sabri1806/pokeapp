import { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "./components/Pagination";
import PokemonCard from "./components/PokemonCard";
import PokemonDetail from "./components/PokemonDetail";
import { getAllPokemons } from "./services/pokemon.service";

const Container = styled.div``;

const CardContainer = styled.div`
  display: flex;
`;

const PokemonList = () => {
  const [page, setPage] = useState({ offset: 0, size: 5 });
  const [pokemonUrl, setPokemonUrl] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getAllPokemons(page.offset, page.size).then(({ data }) => {
      setPokemons(data.results);
    });
  }, [page]);

  return (
    <Container>
      <CardContainer>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            onSelect={(url) => setPokemonUrl(url)}
          />
        ))}
      </CardContainer>
      <PokemonDetail pokemonUrl={pokemonUrl} />
      <Pagination initialPage={page} onChangePage={(page) => setPage(page)} />
    </Container>
  );
};

export default PokemonList;
