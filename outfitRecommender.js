class OutfitRecommender {
    constructor() {
        this.outfits = {
            casual: {
                hot: ['T-shirt', 'Shorts', 'Sandals', 'Light jacket'],
                warm: ['Jeans', 'T-shirt', 'Sneakers', 'Light cardigan'],
                cool: ['Long sleeve shirt', 'Jeans', 'Sneakers', 'Jacket'],
                cold: ['Sweater', 'Winter coat', 'Long pants', 'Boots', 'Scarf', 'Hat', 'Gloves']
            },
            formal: {
                hot: ['Dress pants', 'Light shirt', 'Dress shoes', 'Blazer'],
                warm: ['Suit', 'Dress shirt', 'Tie', 'Dress shoes'],
                cool: ['Suit', 'Dress shirt', 'Blazer', 'Dress pants', 'Tie'],
                cold: ['Winter coat', 'Suit', 'Dress shirt', 'Tie', 'Dress shoes', 'Scarf']
            },
            sports: {
                hot: ['Sports shorts', 'Tank top', 'Running shoes', 'Sports watch'],
                warm: ['Athletic pants', 'Sports shirt', 'Running shoes', 'Light windbreaker'],
                cool: ['Athletic tights', 'Long sleeve sports shirt', 'Running shoes', 'Jacket'],
                cold: ['Thermal wear', 'Sports jacket', 'Thermal pants', 'Winter boots', 'Beanie']
            },
            beach: {
                hot: ['Swimsuit', 'T-shirt', 'Flip flops', 'Beach cover-up'],
                warm: ['Swimsuit', 'Light shirt', 'Sandals', 'Light shorts'],
                cool: ['Swimsuit', 'Long sleeve rash guard', 'Water shoes'],
                cold: ['Swimsuit', 'Wetsuit', 'Water boots', 'Thermal rash guard']
            }
        };
    }

    getOutfitSuggestion(weatherCategory, outfitType = 'casual') {
        const outfit = this.outfits[outfitType]?.[weatherCategory];
        return outfit || this.outfits['casual'][weatherCategory];
    }

    getAllOutfitTypes() {
        return Object.keys(this.outfits);
    }
}

module.exports = new OutfitRecommender();