const Sequelize = require('sequelize');
const database = require('../db/connect');

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
    base_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    product_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    profit_margin: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    profit: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    time_spent: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
});

module.exports = Product; 