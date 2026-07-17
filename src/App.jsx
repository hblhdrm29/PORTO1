import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState('Frontend Developer');

  return (
    <div className="bg-black text-zinc-100 min-h-screen selection:bg-zinc-100 selection:text-black cursor-none">
      <CustomCursor />
      <Preloader onComplete={() => setLoading(false)} setRole={setRole} />
      
      {!loading && (
        <div className="animate-in fade-in zoom-in-95 duration-1000 ease-out">
          <Navbar />
          <main>
            <Home role={role} />
            <About role={role} />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
