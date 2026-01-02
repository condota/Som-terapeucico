
import React, { useState, useEffect } from 'react';
import { SoundFrequency } from '../types';
import { oscillator } from './FrequencyOscillator';

interface ZenPlayerProps {
  activeSound: SoundFrequency | null;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  onStop: () => void;
}

const ZenPlayer: React.FC<ZenPlayerProps> = ({ activeSound, isPlaying, setIsPlaying, onStop }) => {
  const [volume, setVolume] = useState(50);
  const [timer, setTimer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (activeSound && isPlaying) {
      oscillator.start(activeSound.frequency, volume);
    } else {
      oscillator.stop();
    }
  }, [activeSound, isPlaying]);

  useEffect(() => {
    oscillator.updateVolume(volume);
  }, [volume]);

  useEffect(() => {
    let interval: number;
    if (isPlaying && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timeLeft, setIsPlaying]);

  const handlePlayPause = () => {
    if (!activeSound) return;
    setIsPlaying(!isPlaying);
  };

  const handleSetTimer = (minutes: number) => {
    setTimer(minutes);
    setTimeLeft(minutes * 60);
    if (activeSound) setIsPlaying(true);
  };

  const handleStop = () => {
    setTimeLeft(0);
    setTimer(null);
    onStop();
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 p-6 glass-morphism rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transition-all duration-500 transform z-50 ${activeSound ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-md mx-auto space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${activeSound?.color} ${isPlaying ? 'animate-pulse' : ''}`}>
              {activeSound?.frequency && Math.floor(activeSound.frequency)}
            </div>
            <div className="max-w-[140px]">
              <h3 className="font-bold text-gray-800 text-xs truncate">{activeSound?.name}</h3>
              <p className="text-[10px] text-gray-500">{activeSound?.element} • {activeSound?.frequency}Hz</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handleStop}
              className="w-10 h-10 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center hover:bg-gray-200 active:scale-90 transition-all"
              title="Parar e Fechar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            
            <button 
              onClick={handlePlayPause}
              className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 active:scale-90 transition-all"
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              )}
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span>Intensidade</span>
            <span>{volume}%</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value))}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-2">
            {[5, 15, 30, 60].map(m => (
              <button 
                key={m}
                onClick={() => handleSetTimer(m)}
                className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${timer === m ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-100 text-gray-500'}`}
              >
                {m}m
              </button>
            ))}
          </div>
          {timeLeft > 0 && (
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
              {formatTime(timeLeft)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ZenPlayer;
