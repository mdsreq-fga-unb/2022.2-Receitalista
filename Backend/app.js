require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRouter = require('./routes/userRouter');
const itemRouter = require('./routes/itemRouter');
const productRouter = require('./routes/productRouter');
const clientRouter = require('./routes/clientRouter');
const orderRouter = require('./routes/orderRouter');

const database = require("./db/queries");

database.connect();

const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/item', itemRouter);
app.use('/product', productRouter);
app.use('/client', clientRouter);
app.use('/order', orderRouter);

module.exports = app;