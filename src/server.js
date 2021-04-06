const path = require('path');

require('dotenv').config();
const express = require('express');
const multer = require('multer');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

require('./models/db')();
const apiUrl = process.env.API_URL;
const productsRouter = require('./routers/product');
const categoryRouter = require('./routers/category');
const orderRouter = require('./routers/order');
const userRouter = require('./routers/users');

app.use(`${apiUrl}/products`, productsRouter);
app.use(`${apiUrl}/category`, categoryRouter);
app.use(`${apiUrl}/orders`, orderRouter);
app.use(`${apiUrl}/users`, userRouter);

app.get(apiUrl, (req, res, next) => {
  res.send('home');
});

app.use('*', (req, res) => {
  res.status(404).send('Resource not found');
});

module.exports = app;
