const fetch = require('node-fetch');

const getWeather = async(city, countryCode) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=857c3164a727aa134aae02a6ba1e1a77`

    let data = await fetch(url);
    return data.json();
}

module.exports = getWeather;
// Tell node we want to return getWeather
