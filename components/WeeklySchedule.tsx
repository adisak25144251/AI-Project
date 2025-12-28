import React, { useState } from 'react';
import { WEEKLY_CONTENT, WEEK_1_LESSON_PLAN } from '../constants';
import LessonPlanModal from './LessonPlanModal';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Lock } from 'lucide-react';
import { logEvent } from '../utils/analytics';

const WeeklySchedule: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);

  const handleOpenLessonPlan = (week: number) => {
    logEvent('lesson_view', { week });
    if (week === 1) {
      setSelectedPlan(WEEK_1_LESSON_PLAN);
    } else {
      alert("Lesson plan for this week is coming soon! (Try Week 1)");
    }
  };

  return (
    <div className="space-y-16">
      {selectedPlan && (
        <LessonPlanModal 
          plan={selectedPlan} 
          onClose={() => setSelectedPlan(null)} 
        />
      )}

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-slate-900 mb-3">Curriculum Roadmap</h2>
        <p className="text-slate-500 font-light text-lg">12 Weeks Journey from Beginner to Builder</p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-indigo-100 via-indigo-200 to-indigo-100 transform -translate-x-1/2 hidden md:block"></div>
        <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-indigo-100 via-indigo-200 to-indigo-100 transform -translate-x-1/2 md:hidden"></div>

        {WEEKLY_CONTENT.map((module, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div 
              key={module.week}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-20 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-indigo-50 transform -translate-x-1/2 z-10 shadow-lg flex items-center justify-center">
                 <div className={`w-3 h-3 rounded-full ${module.week === 1 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-slate-300'}`}></div>
              </div>

              {/* Spacer for Desktop Layout */}
              <div className="hidden md:block w-1/2"></div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                <div 
                  className={`bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-sm hover:shadow-glass transition-all duration-300 group cursor-pointer relative overflow-hidden`}
                  onClick={() => handleOpenLessonPlan(module.week)}
                  data-testid={`week-card-${module.week}`}
                >
                  <div className={`absolute top-0 w-1.5 h-full transition-all duration-300 ${module.week === 1 ? 'bg-emerald-400' : 'bg-slate-200 group-hover:bg-indigo-400'} ${isLeft ? 'right-0 md:right-auto md:left-0' : 'left-0'}`}></div>
                  
                  <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500">Week {module.week}</span>
                    {module.week === 1 
                      ? <span className="flex items-center text-[10px] font-bold text-emerald-600 gap-1 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100"><CheckCircle2 className="w-3 h-3"/> UNLOCKED</span> 
                      : <span className="flex items-center text-[10px] font-bold text-slate-400 gap-1 bg-slate-50 px-2 py-1 rounded-full"><Lock className="w-3 h-3"/> LOCKED</span>}
                  </div>
                  
                  <h3 className="text-xl font-bold font-display text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed font-light">
                    {module.description}
                  </p>

                  <div className={`flex flex-wrap gap-2 mb-6 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                    {module.tools.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-[10px] font-semibold px-2 py-1 bg-slate-50 text-slate-600 rounded-md border border-slate-100">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-indigo-600 transition-colors ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                    View Details 
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklySchedule;