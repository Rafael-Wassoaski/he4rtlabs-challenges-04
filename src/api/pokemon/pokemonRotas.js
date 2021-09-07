const localRouter = require('express').Router();
const PokenomController  = require('./pokenomController');

module.exports = (router) =>{
    localRouter.get('/', PokenomController.capturePokemon);
    router.use('/pokemon', localRouter);
}