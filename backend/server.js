const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');


const watchesRoutes = require('../backend/routes/watches.routes');
const braceletsRoutes = require('../backend/routes/bracelets.routes');
const promoProductsRoutes = require('./routes/promoproducts.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', watchesRoutes);
app.use('/api', braceletsRoutes);
app.use('/api', promoProductsRoutes);


/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});



/* MONGOOSE */
mongoose.connect('mongodb+srv://Ewa:kodilla@cluster0.wsukt.mongodb.net/MoodWood?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

app.use(session({
  secret: 'shhh!',
}));


db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+port);
});
