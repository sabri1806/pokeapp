import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getPokemonDetail } from "..//services/pokemon.service";

const PokemonDetail = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (pokemonUrl) {
      getPokemonDetail(pokemonUrl).then(({ data }) => {
        setPokemon(data);
      });
    }
  });

  return (
    <div>
      <div>{pokemon?.name}</div>
      <div>{pokemon?.weight}</div>
    </div>
  );
};

export default PokemonDetail;
