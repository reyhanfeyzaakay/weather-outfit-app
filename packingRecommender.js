class PackingRecommender {
    constructor() {
        this.packingItems = {
            hot: {
                sunny: ['Sunscreen', 'Sunglasses', 'Water bottle', 'Hat', 'Light scarf'],
                rainy: ['Umbrella', 'Waterproof jacket', 'Water bottle', 'Hat'],
                windy: ['Hat', 'Light scarf', 'Sunglasses', 'Water bottle'],
                humid: ['Sunscreen', 'Water bottle', 'Hat', 'Sunglasses', 'Deodorant'],
                cloudy: ['Sunglasses', 'Water bottle', 'Hat', 'Light scarf']
            },
            warm: {
                sunny: ['Sunscreen', 'Sunglasses', 'Water bottle', 'Hat'],
                rainy: ['Umbrella', 'Light jacket', 'Water bottle'],
                windy: ['Light jacket', 'Hat', 'Sunglasses'],
                humid: ['Sunscreen', 'Water bottle', 'Hat', 'Deodorant'],
                cloudy: ['Water bottle', 'Sunglasses', 'Light layer']
            },
            cool: {
                sunny: ['Jacket', 'Sunglasses', 'Water bottle'],
                rainy: ['Waterproof jacket', 'Umbrella', 'Water bottle', 'Scarf'],
                windy: ['Windbreaker', 'Scarf', 'Hat', 'Gloves'],
                humid: ['Jacket', 'Water bottle', 'Scarf'],
                cloudy: ['Jacket', 'Water bottle', 'Scarf']
            },
            cold: {
                sunny: ['Winter coat', 'Hat', 'Gloves', 'Scarf', 'Water bottle'],
                rainy: ['Winter coat', 'Waterproof jacket', 'Hat', 'Gloves', 'Umbrella'],
                windy: ['Winter coat', 'Hat', 'Gloves', 'Scarf', 'Hand warmer'],
                humid: ['Winter coat', 'Hat', 'Gloves', 'Thermal socks', 'Hand warmer'],
                cloudy: ['Winter coat', 'Hat', 'Gloves', 'Scarf', 'Water bottle']
            }
        };
    }

    getPackingItems(weatherCategory, weatherCondition = 'sunny') {
        const items = this.packingItems[weatherCategory]?.[weatherCondition];
        return items || this.packingItems['warm']['sunny'];
    }

    getAllPackingItems(weatherCategory) {
        return this.packingItems[weatherCategory];
    }
}

module.exports = new PackingRecommender();