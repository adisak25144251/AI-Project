import { GoogleGenAI, ChatSession } from "@google/genai";
import { WEEKLY_CONTENT, PROJECT_TRACKS } from '../constants';

let chatSession: ChatSession | null = null;
let genAI: GoogleGenAI | null = null;

const SYSTEM_INSTRUCTION = `
You are the "AI Tutor" for the course "AI Project 101: From Zero to Real-World Deployment".
Your goal is to help students understand AI concepts, fix code issues, and guide them through their projects.

Course Context:
- Level: Beginner to Intermediate.
- Stack: Python, Streamlit, Scikit-learn, TensorFlow, Gemini API.
- Language: Thai (You must answer in Thai).

Curriculum Summary:
${JSON.stringify(WEEKLY_CONTENT.map(w => `Week ${w.week}: ${w.title} - ${w.description}`))}

Project Tracks:
${JSON.stringify(PROJECT_TRACKS.map(t => t.title))}

Guidelines:
1. Be encouraging and helpful.
2. Explain complex concepts simply using analogies.
3. When providing code, use Python and keep it compatible with Google Colab or Streamlit.
4. If a student asks about a specific week, refer to the curriculum objectives.
5. Always answer in Thai language.
`;

export const initializeGemini = () => {
  if (!process.env.API_KEY) {
    console.error("API_KEY is missing from environment variables.");
    return;
  }
  
  try {
    genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
  } catch (error) {
    console.error("Failed to initialize Gemini:", error);
  }
};

export const getChatSession = async (): Promise<ChatSession> => {
  if (!genAI) {
    initializeGemini();
  }

  if (!genAI) {
    throw new Error("Gemini AI not initialized. Check API Key.");
  }

  if (!chatSession) {
    chatSession = await genAI.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const session = await getChatSession();
    const result = await session.sendMessage({ message });
    return result.text || "ขออภัย ไม่สามารถประมวลผลคำตอบได้ในขณะนี้";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "เกิดข้อผิดพลาดในการเชื่อมต่อกับ AI Tutor (API Error)";
  }
};

export interface ProjectInputs {
  problem: string;
  users: string;
  data: string;
  constraints: string;
}

export const generateProjectPlan = async (inputs: ProjectInputs): Promise<string> => {
  if (!genAI) {
    initializeGemini();
  }
  
  if (!genAI) {
    throw new Error("Gemini AI not initialized. Check API Key.");
  }

  const prompt = `
Act as an "AI Project Product Manager" for a beginner-friendly AI project.
Based on the following inputs, create a professional 1-page project plan in **Thai**.

Inputs:
- Problem Statement: ${inputs.problem}
- Target Users: ${inputs.users}
- Data Availability: ${inputs.data}
- Constraints: ${inputs.constraints}

Output Requirements:
Please structure the response exactly as follows using Markdown:

## 📋 Project Plan: [Create a Catchy Project Name]

### 1. Problem Statement & Success Metrics
- **Problem:** [Refine the problem clearly]
- **Success Metric:** [Define 1 quantitative metric e.g., Accuracy > 80%, Save 2 hours/day]

### 2. Scope
- **✅ In Scope:** [What to build MVP]
- **❌ Out of Scope:** [What NOT to do to save time]

### 3. Data Strategy
- **Requirements:** [What data is needed]
- **Risks:** [Privacy, Bias, Scarcity]
- **Mitigation:** [How to fix risks]

### 4. Modeling Approach
- **Baseline (V1):** [Simplest model e.g., Rule-based, Linear Regression, or Pre-trained]
- **Advanced (V2):** [Better model e.g., Fine-tuning, Deep Learning]

### 5. Evaluation Plan
- [How to test it? Test set split? User testing?]

### 6. Deployment Plan
- [Web App (Streamlit) -> Cloud]

### 7. 4-Week Timeline (Sprint)
- **Week 1:** Data & EDA
- **Week 2:** Model Training
- **Week 3:** Web App Development
- **Week 4:** Deploy & Documentation

### 8. Risk Register (Top 5)
1. [Risk 1] -> [Mitigation]
2. [Risk 2] -> [Mitigation]
...
  `;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt
    });
    return response.text || "ไม่สามารถสร้างแผนงานได้ กรุณาลองใหม่อีกครั้ง";
  } catch (error) {
    console.error("Project Plan Generation Error:", error);
    return "เกิดข้อผิดพลาดในการเชื่อมต่อ (API Error)";
  }
};

export interface DebugInputs {
  error: string;
  expected: string;
  actual: string;
  env: string;
}

