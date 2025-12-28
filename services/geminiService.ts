import { GoogleGenAI } from "@google/genai";

const API_KEY =
  (process.env.GEMINI_API_KEY as string | undefined) ||
  (process.env.API_KEY as string | undefined) ||
  (import.meta as any).env?.VITE_GEMINI_API_KEY ||
  "";

const DEFAULT_MODEL = "gemini-2.0-flash";

function getClient() {
  if (!API_KEY) return null;
  return new GoogleGenAI({ apiKey: API_KEY });
}

function mustHaveKey() {
  if (!API_KEY) {
    return {
      ok: false as const,
      text:
        "⚠️ ยังไม่ได้ตั้งค่า GEMINI_API_KEY (แนะนำใช้ VITE_GEMINI_API_KEY ใน .env สำหรับ Vite) หรือทำ backend proxy เพื่อความปลอดภัย",
    };
  }
  return { ok: true as const };
}

/** ---------- Generic helpers ---------- */

export async function sendMessageToGemini(
  userMessage: string,
  opts?: { system?: string; model?: string; temperature?: number; maxOutputTokens?: number }
): Promise<string> {
  const keyCheck = mustHaveKey();
  if (!keyCheck.ok) return keyCheck.text;

  const client = getClient()!;
  const model = opts?.model ?? DEFAULT_MODEL;

  // ใช้ chat session ชั่วคราว (one-shot chat)
  const chat = client.chats.create({
    model,
    config: {
      temperature: opts?.temperature ?? 0.6,
      maxOutputTokens: opts?.maxOutputTokens ?? 1024,
    },
  });

  const system = opts?.system?.trim();
  const message = system ? `${system}\n\nUSER:\n${userMessage}` : userMessage;

  const res = await chat.sendMessage({ message });
  return (res as any)?.text ?? "";
}

async function jsonFromGemini<T>(
  system: string,
  payload: unknown,
  schemaHint: string,
  opts?: { model?: string }
): Promise<T> {
  const prompt = [
    system,
    "",
    "Return ONLY valid JSON. No markdown. No backticks. No extra text.",
    "If you are unsure, still return JSON with best-effort fields and include `notes`.",
    "",
    "Schema:",
    schemaHint,
    "",
    "Input JSON:",
    JSON.stringify(payload, null, 2),
  ].join("\n");

  const txt = await sendMessageToGemini(prompt, {
    model: opts?.model ?? DEFAULT_MODEL,
    temperature: 0.4,
    maxOutputTokens: 1400,
  });

  // best-effort parse: ตัดส่วนเกินกรณีโมเดลเผลอใส่ข้อความ
  const firstBrace = txt.indexOf("{");
  const lastBrace = txt.lastIndexOf("}");
  const safe = firstBrace >= 0 && lastBrace >= 0 ? txt.slice(firstBrace, lastBrace + 1) : txt;

  try {
    return JSON.parse(safe) as T;
  } catch {
    // fallback: คืนเป็น object minimal
    return {
      ok: false,
      notes: "Failed to parse JSON from Gemini",
      raw: txt,
    } as unknown as T;
  }
}

/** ---------- Types required by components ---------- */

export type DebugInputs = {
  errorMessage: string;
  stack?: string;
  filePath?: string;
  codeSnippet?: string;
  environment?: "dev" | "build" | "runtime";
};

export type ProjectInputs = {
  goal: string;
  audience?: string;
  constraints?: string[];
  timelineWeeks?: number;
  techPreference?: string[];
  deploymentTarget?: "web" | "mobile" | "edge" | "raspberry_pi" | "cloud";
};

export type SyllabusInputs = {
  courseName?: string;
  weeks?: number;
  level?: "beginner" | "intermediate";
  outcomes?: string[];
  tracks?: Array<"chatbot" | "vision" | "analytics" | "iot">;
};

/** ---------- Feature functions required by components ---------- */

export async function auditCurriculum(input: {
  curriculumText: string;
  targetAudience?: string;
  durationWeeks?: number;
}): Promise<{
  ok: boolean;
  score: number;
  strengths: string[];
  gaps: string[];
  improvements: string[];
  weeklyWorkshopSuggestions: string[];
  notes?: string;
}> {
  const system =
    "You are a curriculum auditor. Evaluate completeness, clarity, sequencing, practical outcomes, and assessments. Be strict but constructive.";

  const schemaHint = `{
    "ok": true,
    "score": 0-100,
    "strengths": ["..."],
    "gaps": ["..."],
    "improvements": ["..."],
    "weeklyWorkshopSuggestions": ["..."],
    "notes": "optional"
  }`;

  return jsonFromGemini(system, input, schemaHint);
}

export async function analyzeError(input: DebugInputs): Promise<{
  ok: boolean;
  rootCause: string;
  evidence: string[];
  fixes: Array<{ title: string; steps: string[] }>;
  prevention: string[];
  notes?: string;
}> {
  const system =
    "You are a senior debugging coach for TypeScript/React/Vite. Analyze the error, infer likely root cause, and provide step-by-step fixes. Avoid guessing; provide verification steps.";

  const schemaHint = `{
    "ok": true,
    "rootCause": "string",
    "evidence": ["string"],
    "fixes": [{"title":"string","steps":["string"]}],
    "prevention": ["string"],
    "notes": "optional"
  }`;

  return jsonFromGemini(system, input, schemaHint);
}

export async function generateProjectPlan(input: ProjectInputs): Promise<{
  ok: boolean;
  overview: string;
  milestones: Array<{ week: number; deliverables: string[] }>;
  dataPlan: string[];
  modelPlan: string[];
  deploymentPlan: string[];
  risks: string[];
  notes?: string;
}> {
  const system =
    "You are an AI Project Manager. Create a practical project plan for a beginner to build a real AI project end-to-end with weekly deliverables.";

  const schemaHint = `{
    "ok": true,
    "overview": "string",
    "milestones": [{"week":1,"deliverables":["string"]}],
    "dataPlan": ["string"],
    "modelPlan": ["string"],
    "deploymentPlan": ["string"],
    "risks": ["string"],
    "notes": "optional"
  }`;

  return jsonFromGemini(system, input, schemaHint);
}

export async function generateSyllabus(input: SyllabusInputs): Promise<{
  ok: boolean;
  title: string;
  weeks: Array<{
    week: number;
    topic: string;
    outcomes: string[];
    lessonOutline: string[];
    workshop: string;
    quiz: string;
  }>;
  capstone: string;
  notes?: string;
}> {
  const system =
    "You are a syllabus designer for an AI course. Build a week-by-week syllabus with lesson outline, workshop, and quiz. Must be beginner-friendly and hands-on.";

  const schemaHint = `{
    "ok": true,
    "title": "string",
    "weeks": [{
      "week": 1,
      "topic": "string",
      "outcomes": ["string"],
      "lessonOutline": ["string"],
      "workshop": "string",
      "quiz": "string"
    }],
    "capstone": "string",
    "notes": "optional"
  }`;

  const weeks = input.weeks ?? 12;
  const payload = { ...input, weeks };
  return jsonFromGemini(system, payload, schemaHint);
}

/** ---------- Optional convenience exports (เผื่อเรียกตรง ๆ) ---------- */
export async function generateText(prompt: string, model: string = DEFAULT_MODEL) {
  return sendMessageToGemini(prompt, { model });
}
