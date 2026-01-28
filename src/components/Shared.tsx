import React from 'react';
import { motion } from 'framer-motion';

interface DataCardProps {
    title: string;
    value?: string;
    description: string;
    date?: string;
    source: string;
    tags?: string[];
}

export const DataCard: React.FC<DataCardProps> = ({
    title, value, description, date, source, tags
}) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 rounded-2xl border-white/5 space-y-4 hover:border-blue-500/30 transition-colors"
    >
        <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
            {date && (
                <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                    {date}
                </span>
            )}
        </div>

        {value && (
            <div className="text-2xl font-black text-blue-400">{value}</div>
        )}

        <p className="text-sm text-gray-400 leading-relaxed font-medium">
            {description}
        </p>

        <div className="pt-4 flex flex-wrap gap-2 items-center justify-between">
            <div className="flex gap-2 text-[10px] font-bold uppercase tracking-wider">
                {tags?.map(tag => (
                    <span key={tag} className="border border-white/10 px-2 py-0.5 rounded text-gray-500">
                        {tag}
                    </span>
                ))}
            </div>
            <span className="text-[10px] text-gray-600 font-bold uppercase italic">
                {source}
            </span>
        </div>
    </motion.div>
);

export const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <div className="mb-8 space-y-2">
        <h2 className="text-3xl font-black tracking-tight">{title}</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
    </div>
);
