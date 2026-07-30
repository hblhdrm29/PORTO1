import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-zinc-900 font-poppins">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-lg font-medium tracking-tight">Habillah Darma</span>
        <div className="flex items-center gap-8 text-sm text-zinc-500 font-poppins">
          <div className="hidden md:flex gap-8">
            <a href="#" className="hover:text-white transition-colors">{t.nav.home}</a>
            <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#projects" className="hover:text-white transition-colors">{t.nav.project}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
          </div>
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border border-zinc-800 rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-zinc-950/50">
            <button 
              onClick={() => setLang('en')} 
              className={`px-2 py-1 rounded-full transition-colors ${lang === 'en' ? 'bg-white text-black' : 'hover:text-white text-zinc-500'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('id')} 
              className={`px-2 py-1 rounded-full transition-colors ${lang === 'id' ? 'bg-white text-black' : 'hover:text-white text-zinc-500'}`}
            >
              ID
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
