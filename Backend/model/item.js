const Sequelize = require('sequelize');
const database = require('../db/connect');

const Product = require('./product');
const ItemProduct = require('./itemProduct');

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

Item.belongsToMany(Product, {
    through: {
        model: ItemProduct
    },
    foreignKey: 'id_item',
    constraints: true
});

module.exports = Item;