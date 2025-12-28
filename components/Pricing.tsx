import React, { useContext, useState } from 'react';
import { PRICING_PLANS } from '../constants';
import { LanguageContext, NavigationContext } from '../contexts';
import { Check } from 'lucide-react';
import PaymentModal from './PaymentModal';
import { Section } from '../types';

const Pricing: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const { navigate } = useContext(NavigationContext);
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: string} | null>(null);

  const texts = {
    TH: {
      title: "ลงทุนในอนาคตของคุณ",
      sub: "เลือกแผนการเรียนที่เหมาะกับเป้าหมาย ไม่ว่าคุณจะเรียนรู้ด้วยตัวเองหรือต้องการคำแนะนำอย่างใกล้ชิด",
      monthly: "/ ตลอดชีพ",
      successMsg: "การสมัครเสร็จสมบูรณ์! กรุณาเข้าสู่ระบบเพื่อเริ่มเรียน"
    },
    EN: {
      title: "Invest in Your Future",
      sub: "Choose the plan that fits your goals. Whether you're a self-starter or need guided mentorship.",
      monthly: "/ lifetime",
      successMsg: "Enrollment Successful! Please log in to start learning."
    }
  };

  const t = texts[lang];

  const handleEnroll = (plan: typeof PRICING_PLANS[0]) => {
      const price = lang === 'TH' ? plan.priceTH : plan.priceEN;
      setSelectedPlan({ name: plan.name, price });
  };

  const handlePaymentSuccess = () => {
      setSelectedPlan(null);
      // Optional: use a Toast here instead of alert in future
      alert(t.successMsg);
      navigate(Section.LOGIN);
  };

  return (
    <div className="space-y-16 relative">
      {selectedPlan && (
        <PaymentModal 
            planName={selectedPlan.name} 
            price={selectedPlan.price} 
            onClose={() => setSelectedPlan(null)}
            onSuccess={handlePaymentSuccess}
        />
      )}

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">{t.title}</h2>
        <p className="text-slate-600 text-lg leading-relaxed font-light">
          {t.sub}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
        {PRICING_PLANS.map((plan, idx) => (
          <div 
            key={idx} 
            className={`relative p-10 rounded-[2.5rem] flex flex-col transition-all duration-500 hover:-translate-y-2 ${
              plan.highlight 
                ? 'bg-slate-900 text-white shadow-2xl shadow-indigo-200 z-10 scale-105 border border-slate-800' 
                : 'bg-white/60 backdrop-blur-md text-slate-900 border border-white/60 shadow-glass hover:shadow-xl'
            }`}
            data-testid={`pricing-plan-${plan.highlight ? 'pro' : 'standard'}`}
          >
            
            {plan.highlight && (
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            )}
            
            {plan.highlight && (
              <div className="absolute top-6 right-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-glow">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
              <p className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                {lang === 'TH' ? plan.descriptionTH : plan.descriptionEN}
              </p>
            </div>

            <div className="mb-10 flex items-baseline gap-1">
              <span className="text-6xl font-display font-bold tracking-tight">
                {lang === 'TH' ? plan.priceTH : plan.priceEN}
              </span>
              <span className={`text-sm font-medium ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                {t.monthly}
              </span>
            </div>

            <ul className="space-y-5 mb-10 flex-1">
              {(lang === 'TH' ? plan.featuresTH : plan.featuresEN).map((feature, i) => (
                <li key={i} className="flex items-start gap-4 text-sm font-medium">
                  <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                    plan.highlight ? 'bg-indigo-500 text-white' : 'bg-indigo-50 text-indigo-600'
                  }`}>
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <span className={plan.highlight ? 'text-slate-200' : 'text-slate-700'}>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              className={`w-full py-4 rounded-2xl font-bold text-sm tracking-wide transition-all transform hover:-translate-y-1 hover:shadow-lg ${
                plan.highlight
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-indigo-900/20'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}
              data-testid={`pricing-cta-${plan.highlight ? 'pro' : 'standard'}`}
              onClick={() => handleEnroll(plan)}
            >
              {lang === 'TH' ? plan.ctaTH : plan.ctaEN}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center pt-8 border-t border-slate-100/50 max-w-2xl mx-auto">
        <p className="text-sm text-slate-500">
          {lang === 'TH' 
            ? "ต้องการใบเสนอราคาสำหรับองค์กร หรือสมัครเป็นกลุ่ม? "
            : "Need a corporate quote or group enrollment? "}
          <a href="#" className="text-indigo-600 font-bold hover:underline decoration-2" onClick={(e) => { e.preventDefault(); alert("Contact: corporate@aiproject101.com"); }}>
            {lang === 'TH' ? "ติดต่อเรา" : "Contact Sales"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Pricing;