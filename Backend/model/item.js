const Sequelize = require('sequelize');
const database = require('../db/connect');
const User = require('./user');

const Item = database.define('item', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantity: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    unit: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
});

User.hasOne(Item, {
    foreignKey: 'id_user'
});

module.exports = Item;