const axios = require('axios').default;
class PokenomController {

    static calculateAppearedPokemon(){
        let index;
        while(!index || index > 1118){
            index = Math.floor((Math.random()*1118));
        }
        return index
    }

    static async pokemonAppears(req, res, next) {
        const calculatedPokemon = PokenomController.calculateAppearedPokemon();
        const pokemonRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon/${calculatedPokemon}`);
        if(pokemonRequest.status === 200){
            const pokemon = pokemonRequest.data;
            return res.json({data: pokemon});
        }else{
            return res.json({data: {error: 'Erro ao buscar pokemon'}});
        }
    }
}

module.exports = PokenomController