require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({ 
    dialect: "postgres",
    host: process.env.POSTGRES_HOST,
    port: process.env.DB_PORT,
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
    },
});

module.exports = sequelize;