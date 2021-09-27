import {search} from "../api/api";


async function useSearchPokemons() {
    const pokemon = await search('/api/pokemon');
    return pokemon.data;
}

export default useSearchPokemons;