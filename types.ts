export type Language = 'TH' | 'EN';

export interface LearningObjective {
  id: string;
  text: string;
}

export interface WeekModule {
  week: number;
  title: string;
  description: string;
  objectives: string[];
  concepts: string[];
  tools: string[];
  workshop: string;
  deliverable: string;
  pitfalls: string[];
}

export interface ProjectTrack {
  id: string;
  title: string;
  icon: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  techStack: string[];
  useCase: string;
}

export interface RubricItem {
  category: string;
  weight: string;
  criteria: string[];
}

export interface DeploymentStep {
  title: string;
  description: string;
  codeSnippet?: string;
}

export enum Section {
  OVERVIEW = 'Overview',
  SYLLABUS = 'Curriculum',
  TRACKS = 'Tracks',
  PRICING = 'Pricing',
  PLANNER = 'Project Planner',
  DESIGNER = 'Syllabus Designer',
  DEBUG = 'Debug Lab',
  AUDITOR = 'Curriculum Auditor',
  PORTFOLIO = 'Portfolio',
  LOGIN = 'Login',
  GUIDE = 'Student Guide',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

// Detailed Lesson Plan Types
export interface TimelineItem {
  time: string;
  activity: string;
  detail: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index 0-3
  explanation: string;
}

export interface Exercise {
  level: 'Easy' | 'Medium' | 'Challenge';
  title: string;
  description: string;
  
}

export interface LessonPlan {
  week: number;
  topic: string;
  timeline: TimelineItem[];
  contentSummary: {
    title: string;
    points: string[];
  }[];
  demoScript: {
    step: string;
    description: string;
    code?: string;
  }[];
  workshopSteps: {
    title: string;
    steps: string[];
  }[];
  exercises: Exercise[];
  debugCorner: {
    problem: string;
    solution: string;
  }[];
  quiz: QuizQuestion[];
}

// Workshop Guide Types
export interface WorkshopSection {
  title: string;
  content: string[];
  code?: string;
}

export interface WorkshopGuide {
  trackId: string;
  title: string;
  projectBrief: WorkshopSection;
  dataPlan: WorkshopSection;
  modelPlan: WorkshopSection;
  notebookOutline: WorkshopSection[];
  minimalCode: {
    fileName: string;
    language: string;
    code: string;
  }[];
  deployment: WorkshopSection[];
  testing: WorkshopSection;
  security: WorkshopSection;
  portfolio: WorkshopSection;
  rubric: {
    criteria: string;
    score: number;
  }[];
}