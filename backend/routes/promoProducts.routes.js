const express = require('express');
const router = express.Router();

const PromoProduct = require('../models/promoproducts.model');

router.get('/promo', async (req, res) => {
  try {
    res.json(await PromoProduct.find());

  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
