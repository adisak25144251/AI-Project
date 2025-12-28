import React, { useState } from 'react';
import { generateSyllabus, SyllabusInputs } from '../services/geminiService';

const SyllabusDesigner: React.FC = () => {
  const [inputs, setInputs] = useState<SyllabusInputs>({
    name: '',
    level: '',
    duration: '',
    focus: ''
  });
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async () => {
    if (!inputs.name || !inputs.level) {
      alert("กรุณากรอกชื่อคอร์สและระดับผู้เรียน");
      return;
    }

    setIsLoading(true);
    setResult('');
    
    try {
      const syllabus = await generateSyllabus(inputs);
      setResult(syllabus);
    } catch (error) {
      setResult("เกิดข้อผิดพลาดในการสร้างหลักสูตร กรุณาลองใหม่");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-gradient-to-br from-pink-600 to-rose-700 text-white rounded-3xl p-8 md:p-12 shadow-xl">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          🎓 AI Curriculum Designer
        </h2>
        <p className="text-pink-100 text-lg font-light">
          ออกแบบหลักสูตร AI เฉพาะทาง (Custom Syllabus) สำหรับกลุ่มเป้าหมายของคุณ 
          ครบถ้วนทั้ง Skill Map, ตารางเรียนรายสัปดาห์, และแผนการวัดผล
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🛠️ Course Parameters
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  🏷️ Course Name (ชื่อคอร์ส)
                </label>
                <input
                  type="text"
                  name="name"
                  value={inputs.name}
                  onChange={handleInputChange}
                  placeholder="e.g. AI for High School Students, Deep Learning for Doctors"
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 p-3 border"
                  data-testid="designer-input-name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  👶 Target Level (ระดับผู้เรียน)
                </label>
                <select
                  name="level"
                  value={inputs.level}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 p-3 border"
                  data-testid="designer-input-level"
                >
                  <option value="">Select Level...</option>
                  <option value="Zero Background (Non-tech)">Zero Background (Non-tech)</option>
                  <option value="Beginner Developer">Beginner Developer (Knows coding)</option>
                  <option value="Intermediate">Intermediate (Knows some ML)</option>
                  <option value="Advanced">Advanced (Researcher/Pro)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  ⏳ Duration (ระยะเวลา)
                </label>
                <input
                  type="text"
                  name="duration"
                  value={inputs.duration}
                  onChange={handleInputChange}
                  placeholder="e.g. 4 Weeks, 1 Semester, 2 Days Bootcamp"
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 p-3 border"
                  data-testid="designer-input-duration"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  🎯 Focus Area / Tech Stack
                </label>
                <input
                  type="text"
                  name="focus"
                  value={inputs.focus}
                  onChange={handleInputChange}
                  placeholder="e.g. Python & Sklearn, No-code tools, Computer Vision"
                  className="w-full rounded-lg border-slate-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 p-3 border"
                  data-testid="designer-input-focus"
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all transform hover:scale-[1.02] ${
                  isLoading 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : 'bg-pink-600 hover:bg-pink-700'
                }`}
                data-testid="designer-generate"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Designing Syllabus...
                  </span>
                ) : (
                  '✨ Generate Curriculum'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Output Display */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 min-h-[600px] flex flex-col">
             <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
              📘 Generated Syllabus
            </h3>
            
            {result ? (
              <div className="prose prose-pink max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap animate-fade-in overflow-x-auto">
                {result.split('\n').map((line, i) => {
                  if (line.startsWith('# ')) return <h1 key={i} className="text-3xl font-black text-pink-800 mt-6 mb-4">{line.replace('# ', '')}</h1>;
                  if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-slate-800 mt-6 mb-4 border-b border-pink-100 pb-2">{line.replace('## ', '')}</h2>;
                  if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-pink-700 mt-5 mb-3">{line.replace('### ', '')}</h3>;
                  if (line.includes('|')) return <div key={i} className="whitespace-nowrap font-mono text-xs md:text-sm bg-slate-50 p-1 border-b border-slate-100">{line}</div>; // Simple table row render
                  if (line.startsWith('**')) return <p key={i} className="mb-2 mt-2"><strong className="text-slate-900">{line.replace(/\*\*/g, '')}</strong></p>;
                  if (line.startsWith('- ')) return <li key={i} className="ml-4 mb-1 list-disc text-slate-700">{line.replace('- ', '')}</li>;
                  
                  return <p key={i} className="mb-2">{line}</p>;
                })}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-400 opacity-60">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                <p className="text-lg">Fill parameters to design a new course.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusDesigner;