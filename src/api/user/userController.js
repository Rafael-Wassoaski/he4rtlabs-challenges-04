const axios = require('axios').default;

class UserController{
    static async create(req, res, next){
        const{userName, password, email} = req.body;
        console.log('aqui',userName);

        return res.send();
    }
}

module.exports = UserController;