import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const TechTag = ({ name }) => (
  <span className="tech-tag px-4 py-2 border border-zinc-800 text-[10px] md:text-xs font-medium uppercase tracking-widest rounded-sm text-zinc-500 hover:border-zinc-300 hover:text-white transition-all duration-300 cursor-default">
    {name}
  </span>
);

const About = ({ role }) => {
  const container = useRef();
  const { t } = useLanguage();
  const techs = ["Nextjs", "Vue", "React", "Go", "Prisma", "Drizzle", "PostgreSQL", "MySQL", "Docker", "TypeScript", "Tailwind CSS", "Github"];
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const roles = ["Habillah Darma", role];
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setRoleText(
        isDeleting 
          ? fullText.substring(0, roleText.length - 1)
          : fullText.substring(0, roleText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && roleText === fullText) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && roleText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, loopNum, typingSpeed, role]);

  useGSAP(() => {
    gsap.from(".about-reveal", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Infinite Marquee Logic - One single row
    gsap.to(".marquee-track-1", {
      xPercent: -33.33,
      ease: "none",
      duration: 55,
      repeat: -1,
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-6 mb-24 about-reveal">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 font-bold whitespace-nowrap">{t.about.title}</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-32">
        <div className="lg:col-span-5 about-reveal pt-8 md:pt-12">
          <p className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.2] text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            {t.about.hi} <br />
            {t.about.im} <span className="text-zinc-500">{roleText}</span><span className="text-zinc-500 animate-pulse">|</span>
          </p>
        </div>

        <div className="lg:col-span-7 about-reveal pt-2">
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8 font-light text-justify">
            {t.about.desc.replace('{role}', role)}
          </p>
        </div>
      </div>

      <div className="about-reveal w-full relative">
        <div className="flex items-center gap-6 mb-12">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold whitespace-nowrap">{t.about.tech}</h3>
        </div>
        
        <div className="w-full relative overflow-hidden py-4">
          {/* Single Row Marquee */}
          <div className="marquee-track-1 flex gap-8 whitespace-nowrap w-max">
            {[...techs, ...techs, ...techs].map((tech, i) => (
              <TechTag key={`${tech}-${i}`} name={tech} />
            ))}
          </div>
          
          {/* Fade masks for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default About;
