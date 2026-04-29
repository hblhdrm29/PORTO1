import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail 
} from 'lucide-react';
import profileImg from './assets/profile.jpg';
import blueiyImg from './assets/blueiy.png';
import kestraImg from './assets/MONITORING_KESTRA.png';
import lmsImg from './assets/LMS.png';
import essImg from './assets/ESS DASHBOARD.png';

// Only register ScrollTrigger, useGSAP is a hook
gsap.registerPlugin(ScrollTrigger);

// --- Modular Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-zinc-900">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="text-lg font-medium tracking-tight">Habillah Darma</span>
      <div className="flex gap-8 text-sm text-zinc-500">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#projects" className="hover:text-white transition-colors">Project</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  const container = useRef();
  
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
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 font-bold whitespace-nowrap">Home</h2>
        <div className="w-full h-[1px] bg-gradient-to-r from-zinc-900 via-zinc-800 to-transparent"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 text-center">

        <div className="flex-1 flex flex-col items-center">
        <h1 className="flex flex-col font-black leading-[0.8] tracking-tighter uppercase select-none mb-16 md:mb-24 items-center">
          {/* PERSPECTIVE SHADOW STACK */}
          <div className="hero-line relative flex flex-col items-center">
            {/* Main Text with Glow */}
            <span className="text-[6vw] sm:text-[5.5vw] md:text-[4.5vw] lg:text-[3.8vw] whitespace-nowrap relative z-10 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
              Frontend Developer
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
                Frontend Developer
              </span>
            </div>
          </div>
        </h1>
        <div className="hero-text mt-4">
        </div>
      </div>
      
      <div className="hero-image flex-shrink-0 w-full lg:w-[350px]">
        <div className="relative aspect-[4/5] border border-zinc-800 p-2 rounded-sm overflow-hidden group bg-zinc-950">
          <img 
            src={profileImg} 
            alt="Profile" 
            className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
      </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, stack, image }) => (
  <div className="project-card group bg-zinc-950 rounded-[1.5rem] overflow-hidden border border-zinc-900 shadow-sm transition-all duration-700 hover:shadow-2xl hover:border-zinc-700 hover:-translate-y-2">
    {/* Mockup Section - Perfect Fit (No Cropping) */}
    <div className="relative aspect-[16/9] bg-black overflow-hidden p-2 md:p-3">
      <div className="w-full h-full rounded-lg overflow-hidden bg-black relative flex items-center justify-center">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain grayscale brightness-[0.9] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-in-out"
        />
        {/* Subtle vignette to blend edges */}
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none"></div>
      </div>
    </div>

    {/* Info Section - Tighter Dark Theme */}
    <div className="p-5 md:p-6 text-white">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg md:text-xl font-bold tracking-tighter text-zinc-100 leading-none group-hover:text-white transition-colors">{title}</h3>
        <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-all" />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech) => (
          <span key={tech} className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[7px] md:text-[8px] font-black text-zinc-500 uppercase tracking-widest">
            {tech}
          </span>
        ))}
      </div>

      <p className="text-zinc-500 leading-relaxed text-[10px] md:text-xs font-medium line-clamp-2">
        {description}
      </p>
    </div>
  </div>
);

const ProjectsGrid = () => {
  const container = useRef();

  return (
    <section id="projects" ref={container} className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-6 mb-24">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 font-bold whitespace-nowrap">Projects</h2>
        <div className="w-full h-[1px] bg-gradient-to-r from-zinc-900 via-zinc-800 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          title="Kestra Monitor"
          image={kestraImg}
          description="Integrated monitoring system for Kestra orchestration, featuring real-time alerts and health metrics."
          stack={["React", "gRPC", "Kestra"]}
        />
        <ProjectCard 
          title="LMS"
          image={lmsImg}
          description="Scalable Learning Management System with real-time progress tracking and interactive course modules."
          stack={["Vue 3", "Go", "PostgreSQL"]}
        />
        <ProjectCard 
          title="ESS"
          image={essImg}
          description="Advanced Employee Self-Service dashboard for streamlined HR workflows and automated payroll processing."
          stack={["Next.js", "TypeScript", "Prisma"]}
        />
        <ProjectCard 
          title="Blueiy POS"
          image={blueiyImg}
          description="A comprehensive point-of-sale system designed for speed and reliability in high-traffic retail environments."
          stack={["React", "Go", "PostgreSQL"]}
        />
        <ProjectCard 
          title="Blueiy Hub"
          image={blueiyImg}
          description="Enterprise inventory management and real-time analytics engine for distributed warehouse operations."
          stack={["Next.js", "Redis", "gRPC"]}
        />
        <ProjectCard 
          title="Blueiy Mobile"
          image={blueiyImg}
          description="Customer-facing ordering platform with contactless payments and instant digital receipting."
          stack={["Vue 3", "Tailwind", "Docker"]}
        />
      </div>
    </section>
  );
};

