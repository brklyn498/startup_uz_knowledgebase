import { useState } from 'react';
import { content } from './data/content';
import { Sidebar } from './components/Sidebar';
import { DataCard, SectionHeader } from './components/Shared';
import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ChecklistItem = { id: string; label: string };

function App() {
  const [lang, setLang] = useState<'uz' | 'ru'>('uz');
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const t = content[lang];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-12">
            <SectionHeader title={t.overview.title} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.overview.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 rounded-2xl border-white/5"
                >
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">{stat.label}</div>
                  <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-xs text-blue-400 font-medium">{stat.detail}</div>
                </motion.div>
              ))}
            </div>
            {/* Quick Summary Card */}
            <div className="glass-card p-8 rounded-[2rem] border-blue-500/20 bg-blue-500/5">
              <h3 className="text-xl font-bold mb-4">Ekotizim haqida / Об экосистеме</h3>
              <p className="text-gray-400 leading-relaxed">
                Ushbu portal PQ-357 va PQ-388 qarorlari asosidagi ma'lumotlarni o'z ichiga oladi.
                Asosiy maqsad - startaplar uchun yaratilgan imkoniyatlarni (grantlar, soddalashtirilgan tartiblar)
                va yaqinlashib kelayotgan soliq o'zgarishlarini barcha uchun tushunarli holatda taqdim etish.
              </p>
            </div>
          </div>
        );
      case 'funding':
        return (
          <div className="space-y-8">
            <SectionHeader title={t.funding.title} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.funding.items.map((item, i) => (
                <DataCard key={i} {...item} />
              ))}
            </div>
          </div>
        );
      case 'regulatory':
        return (
          <div className="space-y-8">
            <SectionHeader title={t.regulatory.title} />
            <div className="space-y-6 max-w-4xl">
              {t.regulatory.timeline.map((item, i) => (
                <div key={i} className="flex gap-6 relative">
                  {i !== t.regulatory.timeline.length - 1 && (
                    <div className="absolute left-[27px] top-[40px] bottom-[-20px] w-0.5 bg-white/10" />
                  )}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center font-bold text-blue-400">
                    {i + 1}
                  </div>
                  <div className="flex-1 pb-12">
                    <DataCard {...item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'tax':
        return (
          <div className="space-y-8">
            <SectionHeader title={t.tax.title} />
            <div className="max-w-4xl glass-card rounded-3xl p-8 border-red-500/20 bg-red-500/5">
              <div className="flex flex-col md:flex-row gap-8 justify-between mb-12">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-amber-500 font-bold uppercase text-xs tracking-widest">
                    <AlertTriangle size={16} />
                    {t.tax.warning}
                  </div>
                  <h3 className="text-3xl font-black">{t.tax.warning}</h3>
                  <p className="text-gray-400 max-w-lg">{t.tax.details}</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center h-fit">
                  <div className="text-xs text-red-400 uppercase font-black tracking-widest mb-1">{t.tax.deadline}</div>
                  <div className="text-2xl font-mono font-black text-red-100">{t.tax.date}</div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <h4 className="font-bold mb-4 text-gray-300">Imtiyozini yo'qotadigan sohalar:</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {t.tax.affectedGroups.map((g, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-400 bg-black/20 p-3 rounded-lg border border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold">{t.tax.checklistTitle}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {t.tax.checklist.map((item: ChecklistItem) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setSelectedServices(prev =>
                            prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id]
                          );
                        }}
                        className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${selectedServices.includes(item.id)
                          ? 'bg-red-500/20 border-red-500/50 text-white'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300'
                          }`}
                      >
                        <div className={`w-5 h-5 rounded border flex items-center justify-center ${selectedServices.includes(item.id) ? 'bg-red-500 border-red-500' : 'border-gray-500'
                          }`}>
                          {selectedServices.includes(item.id) && <CheckCircle2 size={12} />}
                        </div>
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedServices.length > 0 ? 'danger' : 'safe'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-6 rounded-2xl flex items-center gap-4 font-black text-lg border-2 ${selectedServices.length > 0
                        ? 'bg-red-500/10 text-red-500 border-red-500/20'
                        : 'bg-green-500/10 text-green-500 border-green-500/20'
                        }`}
                    >
                      {selectedServices.length > 0 ? <XCircle size={28} /> : <CheckCircle2 size={28} />}
                      {selectedServices.length > 0 ? t.tax.dangerMessage : t.tax.safeMessage}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        );
      case 'venture':
        return (
          <div className="space-y-8">
            <SectionHeader title={t.venture.title} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.venture.items.map((item, i) => (
                <DataCard key={i} {...item} />
              ))}
            </div>
          </div>
        );
      case 'bpo':
        return (
          <div className="space-y-8">
            <SectionHeader title={t.bpo.title} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.bpo.items.map((item, i) => (
                <DataCard key={i} {...item} />
              ))}
            </div>
          </div>
        );
      case 'future':
        return (
          <div className="space-y-8">
            <SectionHeader title={t.future.title} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.future.items.map((item, i) => (
                <DataCard key={i} {...item} />
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white selection:bg-blue-500/30">
      <Sidebar
        lang={lang}
        setLang={setLang}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex-1 ml-72 p-12 max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection + lang}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
