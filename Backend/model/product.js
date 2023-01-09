const Sequelize = require('sequelize');
const database = require('../db/connect');

const Order = require('../model/order');

const Product = database.define('product', {
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
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    itens: {
        type: Sequelize.ARRAY(Sequelize.JSON),
        allowNull: true
    },
    total_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
});

Order.belongsTo(Product, {
    constraints: true,
    foreignKey: 'product_id'
});

module.exports = Product; 