import React from 'react';
import { content } from '../data/content';
import {
    LineChart,
    Wallet,
    FileText,
    ShieldAlert,
    Globe,
    Languages,
    Rocket,
    TrendingUp
} from 'lucide-react';

interface SidebarProps {
    lang: 'uz' | 'ru';
    setLang: (lang: 'uz' | 'ru') => void;
    activeSection: string;
    setActiveSection: (id: string) => void;
}

const icons: Record<string, any> = {
    overview: LineChart,
    funding: Wallet,
    regulatory: FileText,
    tax: ShieldAlert,
    venture: TrendingUp,
    bpo: Globe,
    future: Rocket,
};

export const Sidebar: React.FC<SidebarProps> = ({
    lang,
    setLang,
    activeSection,
    setActiveSection
}) => {
    const t = content[lang].nav;

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-72 glass border-r border-white/10 flex flex-col z-50">
            <div className="p-8">
                <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-500 tracking-tighter">
                    {t.title}
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {t.sections.map((section) => {
                    const Icon = icons[section.id];
                    const isActive = activeSection === section.id;
                    return (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                                : 'text-gray-400 hover:bg-white/5 hover:text-gray-200 border border-transparent'
                                }`}
                        >
                            <Icon size={20} />
                            <span className="font-medium text-sm">{section.label}</span>
                        </button>
                    );
                })}
            </nav>

            <div className="p-6 mt-auto">
                <button
                    onClick={() => setLang(lang === 'uz' ? 'ru' : 'uz')}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl glass hover:bg-white/10 transition-colors border border-white/10"
                >
                    <Languages size={18} />
                    <span className="font-bold text-xs tracking-widest uppercase">{t.lang}</span>
                </button>
            </div>
        </aside>
    );
};
