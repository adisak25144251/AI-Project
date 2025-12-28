import React, { useContext } from 'react';
import { LanguageContext } from '../contexts';
import { motion } from 'framer-motion';
import { BookOpen, Terminal, Rocket, GraduationCap, HelpCircle, CheckCircle2 } from 'lucide-react';

const StudentGuide: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const texts = {
    TH: {
      title: "คู่มือการเรียนรู้สู่ความสำเร็จ",
      subtitle: "ขั้นตอนการเตรียมตัว เครื่องมือที่ต้องใช้ และแนวทางการเรียนให้จบใน 12 สัปดาห์",
      steps: [
        {
          title: "1. เตรียมเครื่องมือ (Setup)",
          desc: "ไม่ต้องลงโปรแกรมหนักเครื่อง เราใช้ Cloud ทั้งหมด",
          items: [
            "Google Account (สำหรับใช้ Google Colab ฟรี)",
            "GitHub Account (สำหรับเก็บโค้ดและ Portfolio)",
            "Hugging Face Account (สำหรับโมเดล AI ขั้นสูง)"
          ],
          icon: <Terminal className="w-6 h-6 text-white" />
        },
        {
          title: "2. เข้าเรียน & Workshop",
          desc: "เรียนรู้ผ่านการลงมือทำจริงทุกสัปดาห์",
          items: [
            "ดูตารางเรียนในเมนู Curriculum",
            "เปิด Google Colab ตามโจทย์ประจำสัปดาห์",
            "ทำ Quiz ท้ายบทเพื่อวัดความเข้าใจ (ต้องได้ > 80%)"
          ],
          icon: <BookOpen className="w-6 h-6 text-white" />
        },
        {
          title: "3. เลือก Track & ทำโปรเจกต์",
          desc: "เริ่มสัปดาห์ที่ 4 เลือกสายที่ชอบ",
          items: [
            "Chatbot, Vision, Analytics, หรือ IoT",
            "ใช้ Project Planner ช่วยวางแผน",
            "ปรึกษา AI Tutor เมื่อติดปัญหา"
          ],
          icon: <Rocket className="w-6 h-6 text-white" />
        },
        {
          title: "4. Deploy & รับใบ Cer",
          desc: "ส่งงานสุดท้ายและนำเสนอ",
          items: [
            "Deploy Web App ขึ้น Streamlit Cloud",
            "เขียน Readme ใน GitHub ให้สวยงาม",
            "กดรับ Certificate ในระบบเมื่อผ่านเกณฑ์"
          ],
          icon: <GraduationCap className="w-6 h-6 text-white" />
        }
      ],
      faqTitle: "คำถามที่พบบ่อย (FAQ)",
      faqs: [
        { q: "ต้องเขียนโค้ดเก่งไหม?", a: "ไม่จำเป็น คอร์สนี้ออกแบบมาให้เริ่มจาก Python พื้นฐาน และมี AI Tutor ช่วย Debug ตลอดเวลา" },
        { q: "เรียนย้อนหลังได้ไหม?", a: "ได้ตลอดชีพ! คุณสามารถจัดสรรเวลาเรียนได้ตามสะดวก แต่แนะนำให้ทำ Workshop ส่งทุกสัปดาห์เพื่อความต่อเนื่อง" },
        { q: "คอมพิวเตอร์ต้องแรงไหม?", a: "ไม่จำเป็น เพราะเราใช้ Google Colab รันโค้ดบน Cloud ของ Google แค่มีเน็ตก็เรียนได้" }
      ]
    },
    EN: {
      title: "Student Handbook",
      subtitle: "Your guide to mastering AI: Setup, Workflow, and Success Path in 12 weeks.",
      steps: [
        {
          title: "1. Tool Setup",
          desc: "Zero installation required. We run on the Cloud.",
          items: [
            "Google Account (For Google Colab)",
            "GitHub Account (For Code & Portfolio)",
            "Hugging Face Account (For Advanced Models)"
          ],
          icon: <Terminal className="w-6 h-6 text-white" />
        },
        {
          title: "2. Learn & Workshop",
          desc: "Action-oriented learning every week.",
          items: [
            "Check schedule in Curriculum tab",
            "Open Google Colab assignments",
            "Pass weekly Quizzes (> 80% score)"
          ],
          icon: <BookOpen className="w-6 h-6 text-white" />
        },
        {
          title: "3. Select Track & Build",
          desc: "Week 4: Choose your specialization.",
          items: [
            "Chatbot, Vision, Analytics, or IoT",
            "Use AI Project Planner to scope ideas",
            "Ask AI Tutor for instant help"
          ],
          icon: <Rocket className="w-6 h-6 text-white" />
        },
        {
          title: "4. Deploy & Certify",
          desc: "Finalize your masterpiece.",
          items: [
            "Deploy Web App to Streamlit Cloud",
            "Polish your GitHub Readme",
            "Claim your Certificate upon completion"
          ],
          icon: <GraduationCap className="w-6 h-6 text-white" />
        }
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "Do I need coding experience?", a: "No. We start with Python basics. Our AI Tutor is available 24/7 to help you debug and explain code." },
        { q: "Is it self-paced?", a: "Yes, you have lifetime access. However, we recommend completing weekly workshops to maintain momentum." },
        { q: "Do I need a GPU PC?", a: "No. We utilize Google Colab's free cloud GPUs. A standard laptop with internet is all you need." }
      ]
    }
  };

  const t = texts[lang];

  return (
    <div className="space-y-16 animate-fade-in pb-12" data-testid="guide-root">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto pt-8">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">{t.title}</h2>
        <p className="text-slate-600 text-lg leading-relaxed font-light">
          {t.subtitle}
        </p>
      </div>

      {/* Process Steps */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {t.steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-glass hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 blur-2xl"></div>
              </div>

              <div className="flex items-start gap-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-200">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recommended Tools Section */}
      <div className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 max-w-6xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[100px]"></div>

        <div className="relative z-10 text-center">
            <h3 className="text-3xl font-display font-bold mb-10">🧰 The Builder's Toolbox</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {[
                    { name: "Google Colab", desc: "Cloud Notebook", url: "https://colab.research.google.com" },
                    { name: "GitHub", desc: "Code Hosting", url: "https://github.com" },
                    { name: "Streamlit", desc: "App Framework", url: "https://streamlit.io" },
                    { name: "Hugging Face", desc: "Model Hub", url: "https://huggingface.co" }
                ].map((tool, i) => (
                    <a 
                        key={i} 
                        href={tool.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-colors"
                    >
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-900 font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                            {tool.name[0]}
                        </div>
                        <div>
                            <div className="font-bold">{tool.name}</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wider">{tool.desc}</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-indigo-600" />
            {t.faqTitle}
        </h3>
        <div className="space-y-4">
            {t.faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-indigo-200 transition-colors">
                    <h4 className="font-bold text-slate-800 mb-2 text-lg">Q: {faq.q}</h4>
                    <p className="text-slate-600 font-light leading-relaxed">A: {faq.a}</p>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default StudentGuide;