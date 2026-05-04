import React from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'E-commerce Platform',
        description: 'A premium coffee shop website with full cart functionality and online payment integration.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
        tags: ['React', 'Tailwind', 'Zustand'],
        github: '#',
        demo: '#',
    },
    {
        title: 'Modern Dashboard',
        description: 'SaaS analytics dashboard with interactive charts, real-time data, and dark mode support.',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
        tags: ['Next.js', 'PostgreSQL', 'Recharts'],
        github: '#',
        demo: '#',
    },
    {
        title: 'Travel App',
        description: 'A minimalist travel booking app with location filtering and beautiful gallery views.',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
        tags: ['React Native', 'Firebase', 'Maps'],
        github: '#',
        demo: '#',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 bg-gray-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Proyek Pilihan
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-gradient-sea rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-sea-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-4">
                                    <a href={project.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.demo} className="flex items-center gap-1 text-sea-600 font-semibold text-sm hover:underline">
                                        Demo Live <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
