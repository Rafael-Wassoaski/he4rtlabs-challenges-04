'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        return Promise.all([
            queryInterface.changeColumn('Users', 'userName', {
                allowNull: false,
                unique: true
            }),

            queryInterface.changeColumn('Users', 'email', {
                allowNull: false,
                unique: true
            }),
            queryInterface.changeColumn('Users', 'password', {
                allowNull: false,
            })
        ]);

    },

    down: async (queryInterface, Sequelize) => {
    }
};
