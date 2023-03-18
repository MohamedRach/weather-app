
const getLocation = (res, req) => {
    res.render('home');
}
const postLocation = async (res, req) => {
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09IQbX9pXTQOl4x49sdPvizqnKVLeB2CHk&q=${req.body.location}`);
    const data = await response.json();
    console.log(data.Key);
}