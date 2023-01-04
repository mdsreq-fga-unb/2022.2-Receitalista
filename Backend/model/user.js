const Sequelize = require('sequelize');
const database = require('../db/connect');
const Item = require('./item');

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

User.hasOne(Item);

Item.belongsTo(User, {
    constraints: true,
    foreignKey: 'user_id'
});

module.exports = User;