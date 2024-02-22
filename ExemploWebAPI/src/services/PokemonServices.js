import api from "../utils/api";
import axios from "axios";

const searchPokemonByName = async (name) => {
    try {
        const response = await api.get('pokemon?limit=1000');
        const filteredPokemons = response.data.results.filter(pokemon => pokemon.name.includes(name.toLowerCase()));
        const pokemonData = await Promise.all(filteredPokemons.map(async (pokemon) => {
            const res = await axios.get(pokemon.url);
            return res.data;
        }));
        return pokemonData;
    } catch(error){
        throw new Error('Error fetching Pokemon: ', error);
    }
}

export {
    searchPokemonByName
}