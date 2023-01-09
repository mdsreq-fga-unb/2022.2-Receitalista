const Sequelize = require('sequelize');
const database = require('../db/connect');

const Order = database.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    total_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
});

module.exports = Order;