import React, { useState } from 'react';
import { auditCurriculum } from '../services/geminiService';
import { WEEKLY_CONTENT, WORKSHOP_GUIDES } from '../constants';

const CurriculumAuditor: React.FC = () => {
  const [content, setContent] = useState('');
  const [report, setReport] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAudit = async () => {
    if (!content.trim()) {
      alert("กรุณาใส่เนื้อหาที่ต้องการตรวจสอบ");
      return;
    }

    setIsLoading(true);
    setReport('');
    
    try {
      const result = await auditCurriculum(content);
      setReport(result);
    } catch (error) {
      setReport("เกิดข้อผิดพลาดในการตรวจสอบ");
    } finally {
      setIsLoading(false);
    }
  };

  const loadInternalContent = () => {
    const fullContent = `
COURSE SYLLABUS:
${JSON.stringify(WEEKLY_CONTENT, null, 2)}

WORKSHOP GUIDES:
${JSON.stringify(WORKSHOP_GUIDES, null, 2)}
    `;
    setContent(fullContent);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-gradient-to-br from-teal-800 to-emerald-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          🧐 Curriculum Quality Auditor
        </h2>
        <p className="text-teal-100 text-lg font-light">
          ระบบตรวจสอบคุณภาพหลักสูตรด้วย AI เช็คความพร้อมก่อนสอนจริง 
          ค้นหาช่องโหว่ (Gaps) และประเมินความเหมาะสมสำหรับผู้เรียนมือใหม่
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 h-full">
        {/* Input Section */}
        <div className="space-y-4 flex flex-col h-full">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                📥 Input Material
              </h3>
              <button 
                onClick={loadInternalContent}
                className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full border border-teal-200 hover:bg-teal-100 transition"
                data-testid="auditor-load-content"
              >
                Load App Content
              </button>
            </div>
            
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste lesson plan, workshop instructions, or JSON data here..."
              className="w-full flex-1 rounded-lg border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-4 border font-mono text-xs text-slate-600 min-h-[400px]"
              data-testid="auditor-input-content"
            />

            <button
              onClick={handleAudit}
              disabled={isLoading}
              className={`w-full mt-4 py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all transform hover:scale-[1.02] ${
                isLoading 
                  ? 'bg-slate-400 cursor-not-allowed' 
                  : 'bg-teal-600 hover:bg-teal-700'
              }`}
              data-testid="auditor-audit"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Auditing...
                </span>
              ) : (
                '🔍 Start Audit'
              )}
            </button>
          </div>
        </div>

        {/* Report Section */}
        <div className="space-y-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 min-h-[600px] flex flex-col">
             <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
              📊 Audit Report
            </h3>
            
            {report ? (
              <div className="prose prose-teal max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap animate-fade-in">
                {report.split('\n').map((line, i) => {
                  if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-teal-800 mt-6 mb-4 pb-2 border-b border-teal-50">{line.replace('## ', '')}</h2>;
                  if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-slate-800 mt-5 mb-3">{line.replace('### ', '')}</h3>;
                  if (line.includes('Score:')) return <div key={i} className="bg-teal-50 text-teal-800 p-4 rounded-lg font-bold text-center text-xl mb-4 border border-teal-200">{line}</div>;
                  if (line.startsWith('**')) return <p key={i} className="mb-2 mt-4"><strong className="text-slate-900">{line.replace(/\*\*/g, '')}</strong></p>;
                  if (line.startsWith('- ')) return <li key={i} className="ml-4 mb-1 list-disc text-slate-700">{line.replace('- ', '')}</li>;
                  
                  return <p key={i} className="mb-2">{line}</p>;
                })}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-400 opacity-60">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <p className="text-lg">Paste content and click audit to see the report.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumAuditor;