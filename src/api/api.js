const pokemonRoutes = require('./pokemon/pokemonRotas');
const userRoutes = require('./user/userRotas');
const router = require('express').Router();

module.exports = (app) =>{
    pokemonRoutes(router);
    userRoutes(router);
    app.use('/api', router);
}