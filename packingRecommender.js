// packingRecommender.js  

const packingRecommender = (temperature, weatherCondition) => {  
    let items = [];  

    // Packing items for all temperatures  
    if (temperature < 0) {  
        items.push("Heavy coat", "Thermal gloves", "Scarf", "Warm hat", "Insulated boots");  
    } else if (temperature >= 0 && temperature < 15) {  
        items.push("Warm jacket", "Sweaters", "Boots", "Warm socks");  
    } else if (temperature >= 15 && temperature < 25) {  
        items.push("Light jacket", "Long sleeves", "Sneakers");  
    } else {  
        items.push("Short sleeves", "Sunglasses", "Sandals");  
    }  

    // Packing items for different weather conditions  
    if (weatherCondition === 'sunny') {  
        items.push("Sunscreen", "Hat");  
    } else if (weatherCondition === 'rainy') {  
        items.push("Raincoat", "Umbrella", "Waterproof shoes");  
    } else if (weatherCondition === 'windy') {  
        items.push("Windbreaker", "Secure hat");  
    } else if (weatherCondition === 'humid') {  
        items.push("Lightweight clothing", "Water bottle");  
    } else if (weatherCondition === 'cloudy') {  
        items.push("Layers (for temperature fluctuation)");  
    }  

    return items;  
};  

// Example usage  
console.log(packingRecommender(20, 'sunny'));  

module.exports = packingRecommender;