import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail,
  Download,
  Lock,
  MessageCircle,
  Instagram,
  Facebook
} from 'lucide-react';
import profileImg from './assets/profile.jpg';
import blueiyImg from './assets/blueiy.png';
import kestraImg from './assets/MONITORING_KESTRA.png';
import lmsImg from './assets/LMS.png';
import essImg from './assets/ESS DASHBOARD.png';
import naturuImg from './assets/NATURU.png';
import revouImg from './assets/REVOU.png';
import whoareuImg from './assets/whoareu.jpeg';
import resumeFile from './assets/CV ATS NEW.pdf';

// Only register ScrollTrigger, useGSAP is a hook
gsap.registerPlugin(ScrollTrigger);

// --- Preloader Component ---

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    tl.from(textRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(textRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power3.in"
    })
    .to(preloaderRef.current, {
      y: "-100%",
      duration: 1,
      ease: "expo.inOut"
    });
  }, []);

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
          className="text-white text-[10px] md:text-xs font-space font-medium uppercase tracking-[1.2em] text-center drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          Welcome to my portfolio
        </h1>
        <div className="w-12 h-[1px] bg-white/20 mt-6 overflow-hidden">
           <div className="w-full h-full bg-white animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

// --- Custom Cursor Component ---

const CustomCursor = () => {
  const cursorRef = useRef();
  const followerRef = useRef();

  useGSAP(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleHover = () => {
      gsap.to(follower, {
        scale: 2.5,
        backgroundColor: "white",
        duration: 0.3
      });
    };

    const handleUnhover = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        duration: 0.3
      });
    };

    window.addEventListener("mousemove", moveCursor);
    
    const links = document.querySelectorAll("a, button, [role='button']");
    links.forEach(link => {
      link.addEventListener("mouseenter", handleHover);
      link.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      links.forEach(link => {
        link.removeEventListener("mouseenter", handleHover);
        link.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full z-[9999] pointer-events-none mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full z-[9998] pointer-events-none mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

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
        <div className="hero-text mt-4 flex flex-col items-center gap-8">
          <a 
            href={resumeFile} 
            download="Resume_Habillah_Darma.pdf" 
            className="group flex items-center gap-3 px-6 py-3 border border-zinc-900 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500 hover:text-white hover:border-zinc-700 transition-all duration-500"
          >
            <Download size={14} className="group-hover:animate-bounce" />
            Download My Resume
          </a>
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

const ProjectCard = ({ title, description, stack, image, github, demo, isPrivate }) => {
  const [showPrivate, setShowPrivate] = React.useState(false);

  const handlePrivateClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isPrivate) {
      setShowPrivate(true);
      setTimeout(() => setShowPrivate(false), 2000);
    }
  };

  return (
    <div className="project-card group relative bg-zinc-950 rounded-[1.5rem] overflow-hidden border border-zinc-900 shadow-sm transition-all duration-700 hover:shadow-2xl hover:border-zinc-700 hover:-translate-y-2">
      
      {/* Private Overlay - Full Card Blur */}
      <div 
        className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-md transition-all duration-500 ${showPrivate ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'}`}
      >
         <Lock className="w-8 h-8 text-zinc-300 mb-3" />
         <span className="text-base tracking-wider text-zinc-200 font-semibold drop-shadow-lg">Private Repository</span>
      </div>

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
          <div className="flex gap-2 items-center">
            {github && (
              <a 
                href={isPrivate ? "#" : github} 
                target={isPrivate ? "_self" : "_blank"} 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-full text-zinc-500 hover:text-white hover:border-zinc-600 transition-all duration-300 cursor-pointer"
                onClick={isPrivate ? handlePrivateClick : (e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            <a 
              href={isPrivate ? "#" : demo} 
              target={isPrivate ? "_self" : "_blank"} 
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-full text-zinc-500 group-hover:text-white group-hover:border-zinc-600 transition-all duration-300 cursor-pointer"
              onClick={isPrivate ? handlePrivateClick : (e) => e.stopPropagation()}
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {stack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded-full text-[6px] md:text-[7px] font-black text-zinc-500 uppercase tracking-widest">
              {tech}
            </span>
          ))}
        </div>

        <p className="text-zinc-500 leading-relaxed text-[10px] md:text-xs font-medium text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

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
          description="Proyek ini adalah dashboard monitoring berbasis Next.js dan PostgreSQL yang dirancang untuk memantau status eksekusi workflow, log, dan aktivitas harian pada platform orkestrasi Kestra secara real-time."
          stack={["React", "Nextjs", "PostgreSQL", "Typescript"]}
          github="https://github.com/hblhdrm29/kestra-monitor"
          demo="#"
          isPrivate={true}
        />
        <ProjectCard 
          title="LMS"
          image={lmsImg}
          description="Proyek ini adalah pengembangan Antarmuka (UI) dari platform Learning Management System (LMS) modern yang dirancang untuk menyediakan dashboard interaktif bagi berbagai peran pengguna (role-based access)."
          stack={["React", "Nextjs", "Typescript", "TailwindCSS"]}
          github="https://github.com/hblhdrm29/Clone_LMS"
          demo="https://frontend-lms-hblhdrm29.vercel.app/"
        />
        <ProjectCard 
          title="ESS"
          image={essImg}
          description="Proyek ini adalah pengembangan Antarmuka (UI) Dashboard Karyawan berbasis web. Fokus utamanya adalah membangun sistem navigasi yang cepat, tampilan yang informatif, dan pengalaman pengguna (UX) yang mulus untuk kebutuhan internal"
          stack={["Next.js", "TypeScript", "React", "TailwindCSS"]}
          github="https://github.com/hblhdrm29/Website-Latihan"
          demo="https://frontend-ess-hblhdrm29.vercel.app/"
        />
        <ProjectCard 
          title="Blueiy POS"
          image={blueiyImg}
          description="Project ini adalah sebuah SaaS POS (Point of Sale) System Kasir yang dirancang untuk mengelola operasional bisnis seperti transaksi, manajemen staf, shift kerja, dan diskon."
          stack={["React","Next.js", "Go", "Typescript","PostgreSQL" , "Supabase" , "Drizzle ORM" , "Shadcn UI" , "Tailwind CSS"]}
          github="https://github.com/hblhdrm29/Saas-POS"
          demo="https://saas-pos-blueiy-hblhdrm29.vercel.app/"
        />
        <ProjectCard 
          title="Naturu"
          image={naturuImg}
          description="Project ini adalah website gabut bertema Naruto tapi ada perpaduan Codingan"
          stack={["Vue" , "Vite" , "CSS" , ]}
          github="https://github.com/hblhdrm29/NATURU"
          demo="https://naturu-hblhdrm29.vercel.app/"
        />
        <ProjectCard 
          title="RevoU Assignment"
          image={revouImg}
          description="Ini Tugas mini coding membuat Todo List diRevou untuk mendapatkan sertifikat"
          stack={["HTML", "CSS", "JS"]}
          github="https://github.com/hblhdrm29/Mini-Coding-by-Revou"
          demo="https://mini-coding-by-revou-hblhdrm29.vercel.app/"
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
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const roles = ["Habillah Darma", "Frontend Developer"];
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
  }, [roleText, isDeleting, loopNum, typingSpeed]);

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
        <div className="lg:col-span-5 about-reveal pt-8 md:pt-12">
          <p className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.2] text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            Hi, ALL <br />
            I'm <span className="text-zinc-500">{roleText}</span><span className="text-zinc-500 animate-pulse">|</span>
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
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xgodayvk", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  useGSAP(() => {
    gsap.from(".contact-reveal", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <section id="contact" ref={container} className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="text-center mb-16 contact-reveal">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Contact</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Side: Image */}
        <div className="contact-reveal w-full relative border border-zinc-800 rounded-sm bg-zinc-950 p-2 group">
           <div className="w-full overflow-hidden rounded-sm relative bg-black flex items-center justify-center">
             <img 
               src={whoareuImg} 
               alt="Contact" 
               className="w-full h-auto object-contain grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-in-out" 
             />
             <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none"></div>
           </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-reveal flex flex-col justify-center relative">
           {status === 'success' && (
             <div className="absolute inset-0 z-10 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
               <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mb-6 border border-zinc-800">
                 <div className="w-8 h-8 text-white">✓</div>
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
               <p className="text-zinc-500 text-sm">Thank you, I will get back to you soon.</p>
             </div>
           )}

           <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
              <input 
                name="name"
                type="text" 
                placeholder="Your name" 
                required
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-zinc-400 transition-colors text-zinc-200 placeholder:text-zinc-600 font-medium" 
              />
              <input 
                name="email"
                type="email" 
                placeholder="Your email" 
                required
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-zinc-400 transition-colors text-zinc-200 placeholder:text-zinc-600 font-medium" 
              />
              <input 
                name="subject"
                type="text" 
                placeholder="Subject" 
                required
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-zinc-400 transition-colors text-zinc-200 placeholder:text-zinc-600 font-medium" 
              />
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="4" 
                required
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-zinc-400 transition-colors resize-none text-zinc-200 placeholder:text-zinc-600 font-medium"
              ></textarea>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="flex items-center justify-center gap-3 self-center px-12 py-3.5 border border-zinc-800 text-zinc-400 hover:text-black hover:bg-white hover:border-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-500 mt-12 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mail size={14} /> {status === 'submitting' ? 'Sending...' : 'Send'}
              </button>
              
              {status === 'error' && (
                <p className="text-red-500 text-[10px] text-center mt-4 uppercase tracking-widest">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
           </form>
        </div>

      </div>
    </section>
  );
};

const Footer = () => {
  const socials = [
    { name: 'Email', icon: <Mail size={16} />, link: 'https://mail.google.com/mail/?view=cm&fs=1&to=hdhmmz@gmail.com' },
    { name: 'LinkedIn', icon: <Linkedin size={16} />, link: 'https://www.linkedin.com/in/habillah-darma/' },
    { name: 'Github', icon: <Github size={16} />, link: 'https://github.com/hblhdrm29' },
    { name: 'Instagram', icon: <Instagram size={16} />, link: 'https://www.instagram.com/hblhdrm29/?hl=en' },
    { name: 'Facebook', icon: <Facebook size={16} />, link: 'https://www.facebook.com/share/1J6YToHBKN/' }
  ];

  return (
    <footer className="bg-black py-12 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-6">
          {socials.map((social) => (
            <a 
              key={social.name} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-white transition-colors duration-300 transform hover:-translate-y-1"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        <div className="text-zinc-600 text-[9px] font-space uppercase tracking-[0.6em] font-medium opacity-50">
          © 2026 HABILLAH DARMA
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black text-zinc-100 min-h-screen selection:bg-zinc-100 selection:text-black cursor-none">
      <CustomCursor />
      <Preloader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <div className="animate-in fade-in zoom-in-95 duration-1000 ease-out">
          <Navbar />
          <main>
            <Hero />
            <About />
            <ProjectsGrid />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
