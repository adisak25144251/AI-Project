import { WeekModule, ProjectTrack, RubricItem, DeploymentStep, LessonPlan, WorkshopGuide } from './types';

export const COURSE_TITLE = "AI Project 101";

export const WEEKLY_CONTENT: WeekModule[] = [
  {
    week: 1,
    title: "AI Landscape & Problem Framing",
    description: "Understand AI/ML/DL differences and define a solvable problem.",
    objectives: [
      "Differentiate between AI, ML, and Deep Learning",
      "Understand the AI Project Lifecycle",
      "Define a clear Problem Statement"
    ],
    concepts: ["Supervised vs Unsupervised", "Rule-based vs ML", "Bias & Ethics"],
    tools: ["Google Colab", "Python Basic", "Mermaid"],
    workshop: "Case Study Analysis & Environment Setup",
    deliverable: "Project Proposal One-pager",
    pitfalls: ["Scope creep (e.g. building Jarvis)", "Ignoring data availability"]
  },
  {
    week: 2,
    title: "Data is King: Collection & Preprocessing",
    description: "Master the art of data cleaning and preparation.",
    objectives: [
      "Use Pandas for basic data manipulation",
      "Handle missing values and duplicates",
      "Perform Data Augmentation (Image) or Text Cleaning (NLP)"
    ],
    concepts: ["Structured vs Unstructured", "Feature Engineering", "Train/Val/Test Split"],
    tools: ["Pandas", "NumPy", "Kaggle", "Roboflow"],
    workshop: "Dirty Data Challenge: Clean a messy dataset",
    deliverable: "Exploratory Data Analysis (EDA) Report",
    pitfalls: ["Data Leakage", "Forgetting Normalization"]
  },
  {
    week: 3,
    title: "Model Training: Scikit-learn to Neural Nets",
    description: "Build your first machine learning models.",
    objectives: [
      "Build classifiers with Scikit-learn",
      "Understand Neural Network basics",
      "Measure performance with Accuracy/Precision/Recall"
    ],
    concepts: ["Linear Regression", "Decision Trees", "Loss Functions", "Gradient Descent"],
    tools: ["Scikit-learn", "Matplotlib", "Seaborn"],
    workshop: "Train a classifier (Iris or Housing Prices)",
    deliverable: "Baseline Model Performance Report",
    pitfalls: ["Overfitting", "Wrong metric selection"]
  },
  {
    week: 4,
    title: "Deep Dive: CNN & NLP Implementation",
    description: "Specialized training for Vision or Text tasks.",
    objectives: [
      "Build CNNs for Image Classification",
      "Understand Transformers (Hugging Face)",
      "Apply Transfer Learning"
    ],
    concepts: ["Convolution", "Pooling", "Tokenization", "Embeddings"],
    tools: ["TensorFlow/Keras", "Hugging Face"],
    workshop: "Transfer Learning Lab",
    deliverable: "Functional Prototype Model",
    pitfalls: ["Insufficient data for DL", "Not using GPU"]
  },
  {
    week: 5,
    title: "Evaluation & Improvement",
    description: "Analyze errors and tune hyperparameters.",
    objectives: [
      "Interpret Confusion Matrices",
      "Perform Error Analysis",
      "Basic Hyperparameter Tuning"
    ],
    concepts: ["F1-Score", "ROC/AUC", "Cross-validation"],
    tools: ["Scikit-learn Metrics", "TensorBoard"],
    workshop: "Error Analysis Session",
    deliverable: "Model Improvement Plan",
    pitfalls: ["Relying solely on Accuracy", "Premature optimization"]
  },
  {
    week: 6,
    title: "Deployment: From Notebook to Web App",
    description: "Export models and build interactive interfaces.",
    objectives: [
      "Save/Load Models (Pickle, H5)",
      "Build interfaces with Streamlit",
      "Understand basic API concepts"
    ],
    concepts: ["Serialization", "Client-Server", "Web Frameworks"],
    tools: ["Streamlit", "Gradio", "Pickle"],
    workshop: "Build an Interactive AI App",
    deliverable: "Local Web App",
    pitfalls: ["Missing dependencies (requirements.txt)", "Hardcoded paths"]
  },
  {
    week: 7,
    title: "Cloud Deployment",
    description: "Push your application to the production cloud.",
    objectives: [
      "Git basics",
      "Deploy to Cloud (Streamlit Cloud/Hugging Face)",
      "Manage Environment Variables"
    ],
    concepts: ["CI/CD Basics", "Cloud Hosting", "Containerization"],
    tools: ["GitHub", "Streamlit Cloud", "Hugging Face Spaces"],
    workshop: "Deploy Day",
    deliverable: "Live Project URL",
    pitfalls: ["Large file upload limits", "Exposing API Keys"]
  },
  {
    week: 8,
    title: "Final Showcase & Portfolio",
    description: "Present your work professionally.",
    objectives: [
      "Write professional READMEs",
      "Storytelling for technical projects",
      "Create Demo Videos"
    ],
    concepts: ["Technical Writing", "Personal Branding"],
    tools: ["Canva", "Loom", "Markdown"],
    workshop: "Demo Day",
    deliverable: "Final Portfolio (GitHub + Live App + Slide)",
    pitfalls: ["Over-technical presentation", "Empty README"]
  }
];

