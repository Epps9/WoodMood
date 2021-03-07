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

router.get('/watches/:id', async (req, res) => {
  try {
    const watch = await Watch.findById(req.params.id);
    if(!watch) res.status(404).json({ message: 'Not found' });
    else res.json(watch);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
