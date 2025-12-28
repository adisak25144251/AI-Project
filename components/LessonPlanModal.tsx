import React, { useState } from 'react';
import { LessonPlan } from '../types';

interface LessonPlanModalProps {
  plan: LessonPlan;
  onClose: () => void;
}

const LessonPlanModal: React.FC<LessonPlanModalProps> = ({ plan, onClose }) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'content' | 'workshop' | 'quiz'>('timeline');
  const [showQuizAnswer, setShowQuizAnswer] = useState<number | null>(null);

  // Helper to render text with clickable links
  const renderTextWithLinks = (text: string) => {
    // Regex to capture URLs (starting with http/https or www.)
    const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/g;
    const matches = text.match(urlRegex);

    if (!matches) return text;

    return text.split(' ').map((word, i) => {
       const isUrl = word.match(urlRegex);
       if (isUrl) {
           let href = word;
           if (!href.startsWith('http')) href = `https://${href}`;
           // Remove trailing punctuation if any (like dot or comma)
           const cleanHref = href.replace(/[.,;)]$/, '');
           const cleanWord = word.replace(/[.,;)]$/, '');
           const suffix = word.slice(cleanWord.length);
           
           return (
               <React.Fragment key={i}>
                   <a 
                       href={cleanHref} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-indigo-600 hover:text-indigo-800 underline font-medium break-all"
                       onClick={(e) => e.stopPropagation()} 
                   >
                       {cleanWord}
                   </a>
                   {suffix}{' '}
               </React.Fragment>
           );
       }
       return word + ' ';
    });
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          {/* Header */}
          <div className="bg-indigo-600 px-6 py-4 flex justify-between items-center">
            <div>
              <h3 className="text-xl leading-6 font-bold text-white" id="modal-title">
                Week {plan.week}: {plan.topic}
              </h3>
              <p className="text-indigo-100 text-sm mt-1">Detailed Lesson Plan</p>
            </div>
            <button 
              onClick={onClose} 
              className="text-white hover:bg-indigo-700 rounded-full p-1 transition"
              data-testid="modal-close"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px" aria-label="Tabs">
              {[
                { id: 'timeline', name: '🕒 Timeline' },
                { id: 'content', name: '📚 Content & Demo' },
                { id: 'workshop', name: '🛠️ Workshop' },
                { id: 'quiz', name: '❓ Quiz' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  data-testid={`tab-${tab.id}`}
                  className={`${
                    activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600 bg-indigo-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm sm:text-base transition-colors`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Body */}
          <div className="px-6 py-6 h-[60vh] overflow-y-auto bg-slate-50">
            
            {/* TIMELINE TAB */}
            {activeTab === 'timeline' && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h4 className="font-bold text-gray-800 mb-4 text-lg">Schedule (4 Hours)</h4>
                  <div className="space-y-4">
                    {plan.timeline.map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-24 flex-shrink-0 text-sm font-bold text-indigo-600 bg-indigo-50 py-1 px-2 rounded text-center">
                          {item.time}
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-800">{item.activity}</h5>
                          <p className="text-gray-600 text-sm">{renderTextWithLinks(item.detail)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                   <h4 className="font-bold text-gray-800 mb-4 text-lg">💡 Deliverables & Criteria</h4>
                   <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-medium">Project Proposal One-pager</p>
                      <p className="text-green-700 text-sm mt-1">ต้องระบุ: ปัญหาคืออะไร (Problem), ใครคือผู้ใช้ (Target), จะใช้ AI แก้ยังไง (Solution)</p>
                   </div>
                </div>
              </div>
            )}

            {/* CONTENT TAB */}
            {activeTab === 'content' && (
              <div className="space-y-6 animate-fade-in">
                {plan.contentSummary.map((section, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                    <h4 className="font-bold text-gray-800 mb-3 text-lg border-b pb-2 border-gray-100">{section.title}</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {section.points.map((pt, i) => <li key={i}>{renderTextWithLinks(pt)}</li>)}
                    </ul>
                  </div>
                ))}

                <div className="bg-slate-900 rounded-xl p-6 shadow-lg text-slate-100">
                  <h4 className="font-bold text-emerald-400 mb-4 text-lg flex items-center gap-2">
                    🖥️ Live Demo: Python Script
                  </h4>
                  <div className="space-y-6">
                    {plan.demoScript.map((script, idx) => (
                      <div key={idx}>
                        <p className="font-semibold text-white mb-2">{script.step}: <span className="font-normal text-slate-300">{renderTextWithLinks(script.description)}</span></p>
                        {script.code && (
                          <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto font-mono text-sm text-green-300 border border-slate-700">
                            <code>{script.code.trim()}</code>
                          </pre>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WORKSHOP TAB */}
            {activeTab === 'workshop' && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    {plan.workshopSteps.map((ws, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                        <h4 className="font-bold text-indigo-600 mb-3">{ws.title}</h4>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                          {ws.steps.map((step, i) => <li key={i}>{renderTextWithLinks(step)}</li>)}
                        </ol>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                     {/* Exercises */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                      <h4 className="font-bold text-gray-800 mb-4">🏋️ Exercises</h4>
                      <div className="space-y-3">
                        {plan.exercises.map((ex, idx) => (
                          <div key={idx} className={`p-3 rounded-lg border ${
                            ex.level === 'Easy' ? 'bg-green-50 border-green-200' :
                            ex.level === 'Medium' ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200'
                          }`}>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase ${
                              ex.level === 'Easy' ? 'bg-green-200 text-green-800' :
                              ex.level === 'Medium' ? 'bg-yellow-200 text-yellow-800' : 'bg-red-200 text-red-800'
                            }`}>{ex.level}</span>
                            <p className="font-bold text-gray-800 mt-1">{ex.title}</p>
                            <p className="text-sm text-gray-600">{renderTextWithLinks(ex.description)}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Debug Corner */}
                    <div className="bg-orange-50 rounded-xl p-6 shadow-sm border border-orange-200">
                      <h4 className="font-bold text-orange-800 mb-4 flex items-center gap-2">🐞 Debug Corner</h4>
                      <div className="space-y-4">
                        {plan.debugCorner.map((bug, idx) => (
                          <div key={idx} className="text-sm">
                            <p className="font-mono text-red-600 bg-red-100 inline-block px-1 rounded mb-1">{bug.problem}</p>
                            <p className="text-gray-700">💡 {renderTextWithLinks(bug.solution)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* QUIZ TAB */}
            {activeTab === 'quiz' && (
              <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
                  <h4 className="font-bold text-gray-800 text-lg">ทดสอบความเข้าใจ Week {plan.week}</h4>
                  <p className="text-gray-500 text-sm">ลองทำดูสิว่าคุณเข้าใจเรื่องนี้แค่ไหน?</p>
                </div>

                {plan.quiz.map((q, idx) => (
                  <div key={q.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                    <p className="font-bold text-gray-800 mb-4"><span className="text-indigo-600">Q{idx + 1}.</span> {q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => (
                        <button
                          key={optIdx}
                          disabled={showQuizAnswer === q.id}
                          onClick={() => setShowQuizAnswer(q.id)}
                          data-testid={`quiz-option-${q.id}-${optIdx}`}
                          className={`w-full text-left p-3 rounded-lg border transition-all ${
                            showQuizAnswer === q.id
                              ? optIdx === q.correctAnswer
                                ? 'bg-green-100 border-green-400 text-green-800'
                                : 'bg-gray-50 border-gray-200 text-gray-400'
                              : 'bg-white border-gray-200 hover:bg-indigo-50 hover:border-indigo-300'
                          }`}
                        >
                          {opt}
                          {showQuizAnswer === q.id && optIdx === q.correctAnswer && <span className="float-right">✅</span>}
                        </button>
                      ))}
                    </div>
                    {showQuizAnswer === q.id && (
                      <div className="mt-3 p-3 bg-blue-50 text-blue-800 text-sm rounded-lg animate-fade-in">
                        <strong>คำอธิบาย:</strong> {renderTextWithLinks(q.explanation)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
             <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                Close
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlanModal;