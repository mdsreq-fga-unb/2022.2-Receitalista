const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const helloWorldRoutes = require('./routes/helloworld');

const database = require("./db/queries");

database.connect();

const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/helloworld', helloWorldRoutes);

module.exports = app;