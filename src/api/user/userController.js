const axios = require('axios').default;
const sha256 = require('crypto-js/sha256')
const hmacSHA512 = require('crypto-js/hmac-sha512')
const Base64 = require('crypto-js/enc-base64');
const {User: Users} = require('../../models');

class UserController {
    static async create(req, res, next) {
        const {userName, password, email} = req.body;
        const hashDigest = sha256(password);
        const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, 'likeAR4ven'));
        const user = await Users.create({
            userName: userName,
            password: hmacDigest,
            email: email
        });

        console.log(user);
        return res.json({userName: user.userName, id: user.id, email: user.email});
    }
}

module.exports = UserController;