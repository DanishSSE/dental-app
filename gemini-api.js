// Gemini API Integration
class GeminiAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
    }

    async analyzeDentalImage(imageData, symptoms) {
        const prompt = this.createPrompt(symptoms);
        
        try {
            const response = await fetch(`${this.baseURL}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            { text: prompt },
                            {
                                inline_data: {
                                    mime_type: "image/jpeg",
                                    data: imageData.split(',')[1] // Remove data:image/jpeg;base64, prefix
                                }
                            }
                        ]
                    }],
                    generationConfig: {
                        temperature: 0.4,
                        topK: 32,
                        topP: 1,
                        maxOutputTokens: 4096,
                    }
                })
            });

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`);
            }

            const data = await response.json();
            return this.parseResponse(data);
        } catch (error) {
            console.error('Gemini API Error:', error);
            throw error;
        }
    }

    createPrompt(symptoms) {
        return `As a dental AI assistant, analyze this dental image and the following symptoms to provide a preliminary assessment. Please respond in JSON format with the following structure:

{
    "diagnosis": "Primary diagnosis based on image and symptoms",
    "confidence": "High/Medium/Low",
    "severity": "High/Medium/Low", 
    "recommendations": ["List of recommendations"],
    "treatmentOptions": ["Possible treatment options"],
    "urgency": "Immediate/Soon/Routine",
    "disclaimer": "This is not a substitute for professional dental care"
}

Patient Symptoms:
- Pain Level: ${symptoms.pain}
- Pain Type: ${symptoms.painType}
- Pain Timing: ${symptoms.timing.join(', ')}
- Additional Symptoms: ${symptoms.symptoms.join(', ')}
- Affected Area: Quadrant ${symptoms.quadrant}, ${symptoms.tooth} tooth

Please analyze the dental image for visible issues like cavities, discoloration, gum inflammation, plaque buildup, or other abnormalities. Provide practical recommendations while emphasizing the need for professional dental consultation.`;
    }

    parseResponse(apiResponse) {
        try {
            const text = apiResponse.candidates[0].content.parts[0].text;
            // Extract JSON from response (handle cases where response might have extra text)
            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                return JSON.parse(jsonMatch[0]);
            }
            throw new Error('No valid JSON found in response');
        } catch (error) {
            console.error('Error parsing API response:', error);
            // Return fallback response
            return {
                diagnosis: "Unable to analyze image at this time",
                confidence: "Low",
                severity: "Unknown",
                recommendations: [
                    "Please consult with a dental professional",
                    "Schedule a dental examination",
                    "Maintain good oral hygiene"
                ],
                treatmentOptions: ["Professional dental consultation required"],
                urgency: "Soon",
                disclaimer: "This is not a substitute for professional dental care"
            };
        }
    }
}

// Usage example:
// const gemini = new GeminiAPI('YOUR_API_KEY');
// const result = await gemini.analyzeDentalImage(imageData, symptoms);