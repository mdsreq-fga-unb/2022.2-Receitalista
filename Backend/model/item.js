const Sequelize = require('sequelize');
const database = require('../db/queries');

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
    },
    unit: {
        type: Sequelize.STRING,
    }
})

module.exports = Item;