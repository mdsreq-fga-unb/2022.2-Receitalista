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
    itens_id: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: true
    },
    used_quantity: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    itens_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
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