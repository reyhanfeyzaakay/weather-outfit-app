const outfitRecommender = (weatherType) => {
    const outfits = {
        hot: {
            casual: 'Lightweight t-shirt and shorts',
            formal: 'Short-sleeve button-up shirt and chinos',
            sports: 'Moisture-wicking tank top and running shorts',
            beach: 'Swim trunks and a tank top'
        },
        warm: {
            casual: 'T-shirt and jeans',
            formal: 'Lightweight blazer and dress shirt with trousers',
            sports: 'Short-sleeve shirt and joggers',
            beach: 'Board shorts and a loose shirt'
        },
        cool: {
            casual: 'Long-sleeve shirt and jeans',
            formal: 'Sweater and dress pants',
            sports: 'Hoodie and athletic pants',
            beach: 'Light jacket over swimwear'
        },
        cold: {
            casual: 'Coat, scarf, and boots',
            formal: 'Overcoat and formal suit',
            sports: 'Thermal layers and joggers',
            beach: 'Heavy parka over swimwear'
        }
    };

    return outfits[weatherType];
};

module.exports = outfitRecommender;