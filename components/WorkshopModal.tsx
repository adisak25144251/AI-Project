import React, { useState } from 'react';
import { WorkshopGuide } from '../types';

interface WorkshopModalProps {
  guide: WorkshopGuide;
  onClose: () => void;
}

const WorkshopModal: React.FC<WorkshopModalProps> = ({ guide, onClose }) => {
  const [activeTab, setActiveTab] = useState('brief');

  const tabs = [
    { id: 'brief', label: '📋 Brief & Data' },
    { id: 'model', label: '🧠 Model & Notebook' },
    { id: 'code', label: '💻 Minimal Code' },
    { id: 'deploy', label: '🚀 Deployment' },
    { id: 'rubric', label: '✅ Rubric' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" onClick={onClose}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full h-[85vh] flex flex-col">
          
          {/* Header */}
          <div className="bg-slate-900 px-6 py-4 flex justify-between items-center text-white shrink-0">
            <div>
              <h3 className="text-xl font-bold">{guide.title}</h3>
              <p className="text-slate-400 text-sm">Workshop Pack (Hands-on)</p>
            </div>
            <button 
              onClick={onClose} 
              className="hover:bg-slate-700 rounded-full p-2 transition"
              data-testid="workshop-modal-close"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="bg-slate-100 border-b border-slate-200 px-6 flex gap-1 overflow-x-auto shrink-0">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                data-testid={`workshop-tab-${tab.id}`}
                className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'border-indigo-600 text-indigo-600 bg-white rounded-t-lg' 
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
            
            {/* BRIEF & DATA TAB */}
            {activeTab === 'brief' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-3 border-b pb-2">{guide.projectBrief.title}</h4>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                      {guide.projectBrief.content.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-3 border-b pb-2">{guide.dataPlan.title}</h4>
                     <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                      {guide.dataPlan.content.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                   <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-3 border-b pb-2">{guide.security.title}</h4>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                      {guide.security.content.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-3 border-b pb-2">{guide.portfolio.title}</h4>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                      {guide.portfolio.content.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* MODEL TAB */}
            {activeTab === 'model' && (
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                   <h4 className="font-bold text-slate-800 mb-3 border-b pb-2">{guide.modelPlan.title}</h4>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                      {guide.modelPlan.content.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                
                <h4 className="font-bold text-slate-700 mt-6 mb-2">📒 Notebook Step-by-Step</h4>
                <div className="space-y-4">
                  {guide.notebookOutline.map((step, idx) => (
                    <div key={idx} className="bg-white rounded-xl overflow-hidden border border-slate-200">
                      <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 font-semibold text-slate-700 text-sm">
                        {step.title}
                      </div>
                      <div className="p-4">
                        <ul className="list-disc list-inside text-sm text-slate-600 mb-3">
                           {step.content.map((c, i) => <li key={i}>{c}</li>)}
                        </ul>
                        {step.code && (
                          <pre className="bg-slate-800 text-green-400 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                            <code>{step.code}</code>
                          </pre>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CODE TAB */}
            {activeTab === 'code' && (
              <div className="grid lg:grid-cols-2 gap-6 h-full">
                {guide.minimalCode.map((file, idx) => (
                  <div key={idx} className="flex flex-col h-full bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div className="bg-slate-800 px-4 py-2 text-slate-300 text-sm font-mono border-b border-slate-700 flex justify-between">
                      <span>{file.fileName}</span>
                      <span className="text-slate-500">{file.language}</span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                      <pre className="text-xs font-mono text-slate-300 leading-relaxed">
                        <code>{file.code.trim()}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* DEPLOYMENT TAB */}
            {activeTab === 'deploy' && (
              <div className="space-y-6">
                 {guide.deployment.map((dep, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                      <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        🚀 {dep.title}
                      </h4>
                      <div className="bg-blue-50 text-blue-800 p-4 rounded-lg text-sm mb-4">
                        💡 ทำตามขั้นตอนนี้เมื่อรันในเครื่อง (Localhost) ผ่านแล้วเท่านั้น
                      </div>
                      <ol className="list-decimal list-inside space-y-3 text-slate-700 text-sm">
                        {dep.content.map((c, i) => <li key={i}>{c}</li>)}
                      </ol>
                    </div>
                 ))}

                 <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-3 border-b pb-2">{guide.testing.title}</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {guide.testing.content.map((item, i) => (
                         <li key={i} className="flex items-start gap-2">
                           <span className="text-green-500">🧪</span> {item}
                         </li>
                      ))}
                    </ul>
                 </div>
              </div>
            )}

            {/* RUBRIC TAB */}
            {activeTab === 'rubric' && (
              <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4">Criteria</th>
                      <th className="px-6 py-4 text-right">Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {guide.rubric.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="px-6 py-4 text-slate-700">{item.criteria}</td>
                        <td className="px-6 py-4 text-right font-bold text-indigo-600">{item.score}</td>
                      </tr>
                    ))}
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-bold text-slate-800">Total</td>
                      <td className="px-6 py-4 text-right font-black text-slate-900 text-lg">
                        {guide.rubric.reduce((acc, curr) => acc + curr.score, 0)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopModal;