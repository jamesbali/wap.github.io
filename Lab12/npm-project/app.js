// app.js

const express = require('express');
const app = express();
const port = 3000; // Choose a port

// Middleware for static files
app.use(express.static('public'));

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Users Router
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Products Router
const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/views/404.html');
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
