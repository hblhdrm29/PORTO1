import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';

const Preloader = ({ onComplete }) => {
  const { t } = useLanguage();
  const preloaderRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // Split text into characters manually since we don't have SplitText
    const textElement = textRef.current;
    if (textElement) {
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
        .to([textRef.current], {
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
    }
  }, [onComplete]);

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

      <div className="flex flex-col items-center relative z-10">
        <h1
          ref={textRef}
          className="text-white text-xs md:text-sm font-poppins font-light uppercase tracking-[0.6em] text-center drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-100"
        >
          {t.preloader.welcome}
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
