import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';
import shinjiImg from '../assets/bleach_shinji.png';

const Preloader = ({ onComplete, setRole }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState('selection');
  const preloaderRef = useRef();
  const textRef = useRef();
  const selectionRef = useRef();
  const imageRef = useRef();

  const handleSelection = (selectedRole) => {
    setRole(selectedRole);
    const tl = gsap.timeline({
      onComplete: () => {
        setStep('welcome');
      }
    });

    tl.to(selectionRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.in"
    });
  };

  useGSAP(() => {
    if (step === 'welcome') {
      const tl = gsap.timeline({
        onComplete: onComplete
      });

      // Split text into characters manually since we don't have SplitText
      const textElement = textRef.current;
      const text = textElement.innerText;
      textElement.innerHTML = '';
      
      const chars = text.split('').map(char => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char; // preserve spaces
        span.style.opacity = '0';
        textElement.appendChild(span);
        return span;
      });

      tl.to(chars, {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05,
        ease: "none"
      })
      .fromTo(imageRef.current, {
        clipPath: "inset(100% 0 0 0)", // Starts hidden from bottom
        filter: "blur(10px) brightness(0)",
      }, {
        clipPath: "inset(0% 0 0 0)", // Reveals fully to the top
        filter: "blur(0px) brightness(1)",
        duration: 2, // Longer duration for rendering effect
        ease: "power2.out"
      }) // Removed the "-=0.5" so it waits for text to finish completely
      .to([textRef.current, imageRef.current], {
        y: -20,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.in"
      })
      .to(preloaderRef.current, {
        y: "-100%",
        duration: 1,
        ease: "expo.inOut"
      });
    } else {
      gsap.fromTo(selectionRef.current, {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      });
    }
  }, [step, onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Aesthetic Monochrome Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute w-[200px] h-[200px] bg-white/[0.05] rounded-full blur-[60px]"></div>
      </div>

      {step === 'selection' && (
        <div ref={selectionRef} className="relative z-10 flex flex-col items-center gap-12 w-full px-6 opacity-0">
          <div className="text-center space-y-3">
            <h2 className="text-white text-xs md:text-sm font-medium uppercase tracking-[0.6em] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              {t.preloader.choose}
            </h2>
            <div className="w-12 h-[1px] bg-zinc-800 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full max-w-xl justify-center items-center">
            <button 
              onClick={() => handleSelection('Frontend Developer')} 
              className="group relative w-full md:w-48 py-8 md:py-10 border border-zinc-800 hover:border-zinc-500 transition-all duration-700 overflow-hidden bg-zinc-950/30 backdrop-blur-sm flex flex-col items-center justify-center gap-2 cursor-none"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] z-10 group-hover:scale-105 transition-transform duration-500">{t.preloader.frontend}</span>
              <span className="text-zinc-500 text-[9px] md:text-[10px] uppercase tracking-widest z-10 group-hover:text-zinc-300 transition-colors">{t.preloader.developer}</span>
            </button>

            <span className="text-zinc-700 text-[10px] md:text-xs font-light uppercase tracking-widest">{t.preloader.or}</span>

            <button 
              onClick={() => handleSelection('Data Engineer')} 
              disabled={true}
              className="group relative w-full md:w-48 py-8 md:py-10 border border-zinc-800 transition-all duration-700 overflow-hidden bg-zinc-950/30 backdrop-blur-sm flex flex-col items-center justify-center gap-2 cursor-not-allowed"
            >
              {/* Background gradient effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Default text (hides on hover) */}
              <div className="flex flex-col items-center justify-center gap-2 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] z-10">{t.preloader.data}</span>
                <span className="text-zinc-500 text-[9px] md:text-[10px] uppercase tracking-widest z-10">{t.preloader.engineer}</span>
              </div>

              {/* Coming Soon text (shows only on hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-zinc-300 text-xs md:text-sm font-bold uppercase tracking-[0.2em] z-10">Coming Soon</span>
              </div>
            </button>
          </div>
        </div>
      )}

      {step === 'welcome' && (
        <div className="flex flex-col items-center relative z-10 gap-8">
          <h1 
            ref={textRef}
            className="text-white text-[10px] md:text-xs font-space font-medium uppercase tracking-[1.2em] text-center drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-100"
          >
            {t.preloader.welcome}
          </h1>

          {/* Shinji Image Container */}
          <div 
            ref={imageRef}
            className="relative w-48 md:w-64 aspect-square overflow-hidden opacity-100 mix-blend-screen"
          >
            <img 
              src={shinjiImg} 
              alt="Loading Character" 
              className="w-full h-full object-cover grayscale"
            />
            {/* Scanline overlay for aesthetic */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.1)_2px,rgba(255,255,255,0.1)_4px)] pointer-events-none"></div>
          </div>

          <div className="w-12 h-[1px] bg-white/20 overflow-hidden">
             <div className="w-full h-full bg-white animate-progress"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Preloader;
