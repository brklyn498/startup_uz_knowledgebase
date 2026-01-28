import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { X, ExternalLink } from 'lucide-react';

interface DataCardProps {
    title: string;
    value?: string;
    description: string;
    date?: string;
    source: string;
    tags?: string[];
    extendedInfo?: string;
    onClick?: () => void;
}

export const DataCard: React.FC<DataCardProps> = ({
    title, value, description, date, source, tags, onClick
}) => {
    const isArchive = tags?.some(t => ['Arxiv', 'Архив', 'Tarix', 'История'].includes(t));

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={onClick}
            className={`glass-card p-6 rounded-2xl border-white/5 space-y-4 hover:border-blue-500/30 transition-all cursor-pointer group ${isArchive ? 'opacity-50 hover:opacity-80 grayscale-[0.5]' : ''
                }`}
        >
            <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{title}</h3>
                        {isArchive && (
                            <span className="text-[10px] bg-red-500/10 text-red-400 border border-red-500/20 px-1.5 py-0.5 rounded font-black uppercase">
                                {tags?.find(t => ['Arxiv', 'Архив'].includes(t))}
                            </span>
                        )}
                    </div>
                    {date && <div className="text-xs text-gray-500 font-mono">{date}</div>}
                </div>
                {value && !isArchive && (
                    <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-blue-400 text-sm font-black whitespace-nowrap">
                        {value}
                    </div>
                )}
            </div>

            <p className="text-gray-400 text-sm line-clamp-2">{description}</p>

            <div className="pt-4 flex flex-wrap gap-2 items-center justify-between border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                    {tags?.map((tag, i) => (
                        <span key={i} className="text-[10px] uppercase font-black tracking-tighter bg-white/5 px-2 py-0.5 rounded text-gray-400">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="text-[10px] font-mono text-gray-600 truncate max-w-[120px]">{source}</div>
            </div>
        </motion.div>
    );
};

export const Modal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    item: DataCardProps | null;
}> = ({ isOpen, onClose, item }) => (
    <AnimatePresence>
        {isOpen && item && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-2xl glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
                >
                    <div className="p-8 space-y-6">
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-widest">
                                    <ExternalLink size={14} />
                                    {item.source}
                                </div>
                                <h2 className="text-3xl font-black">{item.title}</h2>
                                {item.date && <div className="text-sm text-gray-400 font-mono">{item.date}</div>}
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {item.value && (
                                <div className="inline-block bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-xl text-blue-400 text-2xl font-black">
                                    {item.value}
                                </div>
                            )}
                            <div className="text-gray-300 leading-relaxed text-lg">
                                {item.extendedInfo || item.description}
                            </div>
                        </div>

                        {item.tags && item.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-4">
                                {item.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-bold text-gray-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="pt-8 border-t border-white/5 text-[10px] text-gray-500 uppercase tracking-[0.2em] flex justify-between">
                            <span>Knowledge Base Entry</span>
                            <span>Source: {item.source}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        )}
    </AnimatePresence>
);

export const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <div className="mb-8 space-y-2">
        <h2 className="text-3xl font-black tracking-tight">{title}</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
    </div>
);
