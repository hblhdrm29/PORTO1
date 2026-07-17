import React from 'react';
import { Mail, Linkedin, Github, Instagram, Facebook } from 'lucide-react';

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

export default Footer;