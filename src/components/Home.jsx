import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import { useLanguage } from '../context/LanguageContext';

const Home = ({ role }) => {
  const container = useRef();
  const { t } = useLanguage();
  
  useGSAP(() => {
    gsap.from(".hero-line", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });
    gsap.from(".hero-image", {
      opacity: 0,
      x: 50,
      duration: 1.5,
      delay: 0.4,
      ease: "power3.out",
    });
    gsap.from(".hero-text", {
      opacity: 0,
      duration: 1.5,
      delay: 0.8,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section id="home" ref={container} className="pt-40 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex items-center gap-6 mb-24 about-reveal">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 font-bold whitespace-nowrap">{t.home.title}</h2>
        <div className="w-full h-[1px] bg-gradient-to-r from-zinc-900 via-zinc-800 to-transparent"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 text-center">

        <div className="flex-1 flex flex-col items-center">
        <h1 className="flex flex-col font-black leading-[0.8] tracking-tighter uppercase select-none mb-16 md:mb-24 items-center">
          {/* PERSPECTIVE SHADOW STACK */}
          <div className="hero-line relative flex flex-col items-center">
            {/* Main Text with Glow */}
            <span className="text-[6vw] sm:text-[5.5vw] md:text-[4.5vw] lg:text-[3.8vw] whitespace-nowrap relative z-10 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
              {role}
            </span>
            
            {/* Perspective Shadow Layer */}
            <div 
              className="absolute top-[80%] left-0 w-full pointer-events-none origin-top"
              style={{ 
                transform: 'perspective(400px) rotateX(65deg) scale(1, 3)',
                filter: 'blur(2px)'
              }}
            >
              <span 
                className="text-[6vw] sm:text-[5.5vw] md:text-[4.5vw] lg:text-[3.8vw] whitespace-nowrap block text-zinc-800"
                style={{ 
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
                }}
              >
                {role}
              </span>
            </div>
          </div>
        </h1>
          <div className="hero-text mt-4 flex flex-col items-center gap-8">
            <a
              href="/Resume_Habillah_Darma.pdf"
              download="Resume_Habillah_Darma.pdf"
              className="group flex items-center gap-3 px-6 py-3 border border-zinc-900 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500 hover:text-white hover:border-zinc-700 transition-all duration-500"
            >
              <Download size={14} className="group-hover:animate-bounce" />
              {t.home.download}
            </a>
          </div>
      </div>
      
      <div className="hero-image flex-shrink-0 w-full lg:w-[350px]">
        <div className="relative aspect-[4/5] border border-zinc-800 p-2 rounded-sm overflow-hidden group bg-zinc-950">
          <img 
            src={profileImg} 
            alt="Profile" 
            className="w-full h-full object-cover md:grayscale md:brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Home;
