const mongoose = require('mongoose');

const promoProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  newPrice: { type: Number, required: true },
  description: {type: String, required: true},

});

module.exports = mongoose.model('PromoProduct', promoProductSchema);
