import axios from "axios";
import URLS from "./URLs";

const getAllPokemons = (offset, limit) => {
  return axios.get(`${URLS.ALL_POKEMONS}?offset=${offset}&limit=${limit}`);
};

const getPokemonDetail = (currentPokemon) => {
  return axios.get(currentPokemon);
};

export { getAllPokemons, getPokemonDetail };
