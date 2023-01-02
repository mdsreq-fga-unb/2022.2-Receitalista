const Sequelize = require('sequelize');
const database = require('../db/connect');

const ItemProduct = database.define('item_product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    }
})

module.exports = ItemProduct;