export const analyzeError = async (inputs: DebugInputs): Promise<string> => {
  if (!genAI) {
    initializeGemini();
  }
  
  if (!genAI) {
    throw new Error("Gemini AI not initialized. Check API Key.");
  }

  const prompt = `
Act as a "Beginner-Friendly ML Debug Coach".
Analyze the following problem and provide a structured solution in **Thai**.

Inputs:
- Code/Error Log: ${inputs.error}
- Expected Outcome: ${inputs.expected}
- Actual Outcome: ${inputs.actual}
- Environment: ${inputs.env}

Output Requirements:
1. **Explain the Cause:** Explain simply using analogies (No jargon without explanation).
2. **Solution Steps:** Clear, step-by-step instructions with code blocks to fix it.
3. **Prevention:** How to avoid this in the future.
4. **Options:** If there are multiple ways to fix, list them from Easiest/Safest to Advanced.

Format: Use Markdown.
`;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt
    });
    return response.text || "ไม่สามารถวิเคราะห์ Error ได้ กรุณาลองใหม่อีกครั้ง";
  } catch (error) {
    console.error("Debug Coach Error:", error);
    return "เกิดข้อผิดพลาดในการเชื่อมต่อ (API Error)";
  }
};

export const auditCurriculum = async (content: string): Promise<string> => {
  if (!genAI) {
    initializeGemini();
  }
  
  if (!genAI) {
    throw new Error("Gemini AI not initialized. Check API Key.");
  }

  const prompt = `
Act as an "AI Curriculum Quality Auditor".
Audit the following curriculum/lesson content to see if it is ready to be taught.

Content to Audit:
${content.substring(0, 10000)} // Limit context size if needed

Task:
Provide a strict audit report (Score 0-100) in **Thai** with the following structure:

## 🧐 Curriculum Audit Report
**Score: [0-100] / 100**

### 1. ⭐ Strengths (5 Points)
- [Strength 1]
...

### 2. ⚠️ Weaknesses & Gaps (10 Points)
- [Gap 1]: [Explanation of why this breaks the learning experience]
...

### 3. 🛠️ Actionable Improvements
**Quick Fix (Do Now):**
- [Fix 1]
**Medium Term:**
- [Fix 2]
**Major Overhaul:**
- [Fix 3]

### 4. 🔗 Consistency Check
- **Objectives vs Workshop:** [Aligned?]
- **Deliverable vs Rubric:** [Aligned?]

### 5. 👶 Beginner Friendliness
- **Jargon:** [Too much?]
- **Pacing:** [Appropriate?]
- **Load:** [Overwhelming?]

### 6. 🚀 Deployment Readiness
- [Are steps/files/commands complete?]

### 7. ✅ Fixed Version Summary
- [List of updated topics/sections]
`;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt
    });
    return response.text || "ไม่สามารถตรวจสอบหลักสูตรได้ กรุณาลองใหม่อีกครั้ง";
  } catch (error) {
    console.error("Auditor Error:", error);
    return "เกิดข้อผิดพลาดในการเชื่อมต่อ (API Error)";
  }
};

export interface SyllabusInputs {
  name: string;
  level: string;
  duration: string;
  focus: string;
}

export const generateSyllabus = async (inputs: SyllabusInputs): Promise<string> => {
  if (!genAI) {
    initializeGemini();
  }
  
  if (!genAI) {
    throw new Error("Gemini AI not initialized. Check API Key.");
  }

  const prompt = `
Act as a "Chief AI Curriculum Architect".
Design a complete course syllabus based on these parameters in **Thai**.

Inputs:
- Course Name: ${inputs.name}
- Target Audience Level: ${inputs.level}
- Duration: ${inputs.duration}
- Focus Area / Stack: ${inputs.focus}

Mandatory Requirements:
1. Must cover: AI/ML/DL concepts, Project Workflow (Framing, Data, Modeling, Eval, Deploy), Ethics.
2. Must have a Workshop every week with a concrete Deliverable.
3. Must include Deployment Plan & Rubrics.
4. Output must be structured clearly using Markdown.

Output Format:

# 📘 [Course Name]
**Target:** ${inputs.level} | **Duration:** ${inputs.duration}

## A) Course Overview
[Brief description of goals and outcomes]

## B) Skill Map
- **Core Concepts:** ...
- **Tools:** ...

## C) Weekly Structure
| Week | Topic | Objectives | Workshop | Deliverable | Tools | Pitfalls |
|---|---|---|---|---|---|---|
| 1 | ... | ... | ... | ... | ... | ... |
... (Continue for all weeks)

## D) Project Tracks (4 Options)
1. **Chatbot:** [Description]
2. **Image Recognition:** [Description]
3. **Data Analytics:** [Description]
4. **IoT/Edge:** [Description]

## E) Assessment Plan
- **Weekly Work:** ...%
- **Midterm:** ...%
- **Final Project:** ...%
- **Rubric Criteria:** [List criteria]

## F) Deployment Plan
[Steps to deploy the project]

## G) Portfolio Guide
[Checklist for README and Demo]
`;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt
    });
    return response.text || "ไม่สามารถสร้างหลักสูตรได้ กรุณาลองใหม่อีกครั้ง";
  } catch (error) {
    console.error("Syllabus Generator Error:", error);
    return "เกิดข้อผิดพลาดในการเชื่อมต่อ (API Error)";
  }
};
