import { GoogleGenAI } from "@google/genai";

/**
 * Backward-compatible Gemini Service
 * - ให้ตรงกับ components เดิม: ฟังก์ชันรับ string ได้ และคืน string เสมอ
 * - Export Types/Functions ตามที่ components import อยู่
 */

const DEFAULT_MODEL = "gemini-2.0-flash";

const API_KEY: string =
  (process.env.GEMINI_API_KEY as string | undefined) ||
  (process.env.API_KEY as string | undefined) ||
  (((import.meta as any).env?.VITE_GEMINI_API_KEY as string | undefined) ?? "") ||
  "";

function getClient(): GoogleGenAI | null {
  if (!API_KEY) return null;
  return new GoogleGenAI({ apiKey: API_KEY });
}

function noKeyMsg(): string {
  return "⚠️ ยังไม่ได้ตั้งค่า GEMINI_API_KEY / VITE_GEMINI_API_KEY";
}

/** ✅ Core: components เรียกใช้อยู่ */
export async function sendMessageToGemini(
  message: string,
  opts?: { system?: string; model?: string; temperature?: number; maxOutputTokens?: number }
): Promise<string> {
  const client = getClient();
  if (!client) return noKeyMsg();

  const model = opts?.model ?? DEFAULT_MODEL;
  const chat = client.chats.create({
    model,
    config: {
      temperature: opts?.temperature ?? 0.6,
      maxOutputTokens: opts?.maxOutputTokens ?? 1200,
    },
  });

  const system = opts?.system?.trim();
  const finalMessage = system ? `${system}\n\nUSER:\n${message}` : message;

  const res = await chat.sendMessage({ message: finalMessage });
  return (res as any)?.text ?? "";
}

/** ✅ Types ให้ตรงกับที่ components ใช้ */
export type DebugInputs = {
  error: string;
  expected?: string;
  actual?: string;
  env?: string;
  stack?: string;
  filePath?: string;
  codeSnippet?: string;
};

export type ProjectInputs = {
  problem: string;
  users: string;
  data?: string;
  constraints?: string; // component ใส่เป็น string
};

export type SyllabusInputs = {
  name: string;
  level: string; // component ใส่ '' ได้
  duration?: string;
  focus?: string;
};

/** ✅ Functions ที่ components import อยู่ — คืน string เสมอ */

export async function auditCurriculum(
  content: string | { curriculumText: string; targetAudience?: string; durationWeeks?: number }
): Promise<string> {
  const curriculumText = typeof content === "string" ? content : content.curriculumText;
  const system = "You are a strict curriculum auditor. Output in clean Markdown (Thai).";

  const prompt = `
ตรวจหลักสูตรด้านล่างและทำรายงานเป็น Markdown (ภาษาไทย) โดยต้องมี:
- คะแนนรวม (0-100) + เหตุผลสั้น
- จุดแข็ง / ช่องว่าง / ข้อเสนอแนะ (bullet)
- Workshop รายสัปดาห์ (อย่างน้อย 8-12 สัปดาห์)
- Checklist ทำให้เรียนแล้วทำโปรเจกต์ได้จริง

Curriculum:
${curriculumText}
`.trim();

  return sendMessageToGemini(prompt, { system, temperature: 0.4 });
}

export async function analyzeError(inputs: DebugInputs): Promise<string> {
  const system = "You are a senior TS/React/Vite debugging coach. Output Markdown + exact commands.";

  const prompt = `
วิเคราะห์ error นี้แบบเป็นขั้นตอน พร้อมคำสั่งแก้จริง:

Error: ${inputs.error || "-"}
Expected: ${inputs.expected || "-"}
Actual: ${inputs.actual || "-"}
Env: ${inputs.env || "-"}
Stack: ${inputs.stack || "-"}
File: ${inputs.filePath || "-"}
Code:
${inputs.codeSnippet || "-"}
`.trim();

  return sendMessageToGemini(prompt, { system, temperature: 0.35 });
}

export async function generateProjectPlan(inputs: ProjectInputs): Promise<string> {
  const system = "You are an AI Project Manager. Output enterprise-grade plan in Markdown.";

  const prompt = `
ทำแผนโปรเจกต์ AI สำหรับมือใหม่ให้ทำได้จริง (Markdown):
- Scope/Out of scope
- แผน 8-12 สัปดาห์ (Week -> Deliverables)
- Data/Model/Deploy plan + Risk/Mitigation + Portfolio outputs

Problem: ${inputs.problem || "-"}
Users: ${inputs.users || "-"}
Data: ${inputs.data || "-"}
Constraints: ${inputs.constraints || "-"}
`.trim();

  return sendMessageToGemini(prompt, { system, temperature: 0.4 });
}

export async function generateSyllabus(inputs: SyllabusInputs): Promise<string> {
  const system = "You are a syllabus designer. Week-by-week syllabus in Markdown, beginner-friendly.";

  const prompt = `
ออกแบบหลักสูตร AI Project 101 (Markdown) ให้ทำได้จริงจน Deploy:
- อย่างน้อย 8-12 สัปดาห์
- สัปดาห์ละ: Topic, Outcomes, Lesson outline, Workshop, Quiz, Homework
- Capstone + Rubric

ชื่อคอร์ส: ${inputs.name || "AI Project 101"}
ระดับ: ${inputs.level || "beginner"}
ระยะเวลา: ${inputs.duration || "12 weeks"}
โฟกัส: ${inputs.focus || "Chatbot / Vision / Analytics / IoT"}
`.trim();

  return sendMessageToGemini(prompt, { system, temperature: 0.4 });
}
