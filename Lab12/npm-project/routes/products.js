

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Products page');
});

router.post('/', (req, res) => {
  const { productName } = req.body;
  res.send(`Product ${productName} created`);
});

module.exports = router;
