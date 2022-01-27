import { useEffect, useState } from "react";

const PokemonDetail = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (pokemonUrl) {
      getPokemonDetail(pokemonUrl).then(({ data }) => {
        setPokemon(data);
      });
    }
  }, [pokemonUrl]);

  return (
    <div>
      <div>{pokemon?.name}</div>
      <div>{pokemon?.weight}</div>
    </div>
  );
};

export default PokemonDetail;
