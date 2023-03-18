const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render("home");
})
router.post('/', async (req, res) => {
    //console.log(req.body.location);
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09IQbX9pXTQOl4x49sdPvizqnKVLeB2CHk&q=${req.body.location}`);
    const data = await response.json();
    const response1 = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${data[0].Key}?apikey=%09IQbX9pXTQOl4x49sdPvizqnKVLeB2CHk`);
    const data1 = await response1.json();
    res.render('home', {data, data1 });
})

module.exports = router;