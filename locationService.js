// locationService.js

/**
 * Gets the user's current geolocation coordinates.
 * @returns {Promise<{latitude: number, longitude: number}>} An object containing latitude and longitude.
 */
const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            return reject(new Error('Geolocation is not supported by this browser.'));
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                resolve({ latitude, longitude });
            },
            (error) => {
                reject(error);
            }
        );
    });
};

export default getCurrentLocation;