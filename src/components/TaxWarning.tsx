import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { AlertTriangle, Calendar, CheckCircle2, XCircle } from 'lucide-react';

interface TaxWarningProps {
    lang: 'uz' | 'ru';
}

export const TaxWarning: React.FC<TaxWarningProps> = ({ lang }) => {
    const t = content[lang].tax;
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const toggleService = (id: string) => {
        setSelectedServices(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const isDanger = selectedServices.length > 0;

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-red-900/10" />

            <div className="max-w-4xl mx-auto relative z-10 glass-card rounded-3xl p-8 md:p-12 border border-red-500/20">
                <div className="flex flex-col md:flex-row gap-8 items-start justify-between mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-amber-400 font-semibold uppercase tracking-wider text-sm">
                            <AlertTriangle size={16} />
                            {t.title}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">{t.warning}</h2>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex items-center gap-4">
                        <Calendar className="text-red-400" size={24} />
                        <div>
                            <div className="text-xs text-red-300 uppercase font-bold">{t.deadline}</div>
                            <div className="text-xl font-mono font-bold text-red-100">{t.date}</div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-lg font-medium text-gray-300">{t.checklistTitle}</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        {t.checklist.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => toggleService(item.id)}
                                className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${selectedServices.includes(item.id)
                                        ? 'bg-red-500/20 border-red-500/50 text-white'
                                        : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300'
                                    }`}
                            >
                                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedServices.includes(item.id) ? 'bg-red-500 border-red-500' : 'border-gray-500'
                                    }`}>
                                    {selectedServices.includes(item.id) && <CheckCircle2 size={12} className="text-white" />}
                                </div>
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isDanger ? 'danger' : 'safe'}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`p-4 rounded-xl flex items-center gap-3 font-semibold ${isDanger
                                    ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                                    : 'bg-green-500/10 text-green-400 border border-green-500/20'
                                }`}
                        >
                            {isDanger ? <XCircle size={20} /> : <CheckCircle2 size={20} />}
                            {isDanger ? t.dangerMessage : t.safeMessage}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
