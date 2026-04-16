import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { CursorEffect } from './components/CursorEffect';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? saved === 'true' : true;
  });

  const [sparks, setSparks] = useState(() => {
    const saved = localStorage.getItem('sparks');
    return saved !== null ? saved === 'true' : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('sparks', String(sparks));
  }, [sparks]);

  return (
    <div className="min-h-screen">
      {sparks && <CursorEffect />}
      <ScrollToTop />
      <Navigation
        darkMode={darkMode}
        onDarkModeChange={setDarkMode}
        sparks={sparks}
        onSparksChange={setSparks}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}