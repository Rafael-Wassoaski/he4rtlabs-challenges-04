const axios = require('axios').default;
class PokenomController {

    static calculateAppearedPokemon(){
        const index = Math.floor((Math.random()*1118));
        return index
    }

    static async pokemonAppears(req, res, next) {
        const calculatedPokemon = PokenomController.calculateAppearedPokemon();
        const pokemonRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon/${calculatedPokemon}`);
        const pokemon = pokemonRequest.data;
        return res.json({data: pokemon});
    }
}

module.exports = PokenomController