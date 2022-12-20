const Sequelize = require('sequelize');
const database = require('../db/connect');

const Item = require('./item');
const ItemProduct = require('./itemProduct');

const Product = database.define('product',  {
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
    used_quantity: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    itens_price: {
        type:Sequelize.DECIMAL,
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
    constraints: true
});

module.exports = Product;