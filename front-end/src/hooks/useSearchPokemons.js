import {search} from "../api/api";


async function useSearchPokemons() {
    const numberOfPokes = Math.floor(Math.random() * 10);
    const pokemons = [];
    for (let index = 0; index < 2; index++) {
        const pokemon = await search('/api/pokemon');
        console.log('aq', pokemon);
        pokemons.push(pokemon.data);
        // pokemon.data.sprites.front_default
        // .data.sprites.front_default
    }
    return pokemons;
}

export default useSearchPokemons;