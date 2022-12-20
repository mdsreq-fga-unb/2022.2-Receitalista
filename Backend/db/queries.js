const database = require("./connect");

exports.connect = async function () {
    try {
        await database.sync();
        console.log(new Date().toISOString(), 'Connection has been established successfully.');
    } catch (error) {
        console.error(new Date().toISOString(), 'Unable to connect to the database:', error);
    }
}