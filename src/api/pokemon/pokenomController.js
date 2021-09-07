class PokenomController {
    static async capturePokemon(req, res, next) {
        return res.json({msg: 'Pokemon'});
    }
}

module.exports = PokenomController