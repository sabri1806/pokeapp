import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPokemonDetail } from "..//services/pokemon.service";

const Container = styled.div`
  width: 300px;
  height: 300px;
`;

const Name = styled.label`
  font-size: 24px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const PokemonCard = ({ pokemon, onSelect }) => {
  const [pokemonVal, setPokemonVal] = useState(null);

  useEffect(() => {
    if (pokemon.url) {
      getPokemonDetail(pokemon.url).then(({ data }) => {
        setPokemonVal(data);
      });
    }
  }, [pokemon]);

  return (
    <Container onClick={() => onSelect(pokemonVal)}>
      <Name>{pokemon.name}</Name>
      <Image
        src={pokemonVal?.sprites.other["official-artwork"]["front_default"]}
      />
    </Container>
  );
};

export default PokemonCard;
