import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceAlbeh from './components/ExperienceAlbeh';
import TechStack from './components/TechStack';
import AnalyticsMarketing from './components/AnalyticsMarketing';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
// Importación del Footer
import Footer from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-vp-amethyst text-vp-blue dark:text-vp-lime transition-colors duration-500 font-poppins">
      
      {showSplash ? (
        <SplashScreen onEnter={() => setShowSplash(false)} />
      ) : (
        <>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Hero />
            <About />
            <ExperienceAlbeh />
            <TechStack />
            <AnalyticsMarketing />
            <Projects />
            <Contact />
          </main>
          {/* Renderizado del Footer */}
          <Footer />
          <ChatBot />
        </>
      )}

    </div>
  );
}