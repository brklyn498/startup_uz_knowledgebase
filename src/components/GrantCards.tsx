import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Coins, Globe, Zap } from 'lucide-react';

interface GrantCardsProps {
    lang: 'uz' | 'ru';
}

const icons = {
    Coins: Coins,
    Globe: Globe,
    Zap: Zap,
};

export const GrantCards: React.FC<GrantCardsProps> = ({ lang }) => {
    const t = content[lang].grants;

    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto space-y-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center"
                >
                    {t.title}
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {t.items.map((item, index) => {
                        const Icon = icons[item.icon as keyof typeof icons];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-[300px] perspective-1000"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative h-full glass-card rounded-2xl p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-transform duration-300 border border-white/5 hover:border-blue-400/30">
                                    <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                                        <Icon size={28} />
                                    </div>

                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                                        {item.value}
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
