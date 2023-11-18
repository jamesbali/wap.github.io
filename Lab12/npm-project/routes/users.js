

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Users page');
});

router.post('/', (req, res) => {
  const { username } = req.body;
  res.send(`User ${username} created`);
});

module.exports = router;
