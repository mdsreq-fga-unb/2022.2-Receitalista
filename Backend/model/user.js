const Sequelize = require('sequelize');
const database = require('../db/connect');

const Item = require('./item');
const Product = require('./product');
const Client = require('./client');
const Order = require('./order');

const User = database.define('user', {
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
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price_per_hour: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
});

Item.belongsTo(User, {
    constraints: true,
    foreignKey: 'user_id'
});

Product.belongsTo(User, {
    constraints: true,
    foreignKey: 'user_id'
});

Client.belongsTo(User, {
    constraints: true,
    foreignKey: 'user_id'
});

Order.belongsTo(User, {
    constraints: true,
    foreignKey: 'user_id'
});

module.exports = User;