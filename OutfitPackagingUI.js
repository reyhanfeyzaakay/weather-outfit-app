import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import outfitRecommender from './outfitRecommender';
import packingRecommender from './packingRecommender';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    header: {
        backgroundColor: '#0066CC',
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        paddingVertical: 15,
        borderRadius: 10,
        textAlign: 'center',
    },
    section: {
        backgroundColor: '#E6F0FF',
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#0066CC',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0066CC',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        flexWrap: 'wrap',
    },
    typeButton: {
        backgroundColor: '#0066CC',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        margin: 5,
    },
    activeButton: {
        backgroundColor: '#0066CC',
    },
    inactiveButton: {
        backgroundColor: '#CCCCCC',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    itemList: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
    item: {
        fontSize: 14,
        color: '#333',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E6F0FF',
    },
});

const OutfitPackagingUI = ({ weatherData }) => {
    const [selectedOutfitType, setSelectedOutfitType] = useState('casual');
    const [outfit, setOutfit] = useState([]);
    const [packingItems, setPackingItems] = useState([]);

    useEffect(() => {
        if (weatherData) {
            updateRecommendations(selectedOutfitType, weatherData);
        }
    }, [weatherData, selectedOutfitType]);

    const updateRecommendations = (outfitType, weather) => {
        const weatherCategory = getWeatherCategory(weather.temperature);
        const outfitSuggestion = outfitRecommender.getOutfitSuggestion(weatherCategory, outfitType);
        const packingSuggestion = packingRecommender.getPackingItems(weatherCategory, weather.condition.toLowerCase());

        setOutfit(outfitSuggestion);
        setPackingItems(packingSuggestion);
    };

    const getWeatherCategory = (temperature) => {
        if (temperature >= 25) return 'hot';
        if (temperature >= 15) return 'warm';
        if (temperature >= 5) return 'cool';
        return 'cold';
    };

    const handleOutfitTypeChange = (outfitType) => {
        setSelectedOutfitType(outfitType);
        updateRecommendations(outfitType, weatherData);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>👕 Outfit & Packing</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Select Outfit Type</Text>
                <View style={styles.buttonContainer}>
                    {outfitRecommender.getAllOutfitTypes().map((type) => (
                        <TouchableOpacity
                            key={type}
                            style={[
                                styles.typeButton,
                                selectedOutfitType === type ? styles.activeButton : styles.inactiveButton
                            ]}
                            onPress={() => handleOutfitTypeChange(type)}
                        >
                            <Text style={styles.buttonText}>
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>👕 Outfit Suggestion</Text>
                <View style={styles.itemList}>
                    {outfit.map((item, index) => (
                        <Text key={index} style={styles.item}>✓ {item}</Text>
                    ))}
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>🎒 What to Pack</Text>
                <View style={styles.itemList}>
                    {packingItems.map((item, index) => (
                        <Text key={index} style={styles.item}>✓ {item}</Text>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default OutfitPackagingUI;