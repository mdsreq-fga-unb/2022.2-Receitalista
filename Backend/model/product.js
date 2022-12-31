const Sequelize = require('sequelize');
const database = require('../db/connect');

const Item = require('./item');
const User = require('./user');
const ItemProduct = require('./itemProduct');

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

Product.belongsToMany(Item, {
    through: {
        model: ItemProduct
    },
    foreignKey: 'id_product',
    constraint: true
});

Item.belongsToMany(Product, {
    through: {
        model: ItemProduct
    },
    foreignKey: 'id_item',
    constraint: true
});

module.exports = Product; 