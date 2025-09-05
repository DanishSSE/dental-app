const fs = require('fs');

// Read config template
let config = fs.readFileSync('config.js', 'utf8');

// Replace placeholder with environment variable
config = config.replace('your-actual-api-key-here', process.env.GEMINI_API_KEY || 'demo-mode');

// Write updated config
fs.writeFileSync('config.js', config);

console.log('✅ API key injected from environment variable');