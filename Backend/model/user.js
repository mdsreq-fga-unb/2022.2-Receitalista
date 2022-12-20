const Sequelize = require('sequelize');
const database = require('../db/connect');

const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncremente: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    price_per_hour: Sequelize.DECIMAL
});

module.exports = User;