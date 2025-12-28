import React from 'react';
import { ASSESSMENT_RUBRICS, DEPLOYMENT_GUIDE } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Assessment Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          📝 Assessment Criteria
          <span className="text-sm font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-md">เกณฑ์การให้คะแนน</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ASSESSMENT_RUBRICS.map((rubric, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-slate-700 text-sm">{rubric.category}</span>
                <span className="text-indigo-600 font-black">{rubric.weight}</span>
              </div>
              <ul className="space-y-2">
                {rubric.criteria.map((c, i) => (
                  <li key={i} className="text-xs text-slate-500 flex items-start gap-1.5">
                    <span className="mt-0.5 w-1 h-1 bg-indigo-400 rounded-full flex-shrink-0"></span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Deployment Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
           🚀 Deployment Plan
           <span className="text-sm font-normal text-white bg-indigo-600 px-2 py-1 rounded-md">Streamlit Cloud</span>
        </h2>
        <div className="space-y-4">
           {DEPLOYMENT_GUIDE.map((step, idx) => (
             <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
               <h3 className="font-bold text-slate-800 mb-2">{step.title}</h3>
               <p className="text-sm text-slate-600 mb-3">{step.description}</p>
               {step.codeSnippet && (
                 <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-xs font-mono border border-slate-700">
                   <code>{step.codeSnippet}</code>
                 </pre>
               )}
             </div>
           ))}
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* Dataset & Portfolio Tips */}
      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">🗂️ Recommended Datasets</h2>
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3 shadow-sm">
            <p className="text-sm text-slate-600 mb-2">แหล่งข้อมูลฟรี ปลอดภัย ถูกลิขสิทธิ์สำหรับมือใหม่</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-blue-500 font-bold">Kaggle:</span> Titanic, Housing Prices (Classic)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-600 font-bold">UCI ML Repo:</span> Iris, Wine Quality
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600 font-bold">Hugging Face:</span> SQuAD (NLP), MNIST (Image)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 font-bold">Gov Data:</span> ข้อมูลเปิดภาครัฐ (data.go.th)
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">💼 Portfolio Checklist</h2>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <ul className="space-y-3">
              {[
                "มี README.md ที่อธิบายว่าโปรเจกต์ทำอะไร (What, Why, How)",
                "มี Link ไปยัง Live Demo ที่ใช้งานได้จริง",
                "Code สะอาด มี Comment อธิบายส่วนสำคัญ",
                "ระบุ Tech Stack ที่ใช้ชัดเจน",
                "มีภาพ Screenshot หรือ GIF ตัวอย่างการใช้งาน",
                "ระบุ Credit แหล่งที่มาของข้อมูล (Dataset Source)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <input type="checkbox" className="mt-1 accent-indigo-600" readOnly checked />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
