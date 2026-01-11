import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Image as ImageIcon } from 'lucide-react';
import appsData from '../data/apps.json';
import type { AppConfig } from '../types';

export default function ProjectPortfolio() {
    const { id } = useParams<{ id: string }>();
    const project = (appsData as AppConfig[]).find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-bg text-text flex flex-col items-center justify-center p-8">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link to="/" className="text-accent hover:underline flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Return to Archive
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bg text-text selection:bg-accent/30 selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/5 px-8 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors group text-sm font-mono uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Archive
                    </Link>
                    <div className="text-xs font-mono text-accent/50 uppercase tracking-widest leading-none">
                        Project // {project.id.padStart(3, '0')}
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-24 px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-wrap gap-2 mb-6"
                        >
                            {project.tags?.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full border border-accent/20">
                                    #{tag}
                                </span>
                            ))}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight"
                        >
                            {project.title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col md:flex-row gap-12 items-start"
                        >
                            <p className="text-xl text-text-muted max-w-2xl leading-relaxed font-light">
                                {project.description}
                            </p>

                            {project.link && project.category === 'Web Development' && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-accent hover:text-white transition-all duration-300 group whitespace-nowrap"
                                >
                                    Visit Website
                                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            )}
                        </motion.div>
                    </div>

                    {/* Gallery Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl font-bold font-display uppercase tracking-widest text-white/90">Portfolio Gallery</h2>
                            <div className="flex-1 h-px bg-white/10"></div>
                        </div>

                        {project.images && project.images.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {project.images.map((img, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -10 }}
                                        className="relative group rounded-2xl overflow-hidden border border-white/5 bg-panel p-2 shadow-2xl"
                                    >
                                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/50">
                                            <img
                                                src={img}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-24 text-center border border-dashed border-white/10 rounded-3xl bg-white/5">
                                <ImageIcon className="w-12 h-12 text-white/10 mx-auto mb-4" />
                                <p className="text-text-muted font-mono tracking-widest uppercase text-sm">
                                    No images uploaded for this project yet
                                </p>
                                <p className="text-text-muted/50 text-xs mt-2 italic">
                                    Add image paths to the "images" array in apps.json to populate this gallery.
                                </p>
                            </div>
                        )}
                    </motion.section>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 px-8 border-t border-white/5 text-center">
                <p className="text-text-muted text-xs font-mono uppercase tracking-widest opacity-50">
                    © 2025 Archive of Shadows // Projects Portfolio
                </p>
            </footer>
        </div>
    );
}
