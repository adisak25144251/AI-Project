import { WeekModule, ProjectTrack, RubricItem, DeploymentStep, LessonPlan, WorkshopGuide } from './types';

export const COURSE_TITLE = "AI Project 101";

export const WEEKLY_CONTENT: WeekModule[] = [
  {
    week: 1,
    title: "AI Kickoff: Lifecycle & Setup",
    description: "Understand the full AI lifecycle, setup your professional environment, and frame a solvable problem.",
    objectives: [
      "Differentiate AI/ML/DL & Understand Lifecycle",
      "Setup Professional Env (Repo, Venv, Colab)",
      "Create Project Charter with Success Metrics"
    ],
    concepts: ["AI Lifecycle", "Problem Framing", "Success Metrics", "PDPA/Privacy"],
    tools: ["Git/GitHub", "VS Code / Colab", "Python venv", "Jupyter"],
    workshop: "Repo Skeleton & Project Charter v0",
    deliverable: "Repo + Env Check Notebook + Project Charter",
    pitfalls: ["Skipping problem definition", "Using real PII data", "Not testing environment"]
  },
  {
    week: 2,
    title: "Baseline Model & Metrics",
    description: "Build your first reproducible baseline model, master Train/Test split, and understand key metrics (Accuracy vs F1).",
    objectives: [
      "Create a reproducible Baseline Model v1",
      "Master Train/Test Split (Stratify & Random State)",
      "Compare Metrics (Accuracy vs F1-macro) & Save Artifacts"
    ],
    concepts: ["Baseline Model", "Train/Test Split", "Data Leakage", "Accuracy vs F1", "Reproducibility"],
    tools: ["Scikit-learn", "Pandas", "Joblib", "JSON"],
    workshop: "Baseline v1 & Model Artifacts",
    deliverable: "Notebook (Baseline), Metrics JSON, Model Artifacts (joblib/meta), Updated README",
    pitfalls: ["Data Leakage", "Ignoring Class Imbalance", "Not setting random_state"]
  },
  {
    week: 3,
    title: "Data Pipeline & Feature Engineering",
    description: "Construct a reproducible data cleaning pipeline and engineer features to improve model performance.",
    objectives: [
      "Build a reproducible Data Pipeline (Cleaning + Scaling)",
      "Apply Feature Engineering (Scaling, Encoding)",
      "Train Model v2 with Pipeline"
    ],
    concepts: ["Data Pipeline", "Missing Values", "Outliers", "Scaling (StandardScaler)", "sklearn.pipeline"],
    tools: ["Scikit-learn Pipeline", "Pandas"],
    workshop: "Data Pipeline & Model v2",
    deliverable: "Processed Dataset, Notebook (Pipeline), Model v2 Artifacts, Comparison Report",
    pitfalls: ["Scaling before split (Leakage)", "Ignoring outliers"]
  },
  {
    week: 4,
    title: "Validation & Hyperparameter Tuning",
    description: "Master robust evaluation using Cross-Validation and optimize your model with GridSearchCV.",
    objectives: [
      "Implement Cross-Validation for robust evaluation",
      "Perform Hyperparameter Tuning (GridSearchCV)",
      "Select Model v3 based on CV Mean/Std"
    ],
    concepts: ["Cross-Validation", "Holdout Set", "Hyperparameter Tuning", "GridSearchCV", "Overfitting/Underfitting"],
    tools: ["Scikit-learn (GridSearchCV, cross_val_score)"],
    workshop: "Tuning & Model v3",
    deliverable: "Notebook (Tuning), CV Results CSV, Model v3 Artifacts, Comparison Report",
    pitfalls: ["Tuning on Test Set", "Ignoring CV Standard Deviation"]
  },
  {
    week: 5,
    title: "Error Analysis & Model Improvement",
    description: "Stop guessing. Analyze model errors systematically to drive data-centric improvements.",
    objectives: [
      "Perform systematic Error Analysis (Confusion Matrix, Error Table)",
      "Identify patterns in misclassifications",
      "Train Model v4 based on analysis insights"
    ],
    concepts: ["Error Analysis", "Confusion Matrix", "Precision/Recall Tradeoff", "Data-Centric AI", "Polynomial Features"],
    tools: ["Confusion Matrix Display", "Pandas (Filtering)"],
    workshop: "Error Analysis & Model v4",
    deliverable: "Error Analysis Report, Error Table CSV, Model v4 Artifacts, Comparison Report",
    pitfalls: ["Assuming accuracy is enough", "Not looking at actual error rows"]
  },
  {
    week: 6,
    title: "Production Readiness: Split & Threshold",
    description: "Prepare for the real world with proper Train/Val/Test splits, leakage checks, and threshold tuning.",
    objectives: [
      "Implement proper Train/Val/Test splits",
      "Select Decision Thresholds from Validation set",
      "Calibrate Probabilities (Basics)"
    ],
    concepts: ["Train/Val/Test", "Decision Threshold", "Calibration", "Data Leakage Checklist"],
    tools: ["Scikit-learn (CalibratedClassifierCV)", "Matplotlib"],
    workshop: "Split, Threshold & Model v5",
    deliverable: "Split Summary, Leakage Checklist, Threshold Policy, Model v5 Artifacts",
    pitfalls: ["Tuning threshold on Test set", "Leakage features"]
  },
  {
    week: 7,
    title: "API Deployment (FastAPI)",
    description: "Expose your model as a professional REST API with validation, logging, and testing.",
    objectives: [
      "Build a FastAPI service (/health, /predict)",
      "Implement Input Validation (Pydantic)",
      "Add Safe Logging & Error Handling"
    ],
    concepts: ["REST API", "Input Validation", "Serialization", "Logging vs Privacy"],
    tools: ["FastAPI", "Uvicorn", "Pydantic", "Pytest"],
    workshop: "FastAPI Implementation & Testing",
    deliverable: "API Code (main.py, schemas.py), Test Suite (test_api.py), API Documentation",
    pitfalls: ["Logging raw PII", "Missing input validation", "Hardcoding paths"]
  },
  {
    week: 8,
    title: "Web UI & Demo Day Prep",
    description: "Create an interactive web interface using Streamlit and prepare your final portfolio demo.",
    objectives: [
      "Build a Streamlit UI connecting to your API",
      "Handle UX States (Loading, Error, Success)",
      "Create a Demo Pack for Portfolio"
    ],
    concepts: ["Frontend-Backend Integration", "User Experience (UX)", "State Management"],
    tools: ["Streamlit", "Requests"],
    workshop: "Streamlit UI & Demo Pack",
    deliverable: "UI Code (app.py), Demo Checklist, Usage Guide, Updated README",
    pitfalls: ["Direct model loading in UI (Bypassing API)", "Poor error messaging"]
  },
  {
    week: 9,
    title: "Docker Containerization",
    description: "Package your API and UI into portable Docker containers and orchestrate them with Docker Compose.",
    objectives: [
      "Create Dockerfiles for FastAPI and Streamlit",
      "Orchestrate multi-container apps with Docker Compose",
      "Implement Healthchecks and Runbooks"
    ],
    concepts: ["Containerization", "Docker Compose", "Healthchecks", "Environment Variables"],
    tools: ["Docker", "Docker Desktop"],
    workshop: "Containerize API & UI",
    deliverable: "Dockerfile.api, Dockerfile.ui, docker-compose.yml, Runbook",
    pitfalls: ["Port conflicts", "Incorrect API URL in UI", "Large image sizes", "Docker daemon not running"]
  },
  {
    week: 10,
    title: "Cloud Deployment & CI/CD",
    description: "Deploy your app to the cloud securely and automate your testing workflow.",
    objectives: [
      "Deploy to Streamlit Cloud (Public/Private)",
      "Manage Secrets/API Keys securely",
      "Set up Basic CI/CD (GitHub Actions)"
    ],
    concepts: ["Cloud PaaS", "Secrets Management", "CI/CD", "Continuous Integration"],
    tools: ["Streamlit Cloud", "GitHub Actions", "YAML"],
    workshop: "Cloud Deploy & CI Setup",
    deliverable: "Live App URL, Secrets Config, .github/workflows/main.yml",
    pitfalls: ["Committing .env/secrets to GitHub", "Ignoring build failures", "Hardcoding production URLs"]
  },
  {
    week: 11,
    title: "Monitoring & Basic MLOps",
    description: "Implement real-world monitoring, structured logging, and incident response procedures.",
    objectives: [
      "Design privacy-safe structured logging (JSONL)",
      "Calculate key metrics (Error Rate, Latency)",
      "Create a monitoring dashboard and incident runbook"
    ],
    concepts: ["Structured Logging", "Golden Metrics", "Model Versioning", "Drift Signals"],
    tools: ["Python Logging", "JSONL", "Pandas", "Streamlit"],
    workshop: "Logs, Metrics & Dashboard",
    deliverable: "api/logger.py, src/metrics.py, monitor/app.py, Runbook, Privacy Policy",
    pitfalls: ["Logging PII/Raw features", "Unstructured logs", "No timezone handling", "Alert fatigue"]
  },
  {
    week: 12,
    title: "Capstone Wrap-up (Enterprise)",
    description: "Finalize your project with enterprise-grade documentation, portfolio assets, and a v1.0.0 release.",
    objectives: [
      "Create a professional README and portfolio assets (Demo URL/Video)",
      "Complete enterprise docs: Charter, Datasheet, Model Card, Test Plan, Runbook",
      "Perform Final QA (Security/PDPA) and create a Release Tag (v1.0.0)"
    ],
    concepts: ["Portfolio Storytelling", "Model Governance", "Release Management", "Security/PDPA Checklist"],
    tools: ["Git Tags", "Markdown", "Video Recording", "Presentation"],
    workshop: "Finalize Docs & Release",
    deliverable: "README, Enterprise Docs, v1.0.0 Tag, Demo Assets",
    pitfalls: ["Vague README", "Broken demo links", "Docs mismatch code", "Logging PII"]
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
  topic: "Kickoff + Setup + Problem Framing",
  timeline: [
    { time: "0:00 - 0:10", activity: "Course Kickoff", detail: "เป้าหมาย 12 สัปดาห์: สร้าง Portfolio จริง (Repo + Demo + Docs)" },
    { time: "0:10 - 0:35", activity: "Theory: AI/ML/DL", detail: "ความต่างของ AI, ML, DL และ Use Case จริง (Chatbot, Vision, IoT)" },
    { time: "0:35 - 0:55", activity: "AI Project Lifecycle", detail: "Problem -> Data -> Model -> Eval -> Deploy -> Monitor -> Iterate" },
    { time: "1:05 - 1:35", activity: "Problem Framing", detail: "กำหนดปัญหา (Problem), ผู้ใช้ (User), และความสำเร็จ (Value)" },
    { time: "1:35 - 2:05", activity: "Metrics & Success", detail: "กำหนดตัวชี้วัด (F1, Accuracy, Latency) ที่จับต้องได้" },
    { time: "2:05 - 2:20", activity: "Ethics & PDPA", detail: "ข้อมูลที่ห้ามเก็บ (PII), การใช้ Open Dataset, และการ Log แบบปลอดภัย" },
    { time: "2:30 - 3:20", activity: "Live Demo", detail: "สร้าง Repo Skeleton, Setup Venv, และรัน Baseline EDA แรก" },
    { time: "3:20 - 4:50", activity: "Workshop: Hands-on", detail: "สร้าง Env Check Notebook, EDA Mini-report, และ Project Charter v0" },
    { time: "5:00 - 5:30", activity: "Peer Review", detail: "จับคู่ตรวจ Project Charter: Metric วัดได้จริงไหม? Scope ใหญ่ไปไหม?" },
    { time: "5:50 - 6:00", activity: "Wrap-up & Quiz", detail: "สรุป Deliverables ที่ต้องส่ง และทำ Quiz ท้ายบท" }
  ],
  contentSummary: [
    {
      title: "AI vs ML vs DL",
      points: [
        "AI: คำกว้าง = ทำให้เครื่อง 'ดูเหมือนฉลาด'",
        "ML: ให้เครื่อง 'เรียนรู้จากข้อมูล' (เช่น ทำนาย/จัดประเภท)",
        "DL: ML สาย 'โครงข่ายประสาทลึก' เก่งภาพ/เสียง/ข้อความ"
      ]
    },
    {
      title: "Project Lifecycle (วงจรการทำงาน)",
      points: [
        "1. Problem Framing: แก้ปัญหาอะไร ให้ใคร วัดผลยังไง",
        "2. Data: แหล่งข้อมูล PII ลิขสิทธิ์",
        "3. Model: เริ่มจาก Baseline ง่ายๆ ก่อน",
        "4. Evaluate: แยก Train/Test วัดผลให้ตรงจุด",
        "5. Deploy & Monitor: นำไปใช้จริงและติดตามผล"
      ]
    }
  ],
  demoScript: [
    {
      step: "1. Repo Setup (Local)",
      description: "สร้างโครงสร้างโปรเจกต์มาตรฐาน",
      code: "mkdir ai-project-101\ncd ai-project-101\nmkdir data notebooks src docs reports\nni README.md\nni requirements.txt"
    },
    {
      step: "2. Env Setup",
      description: "สร้าง Venv และติดตั้ง Libraries",
      code: "python -m venv .venv\n.\\.venv\\Scripts\\Activate.ps1\npip install numpy pandas matplotlib scikit-learn jupyter"
    },
    {
      step: "3. First EDA",
      description: "โหลดข้อมูล Wine และพลอตกราฟเบื้องต้น",
      code: "from sklearn.datasets import load_wine\nimport matplotlib.pyplot as plt\ndf = load_wine(as_frame=True).frame\nprint(df.head())\ndf['target'].value_counts().plot(kind='bar')\nplt.show()"
    }
  ],
  workshopSteps: [
    { 
        title: "Workshop A: Env Check", 
        steps: [
            "สร้าง 'notebooks/01_env_check.ipynb'", 
            "Import sys, numpy, pandas, sklearn ตรวจเวอร์ชัน", 
            "ต้องไม่มี Error จึงจะผ่าน"
        ] 
    },
    { 
        title: "Workshop B: Mini EDA", 
        steps: [
            "โหลด Dataset ตัวอย่าง (Wine หรือ Iris)", 
            "ใช้ .describe(), .shape, .value_counts()", 
            "เขียนสรุป 5 ข้อสังเกตลงใน 'reports/week1_eda_notes.md'"
        ] 
    },
    { 
        title: "Workshop C: Project Charter v0", 
        steps: [
            "สร้าง 'docs/project_charter_v0.md'", 
            "ระบุ Problem, Target Users, Success Metrics (เช่น F1 > 0.8)", 
            "ระบุ Scope (In/Out) และ Data Plan (แหล่งข้อมูล, PII)"
        ] 
    }
  ],
  exercises: [
    { level: "Easy", title: "One-sentence Value", description: "เขียน 'One-sentence value' ของโปรเจกต์ให้คม 3 เวอร์ชัน" },
    { level: "Medium", title: "Define Metrics", description: "กำหนด Metric หลัก (เช่น Accuracy) และ Metric รอง (เช่น Latency) พร้อมตัวเลขเป้าหมาย" },
    { level: "Challenge", title: "Scope Cut Plan", description: "ระบุสิ่งที่จะ 'ไม่ทำ' (Out-of-scope) มา 5 ข้อ เพื่อให้โปรเจกต์เสร็จทันเวลา" }
  ],
  debugCorner: [
    { problem: "Activate.ps1 cannot be loaded", solution: "รันคำสั่ง: Set-ExecutionPolicy -Scope CurrentUser RemoteSigned" },
    { problem: "ModuleNotFoundError", solution: "อย่าลืม Activate venv ก่อนรัน Jupyter หรือ pip install" },
    { problem: "Plot ไม่ขึ้นใน Notebook", solution: "ใส่ plt.show() ที่บรรทัดสุดท้ายของ Cell หรือใช้ %matplotlib inline" }
  ],
  quiz: [
    { id: 1, question: "AI Project Lifecycle ที่ถูกต้องคือข้อใด?", options: ["Model->Data->Problem", "Problem->Data->Model->Eval->Deploy", "Data->Deploy->Model", "Eval->Problem->Data"], correctAnswer: 1, explanation: "Lifecycle เริ่มจาก Problem เสมอ แล้วไป Data -> Model -> Eval -> Deploy" },
    { id: 2, question: "ทำไมต้องมี Success Metrics?", options: ["เพื่อให้โค้ดยาวขึ้น", "เพื่อวัดความสำเร็จและกันหลงทาง", "เพื่อให้กราฟสวย", "เพื่อให้ install ได้"], correctAnswer: 1, explanation: "ถ้าไม่มีตัววัด เราจะไม่รู้ว่าโมเดลดีพอที่จะใช้งานจริงหรือยัง" },
    { id: 3, question: "ข้อมูลแบบไหนคือ PII ที่ห้ามใช้?", options: ["จำนวนคลาส", "ค่า F1", "เลขบัตรประชาชน", "จำนวนแถว"], correctAnswer: 2, explanation: "PII (Personally Identifiable Information) ระบุตัวตนได้ ต้องระวัง PDPA" },
    { id: 4, question: "Deliverable สำคัญสุดของ Week 1 คือ?", options: ["Model 99% Acc", "Repo ที่รันได้ + Charter ชัดเจน", "UI สวยงาม", "Docker Image"], correctAnswer: 1, explanation: "เป้าหมายคือการตั้งโครงสร้างและการวางแผน (Framing) ให้พร้อมเดินต่อ" },
    { id: 5, question: "ถ้า import library ไม่ได้ มักเกิดจาก?", options: ["Dataset เปลี่ยน", "ใช้ Python คนละตัวกับที่ install", "Metrics ผิด", "Scope กว้าง"], correctAnswer: 1, explanation: "มักเกิดจากการไม่ได้ activate virtual environment (venv)" }
  ]
};

export const WEEK_2_LESSON_PLAN: LessonPlan = {
  week: 2,
  topic: "Baseline Model & Metrics",
  timeline: [
    { time: "0:00 - 0:10", activity: "Recap & Goals", detail: "ทบทวน Week 1 (Repo, Charter) และเป้าหมายวันนี้: Model v1 ที่วัดผลได้จริง" },
    { time: "0:10 - 0:25", activity: "Theory: Baseline", detail: "Baseline คืออะไร? ทำไมต้องเริ่มง่ายๆ ก่อน? (Logistic Regression/RandomForest)" },
    { time: "0:25 - 0:45", activity: "Split Strategy", detail: "Train/Test Split, Data Leakage, Random State และ Stratify" },
    { time: "0:45 - 1:00", activity: "Metrics", detail: "เลือก Metric ให้ถูก: Accuracy vs F1-macro (Class Imbalance)" },
    { time: "1:00 - 1:25", activity: "Live Demo 1", detail: "สร้าง Baseline ใน Notebook: Load -> Split -> Train -> Evaluate" },
    { time: "1:25 - 2:00", activity: "Workshop A", detail: "Hands-on: สร้าง Notebook 02_baseline_v1 และเซฟ reports/metrics_v1.json" },
    { time: "2:00 - 2:25", activity: "Live Demo 2", detail: "การบันทึก Model Artifacts (joblib, features.json, meta.json) แบบมืออาชีพ" },
    { time: "2:25 - 2:45", activity: "Workshop B", detail: "Reproducibility Check: โหลดโมเดลมาเทส & อัปเดต README" },
    { time: "2:50 - 3:00", activity: "Wrap-up & Quiz", detail: "สรุป Deliverables และทำ Quiz ท้ายบท" }
  ],
  contentSummary: [
    {
      title: "Baseline Model",
      points: [
        "โมเดลง่ายที่สุดที่ 'สมเหตุสมผล' เพื่อเป็นเส้นมาตรฐาน",
        "ถ้ารุ่นใหม่ดีกว่า baseline = พัฒนาจริง",
        "ตัวอย่าง: Logistic Regression (เร็ว, ง่าย), RandomForest (แรง, ใช้สะดวก)"
      ]
    },
    {
      title: "Train/Test Split",
      points: [
        "Train: ให้โมเดลเรียนรู้",
        "Test: วัดการ Generalize (ห้ามใช้เทรนเด็ดขาด)",
        "random_state: ล็อกผลสุ่มให้เหมือนเดิม",
        "stratify: รักษาสัดส่วนคลาสให้เท่าเดิม"
      ]
    },
    {
      title: "Metrics",
      points: [
        "Accuracy: ความถูกต้องรวม (ใช้เมื่อคลาสสมดุล)",
        "F1-macro: ค่าเฉลี่ย F1 ทุกคลาส (ใช้เมื่อคลาสไม่สมดุล)"
      ]
    }
  ],
  demoScript: [
    {
      step: "1. Load & Split",
      description: "โหลดข้อมูลและแบ่ง Train/Test แบบ Stratified",
      code: "X_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y\n)"
    },
    {
      step: "2. Train & Eval",
      description: "เทรน Logistic Regression และวัดผล",
      code: "model = LogisticRegression(max_iter=800)\nmodel.fit(X_train, y_train)\npred = model.predict(X_test)\nprint(classification_report(y_test, pred))"
    },
    {
      step: "3. Save Artifacts",
      description: "บันทึกโมเดลและ Metadata",
      code: "joblib.dump(model, 'models/v1/model.joblib')\njson.dump(features, open('models/v1/features.json', 'w'))"
    }
  ],
  workshopSteps: [
    {
      title: "Workshop A: Baseline v1",
      steps: [
        "สร้าง 'notebooks/02_baseline_v1.ipynb'",
        "ทำ Load -> Split -> Train -> Evaluate",
        "บันทึกผล 'reports/metrics_v1.json'"
      ]
    },
    {
      title: "Workshop B: Artifacts & Docs",
      steps: [
        "สร้างโฟลเดอร์ 'models/v1/'",
        "บันทึก model.joblib, features.json, meta.json",
        "อัปเดต README.md ในส่วน 'How to Run Baseline'"
      ]
    }
  ],
  exercises: [
    { level: "Easy", title: "Change Split", description: "เปลี่ยน test_size เป็น 0.3 แล้วสังเกตการเปลี่ยนแปลงของ Metric" },
    { level: "Medium", title: "Compare Models", description: "ลองใช้ RandomForestClassifier แล้วเทียบ F1-macro กับ LogisticRegression" },
    { level: "Challenge", title: "Pipeline", description: "ทำ Pipeline ใส่ StandardScaler ก่อน LogisticRegression แล้วดูผลลัพธ์" }
  ],
  debugCorner: [
    { problem: "ConvergenceWarning", solution: "เพิ่ม max_iter=800 หรือใช้ StandardScaler" },
    { problem: "ValueError: The least populated class...", solution: "ลด test_size หรือตรวจสอบว่าข้อมูลแต่ละคลาสเพียงพอหรือไม่" },
    { problem: "คะแนนสูงผิดปกติ (0.99+)", solution: "เช็ค Data Leakage หรือเผลอเอา Target เข้า Feature" }
  ],
  quiz: [
    { id: 1, question: "Baseline model มีไว้เพื่อ?", options: ["ได้คะแนนสูงสุดทันที", "เป็นมาตรฐานเริ่มต้นเพื่อเทียบรุ่นถัดไป", "ใช้แทน test set", "ทำให้ไม่ต้องมี data"], correctAnswer: 1, explanation: "Baseline คือจุดอ้างอิงเพื่อดูว่าโมเดลซับซ้อนขึ้นแล้วดีขึ้นจริงไหม" },
    { id: 2, question: "random_state มีไว้เพื่อ?", options: ["ทำให้โมเดลเร็วขึ้น", "ทำให้ผลสุ่มเหมือนเดิมทุกครั้ง", "เพิ่ม F1 เสมอ", "ลดจำนวนข้อมูล"], correctAnswer: 1, explanation: "เพื่อให้ผลลัพธ์ Reproducible (ทำซ้ำได้)" },
    { id: 3, question: "stratify=y ทำอะไร?", options: ["เรียงคอลัมน์ใหม่", "รักษาสัดส่วนคลาสใน Train/Test", "ทำให้โมเดลเป็น DL", "ลบข้อมูล"], correctAnswer: 1, explanation: "สำคัญมากสำหรับ Imbalanced Data เพื่อให้ Train/Test มีการกระจายตัวเหมือนกัน" },
    { id: 4, question: "F1-macro เหมาะเมื่อ?", options: ["คลาสสมดุล", "คลาสไม่สมดุล", "อยากได้กราฟสวย", "Regression เท่านั้น"], correctAnswer: 1, explanation: "Macro average ให้ความสำคัญกับทุกคลาสเท่ากัน ไม่สนจำนวนข้อมูล" },
    { id: 5, question: "ทำไมต้อง Save Model?", options: ["ให้ Notebook สั้น", "เพื่อ Deploy/Inference ภายหลัง", "เพิ่ม Accuracy", "ไม่ต้องใช้ Metrics"], correctAnswer: 1, explanation: "เพื่อให้สามารถนำโมเดลไปใช้งานต่อได้โดยไม่ต้องเทรนใหม่" },
    { id: 6, question: "ไฟล์ features.json มีไว้เพื่อ?", options: ["เก็บรูปภาพ", "เป็นสัญญา (Contract) รายชื่อฟีเจอร์", "เก็บคะแนน", "เก็บ Secret"], correctAnswer: 1, explanation: "เพื่อให้ตอน Predict รู้ว่าต้องส่ง Feature อะไรบ้าง เรียงลำดับอย่างไร" },
    { id: 7, question: "joblib.dump ใช้ทำอะไร?", options: ["โหลด Dataset", "เซฟโมเดลเป็นไฟล์", "Plot Graph", "ทำ API"], correctAnswer: 1, explanation: "Standard library สำหรับ serialize Python objects (Models)" },
    { id: 8, question: "ข้อใดคือ Train/Test Split ที่ถูก?", options: ["ใช้ Test เลือกโมเดล", "ใช้ Train เรียน, Test วัดผล", "ใช้ Test เทรน", "ไม่ต้อง Split"], correctAnswer: 1, explanation: "ห้ามใช้ Test Set ในการเทรนเด็ดขาด (Data Leakage)" },
    { id: 9, question: "ถ้าคะแนนสูงผิดปกติควรสงสัยอะไร?", options: ["GPU แรง", "Data Leakage", "Jupyter ช้า", "Python ใหม่"], correctAnswer: 1, explanation: "มักเกิดจาก Leakage เช่นเอาคำตอบใส่ในโจทย์" },
    { id: 10, question: "Week 2 Deliverable คือ?", options: ["Notebook เปล่า", "Baseline Metrics + Artifacts + README", "UI สวยงาม", "Docker"], correctAnswer: 1, explanation: "เน้นกระบวนการสร้างโมเดลพื้นฐานที่วัดผลได้และทำซ้ำได้" }
  ]
};

export const WEEK_3_LESSON_PLAN: LessonPlan = {
  week: 3,
  topic: "Data Pipeline + Model v2",
  timeline: [
    { time: "0:00 - 0:10", activity: "Recap Week 2", detail: "ทบทวน v1: Split -> Train -> Metrics -> Save" },
    { time: "0:10 - 0:25", activity: "Theory: Data Pipeline", detail: "ทำไมข้อมูลต้องสะอาด? Pipeline คืออะไร? ทำไมต้องมี Data Contract?" },
    { time: "0:25 - 0:45", activity: "Cleaning & Validation", detail: "Missing, Outlier, Duplicate, Type checking (Data Contract)" },
    { time: "0:45 - 1:00", activity: "Feature Engineering", detail: "Scaling (StandardScaler) และการเลือก Feature เบื้องต้น" },
    { time: "1:00 - 1:25", activity: "Live Demo 1", detail: "สร้าง Pipeline (Scaler -> LogReg) และเปรียบเทียบ v1 vs v2" },
    { time: "1:25 - 2:00", activity: "Workshop A", detail: "สร้าง Processed Dataset (data/processed/wine_v1.csv) และ Notebook Pipeline" },
    { time: "2:00 - 2:25", activity: "Live Demo 2", detail: "Save Artifacts v2 (Model + Features + Meta + Config)" },
    { time: "2:25 - 2:45", activity: "Workshop B", detail: "Compare Report v1 vs v2 และอัปเดต README" },
    { time: "2:50 - 3:00", activity: "Wrap-up & Quiz", detail: "ตรวจ DoD และ Quiz" }
  ],
  contentSummary: [
    { title: "Data Pipeline", points: ["วิธีทำข้อมูลให้พร้อม train แบบ 'ทำซ้ำได้'", "ลดงานมือ (Manual work) และ Human Error"] },
    { title: "Cleaning Checklist", points: ["Missing values, Duplicates, Outliers, Column types"] },
    { title: "Feature Engineering (Basic)", points: ["StandardScaler: ปรับ Mean=0, Std=1 ช่วยโมเดล Linear", "Pipeline: ป้องกัน Data Leakage (Fit train, Transform test)"] }
  ],
  demoScript: [
    { step: "1. Pipeline v2", description: "ใช้ sklearn.pipeline รวม Scaler และ Model", code: "pipe = Pipeline([('scaler', StandardScaler()), ('clf', LogisticRegression())])\npipe.fit(X_train, y_train)" },
    { step: "2. Save Processed Data", description: "บันทึกข้อมูลที่ผ่านการคลีนแล้ว", code: "df.to_csv('data/processed/wine_v1.csv', index=False)" },
    { step: "3. Save Artifacts v2", description: "บันทึกโมเดลและ Metadata v2", code: "joblib.dump(pipe, 'models/v2/model.joblib')\njson.dump(meta, open('models/v2/meta.json', 'w'))" }
  ],
  workshopSteps: [
    { title: "Workshop A: Pipeline & Data", steps: ["สร้าง notebooks/03_data_pipeline_v2.ipynb", "Check missing/duplicates", "Save data/processed/wine_v1.csv"] },
    { title: "Workshop B: Artifacts v2", steps: ["Train Pipeline(Scaler->Model)", "Save models/v2/ artifacts", "เขียน reports/compare_v1_v2.md"] }
  ],
  exercises: [
    { level: "Easy", title: "MinMaxScaler", description: "ลองเปลี่ยน StandardScaler เป็น MinMaxScaler แล้วเทียบผลลัพธ์" },
    { level: "Medium", title: "SelectKBest", description: "เพิ่ม Feature Selection (SelectKBest) เข้าไปใน Pipeline" },
    { level: "Challenge", title: "ColumnTransformer", description: "ทำ Pipeline ที่แยกการจัดการ Numerical และ Categorical Columns" }
  ],
  debugCorner: [
    { problem: "ConvergenceWarning", solution: "เพิ่ม max_iter หรือตรวจสอบว่า Scaler ทำงานถูกต้อง" },
    { problem: "Score ลดลง", solution: "ตรวจสอบ Data Leakage หรือการตั้งค่า Pipeline" },
    { problem: "Save path error", solution: "ตรวจสอบว่าโฟลเดอร์ models/v2 ถูกสร้างแล้ว (mkdir)" }
  ],
  quiz: [
    { id: 1, question: "Data pipeline มีไว้เพื่อ?", options: ["ทำกราฟสวย", "ทำข้อมูลให้พร้อมใช้แบบทำซ้ำได้", "ไม่ต้องประเมินผล", "ไม่ต้องมี metrics"], correctAnswer: 1, explanation: "เพื่อให้กระบวนการเตรียมข้อมูลเป็นมาตรฐานและทำซ้ำได้" },
    { id: 2, question: "ทำไมต้อง save data/processed?", options: ["ให้ไฟล์ใหญ่ขึ้น", "เพื่อให้ขั้นตอนถัดไปรันซ้ำได้และทีมใช้ข้อมูลชุดเดียวกัน", "เพิ่ม accuracy", "ให้ docker ทำงาน"], correctAnswer: 1, explanation: "เป็น Single Source of Truth สำหรับการเทรน" },
    { id: 3, question: "Pipeline ช่วยอะไรสำคัญสุด?", options: ["ทำ DL", "กัน Data Leakage", "ไม่ต้อง Split", "ใช้ GPU"], correctAnswer: 1, explanation: "Pipeline ช่วยให้ Preprocessing (เช่น Scaling) เกิดขึ้นหลังจาก Split เสมอ" },
    { id: 4, question: "StandardScaler ทำอะไร?", options: ["Mean=0, Std=1", "0-1", "Text to Int", "Delete Data"], correctAnswer: 0, explanation: "ปรับข้อมูลให้อยู่ในสเกลมาตรฐาน (Z-score normalization)" },
    { id: 5, question: "ไฟล์ meta.json ควรเก็บอะไร?", options: ["Password", "Config/Metrics/Version", "Images", "Ads"], correctAnswer: 1, explanation: "Metadata ช่วยให้เรารู้ว่าโมเดลเวอร์ชันนี้สร้างมาอย่างไร" },
    { id: 6, question: "ข้อใดคือการเช็ค Data ขั้นต่ำ?", options: ["ดูสี", "Missing/Duplicate/Outlier", "Train เลย", "Deploy เลย"], correctAnswer: 1, explanation: "ต้องเช็คความสะอาดข้อมูลก่อนเสมอ" },
    { id: 7, question: "Feature Engineering ที่คุ้มสุดสำหรับ LogReg?", options: ["GPU", "Scaling", "Images", "Audio"], correctAnswer: 1, explanation: "Linear Model อ่อนไหวต่อสเกลของข้อมูลมาก" },
    { id: 8, question: "Scaling ก่อน Split เสี่ยงอะไร?", options: ["Data Leakage", "RAM เต็ม", "Net ช้า", "PII"], correctAnswer: 0, explanation: "ข้อมูลจาก Test set จะรั่วไปหา Train set ผ่านค่า Mean/Std รวม" },
    { id: 9, question: "Compare Report มีไว้เพื่อ?", options: ["รก Repo", "อธิบายความเปลี่ยนแปลงเชิงเทคนิค", "แทน Metrics", "แทน Readme"], correctAnswer: 1, explanation: "เพื่อสื่อสารว่าทำไม v2 ถึงดีกว่า v1" },
    { id: 10, question: "Week 3 DoD คือ?", options: ["Notebook เปล่า", "Processed Data + Pipeline v2 + Artifacts", "UI", "Docker"], correctAnswer: 1, explanation: "ต้องมีครบทั้ง Data, Model, และ Report" }
  ]
};

export const WEEK_4_LESSON_PLAN: LessonPlan = {
  week: 4,
  topic: "Validation + Tuning + Model v3",
  timeline: [
    { time: "0:00 - 0:10", activity: "Recap Week 3", detail: "ทบทวน v2: Pipeline, Processed Data" },
    { time: "0:10 - 0:30", activity: "Theory: Validation", detail: "Holdout Test (ห้ามแตะ) vs Cross-Validation" },
    { time: "0:30 - 0:45", activity: "Metrics & Selection", detail: "F1-macro, Mean/Std จาก CV (ความเสถียร)" },
    { time: "0:45 - 1:10", activity: "Live Demo 1", detail: "Cross-Validation กับ Pipeline (cross_val_score)" },
    { time: "1:10 - 1:35", activity: "Live Demo 2", detail: "GridSearchCV: Tuning Hyperparameters" },
    { time: "1:35 - 2:10", activity: "Workshop A", detail: "ทำ GridSearchCV หา Best Params และเซฟ CV Results" },
    { time: "2:10 - 2:35", activity: "Live Demo 3", detail: "Train Final v3 (Best Est) + Test Eval (Once) + Save Artifacts" },
    { time: "2:35 - 2:55", activity: "Workshop B", detail: "Compare v2 vs v3 Report และ Update README" },
    { time: "2:55 - 3:00", activity: "Wrap-up & Quiz", detail: "สรุป DoD และ Quiz" }
  ],
  contentSummary: [
    { title: "Cross-Validation", points: ["แบ่งข้อมูลหลายรอบเพื่อหาค่าเฉลี่ยคะแนน", "ลดความฟลุ๊คของการ Split"] },
    { title: "GridSearchCV", points: ["ลองพารามิเตอร์หลายชุดอย่างเป็นระบบ", "ใช้ CV ในตัวเพื่อเลือกค่าที่ดีที่สุด"] },
    { title: "Holdout Test Set", points: ["เก็บไว้ท้ายสุด ห้ามใช้จูนโมเดลเด็ดขาด (กัน Overfitting/Leakage)"] }
  ],
  demoScript: [
    { step: "1. Cross-Validation", description: "ใช้ cross_val_score วัดความเสถียร", code: "scores = cross_val_score(pipe, X_train, y_train, cv=5, scoring='f1_macro')" },
    { step: "2. GridSearchCV", description: "จูน C ของ LogisticRegression", code: "search = GridSearchCV(pipe, param_grid={'clf__C': [0.1, 1, 10]}, cv=5)\nsearch.fit(X_train, y_train)" },
    { step: "3. Final Evaluation", description: "วัดผล Test Set ครั้งเดียว", code: "best_model = search.best_estimator_\nacc = accuracy_score(y_test, best_model.predict(X_test))" }
  ],
  workshopSteps: [
    { title: "Workshop A: Tuning", steps: ["สร้าง notebooks/04_cv_tuning_v3.ipynb", "ทำ GridSearchCV", "Save reports/cv_results_v3.csv"] },
    { title: "Workshop B: Artifacts v3", steps: ["Evaluate Best Model on Test Set", "Save models/v3/ artifacts", "Compare v2 vs v3"] }
  ],
  exercises: [
    { level: "Easy", title: "Change Splits", description: "เปลี่ยน n_splits เป็น 3 หรือ 10 แล้วดูผล Mean/Std" },
    { level: "Medium", title: "New Model Family", description: "ลองจูน RandomForestClassifier แทน LogisticRegression" },
    { level: "Challenge", title: "RepeatedCV", description: "ใช้ RepeatedStratifiedKFold เพื่อความแม่นยำสูงสุด" }
  ],
  debugCorner: [
    { problem: "GridSearch ช้า", solution: "ลดจำนวน param_grid หรือ n_splits, ใช้ n_jobs=-1" },
    { problem: "Test score ต่ำกว่า CV", solution: "อาจเกิด Overfitting กับ CV หรือ Variance สูง (ดู Std)" },
    { problem: "Data Leakage", solution: "ตรวจสอบว่า Test Set ไม่ถูกใช้ใน GridSearchCV" }
  ],
  quiz: [
    { id: 1, question: "ทำไม Test Set ต้องห้ามแตะตอนจูน?", options: ["โค้ดสั้น", "กันแอบดูข้อสอบ/คะแนนหลอก", "GPU ร้อน", "Pandas Error"], correctAnswer: 1, explanation: "ถ้าใช้ Test Set เลือกโมเดล คะแนนที่ได้จะไม่สะท้อนการใช้งานจริง" },
    { id: 2, question: "Cross-Validation ให้ข้อมูลอะไรเพิ่ม?", options: ["เลขสุ่ม", "Mean/Std ของคะแนน", "ไม่ต้อง Split", "ไม่ต้อง Metrics"], correctAnswer: 1, explanation: "ช่วยบอกความเสถียร (Stability) ของโมเดล" },
    { id: 3, question: "GridSearchCV ทำอะไร?", options: ["โหลด Data", "ลองพารามิเตอร์+วัดผล CV", "Plot Graph", "API"], correctAnswer: 1, explanation: "ค้นหา Hyperparameter ที่ดีที่สุดอย่างเป็นระบบ" },
    { id: 4, question: "ควรทำ CV บนชุดไหน?", options: ["ทั้ง Dataset", "Train Set Only", "Test Set Only", "ไม่ทำ"], correctAnswer: 1, explanation: "ทำบน Train เท่านั้น Test ต้องแยกไว้ต่างหาก" },
    { id: 5, question: "cv_results_ มีไว้เพื่อ?", options: ["เก็บรูป", "ดูผลคะแนนทุก Params", "เก็บรหัส", "เก็บ Model"], correctAnswer: 1, explanation: "เพื่อวิเคราะห์ว่า Parameter ตัวไหนส่งผลต่อคะแนนอย่างไร" },
    { id: 6, question: "F1-macro เหมาะกับ?", options: ["Imbalanced Class", "Regression", "No Target", "Image Only"], correctAnswer: 0, explanation: "ให้ความสำคัญกับทุก Class เท่ากัน" },
    { id: 7, question: "ถ้า Tuning แล้ว Test แย่ลง?", options: ["โค้ดพัง", "Overfit กับ CV/Variance สูง", "ลิขสิทธิ์ผิด", "Docker พัง"], correctAnswer: 1, explanation: "โมเดลอาจจำข้อสอบ CV เก่งเกินไป แต่ไม่ Generalize" },
    { id: 8, question: "Grid เล็กมีไว้เพื่อ?", options: ["โมเดลแย่", "เรียนรู้ concept ทันเวลา", "ไม่ต้อง Save", "ไม่ต้อง CV"], correctAnswer: 1, explanation: "เพื่อการเรียนรู้ ในงานจริงอาจขยาย Grid ใหญ่ขึ้นได้" },
    { id: 9, question: "ถ้า CV Mean เท่ากัน ดูอะไรต่อ?", options: ["สี", "Std (ความเสถียร)", "ชื่อ", "ขนาดไฟล์"], correctAnswer: 1, explanation: "เลือกโมเดลที่ Std ต่ำกว่า (เสี่ยงน้อยกว่า)" },
    { id: 10, question: "Week 4 DoD คือ?", options: ["Notebook", "CV+Tuning+Artifacts v3", "UI", "Docker"], correctAnswer: 1, explanation: "ต้องมีผลการจูนและโมเดล v3 ที่พร้อมใช้งาน" }
  ]
};

export const WEEK_5_LESSON_PLAN: LessonPlan = {
  week: 5,
  topic: "Error Analysis + Model v4",
  timeline: [
    { time: "0:00 - 0:10", activity: "Recap Week 4", detail: "ทบทวน v3: CV + Tuning" },
    { time: "0:10 - 0:25", activity: "Theory: Error Analysis", detail: "วิเคราะห์ความผิดพลาด: Data, Feature, หรือ Model?" },
    { time: "0:25 - 0:45", activity: "Tools", detail: "Confusion Matrix, Classification Report, Error Table" },
    { time: "0:45 - 1:15", activity: "Live Demo 1", detail: "สร้าง Error Table + หา Top Error Patterns" },
    { time: "1:15 - 1:35", activity: "Live Demo 2", detail: "Data-centric Fix: Polynomial Features / New Model" },
    { time: "1:35 - 2:05", activity: "Workshop A", detail: "ทำ Error Analysis Report & Table" },
    { time: "2:05 - 2:40", activity: "Workshop B", detail: "สร้าง v4 (Action from Insight) + Save Artifacts" },
    { time: "2:40 - 2:50", activity: "Compare", detail: "Compare v3 vs v4 Report" },
    { time: "2:50 - 3:00", activity: "Wrap-up & Quiz", detail: "สรุป DoD และ Quiz" }
  ],
  contentSummary: [
    { title: "Error Analysis", points: ["ดูตัวอย่างที่ผิดจริง (Error Table)", "หา Pattern: Label ผิด? Feature ไม่พอ?"] },
    { title: "Data-Centric AI", points: ["แก้ที่ข้อมูล/Feature ก่อนแก้ที่โมเดล", "เพิ่ม Polynomial Features, แก้ Class Weight"] },
    { title: "Confusion Matrix", points: ["ดูว่า Class ไหนสับสนกับ Class ไหนมากที่สุด"] }
  ],
  demoScript: [
    { step: "1. Error Table", description: "สร้าง DataFrame ของเคสที่ทายผิด", code: "err_df = X_test[y_test != pred].copy()\nerr_df['true'] = y_test\nerr_df['pred'] = pred" },
    { step: "2. Improvement (Poly)", description: "เพิ่ม PolynomialFeatures", code: "pipe = Pipeline([('poly', PolynomialFeatures(2)), ('scaler', StandardScaler()), ('clf', LogisticRegression())])" },
    { step: "3. Save v4", description: "บันทึกโมเดล v4 และ Metrics", code: "joblib.dump(pipe, 'models/v4/model.joblib')" }
  ],
  workshopSteps: [
    { title: "Workshop A: Analysis", steps: ["สร้าง notebooks/05_error_analysis.ipynb", "Save reports/error_table_v3.csv", "เขียน Insight 5 ข้อ"] },
    { title: "Workshop B: Model v4", steps: ["Train v4 based on insight", "Save models/v4/ artifacts", "Compare v3 vs v4"] }
  ],
  exercises: [
    { level: "Easy", title: "Error Type", description: "เพิ่มคอลัมน์ error_type ในตาราง (เช่น 'False Positive')" },
    { level: "Medium", title: "Class Weight", description: "ลองใช้ class_weight='balanced' แก้ปัญหา Recall ต่ำ" },
    { level: "Challenge", title: "Hardest Samples", description: "หาเคสที่ Confidence สูงแต่ทายผิด (Miscalibrated)" }
  ],
  debugCorner: [
    { problem: "Poly Features ช้า", solution: "ลด degree เหลือ 2 หรือลดจำนวน Feature ตั้งต้น" },
    { problem: "Score แย่ลง", solution: "ตรวจสอบว่า Action ตรงกับ Insight หรือไม่ (Overfitting?)" },
    { problem: "Encoding Error", solution: "ใช้ UTF-8 ในการอ่าน/เขียน CSV" }
  ],
  quiz: [
    { id: 1, question: "Error Analysis ทำเพื่อ?", options: ["เพิ่มโค้ด", "รู้จุดผิดและแก้ให้ถูกจุด", "ใช้ GPU", "Deploy"], correctAnswer: 1, explanation: "การรู้จุดอ่อนช่วยให้เราพัฒนาโมเดลได้อย่างมีทิศทาง" },
    { id: 2, question: "Confusion Matrix แถวคือ?", options: ["Predicted", "True Label", "Feature", "Prob"], correctAnswer: 1, explanation: "ตามมาตรฐาน sklearn แถวคือ True Label คอลัมน์คือ Predicted" },
    { id: 3, question: "ถ้าทาย A เป็น B บ่อยๆ?", options: ["ดีมาก", "โมเดลแยก A/B ไม่ออก ดู Feature", "Dataset ผิด", "Deploy เลย"], correctAnswer: 1, explanation: "ต้องหา Feature ที่ช่วยแยกสองคลาสนี้ให้ชัดเจนขึ้น" },
    { id: 4, question: "Error Table มีไว้?", options: ["ไฟล์ใหญ่", "ดูตัวอย่างที่ผิดจริง", "แทน Metrics", "แทน Model"], correctAnswer: 1, explanation: "ช่วยให้เห็นหน้าตาของข้อมูลที่มีปัญหา" },
    { id: 5, question: "Data-centric หมายถึง?", options: ["เปลี่ยนโมเดล", "เน้นแก้ข้อมูล/Feature", "เพิ่ม GPU", "Docker"], correctAnswer: 1, explanation: "ปรับปรุงคุณภาพข้อมูลและการนำเสนอข้อมูลให้โมเดล" },
    { id: 6, question: "Confidence ช่วยอะไร?", options: ["เปลี่ยน Class", "หาผิดแบบมั่นใจ (Hard Error)", "คะแนนเพิ่ม", "ไม่ต้อง Test"], correctAnswer: 1, explanation: "ช่วยระบุเคสที่โมเดล 'หลงผิด' อย่างรุนแรง" },
    { id: 7, question: "PolynomialFeatures ผลคือ?", options: ["ลด Feature", "เพิ่ม Feature เชิงผสม (Boundary ซับซ้อนขึ้น)", "Categorical", "PII"], correctAnswer: 1, explanation: "ช่วยให้ Linear Model จับ Pattern ที่ไม่เป็นเส้นตรงได้" },
    { id: 8, question: "ถ้า v4 แย่ลงทำไง?", options: ["ลบ Repo", "กลับไปดู Analysis ว่าแก้ตรงจุดไหม", "Degree 5", "Deploy"], correctAnswer: 1, explanation: "วิเคราะห์ซ้ำ (Iterate) คือหัวใจของ ML" },
    { id: 9, question: "Hard Errors คือ?", options: ["ผิด Confidence ต่ำ", "ผิด Confidence สูง", "ถูกเสมอ", "ไม่มี"], correctAnswer: 1, explanation: "ผิดและมั่นใจมาก คือจุดที่อันตรายที่สุด" },
    { id: 10, question: "Week 5 DoD คือ?", options: ["Model v4", "Error Analysis + Action + Artifacts v4", "UI", "Docker"], correctAnswer: 1, explanation: "ต้องมีการวิเคราะห์และการปรับปรุงที่จับต้องได้" }
  ]
};

export const WEEK_6_LESSON_PLAN: LessonPlan = {
  week: 6,
  topic: "Split + Threshold + Calibration (v5)",
  timeline: [
    { time: "0:00 - 0:10", activity: "Recap Week 5", detail: "ทบทวน v4 (Error Analysis)" },
    { time: "0:10 - 0:30", activity: "Theory: Train/Val/Test", detail: "Split 3 ส่วนแบบองค์กร (70/15/15) + Roles" },
    { time: "0:30 - 0:45", activity: "Leakage Checklist", detail: "10 ข้อควรระวัง (Preprocessing, Tuning, Features)" },
    { time: "0:45 - 1:10", activity: "Theory: Threshold", detail: "Probability -> Decision (Precision vs Recall Tradeoff)" },
    { time: "1:10 - 1:35", activity: "Live Demo 1", detail: "3-way Split + Baseline v5" },
    { time: "1:35 - 2:05", activity: "Workshop A", detail: "Split Data & Leakage Checklist" },
    { time: "2:05 - 2:25", activity: "Live Demo 2", detail: "Threshold Selection from Val" },
    { time: "2:25 - 2:40", activity: "Live Demo 3", detail: "Calibration Basics" },
    { time: "2:40 - 2:55", activity: "Workshop B", detail: "Threshold Policy, Save v5 Artifacts, Docs" },
    { time: "2:55 - 3:00", activity: "Wrap-up & Quiz", detail: "สรุป DoD และ Quiz" }
  ],
  contentSummary: [
    { title: "Train/Val/Test", points: ["Train: ฝึก", "Val: ปรับจูน/เลือก Threshold", "Test: วัดผลครั้งสุดท้าย (ห้ามแตะ)"] },
    { title: "Thresholding", points: ["เปลี่ยนค่าตัดตัดสินใจ (Default 0.5) เพื่อแลกเปลี่ยน Precision/Recall", "ขึ้นกับ Business Logic (Cost of False Pos/Neg)"] },
    { title: "Calibration", points: ["ทำให้ค่า Probability เชื่อถือได้จริง (เช่น 0.8 หมายถึงถูก 80% จริงๆ)"] }
  ],
  demoScript: [
    { step: "1. 3-Way Split", description: "แบ่ง Train/Val/Test", code: "X_temp, X_test, ... = train_test_split(..., test_size=0.15)\nX_train, X_val, ... = train_test_split(X_temp, ..., test_size=0.1765)" },
    { step: "2. Threshold Sweep", description: "หา Best Threshold บน Val", code: "for t in thresholds: f1_score(y_val, proba_val >= t)" },
    { step: "3. Save Policy", description: "บันทึก Threshold ลง Meta", code: "meta = {'threshold': best_t, ...}" }
  ],
  workshopSteps: [
    { title: "Workshop A: Setup", steps: ["สร้าง notebooks/06_split_threshold.ipynb", "ทำ 3-way split", "Checklist Data Leakage"] },
    { title: "Workshop B: Policy & v5", steps: ["หา Best Threshold จาก Val", "Save models/v5/ artifacts", "เขียน threshold_policy_v5.md"] }
  ],
  exercises: [
    { level: "Easy", title: "Alt Policy", description: "เลือก Threshold ด้วยเกณฑ์ Precision >= 0.9" },
    { level: "Medium", title: "Target Change", description: "ลองเปลี่ยน Target เป็น Class อื่นแล้วทำ Policy ใหม่" },
    { level: "Challenge", title: "Calibration Eval", description: "พล็อต Reliability Diagram หรือคำนวณ Brier Score" }
  ],
  debugCorner: [
    { problem: "Precision Undefined", solution: "ใส่ zero_division=0 หรือตรวจสอบว่า Threshold สูงไปจนไม่มี Positive" },
    { problem: "Class Imbalance", solution: "ตรวจสอบ Stratify ตอน Split" },
    { problem: "Leakage", solution: "ตรวจสอบว่า Threshold มาจาก Val เท่านั้น" }
  ],
  quiz: [
    { id: 1, question: "Validation Set มีไว้?", options: ["เทรน", "เลือกโมเดล/Threshold", "ข้อสอบจริง", "เก็บ PII"], correctAnswer: 1, explanation: "ใช้ตัดสินใจระหว่างพัฒนา เพื่อไม่ให้ Overfit กับ Test Set" },
    { id: 2, question: "Test Set ใช้ตอนไหน?", options: ["ทุกครั้ง", "ครั้งเดียวตอนจบ", "ก่อน Train", "ไม่ใช้"], correctAnswer: 1, explanation: "ใช้ประเมินครั้งสุดท้ายเพื่อความยุติธรรม" },
    { id: 3, question: "Data Leakage คือ?", options: ["ไฟล์ใหญ่", "ข้อมูลอนาคตหลุดเข้า Train", "กราฟสวย", "GPU"], correctAnswer: 1, explanation: "ทำให้คะแนนตอนเทรนดีเกินจริง แต่ใช้จริงไม่ได้" },
    { id: 4, question: "Threshold คือ?", options: ["ชื่อ Dataset", "ค่าจุดตัด Probability", "Learning Rate", "Seed"], correctAnswer: 1, explanation: "จุดตัดในการตัดสินใจ Class (เช่น >= 0.6 เป็น Positive)" },
    { id: 5, question: "เลือก Threshold อิงชุดไหน?", options: ["Train", "Val", "Test", "All"], correctAnswer: 1, explanation: "ต้องอิง Validation เพื่อไม่ให้ Bias (Train) หรือ Cheat (Test)" },
    { id: 6, question: "Calibration ช่วย?", options: ["โมเดลเร็ว", "Prob น่าเชื่อถือ", "ไม่ต้อง Split", "Docker"], correctAnswer: 1, explanation: "ปรับให้ค่า Probability ตรงกับความเป็นจริง" },
    { id: 7, question: "ถ้า FN แพงมาก ควรทำไง?", options: ["เพิ่ม Threshold", "ลด Threshold", "ไม่ใช้", "ใช้ Test"], correctAnswer: 1, explanation: "ลด Threshold เพื่อจับ Positive ให้ได้มากขึ้น (ยอม FP มากขึ้น)" },
    { id: 8, question: "Fix Random State เพื่อ?", options: ["คะแนนสูง", "ผลทำซ้ำได้", "Pipeline หาย", "No missing"], correctAnswer: 1, explanation: "Reproducibility สำคัญมากในงาน Science" },
    { id: 9, question: "ไม่ควรเก็บอะไรใน Meta?", options: ["Version", "Threshold", "Metrics", "Password"], correctAnswer: 3, explanation: "Secrets ต้องแยกเก็บ (Environment Variables)" },
    { id: 10, question: "Week 6 DoD?", options: ["Model Only", "Split+Threshold+Artifacts v5", "UI", "Docker"], correctAnswer: 1, explanation: "ต้องมี Model ที่พร้อม Deploy พร้อม Policy การตัดสินใจ" }
  ]
};

export const WEEK_7_LESSON_PLAN: LessonPlan = {
  week: 7,
  topic: "FastAPI Deployment",
  timeline: [
    { time: "0:00 - 0:10", activity: "Recap Week 6", detail: "ทบทวน v5: Ready for Deploy" },
    { time: "0:10 - 0:25", activity: "Theory: API Basics", detail: "API Contract, /health, /predict, Security Check" },
    { time: "0:25 - 0:40", activity: "FastAPI Architecture", detail: "Structure: main.py, schemas.py, config.py" },
    { time: "0:40 - 1:10", activity: "Live Demo 1", detail: "Create /health & Load Model Artifacts" },
    { time: "1:10 - 1:40", activity: "Live Demo 2", detail: "Create /predict + Validation + Contract Check" },
    { time: "1:40 - 2:05", activity: "Workshop A", detail: "Implement API & Swagger UI Test" },
    { time: "2:05 - 2:25", activity: "Live Demo 3", detail: "Safe Logging & Error Handling" },
    { time: "2:25 - 2:50", activity: "Workshop B", detail: "Write Tests (pytest) 5 Cases" },
    { time: "2:50 - 3:00", activity: "Wrap-up & Quiz", detail: "สรุป DoD และ Quiz" }
  ],
  contentSummary: [
    { title: "REST API", points: ["ช่องทางให้ Software อื่นคุยกับ Model", "/health: ตรวจสถานะ, /predict: ขอผลทำนาย"] },
    { title: "Input Validation", points: ["Pydantic: กรองข้อมูลขยะก่อนถึง Model", "Feature Contract: ตรวจสอบชื่อ/ชนิดตัวแปรให้ตรง"] },
    { title: "Safe Logging", points: ["Log Meta (Time, ID, Status) แต่ห้าม Log Raw Input (Privacy)"] }
  ],
  demoScript: [
    { step: "1. Config & Load", description: "โหลด Model/Meta จาก config.py", code: "model = joblib.load(MODEL_PATH)\nfeatures = json.load(FEATURES_PATH)" },
    { step: "2. Schema", description: "นิยาม Input/Output ด้วย Pydantic", code: "class PredictRequest(BaseModel):\n features: Dict[str, float]" },
    { step: "3. Predict Endpoint", description: "สร้าง Route /predict", code: "@app.post('/predict')\ndef predict(req): ..." }
  ],
  workshopSteps: [
    { title: "Workshop A: Build API", steps: ["Setup Folder Structure", "Implement main.py/schemas.py", "Run uvicorn & Check Swagger"] },
    { title: "Workshop B: Tests", steps: ["Create tests/test_api.py", "Test Health, Predict, Error Cases", "Run pytest"] }
  ],
  exercises: [
    { level: "Easy", title: "Info Endpoint", description: "เพิ่ม GET /model-info คืนค่า Version/Features" },
    { level: "Medium", title: "Request ID", description: "เพิ่ม X-Request-ID Header เพื่อ Traceability" },
    { level: "Challenge", title: "Rate Limit", description: "ทำ Simple Rate Limiting (In-memory)" }
  ],
  debugCorner: [
    { problem: "ModuleNotFoundError", solution: "Run uvicorn จาก Root Folder (python -m uvicorn ...)" },
    { problem: "Path Error", solution: "ตรวจสอบ BASE_DIR ใน config.py" },
    { problem: "422 Validation Error", solution: "เช็ค JSON Body ว่าตรง Schema (มี key 'features' ไหม)" }
  ],
  quiz: [
    { id: 1, question: "Endpoint ใดเหมาะกับ Health Check?", options: ["/predict", "/health", "/train", "/data"], correctAnswer: 1, explanation: "เป็นมาตรฐานสากลสำหรับการตรวจสอบสถานะบริการ" },
    { id: 2, question: "Validation มีไว้?", options: ["โค้ดสั้น", "กัน Input พัง/Runtime Error", "Accuracy", "Docker"], correctAnswer: 1, explanation: "ป้องกันข้อมูลขยะเข้าสู่ระบบและทำให้โมเดลทำงานผิดพลาด" },
    { id: 3, question: "Feature Contract คือ?", options: ["เงินเดือน", "รายชื่อ/ลำดับ Feature ที่โมเดลคาดหวัง", "Dataset", "Threshold"], correctAnswer: 1, explanation: "ข้อตกลงระหว่าง API และ Model ว่าต้องส่งข้อมูลหน้าตาแบบไหน" },
    { id: 4, question: "สิ่งใด 'ไม่ควร' Log?", options: ["Req ID", "Latency", "Model Ver", "Raw Input"], correctAnswer: 3, explanation: "เสี่ยงละเมิด Privacy/PDPA" },
    { id: 5, question: "/predict ควรคืนอะไร?", options: ["รูป", "Pred + Proba + Meta", "Graph", "CSV"], correctAnswer: 1, explanation: "ให้ข้อมูลครบถ้วนสำหรับการตัดสินใจ" },
    { id: 6, question: "Enforce Feature Order เพื่อ?", options: ["เร็ว", "แมปค่ากับคอลัมน์ถูก", "สวย", "Test ผ่าน"], correctAnswer: 1, explanation: "Scikit-learn model ไม่รู้จักชื่อ Column (ใน array) ต้องเรียงลำดับให้ถูก" },
    { id: 7, question: "สาเหตุ 422 คือ?", options: ["Model เสีย", "JSON ผิด Schema", "Feature เยอะ", "Pandas"], correctAnswer: 1, explanation: "Pydantic แจ้งเตือนว่าข้อมูลที่ส่งมาไม่ตรงตามข้อกำหนด" },
    { id: 8, question: "Happy Path คือ?", options: ["ส่งขาด", "ส่งครบถูกต้อง", "ส่งเกิน", "ส่ง String"], correctAnswer: 1, explanation: "กรณีการใช้งานปกติที่ควรทำงานสำเร็จ" },
    { id: 9, question: "ทำไมต้อง Test?", options: ["UI สวย", "กัน Regression/มั่นใจก่อน Deploy", "F1", "Data"], correctAnswer: 1, explanation: "เพื่อความมั่นใจว่าแก้ไขโค้ดแล้วของเก่าไม่พัง" },
    { id: 10, question: "Week 7 DoD?", options: ["v5", "API Running + Tests", "Docker", "Streamlit"], correctAnswer: 1, explanation: "มี API ที่รันได้จริงและผ่านการทดสอบ" }
  ]
};

export const WEEK_8_LESSON_PLAN: LessonPlan = {
  week: 8,
  topic: "Streamlit UI & Demo",
  timeline: [
    { time: "0:00 - 0:10", activity: "Recap Week 7", detail: "ทบทวน API (/health, /predict)" },
    { time: "0:10 - 0:25", activity: "Theory: UI/UX for ML", detail: "Flow: Validate -> Call -> Handle Error -> Show Result" },
    { time: "0:25 - 0:50", activity: "Live Demo 1", detail: "Streamlit Skeleton & API Status Check" },
    { time: "0:50 - 1:20", activity: "Live Demo 2", detail: "Auto-generate Form from features.json" },
    { time: "1:20 - 1:45", activity: "Live Demo 3", detail: "Call /predict & Handle States (Loading/Error)" },
    { time: "1:45 - 2:10", activity: "Workshop A", detail: "Build UI connecting to API" },
    { time: "2:10 - 2:35", activity: "Live Demo 4", detail: "UX Polish (Presets, Reset, Logs)" },
    { time: "2:35 - 2:50", activity: "Workshop B", detail: "Demo Pack (Usage Docs + Checklist)" },
    { time: "2:50 - 3:00", activity: "Wrap-up & Final Quiz", detail: "จบ Class" }
  ],
  contentSummary: [
    { title: "UI for ML", points: ["ความชัดเจน: บอกว่าทำอะไร", "ความทนทาน: API ล่มต้องไม่ค้าง", "ความน่าเชื่อถือ: แสดง Model Version/Threshold"] },
    { title: "Dynamic Form", points: ["สร้าง Input ตาม features.json อัตโนมัติ", "ลดงานแก้โค้ดเมื่อโมเดลเปลี่ยน"] },
    { title: "Demo Ready", points: ["เตรียม Script, Screenshots, และ Video สำหรับ Portfolio"] }
  ],
  demoScript: [
    { step: "1. UI Skeleton", description: "โครงสร้างหน้าเว็บและ Sidebar", code: "st.title('AI Demo')\nif st.button('Check API'): ..." },
    { step: "2. Dynamic Form", description: "วนลูปสร้าง Input Widget", code: "inputs = {}\nfor f in features: inputs[f] = st.number_input(f)" },
    { step: "3. API Call", description: "ส่ง Request ไป API", code: "r = requests.post(URL, json={'features': inputs})" }
  ],
  workshopSteps: [
    { title: "Workshop A: UI Build", steps: ["Create ui/app.py & config.py", "Connect to Local API", "Test Error States"] },
    { title: "Workshop B: Demo Pack", steps: ["Create docs/ui_usage.md", "Create docs/demo_checklist.md", "Record Short Demo"] }
  ],
  exercises: [
    { level: "Easy", title: "Example Button", description: "เพิ่มปุ่ม 'Load Example' เพื่อกรอกค่าอัตโนมัติ" },
    { level: "Medium", title: "Probability Graph", description: "เพิ่ม Bar Chart แสดงค่า Probability Comparison" },
    { level: "Challenge", title: "Batch Predict", description: "รองรับ File Upload (CSV) เพื่อทำนายหลายแถวพร้อมกัน" }
  ],
  debugCorner: [
    { problem: "FileNotFound features.json", solution: "รัน Streamlit จาก Root Directory" },
    { problem: "ConnectionError", solution: "ตรวจสอบว่า API (Uvicorn) รันอยู่หรือไม่" },
    { problem: "API 400 Error", solution: "ตรวจสอบ Payload ที่ส่งว่า Key ตรงกับ API Schema หรือไม่" }
  ],
  quiz: [
    { id: 1, question: "UI เชื่อม Model ผ่าน?", options: ["Joblib", "FastAPI", "SQL", "GPU"], correctAnswer: 1, explanation: "Frontend (UI) คุยกับ Backend (Model) ผ่าน REST API" },
    { id: 2, question: "ทำไมต้องมี Loading?", options: ["สวย", "UX: รู้ว่าระบบทำงานอยู่", "F1", "CORS"], correctAnswer: 1, explanation: "เพื่อไม่ให้ผู้ใช้คิดว่าโปรแกรมค้าง" },
    { id: 3, question: "ถ้า API ล่ม?", options: ["เงียบ", "แจ้ง Error Message", "ปิดโปรแกรม", "เปลี่ยน Model"], correctAnswer: 1, explanation: "Fail Gracefully: แจ้งผู้ใช้ให้ทราบปัญหา" },
    { id: 4, question: "Form จาก features.json ดีอย่างไร?", options: ["ยาว", "ลดผิด/ตรง Contract", "PII", "คะแนนเพิ่ม"], correctAnswer: 1, explanation: "ทำให้ UI และ API ซิงค์กันเสมอ ลด Human Error" },
    { id: 5, question: "ไม่ควร Log อะไรใน UI?", options: ["Latency", "Status", "Event", "Raw Input"], correctAnswer: 3, explanation: "Privacy Concern" },
    { id: 6, question: "ข้อมูลใดสร้างความน่าเชื่อถือ?", options: ["สี", "Version/Threshold", "ชื่อครู", "จำนวนไฟล์"], correctAnswer: 1, explanation: "Metadata ช่วยยืนยันที่มาของผลลัพธ์" },
    { id: 7, question: "คำสั่งรัน UI?", options: ["uvicorn", "streamlit run app.py", "python app.py", "node"], correctAnswer: 1, explanation: "Streamlit CLI command" },
    { id: 8, question: "API 400 หมายถึง?", options: ["ปกติ", "Client Error (Payload ผิด)", "Server Error", "Success"], correctAnswer: 1, explanation: "Bad Request: ข้อมูลที่ส่งไปไม่ถูกต้อง" },
    { id: 9, question: "Demo Checklist เพื่อ?", options: ["ใหญ่", "Portfolio Ready", "แม่น", "เร็ว"], correctAnswer: 1, explanation: "เพื่อให้มั่นใจว่ามี Material ครบสำหรับนำเสนอผลงาน" },
    { id: 10, question: "Week 8 DoD?", options: ["UI Only", "UI + API + Docs", "Docker", "Cloud"], correctAnswer: 1, explanation: "ระบบครบวงจร (Frontend + Backend) พร้อมเอกสาร" }
  ]
};

export const WEEK_9_LESSON_PLAN: LessonPlan = {
  week: 9,
  topic: "Dockerize API + UI + Compose",
  timeline: [
    { time: "0:00 - 0:10", activity: "Recap Week 8", detail: "ทบทวน: UI calling API locally. Goal: Run anywhere with Docker." },
    { time: "0:10 - 0:30", activity: "Theory: Docker Basics", detail: "Image vs Container, Volume, Compose, Dockerfile syntax" },
    { time: "0:30 - 0:45", activity: "Project Prep", detail: "Structure files, .dockerignore, Environment Variables" },
    { time: "0:45 - 1:10", activity: "Live Demo 1", detail: "Dockerfile for FastAPI (API Service)" },
    { time: "1:10 - 1:35", activity: "Live Demo 2", detail: "Dockerfile for Streamlit (UI Service)" },
    { time: "1:35 - 2:05", activity: "Workshop A", detail: "Build & Run API/UI containers separately" },
    { time: "2:05 - 2:30", activity: "Live Demo 3", detail: "Docker Compose: Orchestrating both services + Healthcheck" },
    { time: "2:30 - 2:50", activity: "Workshop B", detail: "Create docker-compose.yml, Runbook, Checklist" },
    { time: "2:50 - 3:00", activity: "Wrap-up & Quiz", detail: "Final check & Quiz" }
  ],
  contentSummary: [
    { title: "Docker", points: ["Standardizes environments (runs the same on your laptop and cloud).", "Container: Running instance of an Image."] },
    { title: "Docker Compose", points: ["Manage multi-container apps (API + UI).", "Handles networking and service discovery (http://api:8000)."] },
    { title: "Healthcheck", points: ["Ensures API is ready before UI starts (depends_on)."] }
  ],
  demoScript: [
    { step: "1. Dockerfile.api", description: "Blueprint for API", code: "FROM python:3.10-slim\nCOPY . .\nCMD ['uvicorn', 'api.main:app', '--host', '0.0.0.0']" },
    { step: "2. Dockerfile.ui", description: "Blueprint for UI", code: "FROM python:3.10-slim\nCMD ['streamlit', 'run', 'ui/app.py']" },
    { step: "3. docker-compose.yml", description: "Orchestration config", code: "services:\n  api:\n    build: .\n  ui:\n    build: .\n    depends_on: [api]" }
  ],
  workshopSteps: [
    { title: "Workshop A: Containers", steps: ["Create .dockerignore", "Build API Image", "Run API Container", "Build & Run UI Container"] },
    { title: "Workshop B: Compose & Docs", steps: ["Create docker-compose.yml", "Run 'docker compose up'", "Write docs/runbook.md"] }
  ],
  exercises: [
    { level: "Easy", title: "Readme Update", description: "Add Docker commands (build, up, down) to README.md" },
    { level: "Medium", title: "Restart Policy", description: "Add 'restart: unless-stopped' to compose file" },
    { level: "Challenge", title: "Optimization", description: "Reduce image size using multi-stage builds or specific requirements files" }
  ],
  debugCorner: [
    { problem: "Daemon not running", solution: "Start Docker Desktop application" },
    { problem: "Port conflict", solution: "Change host port in compose (e.g., 8001:8000)" },
    { problem: "UI can't reach API", solution: "Use service name (http://api:8000), NOT localhost" }
  ],
  quiz: [
    { id: 1, question: "Docker Image คือ?", options: ["โปรแกรมรันอยู่", "แม่พิมพ์ (Blueprint)", "CSV", "Healthcheck"], correctAnswer: 1, explanation: "Image คือต้นแบบที่ใช้สร้าง Container" },
    { id: 2, question: "Container คือ?", options: ["Config", "Instance ที่รันจาก Image", "Folder", "Package"], correctAnswer: 1, explanation: "คือ Environment ที่โปรแกรมทำงานอยู่จริง" },
    { id: 3, question: "Docker Compose เพื่อ?", options: ["Model แม่น", "รันหลาย Service พร้อมกัน", "ไม่ต้องเขียนโค้ด", "No Logs"], correctAnswer: 1, explanation: "Orchestration tool สำหรับจัดการ Multi-container applications" },
    { id: 4, question: "UI ใน Container เรียก API ผ่าน?", options: ["localhost", "Service Name (http://api:8000)", "127.0.0.1", "0.0.0.0"], correctAnswer: 1, explanation: "ใน Docker Network ต้องเรียกผ่านชื่อ Service" },
    { id: 5, question: "Healthcheck เพื่อ?", options: ["Build เร็ว", "รอ Service พร้อมก่อนเริ่มตัวอื่น", "UI สวย", "เปลี่ยน Port"], correctAnswer: 1, explanation: "ป้องกัน UI เริ่มทำงานก่อนที่ API จะพร้อมให้บริการ" },
    { id: 6, question: ".dockerignore ช่วย?", options: ["เพิ่มขนาด", "ลดไฟล์ขยะ/Build เร็ว/ปลอดภัย", "Threshold", "F1"], correctAnswer: 1, explanation: "ป้องกันไฟล์ที่ไม่จำเป็น (เช่น .env, venv) หลุดเข้าไปใน Image" },
    { id: 7, question: "ถ้า Port 8000 ชน?", options: ["ลบ Docker", "เปลี่ยน Port Mapping", "เพิ่ม Degree", "แก้ Meta"], correctAnswer: 1, explanation: "เปลี่ยน Port ฝั่ง Host ใน docker-compose.yml" },
    { id: 8, question: "ทำไมห้ามใช้ localhost ใน Container?", options: ["เน็ตช้า", "มันหมายถึงตัว Container เอง", "FastAPI ไม่รองรับ", "Compose ไม่ชอบ"], correctAnswer: 1, explanation: "Localhost ใน Container อ้างอิงถึงตัวมันเอง ไม่ใช่เครื่อง Host หรือ Service อื่น" },
    { id: 9, question: "คำสั่งรัน Compose?", options: ["docker run", "docker compose up --build", "pip install", "uvicorn"], correctAnswer: 1, explanation: "Build และ Start services ตามที่ระบุใน yml" },
    { id: 10, question: "Week 9 DoD?", options: ["Dockerfile", "Compose Up + UI Predict Success", "Cloud", "Drift"], correctAnswer: 1, explanation: "ระบบต้องรันได้สมบูรณ์ด้วยคำสั่งเดียว" }
  ]
};

export const WEEK_10_LESSON_PLAN: LessonPlan = {
  week: 10,
  topic: "Cloud Deployment & CI/CD",
  timeline: [
    { time: "0:00 - 0:10", activity: "Recap Week 9", detail: "Reviewed Docker (Local). Goal: Deploy to Cloud so anyone can use it." },
    { time: "0:10 - 0:30", activity: "Theory: Cloud & Secrets", detail: "Cloud PaaS (Streamlit Cloud), Secrets Management (API Keys)" },
    { time: "0:30 - 0:45", activity: "Monitoring Basics", detail: "Uptime checks & Error logging principles" },
    { time: "0:45 - 1:15", activity: "Live Demo 1", detail: "Deploying to Streamlit Cloud (Reqs, Secrets)" },
    { time: "1:15 - 1:40", activity: "Live Demo 2", detail: "Basic Monitoring (App health)" },
    { time: "1:40 - 2:10", activity: "Workshop A", detail: "Deploy Student Apps to Cloud" },
    { time: "2:10 - 2:35", activity: "Live Demo 3", detail: "CI/CD Basics (GitHub Actions for Tests)" },
    { time: "2:35 - 2:55", activity: "Workshop B", detail: "Add CI workflow & Verify Deployment" },
    { time: "2:55 - 3:00", activity: "Wrap-up & Quiz", detail: "Final check & Quiz" }
  ],
  contentSummary: [
    { title: "Cloud Deployment", points: ["Accessible URL for users.", "Scalable infrastructure (managed by provider)."] },
    { title: "Secrets Management", points: ["NEVER commit .env files.", "Use Cloud dashboard to set Environment Variables."] },
    { title: "CI/CD", points: ["Continuous Integration: Run tests automatically on push.", "Prevents broken code from reaching production."] }
  ],
  demoScript: [
    { step: "1. Prepare Repo", description: "Clean requirements.txt", code: "pip freeze > requirements.txt # Ensure only needed libs" },
    { step: "2. Secrets Config", description: "Streamlit Secrets (Local vs Cloud)", code: "# .streamlit/secrets.toml (Local)\napi_key = 'xyz'" },
    { step: "3. GitHub Action", description: "Simple Test Workflow", code: "name: CI\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps: ... run pytest" }
  ],
  workshopSteps: [
    { title: "Workshop A: Cloud Deploy", steps: ["Push code to GitHub", "Connect Streamlit Cloud", "Add Secrets in Dashboard", "Verify Live URL"] },
    { title: "Workshop B: CI/CD", steps: ["Create .github/workflows/main.yml", "Push change to trigger CI", "Check Action Status"] }
  ],
  exercises: [
    { level: "Easy", title: "Badge", description: "Add 'Streamlit App' and 'CI Passing' badges to README" },
    { level: "Medium", title: "Fail Test", description: "Intentionally break a test and see CI fail" },
    { level: "Challenge", title: "Pre-commit", description: "Setup pre-commit hook to run tests locally before push" }
  ],
  debugCorner: [
    { problem: "ModuleNotFound on Cloud", solution: "Ensure all libraries are in requirements.txt" },
    { problem: "Secrets missing", solution: "Add secrets in Streamlit Cloud Dashboard (Advanced Settings)" },
    { problem: "CI Failed", solution: "Check Action logs, ensure pytest passes locally" }
  ],
  quiz: [
    { id: 1, question: "Why deploy to Cloud?", options: ["Run on my laptop", "Accessible to anyone via URL", "No internet needed", "Cheaper than free"], correctAnswer: 1, explanation: "Cloud hosting makes your application accessible over the internet." },
    { id: 2, question: "Where do API Keys go?", options: ["In code", "In GitHub Repo", "Secrets Management / Env Vars", "README"], correctAnswer: 2, explanation: "Never expose secrets in code or version control. Use environment variables." },
    { id: 3, question: "CI stands for?", options: ["Cloud Integration", "Continuous Integration", "Code Inspection", "Cyber Intelligence"], correctAnswer: 1, explanation: "Continuous Integration automates merging and testing code." },
    { id: 4, question: "What file lists dependencies?", options: ["package.json", "requirements.txt", "docker-compose.yml", "main.py"], correctAnswer: 1, explanation: "Standard Python dependency file." },
    { id: 5, question: "If CI fails, you should?", options: ["Deploy anyway", "Fix the code/test", "Delete the test", "Ignore it"], correctAnswer: 1, explanation: "CI protects production; fix the issue before proceeding." },
    { id: 6, question: "Streamlit Cloud connects to?", options: ["Your Hard Drive", "GitHub Repository", "Google Drive", "USB Stick"], correctAnswer: 1, explanation: "It pulls code directly from your GitHub repo." },
    { id: 7, question: ".gitignore is for?", options: ["Important files", "Files to EXCLUDE from git (like secrets)", "Documentation", "Images"], correctAnswer: 1, explanation: "Prevents tracking of sensitive or unnecessary files." },
    { id: 8, question: "GitHub Actions is used for?", options: ["Social Media", "Automating workflows (CI/CD)", "Chatting", "Hosting DB"], correctAnswer: 1, explanation: "Automation platform for build, test, and deployment pipelines." },
    { id: 9, question: "Monitoring helps detect?", options: ["New features", "Downtime & Errors", "More users", "Better UI"], correctAnswer: 1, explanation: "Keeps track of application health and issues." },
    { id: 10, question: "Week 10 DoD?", options: ["Local Docker", "Live Cloud URL + CI Setup", "Design", "Concept"], correctAnswer: 1, explanation: "A deployed, automated, and running application." }
  ]
};

export const WEEK_11_LESSON_PLAN: LessonPlan = {
  week: 11,
  topic: "Monitoring & Basic MLOps",
  timeline: [
    { time: "0:00 - 0:10", activity: "Recap Week 10", detail: "Deployed to Cloud. Now ensure it stays healthy." },
    { time: "0:10 - 0:30", activity: "Theory: Monitoring 101", detail: "Logs vs Metrics vs Alerts. Why monitoring is crucial." },
    { time: "0:30 - 0:45", activity: "Privacy Logging", detail: "What to log vs What NOT to log (PII, Raw Data)." },
    { time: "0:45 - 1:10", activity: "Live Demo 1", detail: "Implement Structured Logging (JSONL) in FastAPI" },
    { time: "1:10 - 1:35", activity: "Live Demo 2", detail: "Metrics Aggregation Script (Pandas)" },
    { time: "1:35 - 2:05", activity: "Workshop A", detail: "Add Logger & Generate Traffic" },
    { time: "2:05 - 2:25", activity: "Live Demo 3", detail: "Mini Monitoring Dashboard (Streamlit)" },
    { time: "2:25 - 2:40", activity: "Live Demo 4", detail: "Model Versioning & Incident Runbook" },
    { time: "2:40 - 2:50", activity: "Workshop B", detail: "Create Docs: Privacy Policy, Runbook, Registry" },
    { time: "2:50 - 3:00", activity: "Wrap-up & Quiz", detail: "Final check & Quiz" }
  ],
  contentSummary: [
    { title: "Structured Logging", points: ["Log events as JSON lines (JSONL).", "Easy to parse and analyze."] },
    { title: "Key Metrics", points: ["Error Rate, Latency (p95), Request Volume.", "Drift Signals: Error/Latency spikes."] },
    { title: "Operations Docs", points: ["Runbook: Steps to fix incidents.", "Model Registry: Track versions (v5, v6)."] }
  ],
  demoScript: [
    { step: "1. api/logger.py", description: "Safe JSON logger", code: "def append_log(event): with open('logs.jsonl', 'a') as f: f.write(json.dumps(event)+'\\n')" },
    { step: "2. src/metrics.py", description: "Calculate stats", code: "df = pd.read_json('logs.jsonl', lines=True)\nprint(df['status'].value_counts())" },
    { step: "3. monitor/app.py", description: "Dashboard", code: "st.metric('Total Requests', len(df))\nst.metric('Error Rate', error_rate)" }
  ],
  workshopSteps: [
    { title: "Workshop A: Logging", steps: ["Create api/logger.py", "Integrate into main.py (Success/Error)", "Generate logs by using the app"] },
    { title: "Workshop B: Ops", steps: ["Build Monitor Dashboard", "Write Privacy Policy", "Write Incident Runbook"] }
  ],
  exercises: [
    { level: "Easy", title: "Time Filter", description: "Add a slider to filter logs by last 1 hour in Dashboard" },
    { level: "Medium", title: "Error Budget", description: "Show warning if Error Rate > 5%" },
    { level: "Challenge", title: "Drift Signal", description: "Plot histogram of prediction probabilities to detect drift" }
  ],
  debugCorner: [
    { problem: "Logs not created", solution: "Check directory permissions & ensure API is called" },
    { problem: "JSON Decode Error", solution: "Skip empty lines in metrics script" },
    { problem: "Missing Latency", solution: "Calculate time.time() difference before logging" }
  ],
  quiz: [
    { id: 1, question: "Logs vs Metrics?", options: ["Same thing", "Logs=Events, Metrics=Numbers", "Metrics have PII", "Logs are useless"], correctAnswer: 1, explanation: "Logs detail individual events; Metrics aggregate them into trends." },
    { id: 2, question: "Best format for logs?", options: ["Random text", "JSONL (Structured)", "PNG", "SQL"], correctAnswer: 1, explanation: "JSONL is machine-readable and easy to parse." },
    { id: 3, question: "What must NOT be logged?", options: ["Request ID", "Latency", "Raw User PII", "Model Version"], correctAnswer: 2, explanation: "Never log PII or raw input data to protect privacy." },
    { id: 4, question: "Important API Metrics?", options: ["UI Color", "Error Rate & Latency p95", "File count", "Repo size"], correctAnswer: 1, explanation: "These indicate the health and performance of the service." },
    { id: 5, question: "First step in incident?", options: ["Change model", "Check Logs & Health", "Delete logs", "Stop UI"], correctAnswer: 1, explanation: "Diagnose before acting." },
    { id: 6, question: "Model Registry contains?", options: ["Friend list", "Versions + Artifacts + Policy", "Just model file", "Demo images"], correctAnswer: 1, explanation: "It tracks model lineage and deployment rules." },
    { id: 7, question: "Simple Drift Signal?", options: ["Train accuracy", "Error/Latency Spikes", "Graph color", "RAM usage"], correctAnswer: 1, explanation: "Sudden changes in operational metrics often indicate drift." },
    { id: 8, question: "Runbook purpose?", options: ["Better accuracy", "Systematic Incident Response", "Smaller docker", "Faster UI"], correctAnswer: 1, explanation: "A guide for operators to resolve issues quickly." },
    { id: 9, question: "Risk of keeping logs too long?", options: ["Port conflict", "Privacy/Space issues", "Lower accuracy", "Changed requirements"], correctAnswer: 1, explanation: "Logs consume space and increase privacy risk over time." },
    { id: 10, question: "Week 11 DoD?", options: ["Dashboard only", "Logs + Metrics + Dashboard + Docs", "Cloud URL", "Capstone done"], correctAnswer: 1, explanation: "A complete monitoring loop with documentation." }
  ]
};

export const WEEK_12_LESSON_PLAN: LessonPlan = {
  week: 12,
  topic: "Capstone Wrap-up (Enterprise)",
  timeline: [
    { time: "0:00 - 0:10", activity: "Recap & Goals", detail: "Review full stack journey. Goal: Finalize for Enterprise Release." },
    { time: "0:10 - 0:25", activity: "Portfolio Storytelling", detail: "How to pitch your project: Problem -> Solution -> Impact." },
    { time: "0:25 - 0:50", activity: "Live Demo 1", detail: "Create a Pro README (Structure, Demo Links, Instructions)." },
    { time: "0:50 - 1:20", activity: "Live Demo 2", detail: "Enterprise Docs: Charter, Datasheet, Model Card, Test Plan." },
    { time: "1:20 - 1:55", activity: "Workshop A", detail: "Complete README & Documentation Pack." },
    { time: "1:55 - 2:20", activity: "Live Demo 3", detail: "Final QA Checklist (Security, PDPA, E2E Tests)." },
    { time: "2:20 - 2:35", activity: "Live Demo 4", detail: "Release Management: Git Tags & Changelog." },
    { time: "2:35 - 2:50", activity: "Workshop B", detail: "Final Polish, Tag Release, and 3-min Presentation Prep." },
    { time: "2:50 - 3:00", activity: "Wrap-up & Quiz", detail: "Course Completion." }
  ],
  contentSummary: [
    { title: "Portfolio Ready", points: ["Demo URL/Video, Clear README, Metrics, Enterprise Docs."] },
    { title: "Documentation", points: ["Model Card (Transparency), Datasheet (Data Origin), Runbook (Ops)."] },
    { title: "Release Discipline", points: ["Semantic Versioning (v1.0.0), Changelog, Git Tags."] }
  ],
  demoScript: [
    { step: "1. README.md", description: "Professional structure", code: "# Project Name\n## Demo\n## Solution\n## Tech Stack\n## How to Run" },
    { step: "2. Model Card", description: "docs/model_card.md", code: "## Model Details\nType: Random Forest\nVersion: v5\n## Intended Use\n..." },
    { step: "3. Git Tag", description: "Release v1.0.0", code: "git tag v1.0.0\ngit push --tags" }
  ],
  workshopSteps: [
    { title: "Workshop A: Docs", steps: ["Fill README template", "Create docs/ folder with 5 key documents", "Add screenshots"] },
    { title: "Workshop B: Release", steps: ["Run Final QA (Tests & Health)", "Create CHANGELOG.md", "Tag v1.0.0", "Rehearse Pitch"] }
  ],
  exercises: [
    { level: "Easy", title: "One-page Summary", description: "Add a concise summary section to README." },
    { level: "Medium", title: "Known Issues", description: "Document known limitations and future plans in docs/next_steps.md." },
    { level: "Challenge", title: "Makefile", description: "Create a Makefile for one-click setup/test/run." }
  ],
  debugCorner: [
    { problem: "Demo crashes", solution: "Record a fallback video. Use Docker Compose locally." },
    { problem: "Secrets in repo", solution: "Remove immediately, rotate keys, use env vars." },
    { problem: "Missing Metrics", solution: "Use data from Week 6 (Eval) or Week 11 (Monitoring)." }
  ],
  quiz: [
    { id: 1, question: "Most important for Portfolio?", options: ["Complex code", "Working Demo & Clear README", "Nice colors", "Deep Learning only"], correctAnswer: 1, explanation: "Recruiters/Clients need to see it works and understand what it does quickly." },
    { id: 2, question: "Model Card purpose?", options: ["Better accuracy", "Transparency (Usage, Limits, Metrics)", "Replace README", "Replace Tests"], correctAnswer: 1, explanation: "It explains what the model is, its intended use, and limitations." },
    { id: 3, question: "Datasheet explains?", options: ["PII storage", "Data source, collection, bias", "UI design", "Deployment speed"], correctAnswer: 1, explanation: "It documents the dataset's origin, composition, and potential biases." },
    { id: 4, question: "Runbook is for?", options: ["Higher accuracy", "Operational procedures (Start/Fix/Rollback)", "Smaller docker", "Skipping tests"], correctAnswer: 1, explanation: "It provides instructions for maintaining and troubleshooting the system." },
    { id: 5, question: "Release Tag v1.0.0?", options: ["Auto-update model", "Mark a stable, revertible point", "Load UI faster", "Remove bugs"], correctAnswer: 1, explanation: "It marks a specific point in history as a release version." },
    { id: 6, question: "Security Checklist confirms?", options: ["UI color", "No PII & No Raw Logs", "Notebook count", "Commit count"], correctAnswer: 1, explanation: "Ensures basic security and privacy standards are met." },
    { id: 7, question: "If online demo fails?", options: ["Delete repo", "Use Fallback Video/Screenshots", "Disable healthcheck", "Change language"], correctAnswer: 1, explanation: "Always have a backup plan for presentations." },
    { id: 8, question: "README Results should have?", options: ["'It works'", "Quantitative Metrics & Limitations", "Just photos", "Full code"], correctAnswer: 1, explanation: "Concrete numbers build trust and show objective performance." },
    { id: 9, question: "Go/No-Go decision based on?", options: ["Gut feeling", "QA Checklist (Tests, Health, Docs)", "Github stars", "Graph color"], correctAnswer: 1, explanation: "A systematic check ensures readiness." },
    { id: 10, question: "Week 12 DoD?", options: ["Just docs", "Full Pack (Docs, Demo, Tag, Preso)", "New model", "Change language"], correctAnswer: 1, explanation: "The complete package ready for handover or showcase." }
  ]
};

export const WORKSHOP_GUIDES: Record<string, WorkshopGuide> = {
  "track-1": {
    trackId: "track-1",
    title: "Chatbot / NLP Assistant Workshop",
    projectBrief: {
      title: "Project Brief",
      content: [
        "Goal: Build a domain-specific chatbot (e.g., HR Policy, Legal QA).",
        "Core Tech: RAG (Retrieval Augmented Generation) using Gemini or OpenAI.",
        "Interface: Streamlit Chat interface."
      ]
    },
    dataPlan: {
      title: "Data Strategy",
      content: [
        "Source: PDF Documents, Text files, or FAQ CSVs.",
        "Processing: Text Chunking (RecursiveCharacterTextSplitter).",
        "Storage: Vector Database (ChromaDB or FAISS)."
      ]
    },
    modelPlan: {
      title: "Model Architecture",
      content: [
        "LLM: Gemini-1.5-Flash (Fast & Cost-effective).",
        "Embedding: text-embedding-004.",
        "Framework: LangChain for orchestration."
      ]
    },
    notebookOutline: [
      {
        title: "1. Data Ingestion & Embedding",
        content: [
          "Load PDF files.",
          "Split text into chunks.",
          "Generate embeddings and save to VectorDB."
        ],
        code: "from langchain_community.document_loaders import PyPDFLoader\nloader = PyPDFLoader('policy.pdf')\ndocs = loader.load()"
      },
      {
        title: "2. RAG Pipeline",
        content: [
          "Create Retriever interface.",
          "Setup QA Chain with Prompt Template.",
          "Test with sample queries."
        ]
      }
    ],
    minimalCode: [
      {
        fileName: "app.py",
        language: "python",
        code: "import streamlit as st\nfrom langchain_google_genai import ChatGoogleGenerativeAI\n\nst.title('AI Assistant')\n\nif 'messages' not in st.session_state:\n    st.session_state.messages = []\n\n# ... chat logic ..."
      }
    ],
    deployment: [
      {
        title: "Deployment Steps",
        content: [
          "Create `secrets.toml` for API Keys.",
          "Push to GitHub.",
          "Deploy on Streamlit Cloud."
        ]
      }
    ],
    testing: {
      title: "Testing & Eval",
      content: [
        "Test for Hallucinations (Verify answers against docs).",
        "Test with adversarial inputs (Jailbreak attempts)."
      ]
    },
    security: {
      title: "Security",
      content: [
        "Do not log user PII.",
        "Use API Key rotation."
      ]
    },
    portfolio: {
      title: "Portfolio Items",
      content: [
        "Demo Video (Screen recording).",
        "GitHub Repo with clean Readme.",
        "Sample Q&A logs."
      ]
    },
    rubric: [
      { criteria: "Retrieval Accuracy (Finds correct doc)", score: 40 },
      { criteria: "Response Quality (Clear & Concise)", score: 30 },
      { criteria: "UI/UX (Chat experience)", score: 30 }
    ]
  },
  "track-2": {
    trackId: "track-2",
    title: "Image Recognition / CV Workshop",
    projectBrief: {
      title: "Project Brief",
      content: [
        "Goal: Build an object detection or classification app (e.g., Mask Detection, Plant Disease).",
        "Core Tech: Transfer Learning or Pre-trained models (YOLO, MobileNet).",
        "Interface: Streamlit with Camera Input."
      ]
    },
    dataPlan: {
      title: "Data Strategy",
      content: [
        "Source: Kaggle, Roboflow, or Self-collected.",
        "Preprocessing: Resize, Normalize, Augmentation.",
        "Split: Train/Val/Test (70/20/10)."
      ]
    },
    modelPlan: {
      title: "Model Architecture",
      content: [
        "Base: MobileNetV2 (Feature Extractor).",
        "Head: Dense layers for custom classes.",
        "Optimizer: Adam."
      ]
    },
    notebookOutline: [
      {
        title: "1. Data Loading & Augmentation",
        content: ["Use ImageDataGenerator.", "Visualize batch of images."],
        code: "train_datagen = ImageDataGenerator(rescale=1./255, rotation_range=20)"
      },
      {
        title: "2. Transfer Learning",
        content: ["Load MobileNetV2 (include_top=False).", "Add custom classification head.", "Train for 5-10 epochs."]
      }
    ],
    minimalCode: [
      {
        fileName: "app.py",
        language: "python",
        code: "import streamlit as st\nfrom PIL import Image\nimport numpy as np\n\nimg_file = st.camera_input('Take a picture')"
      }
    ],
    deployment: [
      {
        title: "Deployment",
        content: ["Ensure `requirements.txt` includes tensorflow-cpu (for lighter cloud build)."]
      }
    ],
    testing: {
      title: "Testing",
      content: ["Test with varying lighting conditions.", "Confusion Matrix analysis."]
    },
    security: {
      title: "Security",
      content: ["No saving of user images on server (Process & Forget)."]
    },
    portfolio: {
      title: "Portfolio",
      content: ["Before/After prediction screenshots.", "Accuracy plots."]
    },
    rubric: [
      { criteria: "Model Accuracy on Test Set", score: 40 },
      { criteria: "Real-time Performance", score: 30 },
      { criteria: "Error Handling (No image)", score: 30 }
    ]
  },
  "track-3": {
    trackId: "track-3",
    title: "Predictive Analytics Workshop",
    projectBrief: {
      title: "Project Brief",
      content: ["Goal: Forecast business metrics (Sales, Churn, Price).", "Core Tech: Regression/Classification on Tabular Data.", "Interface: Dashboard with Input Forms."]
    },
    dataPlan: {
      title: "Data",
      content: ["Clean CSV data.", "Handle Missing Values & Outliers.", "Feature Engineering."]
    },
    modelPlan: {
      title: "Model",
      content: ["XGBoost or Random Forest.", "Hyperparameter Tuning with GridSearchCV."]
    },
    notebookOutline: [
      { title: "EDA", content: ["Correlation Heatmap", "Distribution Plots"] },
      { title: "Modeling", content: ["Train/Test Split", "Fit Model", "Feature Importance"] }
    ],
    minimalCode: [ { fileName: "app.py", language: "python", code: "st.number_input('Input feature X')" } ],
    deployment: [ { title: "Deploy", content: ["Streamlit Cloud"] } ],
    testing: { title: "Test", content: ["Test with extreme values."] },
    security: { title: "Security", content: ["No PII in dataset."] },
    portfolio: { title: "Portfolio", content: ["Interactive Graphs."] },
    rubric: [ { criteria: "RMSE/Accuracy", score: 50 }, { criteria: "Data Insights", score: 30 }, { criteria: "Dashboard Usability", score: 20 } ]
  },
  "track-4": {
    trackId: "track-4",
    title: "IoT & Edge AI Workshop",
    projectBrief: {
      title: "Project Brief",
      content: ["Goal: AI on low-power devices.", "Core Tech: TFLite / ONNX.", "Interface: Flask API or MQTT."]
    },
    dataPlan: { title: "Data", content: ["Sensor logs."] },
    modelPlan: { title: "Model", content: ["Quantized Neural Network."] },
    notebookOutline: [ { title: "Quantization", content: ["Convert Keras model to TFLite"] } ],
    minimalCode: [ { fileName: "edge.py", language: "python", code: "interpreter = tf.lite.Interpreter(model_path='model.tflite')" } ],
    deployment: [ { title: "Deploy", content: ["Docker on Raspberry Pi"] } ],
    testing: { title: "Test", content: ["Inference Time check."] },
    security: { title: "Security", content: ["Secure MQTT connection."] },
    portfolio: { title: "Portfolio", content: ["Photo of physical setup."] },
    rubric: [ { criteria: "Performance (FPS/Latency)", score: 40 }, { criteria: "System Integration", score: 40 }, { criteria: "Docs", score: 20 } ]
  }
};