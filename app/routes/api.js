const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send("Paths: /users, /games, /community-posts");
});

module.exports = router;