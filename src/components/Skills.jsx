import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        name: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    },
    {
        name: 'Backend & Tools',
        skills: ['Node.js', 'PostgreSQL', 'Prisma', 'Git', 'Vite', 'Docker'],
    },
    {
        name: 'Design',
        skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Glassmorphism', 'Clean Code'],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Keahlian Saya
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Berbagai teknologi dan metodologi yang saya gunakan untuk mewujudkan ide menjadi produk nyata yang bernilai tinggi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-gray-50/50 border border-gray-100 hover:border-sea-200 transition-all"
                        >
                            <h3 className="text-xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                                <span className="w-2 h-8 bg-gradient-sea rounded-full" />
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map(skill => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.1, backgroundColor: '#0ea5e9', color: '#fff' }}
                                        className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-2xl shadow-sm border border-gray-100 cursor-default transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
