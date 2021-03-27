require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

require('./models/db')();

const apiUrl = process.env.API_URL;
const productsRouter = require('./routers/product');
const categoryRouter = require('./routers/category');
const userRouter = require('./routers/users');

app.use(`${apiUrl}/products`, productsRouter);
app.use(`${apiUrl}/category`, categoryRouter);
app.use(`${apiUrl}/users`, userRouter);

app.get(apiUrl, (req, res, next) => {
  res.send('home');
});

module.exports = app;
