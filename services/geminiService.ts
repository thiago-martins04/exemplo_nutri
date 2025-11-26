import { GoogleGenAI } from "@google/genai";
import { AIResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMealSuggestion = async (preference: string): Promise<AIResponse> => {
  try {
    const prompt = `
      Atue como uma nutricionista profissional e atenciosa.
      O usuário está buscando uma sugestão de refeição baseada em: "${preference}".
      
      Por favor, forneça:
      1. Uma sugestão de refeição saudável, criativa e deliciosa.
      2. Uma estimativa muito breve dos benefícios nutricionais.
      
      Mantenha a resposta curta (máximo 80 palavras), em tom encorajador e em Português do Brasil.
      Não use formatação markdown complexa, apenas texto corrido ou parágrafos simples.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Speed over deep thought for this simple task
      }
    });

    const text = response.text;

    if (!text) {
      throw new Error("Não foi possível gerar uma sugestão no momento.");
    }

    return {
      suggestion: text
    };

  } catch (error) {
    console.error("Error generating meal suggestion:", error);
    throw error;
  }
};