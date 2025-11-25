import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize the API client
// Ideally, we would re-create this client if the key changes, but for this demo, we assume the env var is static.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, I am unable to respond at the moment.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I am having trouble connecting to the concierge service. Please try again later.";
  }
};
