// app.js

const express = require('express');
const app = express();
const port = 3000; 

app.use(express.static('public'));

app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const productsRouter = require('./routes/products');
app.use('/products', productsRouter);


app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/views/404.html');
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something is not right!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
