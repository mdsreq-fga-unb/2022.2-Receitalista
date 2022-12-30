const Sequelize = require('sequelize');
const database = require('../db/connect');

const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
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
        type: Sequelize.STRING,
        allowNull: false
    },
    price_per_hour: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
});

module.exports = User;