import React, { useContext, useEffect } from 'react';
import { Section } from '../types';
import { LanguageContext, NavigationContext } from '../contexts';
import { motion } from 'framer-motion';
import { logEvent } from '../utils/analytics';
import { ArrowRight, BookOpen, Rocket, CheckCircle2 } from 'lucide-react';

const Overview: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const { navigate } = useContext(NavigationContext);

  useEffect(() => {
    logEvent('page_view', { page: 'Overview', lang });
  }, [lang]);

  const content = {
    TH: {
      badge: "🚀 เปิดรับสมัครรุ่นใหม่ (Batch 4)",
      h1: "AI นวัตกรรมเปลี่ยนโลก:",
      h1Highlight: "จากไอเดียสู่โปรดักต์จริง",
      sub: "หลักสูตร Project-Based 12 สัปดาห์ ที่เปลี่ยนคุณจาก 'ผู้ใช้งาน' เป็น 'ผู้สร้าง' ผ่านการลงมือทำจริง ตั้งแต่เทรนโมเดลจนถึง Deploy ขึ้น Cloud โดยไม่ต้องมีพื้นฐานมาก่อน",
      ctaPrimary: "สมัครเรียนทันที",
      ctaSecondary: "ดูหลักสูตร",
      stats: [
        { val: "12", label: "Weeks Duration" },
        { val: "4", label: "Specialized Tracks" },
        { val: "100%", label: "Project Based" }
      ],
      value: [
        { title: "Hands-on Workshop", desc: "เลิกเรียนทฤษฎีที่น่าเบื่อ ลงมือทำจริงทุกสัปดาห์ด้วยโจทย์จากโลกธุรกิจจริง" },
        { title: "Real Deployment", desc: "ไม่จบแค่ใน Notebook แต่สอน Deploy ขึ้น Web App ให้คนทั่วโลกใช้งานได้จริง" },
        { title: "Career Ready", desc: "ได้ Portfolio ผลงานระดับ Professional และทักษะที่ตลาดแรงงานต้องการสูงสุด" }
      ]
    },
    EN: {
      badge: "🚀 New Batch Open (Batch 4)",
      h1: "Architecting Intelligence:",
      h1Highlight: "From Concept to Product",
      sub: "The intensive 12-week project-based curriculum. Build, train, and deploy production-ready AI models. No PhD required. Start building your future today.",
      ctaPrimary: "Enroll Now",
      ctaSecondary: "View Syllabus",
      stats: [
        { val: "12", label: "Weeks Duration" },
        { val: "4", label: "Specialized Tracks" },
        { val: "100%", label: "Project Based" }
      ],
      value: [
        { title: "Hands-on Workshop", desc: "Ditch the theory-heavy lectures. Solve real-world business problems every week." },
        { title: "Real Deployment", desc: "Don't stop at the notebook. Deploy scalable Web Apps accessible to the world." },
        { title: "Career Ready", desc: "Build a professional portfolio and gain the skills top tech companies demand." }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-24 text-center max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-100 shadow-sm text-indigo-600 text-xs font-bold uppercase tracking-wider mb-8 hover:border-indigo-200 transition-colors cursor-default backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span>
          {t.badge}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-slate-900 leading-[1.1] mb-8"
        >
          {t.h1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 animate-gradient-x">
            {t.h1Highlight}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-12"
        >
          {t.sub}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button 
            className="group px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full shadow-lg shadow-slate-200/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            data-testid="hero-cta-enroll"
            onClick={() => {
              logEvent('enroll_click', { source: 'hero_primary' });
              navigate(Section.PRICING);
            }}
          >
            <Rocket className="w-5 h-5 group-hover:animate-bounce" />
            {t.ctaPrimary}
          </button>
          <button 
            className="px-8 py-4 bg-white/50 hover:bg-white border border-slate-200 text-slate-700 font-semibold rounded-full shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            data-testid="hero-cta-curriculum"
            onClick={() => {
              logEvent('track_view', { source: 'hero_secondary' });
              navigate(Section.SYLLABUS);
            }}
          >
            <BookOpen className="w-5 h-5" />
            {t.ctaSecondary}
          </button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-10 border-t border-slate-200/60 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {t.stats.map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-display font-black text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">{stat.val}</div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400 mt-3 font-bold group-hover:text-indigo-400 transition-colors">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Value Proposition - Bento Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "⚡", ...t.value[0], color: "text-amber-500", bg: "bg-amber-50/50", border: "border-amber-100" },
            { icon: "🌐", ...t.value[1], color: "text-indigo-500", bg: "bg-indigo-50/50", border: "border-indigo-100" },
            { icon: "💼", ...t.value[2], color: "text-emerald-500", bg: "bg-emerald-50/50", border: "border-emerald-100" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group glass-panel p-8 rounded-[2rem] border ${item.border} hover:shadow-glass hover:border-white transition-all duration-500 hover:-translate-y-2`}
            >
              <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="border-y border-slate-100 bg-slate-50/30 py-20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>
        <div className="text-center mb-12 relative z-20">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">Powering Next-Gen AI Builders</p>
        </div>
        <div className="flex justify-center flex-wrap gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {['Python', 'TensorFlow', 'PyTorch', 'HuggingFace', 'Streamlit', 'LangChain', 'OpenAI', 'Gemini'].map((tech) => (
            <span key={tech} className="text-2xl md:text-3xl font-display font-bold flex items-center gap-2 text-slate-900 cursor-default hover:scale-110 transition-transform">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Overview;