export const PROJECT_TRACKS: ProjectTrack[] = [
  {
    id: "track-1",
    title: "Chatbot / NLP Assistant",
    icon: "💬",
    description: "Build intelligent assistants: Legal QA, News Summarizers, or Shopping Guides.",
    difficulty: "Intermediate",
    techStack: ["Python", "Hugging Face", "OpenAI/Gemini API", "Streamlit", "LangChain"],
    useCase: "Customer Support, Personal Assistant"
  },
  {
    id: "track-2",
    title: "Image Recognition / CV",
    icon: "👁️",
    description: "Detect objects and patterns: Quality Control, Face Mask Detection, Plant Disease.",
    difficulty: "Intermediate",
    techStack: ["Python", "TensorFlow/Keras", "OpenCV", "Roboflow", "Streamlit"],
    useCase: "Manufacturing, Security, AgTech"
  },
  {
    id: "track-3",
    title: "Predictive Analytics",
    icon: "📊",
    description: "Turn data into foresight: Sales Forecasting, Churn Prediction, Stock Prices.",
    difficulty: "Beginner",
    techStack: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Streamlit"],
    useCase: "Business Intelligence, Finance"
  },
  {
    id: "track-4",
    title: "IoT & Edge AI",
    icon: "🤖",
    description: "AI on devices: People Counting, Voice Control (Simulated or Real).",
    difficulty: "Advanced",
    techStack: ["Python", "TensorFlow Lite", "Raspberry Pi", "MQTT", "Flask"],
    useCase: "Smart Home, Smart City, IoT"
  }
];

export const ASSESSMENT_RUBRICS: RubricItem[] = [
  {
    category: "Weekly Assignments (40%)",
    weight: "40%",
    criteria: [
      "On-time submission (Week 1-7)",
      "Completeness of tasks",
      "Code runs without errors"
    ]
  },
  {
    category: "Final Project: Technical (30%)",
    weight: "30%",
    criteria: [
      "Model complexity and correctness",
      "Code quality (Clean Code)",
      "Data handling and preprocessing"
    ]
  },
  {
    category: "Final Project: Usability (20%)",
    weight: "20%",
    criteria: [
      "User Interface (UI) usability",
      "No critical bugs during usage",
      "Problem-solving impact"
    ]
  },
  {
    category: "Presentation & Portfolio (10%)",
    weight: "10%",
    criteria: [
      "Professional README",
      "Engaging presentation",
      "Clear Demo Video"
    ]
  }
];

export const DEPLOYMENT_GUIDE: DeploymentStep[] = [
  {
    title: "Step 1: Code Preparation",
    description: "Ensure `app.py` and `requirements.txt` are ready.",
    codeSnippet: "# requirements.txt\nstreamlit\npandas\nscikit-learn\ntensorflow-cpu"
  },
  {
    title: "Step 2: Push to GitHub",
    description: "Create a repository and push your code. Don't forget `.gitignore`.",
    codeSnippet: "git init\ngit add .\ngit commit -m 'Initial commit'\ngit push origin main"
  },
  {
    title: "Step 3: Connect to Streamlit Cloud",
    description: "Log in to share.streamlit.io, select your repo, and deploy.",
    codeSnippet: ""
  },
  {
    title: "Step 4: Monitoring",
    description: "Check logs in the Streamlit dashboard. Fix errors and push to redeploy automatically."
  }
];

export const PRICING_PLANS = [
  {
    name: "Standard",
    priceTH: "฿3,900",
    priceEN: "$119",
    descriptionTH: "สำหรับผู้ที่ต้องการเรียนรู้ด้วยตนเอง",
    descriptionEN: "For self-paced learners.",
    featuresTH: ["เข้าเรียนเนื้อหาได้ตลอดชีพ", "ทำ Workshop ครบ 12 สัปดาห์", "แบบทดสอบ & เฉลย", "ใบรับรอง (Certificate)"],
    featuresEN: ["Lifetime Access", "All 12 Workshops", "Quizzes & Solutions", "Completion Certificate"],
    ctaTH: "สมัครเรียน",
    ctaEN: "Enroll Standard",
    highlight: false
  },
  {
    name: "Pro Mentorship",
    priceTH: "฿8,900",
    priceEN: "$249",
    descriptionTH: "เน้นผลลัพธ์พร้อมพี่เลี้ยงส่วนตัว",
    descriptionEN: "Accelerate with expert guidance.",
    featuresTH: ["ทุกอย่างใน Standard", "ตรวจโค้ดรายสัปดาห์", "Live Q&A ทุก 2 สัปดาห์", "ปรึกษา Capstone ส่วนตัว 1-on-1"],
    featuresEN: ["Everything in Standard", "Weekly Code Review", "Bi-weekly Live Q&A", "1-on-1 Capstone Consult"],
    ctaTH: "สมัคร Pro",
    ctaEN: "Enroll Pro",
    highlight: true
  }
];

