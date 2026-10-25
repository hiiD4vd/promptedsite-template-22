import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Loader } from './components/Loader';
import { Canvas3D } from './components/Canvas3D';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { OpenLetter } from './components/OpenLetter';
import { Pricing } from './components/Pricing';
import { FAQs } from './components/FAQs';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { DemoModal } from './components/DemoModal';

export const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalState, setModalState] = useState<{ isOpen: boolean; videoSrc: string; title: string }>({
    isOpen: false,
    videoSrc: '/video/1.mp4',
    title: ''
  });

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenDemo = (videoSrc: string, title: string) => {
    setModalState({ isOpen: true, videoSrc, title });
  };

  const handleCloseDemo = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="relative min-h-screen bg-[#F6EDDA] text-[#373737] overflow-x-hidden selection:bg-[#3B60C5] selection:text-white">
      {/* 1. Loading Entrance Transition */}
      <Loader onLoaded={() => setIsLoaded(true)} />

      {/* 2. Three.js Architectural Canvas Background */}
      <Canvas3D />

      {/* 3. Navigation Bar */}
      <Navbar />

      {/* 4. Main Page Content */}
      <main className="relative z-10">
        <Hero />
        <Features onOpenDemo={handleOpenDemo} />
        <OpenLetter />
        <Pricing />
        <FAQs />
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* 6. Video Demo Modal Popup */}
      <DemoModal
        isOpen={modalState.isOpen}
        onClose={handleCloseDemo}
        videoSrc={modalState.videoSrc}
        title={modalState.title}
      />

      {/* 7. Cookie Consent */}
      <CookieBanner />
    </div>
  );
};

export default App;
