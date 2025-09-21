
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this project, we assume the API key is set.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const fetchDailyPromotions = async (): Promise<string[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "You are a marketing expert for a supermarket called 'Unique Spot'. Generate 3 concise, catchy promotional taglines for today's deals. The promotions should be for common supermarket items. For example: 'Buy one get one free on all berries!' or '20% off all dairy products today only!'.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            promotions: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
                description: 'A single promotional tagline.'
              }
            }
          }
        },
      },
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText);
    
    if (result && Array.isArray(result.promotions)) {
      return result.promotions;
    }
    
    console.error("Unexpected JSON structure from Gemini API:", result);
    return [];

  } catch (error) {
    console.error("Error fetching promotions from Gemini API:", error);
    // Returning a mock response on failure to ensure UI doesn't break
    // if the API key is not configured.
    return [
      "2-for-1 on all fresh-baked bread!",
      "Save 15% on any purchase over $50.",
      "Organic avocados are just $1.50 each today!"
    ];
  }
};
