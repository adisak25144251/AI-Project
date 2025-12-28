import React, { useContext, useState } from 'react';
import { NavigationContext, LanguageContext } from '../contexts';
import { Section } from '../types';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
    const { navigate } = useContext(NavigationContext);
    const { lang } = useContext(LanguageContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call authentication
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false);
        // Navigate back to Overview after successful login simulation
        navigate(Section.OVERVIEW); 
    };

    return (
        <div className="flex items-center justify-center min-h-[70vh] relative z-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-glass w-full max-w-md relative overflow-hidden"
                data-testid="auth-root"
            >
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                 
                 <div className="text-center mb-8">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">
                        {lang === 'TH' ? 'เข้าสู่ระบบ' : 'Welcome Back'}
                    </h2>
                    <p className="text-slate-500 text-sm">
                        {lang === 'TH' ? 'ลงชื่อเข้าใช้เพื่อเริ่มเรียนรู้ AI' : 'Sign in to continue your AI journey'}
                    </p>
                 </div>

                 <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                        <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                            placeholder="student@example.com"
                            data-testid="auth-email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
                        <input 
                            type="password" 
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                            placeholder="••••••••"
                            data-testid="auth-password"
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-lg shadow-indigo-500/20 hover:bg-slate-800 hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                        data-testid="auth-submit"
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {lang === 'TH' ? 'กำลังเข้าสู่ระบบ...' : 'Signing in...'}
                            </span>
                        ) : (lang === 'TH' ? 'เข้าสู่ระบบ' : 'Sign In')}
                    </button>
                 </form>

                 <div className="mt-6 text-center text-xs text-slate-400">
                    {lang === 'TH' ? 'ยังไม่มีบัญชี? ' : "Don't have an account? "}
                    <span 
                        className="text-indigo-600 font-bold cursor-pointer hover:underline" 
                        onClick={() => navigate(Section.PRICING)}
                    >
                        {lang === 'TH' ? 'สมัครเรียนเลย' : 'Enroll now'}
                    </span>
                 </div>
            </motion.div>
        </div>
    );
};

export default Login;