import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getLocation } from './locationService';
import { getWeather } from './weatherService';

const App = () => {
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const loc = await getLocation();
            setLocation(loc);

            if (loc) {
                const weatherData = await getWeather(loc.latitude, loc.longitude);
                setWeather(weatherData);
            }
        };

        fetchData();
    }, []);

    return (
        <View>
            <Text>User's Location:</Text>
            {location ? (
                <Text>{`Latitude: ${location.latitude}, Longitude: ${location.longitude}`}</Text>
            ) : (
                <Text>Loading location...</Text>
            )}
            <Text>Current Weather:</Text>
            {weather ? (
                <Text>{`Temperature: ${weather.temperature}, Condition: ${weather.condition}`}</Text>
            ) : (
                <Text>Loading weather...</Text>
            )}
        </View>
    );
};

export default App;