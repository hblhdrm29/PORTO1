import React, { useRef, useState } from 'react';
import { Github, ArrowUpRight, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import blueiyImg from '../assets/blueiy.png';
import kestraImg from '../assets/MONITORING_KESTRA.png';
import lmsImg from '../assets/LMS.png';
import essImg from '../assets/ESS DASHBOARD.png';
import naturuImg from '../assets/NATURU.png';
import revouImg from '../assets/REVOU.png';

const ProjectCard = ({ title, description, stack, image, github, demo, isPrivate }) => {
  const [showPrivate, setShowPrivate] = useState(false);
  const { t } = useLanguage();

  const handlePrivateClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isPrivate) {
      setShowPrivate(true);
      setTimeout(() => setShowPrivate(false), 2000);
    }
  };

  return (
    <div className="project-card group relative bg-zinc-950 rounded-[1.5rem] overflow-hidden border border-zinc-900 shadow-sm transition-all duration-700 hover:shadow-2xl hover:border-zinc-700 hover:-translate-y-2 active:scale-[0.98]">

      {/* Private Overlay - Full Card Blur */}
      <div
        className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-md transition-all duration-500 ${showPrivate ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'}`}
      >
        <Lock className="w-8 h-8 text-zinc-300 mb-3" />
        <span className="text-base tracking-wider text-zinc-200 font-semibold drop-shadow-lg">{t.projects.private}</span>
      </div>

      {/* Mockup Section - Perfect Fit (No Cropping) */}
      <div className="relative aspect-[16/9] bg-black overflow-hidden p-2 md:p-3">
        <div className="w-full h-full rounded-lg overflow-hidden bg-black relative flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain md:grayscale md:brightness-[0.9] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-in-out"
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

const Projects = () => {
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
          description="Developed a monitoring dashboard using Next.js that retrieves and visualizes workflow execution status, logs, and daily activity data from a PostgreSQL database."
          stack={["React", "Nextjs", "PostgreSQL", "Typescript"]}
          github="https://github.com/hblhdrm29/kestra-monitor"
          demo="#"
          isPrivate={true}
        />
        <ProjectCard
          title="LMS"
          image={lmsImg}
          description="Developed the user interface (UI) for a modern Learning Management System (LMS) platform, providing interactive dashboards with role-based access for different types of users."
          stack={["React", "Nextjs", "Typescript", "TailwindCSS"]}
          github="https://github.com/hblhdrm29/Clone_LMS"
          demo="https://frontend-lms-hblhdrm29.vercel.app/"
        />
        <ProjectCard
          title="ESS"
          image={essImg}
          description="Developed a web-based Employee Dashboard UI focused on providing fast navigation, informative data visualization, and a seamless user experience (UX) for internal business needs."
          stack={["Next.js", "TypeScript", "React", "TailwindCSS"]}
          github="https://github.com/hblhdrm29/Website-Latihan"
          demo="https://frontend-ess-hblhdrm29.vercel.app/"
        />
        <ProjectCard
          title="Blueiy POS"
          image={blueiyImg}
          description="This is a personal SaaS Point of Sale (POS) project built from scratch to explore business management system development, including transaction management, staff management, work shifts, and discount handling."
          stack={["React", "Next.js", "Go", "Typescript", "PostgreSQL", "Supabase", "Drizzle ORM", "Shadcn UI", "Tailwind CSS"]}
          github="https://github.com/hblhdrm29/Saas-POS"
          demo="https://saas-pos-blueiy-hblhdrm29.vercel.app/"
        />
        <ProjectCard
          title="Naturu"
          image={naturuImg}
          description="Built a personal frontend project featuring a Naruto-themed website, focusing on UI design, animations, and interactive user experience."
          stack={["Vue", "Vite", "CSS",]}
          github="https://github.com/hblhdrm29/NATURU"
          demo="https://naturu-hblhdrm29.vercel.app/"
        />
        <ProjectCard
          title="RevoU Assignment"
          image={revouImg}
          description="Developed a Todo List application as a mini frontend coding project for the RevoU certification program."
          stack={["HTML", "CSS", "JS"]}
          github="https://github.com/hblhdrm29/Mini-Coding-by-Revou"
          demo="https://mini-coding-by-revou-hblhdrm29.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
