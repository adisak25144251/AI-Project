import React, { useState } from 'react';
import { Section, Language } from './types';
import { COURSE_TITLE } from './constants';
import { LanguageContext, NavigationContext } from './contexts';
import Overview from './components/Overview';
import WeeklySchedule from './components/WeeklySchedule';
import ProjectTracks from './components/ProjectTracks';
import Portfolio from './components/Portfolio';
import ProjectPlanner from './components/ProjectPlanner';
import DebugCoach from './components/DebugCoach';
import CurriculumAuditor from './components/CurriculumAuditor';
import SyllabusDesigner from './components/SyllabusDesigner';
import AITutor from './components/AITutor';
import Pricing from './components/Pricing';
import Login from './components/Login';
import StudentGuide from './components/StudentGuide';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.OVERVIEW);
  const [lang, setLang] = useState<Language>('EN');

  const toggleLang = () => setLang(prev => prev === 'EN' ? 'TH' : 'EN');
  const navigate = (section: Section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.OVERVIEW: return <Overview />;
      case Section.SYLLABUS: return <WeeklySchedule />;
      case Section.TRACKS: return <ProjectTracks />;
      case Section.PRICING: return <Pricing />;
      case Section.PLANNER: return <ProjectPlanner />;
      case Section.DESIGNER: return <SyllabusDesigner />;
      case Section.DEBUG: return <DebugCoach />;
      case Section.AUDITOR: return <CurriculumAuditor />;
      case Section.PORTFOLIO: return <Portfolio />;
      case Section.LOGIN: return <Login />;
      case Section.GUIDE: return <StudentGuide />;
      default: return <Overview />;
    }
  };

  return (
    <NavigationContext.Provider value={{ navigate }}>
      <LanguageContext.Provider value={{ lang, toggleLang }}>
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden relative">
          
          {/* Global Aurora Background */}
          <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
             <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
             <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-300/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
             <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-teal-200/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000"></div>
             <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]"></div>
          </div>

          {/* Navbar - Glassmorphism */}
          <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/50 shadow-sm transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-20 items-center">
                {/* Logo Area */}
                <div 
                  className="flex items-center gap-3 cursor-pointer group" 
                  onClick={() => navigate(Section.OVERVIEW)}
                  data-testid="nav-home"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center text-white font-display font-bold shadow-lg shadow-indigo-200 group-hover:scale-105 transition-transform duration-300">
                    AI
                  </div>
                  <div className="hidden md:flex flex-col">
                    <span className="font-display font-bold text-xl leading-none tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">{COURSE_TITLE}</span>
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400">Architecting Intelligence</span>
                  </div>
                </div>
                
                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1 bg-slate-50/50 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm">
                  {[Section.OVERVIEW, Section.SYLLABUS, Section.TRACKS, Section.PRICING].map((section) => (
                    <button
                      key={section}
                      onClick={() => navigate(section)}
                      data-testid={`nav-${section.toLowerCase().replace(' ', '-')}`}
                      className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        activeSection === section
                          ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-black/5'
                          : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                      }`}
                    >
                      {section}
                    </button>
                  ))}
                </div>

                {/* Right Action Area */}
                <div className="flex items-center gap-4">
                  <button 
                    onClick={toggleLang}
                    data-testid="nav-lang-switch"
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-indigo-300 text-slate-600 text-xs font-bold transition shadow-sm"
                  >
                    {lang}
                  </button>
                  <div className="hidden sm:flex items-center gap-4">
                    <button 
                      className={`font-semibold text-sm transition ${activeSection === Section.LOGIN ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
                      data-testid="nav-login"
                      onClick={() => navigate(Section.LOGIN)}
                    >
                      Log in
                    </button>
                    <button 
                      className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-slate-200 transition transform hover:-translate-y-0.5 hover:shadow-xl"
                      data-testid="nav-enroll"
                      onClick={() => navigate(Section.PRICING)}
                    >
                      Enroll Now
                    </button>
                  </div>
                  
                  {/* Mobile Menu (simplified) */}
                  <div className="lg:hidden">
                     <select 
                        value={activeSection} 
                        onChange={(e) => navigate(e.target.value as Section)}
                        data-testid="nav-mobile-select"
                        className="bg-white/90 border border-slate-200 text-slate-700 text-sm rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
                     >
                        {Object.values(Section).map((section) => (
                            <option key={section} value={section}>{section}</option>
                        ))}
                     </select>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 min-h-[calc(100vh-64px)]">
            {renderSection()}
          </main>

          {/* AI Tutor Integration */}
          <AITutor />
          
          {/* Footer */}
          <footer className="border-t border-slate-100 bg-white/80 backdrop-blur-xl mt-24 py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl mx-auto mb-6 flex items-center justify-center text-slate-400 font-display font-bold text-xl shadow-inner">AI</div>
              <p className="font-display text-slate-900 font-bold text-lg mb-2 tracking-tight">AI Project 101: Architecting Intelligence</p>
              <p className="text-slate-500 text-sm mb-10 max-w-md mx-auto font-light leading-relaxed">Empowering the next generation of AI builders with hands-on experience and production-grade skills.</p>
              <div className="flex justify-center gap-8 text-sm font-medium text-slate-500">
                <button onClick={() => navigate(Section.SYLLABUS)} className="hover:text-indigo-600 transition" data-testid="nav-curriculum">Curriculum</button>
                <button onClick={() => navigate(Section.PRICING)} className="hover:text-indigo-600 transition" data-testid="nav-pricing">Pricing</button>
                <button onClick={() => navigate(Section.GUIDE)} className="hover:text-indigo-600 transition" data-testid="nav-guide">Student Guide</button>
                <button onClick={() => alert('Contact: support@aiproject101.com')} className="hover:text-indigo-600 transition" data-testid="nav-contact">Contact</button>
              </div>
              <p className="mt-12 text-xs text-slate-400 font-mono tracking-wide">© 2024 AI Project 101. ALL RIGHTS RESERVED.</p>
            </div>
          </footer>
        </div>
      </LanguageContext.Provider>
    </NavigationContext.Provider>
  );
};

export default App;