const mongoose = require('mongoose');
const Locations = require('../models/locations')

const getData = async (location) => {
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09IQbX9pXTQOl4x49sdPvizqnKVLeB2CHk&q=${location}`);
    const data = await response.json();
    const response1 = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${data[0].Key}?apikey=%09IQbX9pXTQOl4x49sdPvizqnKVLeB2CHk`);
    const data1 = await response1.json();
    return data1;
}
const getLocation = (req, res) => {
    Locations.find().select('location')
        .then((results) => {
            if(results.length == 0){
                res.render('home', {results});
            } else {
                console.log(results)
                results.forEach((result) => {
                    getData(result)
                        .then((data) => {
                            res.render('home', {data, result});
                            localStorage.setItem(result, data);
                        })
                        .catch((err) => console.log(err))
                })
            }
        })
        .catch((err) => console.log(err))
}
const SaveLocation = (req,res) => {
    const location = new Locations(req.body);
    location.save()
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        })
}
module.exports = {
    getLocation,
    SaveLocation
}