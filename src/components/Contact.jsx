import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail } from 'lucide-react';
import whoareuImg from '../assets/whoareu.jpeg';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef();
  const [status, setStatus] = useState('idle');
  const { t } = useLanguage();

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
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">{t.contact.title}</h2>
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
              <h3 className="text-xl font-bold text-white mb-2">{t.contact.success}</h3>
              <p className="text-zinc-500 text-sm">{t.contact.successDesc}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <input
              name="name"
              type="text"
              placeholder={t.contact.name}
              required
              className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-zinc-400 transition-colors text-zinc-200 placeholder:text-zinc-600 font-medium"
            />
            <input
              name="email"
              type="email"
              placeholder={t.contact.email}
              required
              className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-zinc-400 transition-colors text-zinc-200 placeholder:text-zinc-600 font-medium"
            />
            <input
              name="subject"
              type="text"
              placeholder={t.contact.subject}
              required
              className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-zinc-400 transition-colors text-zinc-200 placeholder:text-zinc-600 font-medium"
            />
            <textarea
              name="message"
              placeholder={t.contact.message}
              rows="4"
              required
              className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-zinc-400 transition-colors resize-none text-zinc-200 placeholder:text-zinc-600 font-medium"
            ></textarea>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="flex items-center justify-center gap-3 self-center px-12 py-3.5 border border-zinc-800 text-zinc-400 hover:text-black hover:bg-white hover:border-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-500 mt-12 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Mail size={14} /> {status === 'submitting' ? t.contact.sending : t.contact.send}
            </button>

            {status === 'error' && (
              <p className="text-red-500 text-[10px] text-center mt-4 uppercase tracking-widest">
                {t.contact.error}
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
