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

router.get('/promo/:id', async (req, res) => {
  try {
    const promo = await PromoProduct.findById(req.params.id);
    if(!promo) res.status(404).json({ message: 'Not found' });
    else res.json(promo);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
