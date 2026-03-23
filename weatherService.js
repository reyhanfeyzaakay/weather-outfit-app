const axios = require('axios');

const API_KEY = 'YOUR_API_KEY_HERE';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function fetchWeather(location) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: location,
                appid: API_KEY,
                units: 'metric'
            }
        });
        const data = response.data;
        return {
            temperature: data.main.temp,
            condition: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            location: data.name
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

module.exports = fetchWeather;