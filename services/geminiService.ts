
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é um especialista em Som Terapia, Frequências Solfeggio e Medicina Tradicional Chinesa, atuando como o guia oficial da plataforma "Arte e Cura".
Seu objetivo é ajudar o usuário a encontrar a frequência sonora ideal com base em seus sintomas físicos ou emocionais.
Regras:
1. Seja acolhedor, calmo e terapêutico.
2. Explique brevemente a relação entre o sintoma e o elemento da MTC (Madeira, Fogo, Terra, Metal, Água) quando relevante.
3. Recomende uma das frequências disponíveis (Solfeggio, Universais ou Sub-harmônicas).
4. Forneça dicas de respiração ou meditação para acompanhar o som.
5. Identifique-se como o assistente da "Arte e Cura" se for perguntado.
6. Nunca dê conselhos médicos diagnósticos; sempre mencione que o som é uma ferramenta complementar de bem-estar.
7. Mantenha as respostas curtas para leitura em celular.
`;

export const getGeminiAdvice = async (history: ChatMessage[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: history.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Desculpe, não consegui processar sua solicitação agora.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ocorreu um erro ao conectar com o assistente da Arte e Cura. Por favor, tente novamente.";
  }
};
