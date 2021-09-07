const pokemonRoutes = require('./pokemon/pokemonRotas');
const router = require('express').Router();

module.exports = (app) =>{
    pokemonRoutes(router);
    app.use('/api', router);
}