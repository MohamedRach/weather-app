const express = require('express');
const mongoose = require('mongoose');
const app = express();
const locationRoutes = require('./routes/locationRoutes');
const dbURI = "mongodb+srv://mohamed:Papa@cluster0.85qvts5.mongodb.net/WeatherApp?retryWrites=true&w=majority";

mongoose.connect(dbURI)
    .then((result) => {
        console.log("success");
        app.listen(3000);
    })
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');
// middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use(locationRoutes);