const express = require('express');
const mongoose = require('mongoose');
const app = express();
const locationRoutes = require('./routes/locationRoutes');

app.listen(3000);
app.set('view engine', 'ejs');
// middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use(locationRoutes);