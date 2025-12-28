import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../contexts';

interface PaymentModalProps {
  planName: string;
  price: string;
  onClose: () => void;
  onSuccess: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ planName, price, onClose, onSuccess }) => {
  const { lang } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden"
        data-testid="payment-modal"
      >
        {/* Header */}
        <div className="bg-slate-900 p-6 text-white text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
             <h3 className="text-xl font-display font-bold mb-1">{lang === 'TH' ? 'ยืนยันการสมัคร' : 'Confirm Enrollment'}</h3>
             <p className="text-indigo-200 text-sm">{planName}</p>
        </div>

        {/* Body */}
        <div className="p-8">
            <div className="flex justify-between items-end mb-8 pb-4 border-b border-slate-100">
                <span className="text-slate-500 text-sm font-medium">{lang === 'TH' ? 'ยอดชำระ' : 'Total due'}</span>
                <span className="text-3xl font-bold text-slate-900">{price}</span>
            </div>

            <form onSubmit={handlePayment} className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email</label>
                    <input 
                        type="email" 
                        required 
                        placeholder="name@example.com" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
                        data-testid="payment-email"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">{lang === 'TH' ? 'ข้อมูลบัตร (จำลอง)' : 'Card Details (Mock)'}</label>
                    <div className="flex gap-2">
                        <input type="text" disabled className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-slate-400 cursor-not-allowed font-mono text-sm" value="4242 4242 4242 4242" />
                        <input type="text" disabled className="w-24 bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-slate-400 cursor-not-allowed text-center font-mono text-sm" value="12/25" />
                    </div>
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 mt-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    data-testid="payment-submit"
                >
                    {loading ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {lang === 'TH' ? 'กำลังดำเนินการ...' : 'Processing...'}
                        </>
                    ) : (
                        lang === 'TH' ? 'ชำระเงิน' : 'Pay Securely'
                    )}
                </button>
            </form>
            <button 
                onClick={onClose} 
                className="w-full mt-4 text-slate-400 text-sm hover:text-slate-600 font-medium transition-colors"
                data-testid="payment-cancel"
            >
                {lang === 'TH' ? 'ยกเลิก' : 'Cancel'}
            </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentModal;