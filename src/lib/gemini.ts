import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");

export const geminiModel = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function chatWithGemini(prompt: string) {
  try {
    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error chatting with Gemini:", error);
    return "Sorry, I encountered an error. Please try again.";
  }
}
