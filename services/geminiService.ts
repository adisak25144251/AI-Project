// services/geminiService.ts
import { GoogleGenAI } from "@google/genai";

// สร้าง type "ChatSession" จาก return type ของ SDK (แทนการ import ChatSession)
export type ChatSession = ReturnType<GoogleGenAI["chats"]["create"]>;

// รองรับทั้งที่คุณ define ผ่าน vite.config.ts (process.env.*) หรือใช้ VITE_* ก็ได้
const API_KEY =
  (process.env.GEMINI_API_KEY as string | undefined) ||
  (process.env.API_KEY as string | undefined) ||
  (import.meta as any).env?.VITE_GEMINI_API_KEY ||
  "";

let _client: GoogleGenAI | null = null;
let _chat: ChatSession | null = null;

function getClient(): GoogleGenAI {
  if (_client) return _client;
  // ไม่ throw ให้เว็บพังทั้งเว็บ — คืนข้อความชัดเจนเวลาเรียกใช้งานจริง
  _client = new GoogleGenAI({ apiKey: API_KEY || "MISSING_API_KEY" });
  return _client;
}

/** ใช้สร้าง/คืนค่า chat session (คงสถานะบทสนทนา) */
export function getChatSession(model: string = "gemini-2.0-flash"): ChatSession {
  const client = getClient();
  if (_chat) return _chat;
  _chat = client.chats.create({
    model,
    // ใส่ config ได้ตามต้องการ
    config: {
      temperature: 0.6,
      maxOutputTokens: 1024,
    },
  });
  return _chat;
}

/** ล้าง session */
export function resetChatSession() {
  _chat = null;
}

/** ยิงแบบแชท (มี context) */
export async function sendChatMessage(message: string, model?: string): Promise<string> {
  if (!API_KEY) return "⚠️ ยังไม่ได้ตั้งค่า GEMINI API KEY (GEMINI_API_KEY / VITE_GEMINI_API_KEY)";
  const chat = getChatSession(model);
  const res = await chat.sendMessage({ message });
  return (res as any)?.text ?? "";
}

/** ยิงแบบ one-shot (ไม่เก็บ context) */
export async function generateText(prompt: string, model: string = "gemini-2.0-flash"): Promise<string> {
  if (!API_KEY) return "⚠️ ยังไม่ได้ตั้งค่า GEMINI API KEY (GEMINI_API_KEY / VITE_GEMINI_API_KEY)";
  const client = getClient();
  const res = await client.models.generateContent({
    model,
    contents: prompt,
  });
  return (res as any)?.text ?? "";
}
