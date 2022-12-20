const Sequelize = require('sequelize');
const database = require('../db/connect');

const Order = require('./order');

const Client = database.define('client', {
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
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Client.hasMany(Order, {
    foreignKey: 'id_client'
});

module.exports = Client;