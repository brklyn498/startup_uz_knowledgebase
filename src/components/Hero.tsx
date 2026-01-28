import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ArrowRight, Trophy } from 'lucide-react';

interface HeroProps {
    lang: 'uz' | 'ru';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
    const t = content[lang].hero;

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#0f172a]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-300 text-sm font-medium">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                        </span>
                        {t.badge}
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200">
                            {t.title}
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                        {t.description}
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
                    >
                        {t.cta}
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>

                {/* Right Content - Prize Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur opacity-30 animate-pulse" />
                    <div className="relative glass-card p-8 rounded-[2rem] border-white/10 text-center space-y-6">
                        <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                            <Trophy className="text-white w-10 h-10" />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-gray-400 text-lg uppercase tracking-wider font-medium">
                                {t.prizeLabel}
                            </h3>
                            <div className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 font-mono tracking-tight">
                                {t.prizeAmount}
                            </div>
                        </div>

                        <div className="pt-4 flex justify-center gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-white/20" />
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
