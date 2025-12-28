import React, { useState, useContext } from 'react';
import { PROJECT_TRACKS, WORKSHOP_GUIDES } from '../constants';
import WorkshopModal from './WorkshopModal';
import { WorkshopGuide } from '../types';
import { LanguageContext } from '../contexts';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Image as ImageIcon, MessageSquare, BarChart3 } from 'lucide-react';
import { logEvent } from '../utils/analytics';

const ProjectTracks: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<WorkshopGuide | null>(null);
  const { lang } = useContext(LanguageContext);

  const texts = {
    TH: {
      title: "เลือกเส้นทางของคุณ",
      sub: "ผู้เรียนสามารถเลือกทำโปรเจกต์ตามความสนใจได้ 1 เส้นทาง โดยใช้ความรู้พื้นฐานจาก Week 1-3 เหมือนกัน แล้วแยกสายเจาะลึกใน Week 4",
      start: "เริ่ม Workshop",
    },
    EN: {
      title: "Choose Your Path",
      sub: "Master the fundamentals in Weeks 1-3, then specialize in one of these four high-demand tracks starting Week 4.",
      start: "Start Workshop",
    }
  };

  const t = texts[lang];

  const handleOpenGuide = (trackId: string) => {
    logEvent('track_view', { trackId });
    const guide = WORKSHOP_GUIDES[trackId];
    if (guide) {
      setSelectedGuide(guide);
    } else {
      alert("Workshop guide for this track is under construction. Please try 'Image Recognition' track.");
    }
  };

  const getIcon = (iconName: string) => {
    if (iconName.includes("💬")) return <MessageSquare className="w-8 h-8" />;
    if (iconName.includes("👁️")) return <ImageIcon className="w-8 h-8" />;
    if (iconName.includes("📊")) return <BarChart3 className="w-8 h-8" />;
    if (iconName.includes("🤖")) return <Cpu className="w-8 h-8" />;
    return <Cpu className="w-8 h-8" />;
  };

  return (
    <div className="space-y-16">
      {selectedGuide && (
        <WorkshopModal 
          guide={selectedGuide} 
          onClose={() => setSelectedGuide(null)} 
        />
      )}

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">{t.title}</h2>
        <p className="text-slate-600 text-lg leading-relaxed font-light">
          {t.sub}
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[420px]">
        {PROJECT_TRACKS.map((track, idx) => {
          const isFeatured = idx === 0;
          return (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-[2.5rem] p-8 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-glass hover:-translate-y-2 cursor-pointer border border-white/60 ${
                 isFeatured 
                  ? 'lg:col-span-2 bg-gradient-to-br from-indigo-50/80 to-white/90 backdrop-blur-md' 
                  : 'bg-white/60 backdrop-blur-md'
              }`}
              onClick={() => handleOpenGuide(track.id)}
              data-testid={`track-card-${track.id}`}
            >
              {/* Background Decor */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl rounded-bl-full -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700 ease-out pointer-events-none opacity-10 ${
                isFeatured ? 'from-indigo-500 to-purple-500' : 'from-slate-400 to-slate-200'
              }`}></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl border border-white shadow-sm group-hover:scale-110 transition-transform duration-300 ${
                    isFeatured ? 'bg-indigo-600 text-white' : 'bg-white text-slate-700'
                  }`}>
                    {getIcon(track.icon)}
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border backdrop-blur-sm ${
                    track.difficulty === 'Beginner' ? 'bg-emerald-50/50 text-emerald-600 border-emerald-100' :
                    track.difficulty === 'Intermediate' ? 'bg-amber-50/50 text-amber-600 border-amber-100' :
                    'bg-rose-50/50 text-rose-600 border-rose-100'
                  }`}>
                    {track.difficulty}
                  </span>
                </div>
                
                <h3 className={`font-display font-bold mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors ${
                  isFeatured ? 'text-3xl' : 'text-2xl'
                }`}>{track.title}</h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">
                  {track.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {track.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-semibold px-2.5 py-1.5 bg-white/60 text-slate-600 rounded-lg border border-white shadow-sm">
                      {tech}
                    </span>
                  ))}
                  {track.techStack.length > 3 && (
                    <span className="text-[10px] font-semibold px-2.5 py-1.5 bg-slate-100/50 text-slate-400 rounded-lg">
                      +{track.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-slate-200/50">
                <div 
                  className="w-full flex items-center justify-between text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors"
                  data-testid={`track-cta-${track.id}`}
                >
                  <span className="uppercase tracking-wider text-xs">{t.start}</span>
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isFeatured 
                      ? 'bg-slate-900 text-white group-hover:bg-indigo-600 group-hover:shadow-glow' 
                      : 'bg-white text-slate-900 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-glow'
                  }`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTracks;