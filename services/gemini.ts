
import { GoogleGenAI } from "@google/genai";
import { CAREER_DATA } from "../constants";

export class CareerAssistantService {
  private ai: GoogleGenAI;
  private chat: any;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const systemInstruction = `
      You are the AI assistant for ${CAREER_DATA.name}, a ${CAREER_DATA.role}.
      Your goal is to answer questions about Barbara's professional background, skills, and projects based on the provided context.
      
      CONTEXT:
      - Bio: ${CAREER_DATA.bio}
      - Skills: ${CAREER_DATA.skills.map(s => `${s.name} (${s.level}%)`).join(', ')}
      - Experience: ${CAREER_DATA.experience.map(e => `${e.position} at ${e.company} (${e.period})`).join('; ')}
      - Projects: ${CAREER_DATA.projects.map(p => p.title).join(', ')}
      
      PERSONALITY:
      - Professional, friendly, and concise.
      - Use subtle humor when appropriate.
      - If you don't know the answer, politely suggest contacting Barbara directly via the contact form.
      - Keep responses under 150 words.
    `;

    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const response = await this.chat.sendMessage({ message });
      return response.text || "I'm sorry, I couldn't process that. Please try again.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "The AI assistant is currently resting. Feel free to browse the manual portfolio!";
    }
  }
}

export const assistant = new CareerAssistantService();
