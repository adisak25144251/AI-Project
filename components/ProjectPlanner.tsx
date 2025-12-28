import React, { useState } from 'react';
import { generateProjectPlan, ProjectInputs } from '../services/geminiService';

const ProjectPlanner: React.FC = () => {
  const [inputs, setInputs] = useState<ProjectInputs>({
    problem: '',
    users: '',
    data: '',
    constraints: ''
  });
  const [plan, setPlan] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async () => {
    if (!inputs.problem || !inputs.users) {
      alert("กรุณากรอกข้อมูล 'ปัญหา' และ 'ผู้ใช้งาน' เป็นอย่างน้อย");
      return;
    }

    setIsLoading(true);
    setPlan('');
    
    try {
      const result = await generateProjectPlan(inputs);
      setPlan(result);
    } catch (error) {
      setPlan("เกิดข้อผิดพลาดในการสร้างแผนงาน กรุณาลองใหม่");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-indigo-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 relative z-10">
          🗓️ AI Project Planner
        </h2>
        <p className="text-indigo-200 text-lg font-light relative z-10 max-w-2xl">
          ผู้ช่วยวางแผนโปรเจกต์อัจฉริยะ (AI Product Manager) ช่วยเปลี่ยนไอเดียฟุ้งๆ เป็นแผนงานที่ทำจริงได้ใน 1 หน้า
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
              1. Define Your Idea
            </h3>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  🧨 ปัญหาที่อยากแก้ (Problem)
                </label>
                <textarea
                  name="problem"
                  value={inputs.problem}
                  onChange={handleInputChange}
                  placeholder="เช่น ต้องการแยกขยะรีไซเคิลแต่คนทิ้งไม่ถูก..."
                  className="w-full rounded-xl bg-slate-950 border-slate-700 text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 min-h-[80px] p-4 border transition-colors"
                  data-testid="planner-input-problem"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  👥 ผู้ใช้งานเป้าหมาย (Target Users)
                </label>
                <input
                  type="text"
                  name="users"
                  value={inputs.users}
                  onChange={handleInputChange}
                  placeholder="เช่น นักเรียน, พนักงานออฟฟิศ"
                  className="w-full rounded-xl bg-slate-950 border-slate-700 text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 p-4 border transition-colors"
                  data-testid="planner-input-users"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  💾 ข้อมูลที่มี / จะหาจากไหน (Data)
                </label>
                <textarea
                  name="data"
                  value={inputs.data}
                  onChange={handleInputChange}
                  placeholder="เช่น มีรูปถ่ายใบไม้ 500 รูป..."
                  className="w-full rounded-xl bg-slate-950 border-slate-700 text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 min-h-[80px] p-4 border transition-colors"
                  data-testid="planner-input-data"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  🚧 ข้อจำกัด (Constraints)
                </label>
                <input
                  type="text"
                  name="constraints"
                  value={inputs.constraints}
                  onChange={handleInputChange}
                  placeholder="เช่น ไม่มีการ์ดจอ, งบ 0 บาท"
                  className="w-full rounded-xl bg-slate-950 border-slate-700 text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 p-4 border transition-colors"
                  data-testid="planner-input-constraints"
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all transform hover:scale-[1.02] ${
                  isLoading 
                    ? 'bg-slate-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-indigo-500/20'
                }`}
                data-testid="planner-generate"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating Plan...
                  </span>
                ) : (
                  '🚀 Generate Project Plan'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Output Display */}
        <div className="space-y-6">
          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-800 min-h-[600px] flex flex-col">
             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
              2. Your Generated Plan
            </h3>
            
            {plan ? (
              <div className="prose prose-invert prose-indigo max-w-none text-slate-300 leading-relaxed whitespace-pre-wrap animate-fade-in">
                {plan.split('\n').map((line, i) => {
                  if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-indigo-400 mt-6 mb-4">{line.replace('## ', '')}</h2>;
                  if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-white mt-5 mb-3">{line.replace('### ', '')}</h3>;
                  if (line.startsWith('- **')) {
                    const parts = line.split('**');
                    return <p key={i} className="mb-2"><strong className="text-indigo-300">{parts[1]}</strong> {parts[2]}</p>;
                  }
                  if (line.startsWith('- ')) return <li key={i} className="ml-4 mb-1">{line.replace('- ', '')}</li>;
                  if (line.match(/^\d+\./)) return <p key={i} className="font-semibold text-slate-200 mt-2">{line}</p>;
                  return <p key={i} className="mb-2">{line}</p>;
                })}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-600 opacity-60">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-lg">กรอกข้อมูลด้านซ้ายแล้วกดปุ่มเพื่อสร้างแผนงาน</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPlanner;