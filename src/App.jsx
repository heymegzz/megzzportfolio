import React, { useState, useEffect } from 'react';
import Loader from './components/ui/Loader';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CustomCursor from './components/ui/CustomCursor';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during load
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Failsafe: Force load after 3 seconds if loader hangs
    const failsafe = setTimeout(() => {
      if (loading) setLoading(false);
    }, 3000);

    return () => clearTimeout(failsafe);
  }, [loading]);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className="bg-primary min-h-screen selection:bg-accent selection:text-white">
          <Navbar />
          <Hero />
          <About />
        </main>
      )}
    </>
  );
}

export default App;
