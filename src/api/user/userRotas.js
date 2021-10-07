const localRouter = require('express').Router();
const UserController = require('./userController');

module.exports = (router)=>{
    localRouter.post('/signin', UserController.create);
    router.use('/user', localRouter);
}