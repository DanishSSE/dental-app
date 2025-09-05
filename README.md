# Smart Dental Diagnosis Web App

A step-by-step frontend web application for AI-powered dental diagnosis with intuitive user interface and comprehensive symptom assessment.

## ✨ Features

- **📷 Image Upload**: Upload dental photos with drag & drop interface
- **🔄 Step-by-step Flow**: 7-step guided questionnaire with progress tracking
- **🦷 Quadrant Selection**: Interactive multiple dental quadrant selector
- **🔍 Tooth Type Selection**: Choose specific tooth types (Incisor, Canine, Premolar, Molar)
- **📋 Comprehensive Symptom Assessment**: Multi-step questionnaire covering pain levels, timing, and symptoms
- **🤖 AI Integration**: Google Gemini API for advanced image analysis and diagnosis
- **📱 Responsive Design**: Mobile-first design with intuitive navigation and back buttons
- **🎨 Visual Results**: Color-coded diagnosis results with urgency alerts and treatment recommendations

## 🚀 Quick Start

### 1. Get Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key for Gemini
3. Copy the API key

### 2. Configure API Key

1. Copy `config.example.js` to `config.js`:
   ```bash
   cp config.example.js config.js
   ```
2. Open `config.js` and replace the API key:
   ```javascript
   GEMINI_API_KEY: "your-actual-api-key-here";
   ```

### 3. Run the App

**Option A: Direct Browser**

- Open `index.html` in a web browser

**Option B: Local Server** (Recommended)

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# Access at http://localhost:8000
```

## 📱 App Workflow

1. **📷 Upload Photo** - Select dental image (JPEG/PNG, max 5MB)
2. **🦷 Select Quadrant(s)** - Choose affected dental quadrants (multiple selection)
3. **🔍 Choose Tooth Type** - Specify tooth type (Incisor/Canine/Premolar/Molar)
4. **😣 Rate Pain Level** - Select pain intensity (No Pain → Severe)
5. **⏰ Pain Timing** - When pain occurs (multiple options)
6. **🎯 Pain Type** - Describe pain characteristics (Sensitivity/Throbbing/etc.)
7. **📝 Additional Symptoms** - Select other symptoms + optional details
8. **🤖 AI Analysis** - Get comprehensive diagnosis and recommendations

## 📁 File Structure

```
dental-app/
├── index.html          # Main application
├── config.js           # Configuration & API key
├── gemini-api.js       # Gemini API integration
├── dist/output.css     # Compiled Tailwind CSS
└── README.md           # Documentation
```

## 🛠️ Technologies

- **HTML5** - Semantic structure
- **Tailwind CSS** - Utility-first styling with custom components
- **Vanilla JavaScript** - Application logic and API integration
- **Google Gemini API** - AI-powered image analysis

## 🎨 UI Features

- **Progress Bar** - Visual step tracking
- **Active States** - Clear selection feedback
- **Back Navigation** - Easy step navigation
- **Color-coded Results** - Severity indicators (Red/Yellow/Green)
- **Urgency Alerts** - Immediate care notifications
- **Responsive Layout** - Mobile-optimized design

## ⚠️ Important Notes

**🏥 Medical Disclaimer**: This application is for educational purposes only. Always consult qualified dental professionals for proper diagnosis and treatment.

**🔒 Security**: API key is client-side visible. Consider server-side implementation for production use.

## 🔧 Development

### Modifying Styles

If you need to modify Tailwind styles:

1. **Edit** `src/input.css`
2. **Recompile**:
   ```bash
   npx tailwindcss -i ./src/input.css -o ./dist/output.css
   ```
3. **Auto-watch** (development):
   ```bash
   npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   ```

## 🐛 Troubleshooting

| Issue              | Solution                                     |
| ------------------ | -------------------------------------------- |
| API Key Error      | Verify key in `config.js`                    |
| CORS Issues        | Use local server, not file://                |
| Upload Issues      | Check file size (<5MB) and format (JPEG/PNG) |
| Styles Not Working | Ensure `dist/output.css` is compiled         |

## 📄 License

MIT License - Feel free to use and modify for educational purposes.

---

**Built with ❤️ for Dental Health Education from AI Agents**
