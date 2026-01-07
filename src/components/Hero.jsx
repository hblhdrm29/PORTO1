import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-sea-600 uppercase bg-sea-50 rounded-full">
                        Tersedia untuk Proyek Baru
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                        Membangun Pengalaman Digital yang{' '}
                        <span className="bg-gradient-sea bg-clip-text text-transparent">
                            Modern & Premium.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Halo! Saya seorang Frontend Developer yang berfokus pada pembuatan antarmuka minimalis,
                        responsif, dan berperforma tinggi untuk hasil yang luar biasa.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-black transition-all shadow-lg"
                        >
                            Lihat Karya Saya <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-all"
                        >
                            Hubungi Saya
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-sea-300 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-300 rounded-full blur-[100px]" />
            </div>
        </section>
    );
};

export default Hero;
