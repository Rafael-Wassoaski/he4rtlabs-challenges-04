const axios = require('axios').default;
const dbConnection = require('../../db/dbInit');
const sequelizeUser = require('../../db/models/User');

class UserController{
    static async create(req, res, next){
        const{userName, password, email} = req.body;
        console.log('aqui',userName);
        dbConnection;
        await sequelizeUser();
        return res.send();
    }
}

module.exports = UserController;