
import React, { useState, useMemo } from 'react';
import { THERAPEUTIC_SOUNDS } from './constants';
import { SoundFrequency } from './types';
import ZenPlayer from './components/ZenPlayer';
import GeminiAssistant from './components/GeminiAssistant';

const App: React.FC = () => {
  const [selectedFrequency, setSelectedFrequency] = useState<SoundFrequency | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'espiritual' | 'fisico' | 'universal'>('espiritual');

  const handleSelectFrequency = (sound: SoundFrequency) => {
    if (selectedFrequency?.id === sound.id) {
      setIsPlaying(!isPlaying);
    } else {
      setSelectedFrequency(sound);
      setIsPlaying(true);
    }
  };

  const handleStopAll = () => {
    setIsPlaying(false);
    setSelectedFrequency(null);
  };

  const currentList = useMemo(() => {
    return THERAPEUTIC_SOUNDS.filter(s => {
      if (activeTab === 'espiritual') return s.frequency >= 174 && s.frequency <= 963;
      if (activeTab === 'fisico') return s.frequency < 100;
      if (activeTab === 'universal') return (s.frequency >= 111 && s.frequency < 174) || s.frequency === 432;
      return true;
    });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-48">
      {/* Header ajustado sem o Logo */}
      <header className="pt-12 pb-12 px-6 zen-gradient text-center rounded-b-[3.5rem] shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Arte e Cura</h1>
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mt-2">Sons Terapêuticos</p>
          <div className="w-12 h-1 bg-indigo-200 mx-auto my-4 rounded-full"></div>
          <p className="text-gray-500 text-xs max-w-[240px] mx-auto leading-relaxed opacity-80 italic">
            "A frequência do som é a chave para o equilíbrio da alma e do corpo."
          </p>
        </div>
        
        {/* Elementos Decorativos de Fundo */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-300/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>
      </header>

      {/* Navegação por Abas */}
      <div className="flex px-6 mt-8 gap-2 overflow-x-auto no-scrollbar">
        <button 
          onClick={() => setActiveTab('espiritual')}
          className={`shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'espiritual' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-400 border border-gray-100'}`}
        >
          Solfeggio
        </button>
        <button 
          onClick={() => setActiveTab('fisico')}
          className={`shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'fisico' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-400 border border-gray-100'}`}
        >
          Sub-Harmônicas
        </button>
        <button 
          onClick={() => setActiveTab('universal')}
          className={`shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'universal' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-400 border border-gray-100'}`}
        >
          Universais
        </button>
      </div>

      {/* Lista de Frequências */}
      <main className="px-6 mt-6 space-y-4">
        <div className="flex justify-between items-center px-1">
          <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {activeTab === 'espiritual' ? 'Escala Solfeggio' : activeTab === 'fisico' ? 'Ressonância Física' : 'Frequências Mestras'}
          </h2>
          <span className="text-[10px] text-gray-400">{currentList.length} opções</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {currentList.map((sound) => (
            <button
              key={sound.id}
              onClick={() => handleSelectFrequency(sound)}
              className={`group flex items-center gap-4 p-3.5 rounded-3xl border transition-all duration-300 text-left ${
                selectedFrequency?.id === sound.id 
                  ? 'bg-white border-indigo-500 ring-2 ring-indigo-50 shadow-lg scale-[1.01]' 
                  : 'bg-white border-gray-100 active:scale-95 hover:border-indigo-200'
              }`}
            >
              <div className={`w-12 h-12 shrink-0 rounded-2xl flex flex-col items-center justify-center font-bold ${sound.color}`}>
                <span className="text-xs">{Math.floor(sound.frequency)}</span>
                {sound.frequency % 1 !== 0 && <span className="text-[8px] -mt-1">.{sound.frequency.toString().split('.')[1]}</span>}
                <span className="text-[7px] uppercase opacity-60">Hz</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className={`font-bold text-gray-800 text-xs truncate ${selectedFrequency?.id === sound.id ? 'text-indigo-600' : ''}`}>
                    {sound.name.split(' - ')[1] || sound.name}
                  </h3>
                  <span className="text-[8px] font-bold text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
                    {sound.element}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {sound.benefits.map((benefit, i) => (
                    <span key={i} className="text-[9px] text-indigo-400 bg-indigo-50/40 px-1.5 py-0.5 rounded-md">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
              {selectedFrequency?.id === sound.id && isPlaying && (
                <div className="flex items-center gap-0.5 px-2">
                   <div className="w-0.5 h-3 bg-indigo-500 animate-[bounce_1s_infinite]"></div>
                   <div className="w-0.5 h-5 bg-indigo-500 animate-[bounce_1.2s_infinite]"></div>
                   <div className="w-0.5 h-2 bg-indigo-500 animate-[bounce_0.8s_infinite]"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Guia de Elementos MTC */}
        <section className="pt-8 pb-4">
           <h2 className="font-bold text-gray-800 text-xs uppercase tracking-widest text-center mb-6">Equilíbrio dos 5 Elementos</h2>
           <div className="grid grid-cols-5 gap-2">
             {['Madeira', 'Fogo', 'Terra', 'Metal', 'Água'].map(el => (
               <div key={el} className="flex flex-col items-center gap-2">
                 <div className={`w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold shadow-sm ${
                   el === 'Madeira' ? 'bg-emerald-100 text-emerald-600 border border-emerald-200' :
                   el === 'Fogo' ? 'bg-rose-100 text-rose-600 border border-rose-200' :
                   el === 'Terra' ? 'bg-amber-100 text-amber-600 border border-amber-200' :
                   el === 'Metal' ? 'bg-zinc-100 text-zinc-600 border border-zinc-200' :
                   'bg-blue-100 text-blue-600 border border-blue-200'
                 }`}>
                   {el[0]}
                 </div>
                 <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">{el}</span>
               </div>
             ))}
           </div>
        </section>
      </main>

      <GeminiAssistant />

      <ZenPlayer 
        activeSound={selectedFrequency} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying}
        onStop={handleStopAll}
      />
      
      {/* Background Decor */}
      <div className="fixed top-1/4 -left-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-gentle"></div>
      <div className="fixed bottom-1/4 -right-20 w-80 h-80 bg-emerald-200/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-gentle" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default App;
