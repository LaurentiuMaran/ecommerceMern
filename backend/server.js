require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');

app.use(express.json());
app.use(cors());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/', usersRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
