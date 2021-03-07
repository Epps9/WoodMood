const express = require('express');
const router = express.Router();

const Bracelet = require('../models/bracelets.model');

router.get('/bracelets', async (req, res) => {
  try {
    res.json(await Bracelet.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.get('/bracelets/:id', async (req, res) => {
    try {
      const bracelet = await Bracelet.findById(req.params.id);
      if(!bracelet) res.status(404).json({ message: 'Not found' });
      else res.json(bracelet);
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
  });

module.exports = router;
