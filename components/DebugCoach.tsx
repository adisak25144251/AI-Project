import React, { useState } from 'react';
import { analyzeError, DebugInputs } from '../services/geminiService';

const DebugCoach: React.FC = () => {
  const [inputs, setInputs] = useState<DebugInputs>({
    error: '',
    expected: '',
    actual: '',
    env: 'Google Colab'
  });
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleAnalyze = async () => {
    if (!inputs.error) {
      alert("กรุณาระบุ Code หรือ Error ที่พบ");
      return;
    }

    setIsLoading(true);
    setResult('');
    
    try {
      const analysis = await analyzeError(inputs);
      setResult(analysis);
    } catch (error) {
      setResult("เกิดข้อผิดพลาดในการวิเคราะห์ กรุณาลองใหม่");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-gradient-to-br from-amber-600/90 to-orange-700/90 backdrop-blur-md text-white rounded-3xl p-8 md:p-12 shadow-xl border border-orange-500/20">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          🐞 AI Debug Lab
        </h2>
        <p className="text-orange-100 text-lg font-light max-w-2xl">
          ติดบั๊กหรอ? ไม่ต้องห่วง! ส่ง Error หรือ Code ที่มีปัญหามาให้เราช่วยดู 
          เราจะอธิบายสาเหตุและวิธีแก้แบบ Step-by-step สำหรับมือใหม่
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
              🚨 Report Issue
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  💻 Code หรือ Error Log ที่พบ
                </label>
                <textarea
                  name="error"
                  value={inputs.error}
                  onChange={handleInputChange}
                  placeholder="Paste error message (e.g., ModuleNotFoundError...) or your code snippet here"
                  className="w-full rounded-xl bg-slate-950 border-slate-700 text-slate-200 placeholder-slate-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[150px] p-4 border font-mono text-sm"
                  data-testid="debug-input-error"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-sm font-medium text-slate-400 mb-2">
                    ✨ สิ่งที่คาดหวัง
                  </label>
                  <input
                    type="text"
                    name="expected"
                    value={inputs.expected}
                    onChange={handleInputChange}
                    placeholder="เช่น โมเดลต้องแม่น 80%"
                    className="w-full rounded-xl bg-slate-950 border-slate-700 text-slate-200 placeholder-slate-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 p-4 border"
                    data-testid="debug-input-expected"
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-400 mb-2">
                    💥 สิ่งที่เกิดขึ้นจริง
                  </label>
                  <input
                    type="text"
                    name="actual"
                    value={inputs.actual}
                    onChange={handleInputChange}
                    placeholder="เช่น ได้ accuracy 10%"
                    className="w-full rounded-xl bg-slate-950 border-slate-700 text-slate-200 placeholder-slate-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 p-4 border"
                    data-testid="debug-input-actual"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  🌍 Environment
                </label>
                <select
                  name="env"
                  value={inputs.env}
                  onChange={handleInputChange}
                  className="w-full rounded-xl bg-slate-950 border-slate-700 text-slate-200 placeholder-slate-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 p-4 border"
                  data-testid="debug-input-env"
                >
                  <option value="Google Colab">Google Colab</option>
                  <option value="Local (Windows)">Local (Windows)</option>
                  <option value="Local (Mac/Linux)">Local (Mac/Linux)</option>
                  <option value="Streamlit Cloud">Streamlit Cloud</option>
                  <option value="Raspberry Pi">Raspberry Pi</option>
                </select>
              </div>

              <button
                onClick={handleAnalyze}
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all transform hover:scale-[1.02] ${
                  isLoading 
                    ? 'bg-slate-700 cursor-not-allowed' 
                    : 'bg-slate-100 text-slate-900 hover:bg-white'
                }`}
                data-testid="debug-analyze"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </span>
                ) : (
                  '🛠️ Analyze & Fix'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Output Display */}
        <div className="space-y-6">
          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-800 min-h-[600px] flex flex-col">
             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
              💡 Solution
            </h3>
            
            {result ? (
              <div className="prose prose-invert prose-amber max-w-none text-slate-300 leading-relaxed whitespace-pre-wrap animate-fade-in">
                {result.split('\n').map((line, i) => {
                  if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-amber-500 mt-5 mb-3">{line.replace('### ', '')}</h3>;
                  if (line.startsWith('**')) return <p key={i} className="mb-2"><strong className="text-white">{line.replace(/\*\*/g, '')}</strong></p>;
                   if (line.trim().startsWith('```')) {
                     return null; 
                   }
                  if (line.includes('pip install') || line.includes('import ') || line.includes('print(')) {
                     return <code key={i} className="block bg-slate-950 border border-slate-800 p-3 rounded-lg text-sm font-mono text-amber-300 mb-2">{line}</code>
                  }
                  
                  return <p key={i} className="mb-2">{line}</p>;
                })}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-600 opacity-60">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </div>
                <p className="text-lg">รอรับ Code ของคุณอยู่...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebugCoach;