const Sequelize = require('sequelize');
const database = require('../db/connect');

const Order = database.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    products: {
        type: Sequelize.ARRAY(Sequelize.JSON),
        allowNull: true
    },
    total_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Order;