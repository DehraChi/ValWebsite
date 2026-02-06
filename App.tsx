
import React from 'react';
import Hero from './components/Hero';
import MessageSection from './components/MessageSection';
import MemoryCarousel from './components/MemoryCarousel';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-slate-950 selection:bg-rose-500/30">
      {/* Visual background elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-rose-900/30 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-900/20 blur-[120px] rounded-full"></div>
      </div>

      <Hero />
      <MessageSection />
      <MemoryCarousel />
      <Footer />
      
      <MusicPlayer />
    </main>
  );
};

export default App;
