const express = require('express');
const router = express.Router();

const Watch = require('../models/watches.model');

router.get('/watches', async (req, res) => {
  try {
    res.json(await Watch.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
