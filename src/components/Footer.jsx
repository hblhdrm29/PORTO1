import React from 'react';
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="py-20 px-4 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="max-w-md text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-sea bg-clip-text text-transparent inline-block">
                        Ayo Berkolaborasi
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Saya selalu terbuka untuk mendiskusikan proyek baru, ide-ide kreatif, atau peluang untuk menjadi bagian dari visi Anda.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="#" className="p-3 bg-white hover:bg-sea-50 text-gray-400 hover:text-sea-600 rounded-2xl shadow-sm border border-gray-100 transition-all">
                            <Github size={20} />
                        </a>
                        <a href="#" className="p-3 bg-white hover:bg-sea-50 text-gray-400 hover:text-sea-600 rounded-2xl shadow-sm border border-gray-100 transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="p-3 bg-white hover:bg-sea-50 text-gray-400 hover:text-sea-600 rounded-2xl shadow-sm border border-gray-100 transition-all">
                            <Instagram size={20} />
                        </a>
                        <a href="mailto:hello@example.com" className="p-3 bg-white hover:bg-sea-50 text-gray-400 hover:text-sea-600 rounded-2xl shadow-sm border border-gray-100 transition-all">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-auto text-center md:text-right">
                    <p className="text-sm font-medium text-gray-500 mb-2">
                        © 2026 Porto Portfolio. Dibuat dengan ❤️ oleh Habillah Darma.
                    </p>
                    <p className="text-xs text-gray-400">
                        Built with React, Tailwind CSS & Framer Motion.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
