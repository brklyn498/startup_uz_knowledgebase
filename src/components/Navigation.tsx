import React from 'react';
import { content } from '../data/content';
import { Globe } from 'lucide-react';

interface NavigationProps {
    lang: 'uz' | 'ru';
    setLang: (lang: 'uz' | 'ru') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ lang, setLang }) => {
    const t = content[lang].nav;

    const toggleLang = () => {
        setLang(lang === 'uz' ? 'ru' : 'uz');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    {t.title}
                </div>
                <button
                    onClick={toggleLang}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 transition-colors"
                >
                    <Globe size={16} />
                    <span className="font-medium">{t.lang}</span>
                </button>
            </div>
        </nav>
    );
};
