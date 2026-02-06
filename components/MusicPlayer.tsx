
import React, { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play } from 'lucide-react';
import { CONFIG } from '../constants';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Playback failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src={CONFIG.musicUrl} loop />
      <button
        onClick={togglePlay}
        className="group relative flex items-center justify-center w-12 h-12 bg-rose-600 hover:bg-rose-500 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute -top-12 right-0 bg-slate-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-rose-900/50">
          {isPlaying ? "Pause Music" : "Play Music"}
        </span>
        {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
        {isPlaying && (
          <div className="absolute -inset-1 rounded-full border-2 border-rose-500 animate-ping opacity-20"></div>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
