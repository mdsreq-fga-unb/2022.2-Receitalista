const Sequelize = require('sequelize');
const database = require('../db/connect');

const Order = require('./order');

const Client = database.define('client', {
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
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Order.belongsTo(Client, {
    constraints: true,
    foreignKey: 'client_id'
});


module.exports = Client;