export const WEEK_1_LESSON_PLAN: LessonPlan = {
  week: 1,
  topic: "AI Landscape & Problem Framing",
  timeline: [
    { time: "0:00 - 0:30", activity: "Intro & Ice Breaking", detail: "Course intro, mindset adjustment 'Everyone can build AI'." },
    { time: "0:30 - 1:30", activity: "Theory: AI vs ML vs DL", detail: "Matryoshka Doll analogy and real-world use cases." },
    { time: "1:30 - 2:00", activity: "Live Demo: Rule-based vs ML", detail: "Compare If-Else logic vs Scikit-learn model." },
    { time: "2:00 - 3:30", activity: "Workshop: Google Colab Setup", detail: "Setup Colab, Python Basics, Case Study analysis." },
    { time: "3:30 - 4:00", activity: "Assignment & Q&A", detail: "Project Proposal assignment explanation." }
  ],
  contentSummary: [
    {
      title: "AI vs ML vs DL",
      points: [
        "AI (Artificial Intelligence): Machines mimicking human intelligence.",
        "ML (Machine Learning): Learning from data without explicit programming.",
        "DL (Deep Learning): Neural networks imitating the human brain."
      ]
    },
    {
      title: "Types of Learning",
      points: [
        "Supervised Learning: Labeled data (Input -> Output).",
        "Unsupervised Learning: Finding patterns in unlabeled data.",
        "Reinforcement Learning: Learning through rewards/penalties."
      ]
    }
  ],
  demoScript: [
    {
      step: "1. Rule-based Approach",
      description: "Classify apple based on color/hardness rules.",
      code: `def classify_apple(color, hardness):\n  if color == "red" and hardness > 5:\n    return "Sweet"\n  else:\n    return "Sour"`
    },
    {
      step: "2. Machine Learning Approach",
      description: "Decision Tree learns rules from data.",
      code: `from sklearn import tree\nfeatures = [[140, 1], [130, 1], [150, 0], [170, 0]]\nlabels = [0, 0, 1, 1]\nclf = tree.DecisionTreeClassifier()\nclf = clf.fit(features, labels)`
    }
  ],
  workshopSteps: [
    { title: "Part 1: Hello Colab", steps: ["Go to colab.research.google.com", "New Notebook", "Print 'Hello AI'", "Rename file"] },
    { title: "Part 2: Python for AI", steps: ["Import pandas", "Create Lists/Dicts", "Markdown cells"] }
  ],
  exercises: [
    { level: "Easy", title: "Define AI", description: "Write your own definition of AI/ML/DL." },
    { level: "Medium", title: "Find a Dataset", description: "Find a dataset on Kaggle and describe its potential uses." },
    { level: "Challenge", title: "Problem Statement", description: "Define a daily problem and how AI could solve it (Input/Output)." }
  ],
  debugCorner: [
    { problem: "NameError: name 'pd' is not defined", solution: "Run the import cell first." },
    { problem: "IndentationError", solution: "Check your tabs/spaces." }
  ],
  quiz: [
    { id: 1, question: "Which relationship is correct?", options: ["AI ⊂ ML ⊂ DL", "DL ⊂ ML ⊂ AI", "ML ⊂ AI ⊂ DL"], correctAnswer: 1, explanation: "Deep Learning is a subset of ML, which is a subset of AI." }
  ]
};

export const WORKSHOP_GUIDES: Record<string, WorkshopGuide> = {
  "track-2": {
    trackId: "track-2",
    title: "Project: Plant Disease Classification",
    projectBrief: {
      title: "Project Brief",
      content: ["Goal: Build a Web App to classify healthy vs diseased leaves.", "Scope: 2 Classes (Healthy vs Powdery Mildew)."]
    },
    dataPlan: {
      title: "Data Strategy",
      content: ["Source: PlantVillage Dataset", "Quantity: 50-100 images per class", "Resize to 224x224"]
    },
    modelPlan: {
      title: "Model Architecture",
      content: ["Baseline: MobileNetV2 (Transfer Learning)", "Why? Small, Fast, Good for Free Tier"]
    },
    notebookOutline: [
      { title: "Setup", content: ["Import TensorFlow, Keras"], code: "import tensorflow as tf" },
      { title: "Load Data", content: ["Use ImageDataGenerator"], code: "train_datagen = ImageDataGenerator(...)" }
    ],
    minimalCode: [
      { fileName: "app.py", language: "python", code: "import streamlit as st\n..." }
    ],
    deployment: [{ title: "Streamlit Cloud", content: ["Push to GitHub", "Deploy on Share"] }],
    testing: { title: "Testing", content: ["Test with clear leaf image", "Test with non-leaf image"] },
    security: { title: "Security", content: ["Do not store user images permanently"] },
    portfolio: { title: "Portfolio", content: ["README with GIF", "Link to Live App"] },
    rubric: [{ criteria: "Code runs", score: 20 }, { criteria: "Accuracy > 80%", score: 30 }]
  }
};