const TechTag = ({ name }) => (
  <span className="tech-tag px-4 py-2 border border-zinc-800 text-[10px] md:text-xs font-medium uppercase tracking-widest rounded-sm text-zinc-500 hover:border-zinc-300 hover:text-white transition-all duration-300 cursor-default">
    {name}
  </span>
);

const About = () => {
  const container = useRef();
  const techs = ["Nextjs", "Vue", "React", "Go", "Prisma", "Drizzle", "PostgreSQL", "MySQL", "Docker", "TypeScript", "Tailwind CSS", "Github"];

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
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 font-bold whitespace-nowrap">About Me</h2>
        <div className="w-full h-[1px] bg-gradient-to-r from-zinc-900 via-zinc-800 to-transparent"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-32">
        <div className="lg:col-span-5 about-reveal">
          <p className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            Crafting <span className="text-zinc-500">modern interfaces</span> where every pixel serves a <span className="text-zinc-500">purpose.</span>
          </p>
        </div>
        
        <div className="lg:col-span-7 about-reveal pt-2">
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8 font-light text-justify">
            A Frontend Developer specializing in building modern web applications using Next.js and Vue.js, with robust cross-functional capabilities in Go (Golang) backend development.
            I have a proven track record of delivering end-to-end digital solutions, including Employee Self-Service (ESS) dashboards, Learning Management Systems (LMS), and Kestra Monitoring systems integrated with PostgreSQL.
          </p>
        </div>
      </div>

      <div className="about-reveal w-full relative">
        <div className="flex items-center gap-6 mb-12">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold whitespace-nowrap">Technical Stack</h3>
          <div className="w-full h-[1px] bg-gradient-to-r from-zinc-900 via-zinc-800 to-transparent"></div>
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

const Contact = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".contact-reveal", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <section id="contact" ref={container} className="py-40 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="flex items-center gap-6 mb-24 contact-reveal">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 font-bold whitespace-nowrap">Contact</h2>
        <div className="w-full h-[1px] bg-gradient-to-r from-zinc-900 via-zinc-800 to-transparent"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">

        <div className="contact-reveal">
          <h2 className="text-5xl font-semibold mb-8 tracking-tighter leading-tight">Let's build the<br />unconventional.</h2>
          <p className="text-zinc-500 max-w-sm leading-relaxed">Currently available for high-impact roles and freelance architectural consultations.</p>
        </div>
        <div className="contact-reveal flex flex-col gap-8 justify-center">
          <a href="mailto:habillahdarma@example.com" className="text-3xl md:text-4xl font-medium hover:text-zinc-400 transition-colors">
            habillahdarma@example.com
          </a>
          <div className="flex gap-12 pt-4">
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors font-bold flex items-center gap-2">
              <Github size={14} /> Github
            </a>
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors font-bold flex items-center gap-2">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors font-bold flex items-center gap-2">
              <Mail size={14} /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-zinc-700 text-[10px] uppercase tracking-[0.4em] font-bold gap-8 border-t border-zinc-900/50">
    <p>© 2024 Habillah Darma. ARCHITECTURAL PERFORMANCE.</p>
    <p>BUILT WITH GSAP + GO.</p>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="bg-black text-zinc-100 min-h-screen selection:bg-zinc-100 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectsGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
