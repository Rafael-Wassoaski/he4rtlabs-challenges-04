const {Sequelize} = require('sequelize');

const Connection = new Sequelize('sqlite::src/resources/db/dataBase.db');

module.exports = Connection;