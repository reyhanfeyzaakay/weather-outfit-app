import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [outfitType, setOutfitType] = useState('casual');
    const [outfitSuggestions, setOutfitSuggestions] = useState([]);
    const [packingList, setPackingList] = useState([]);

    // Function to fetch weather data
    const fetchWeather = async () => {
        // Call weatherService.js to get weather data
        const data = await weatherService.getWeather(); // Implement this function in your weatherService.js
        setWeatherData(data);
    };

    // Function to fetch outfit recommendations
    const fetchOutfitSuggestions = () => {
        const suggestions = outfitRecommender.getSuggestions(outfitType); // Implement this in outfitRecommender.js
        setOutfitSuggestions(suggestions);

        const packingSuggestions = packingRecommender.getPackingList(outfitType); // Implement this in packingRecommender.js
        setPackingList(packingSuggestions);
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    useEffect(() => {
        fetchOutfitSuggestions();
    }, [outfitType]);

    return (
        <div className="app-container" style={{backgroundColor: '#f0f8ff', color: '#000080'}}>
            <h1>Weather Outfit App</h1>
            {weatherData && (
                <div className="weather-info">
                    <h2>Weather: {weatherData.description}</h2>
                    <p>Temperature: {weatherData.temperature} °C</p>
                </div>
            )}
            <div className="outfit-selection">
                {['casual', 'formal', 'sports', 'beach'].map(type => (
                    <button key={type} onClick={() => setOutfitType(type)}>{type.charAt(0).toUpperCase() + type.slice(1)}</button>
                ))}
            </div>
            <div className="outfit-suggestions">
                <h3>Outfit Suggestions:</h3>
                <ul>
                    {outfitSuggestions.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="packing-list">
                <h3>Packing List:</h3>
                <ul>
                    {packingList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <button onClick={fetchWeather}>Refresh</button>
        </div>
    );
}

export default App;