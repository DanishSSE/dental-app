// Configuration file for the dental app
const CONFIG = {
    // Replace with your actual Gemini API key from https://makersuite.google.com/app/apikey
    GEMINI_API_KEY: 'AIzaSyD9niX_1JKmckV_FM_-JXV1j8yIlWovmIk',
    
    // API endpoints
    GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
    
    // App settings
    MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
    SUPPORTED_IMAGE_TYPES: ['image/jpeg', 'image/jpg', 'image/png'],
    
    // Dental quadrant mapping
    QUADRANTS: {
        1: 'Upper Right',
        2: 'Lower Right', 
        3: 'Lower Left',
        4: 'Upper Left'
    },
    
    // Tooth types
    TOOTH_TYPES: {
        'incisor': 'Incisor - Front cutting teeth',
        'canine': 'Canine - Pointed tearing teeth',
        'premolar': 'Premolar - Grinding teeth',
        'molar': 'Molar - Back grinding teeth'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}