const Sequelize = require('sequelize');
const database = require('../db/connect');

const Product = require('./product');
const Client = require('./client');
const User = require('./user');

const Order = database.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncremente: true,
        allowNull: false,
        primaryKey: true
    },
    total_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
});

Order.belongsTo(Product, {
    constraints: true,
    foreignKey: 'id_product'
});

Order.belongsTo(Client, {
    constraints: true,
    foreignKey: 'id_client'
});


Order.hasOne(User, {
    foreignKey: 'id_user'
});

module.exports = Order;