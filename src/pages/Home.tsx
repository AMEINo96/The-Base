import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Linkedin, Instagram } from 'lucide-react';

import appsData from '../data/apps.json';
import foundersData from '../data/founders.json';
import type { AppConfig, Founder } from '../types';
import ParticleBackground from '../components/ParticleBackground';
import FounderCard from '../components/FounderCard';
import ProjectCard from '../components/ProjectCard';

import { useNavigate } from 'react-router-dom';
import PhilosophySection from '../components/PhilosophySection';

function Home() {
    const [selectedApp, setSelectedApp] = useState<AppConfig | null>(null);
    const navigate = useNavigate();

    const dossierRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    const apps: AppConfig[] = appsData as AppConfig[];
    const founders: Founder[] = foundersData as Founder[];

    const handleAppClick = (app: AppConfig) => {
        if (app.openIn === 'modal') {
            setSelectedApp(app);
        } else if (app.link.startsWith('/')) {
            navigate(app.link);
        } else {
            window.open(app.link, '_blank');
        }
    };

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen text-text relative bg-bg selection:bg-accent/30 selection:text-white">
            {/* Particle Background */}
            <ParticleBackground />


            {/* Hero Section */}
            <header className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-20 pb-32 overflow-hidden">
                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B0A0F_120%)] pointer-events-none z-10 opacity-70" />

                <div className="relative z-20 text-center">
                    {/* Classified Dossier Label */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase border-b border-accent/30 pb-2">
                            Digital Innovation
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-display text-4xl md:text-7xl lg:text-9xl font-bold text-center mb-8 tracking-tight leading-tight"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">THE BASE</span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-2xl text-text-muted max-w-xl mx-auto mb-12 font-light leading-relaxed"
                    >
                        Web Development. Graphic Design. AI/ML.
                        <span className="block mt-2 text-white font-medium">Crafting exceptional web experiences & AI solutions.</span>
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-6 justify-center"
                    >
                        <button
                            onClick={() => scrollToSection(dossierRef)}
                            className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold tracking-wider rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(159,122,234,0.4)] hover:-translate-y-1"
                        >
                            VIEW FOUNDERS
                        </button>
                        <button
                            onClick={() => scrollToSection(projectsRef)}
                            className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 text-white font-bold tracking-wider rounded transition-all duration-300 hover:bg-white/5"
                        >
                            EXPLORE PROJECTS
                        </button>
                    </motion.div>


                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs font-mono text-text-muted uppercase tracking-widest">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-px h-12 bg-gradient-to-b from-accent to-transparent"
                        />
                    </div>
                </motion.div>
            </header>

            {/* Dual-Profile Switcher Section */}
            <section ref={dossierRef} className="relative py-32 px-8 bg-bg">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-sm font-mono tracking-[0.2em] text-sand uppercase mb-4">
                            The Architects
                        </h2>
                        <div className="w-24 h-px bg-white/10 mx-auto" />
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {founders.map((founder, index) => (
                            <FounderCard key={founder.id} founder={founder} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Graphic Design Section */}
            <section ref={projectsRef} className="relative py-32 px-8 bg-panel border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="font-display text-4xl font-bold mb-2">Graphic Design Portfolio</h2>
                        <p className="text-text-muted">Visual identities and creative direction.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                        {apps.filter(app => app.category === 'Graphic Design').length > 0 ? (
                            apps.filter(app => app.category === 'Graphic Design').map((app, index) => (
                                <ProjectCard
                                    key={app.id}
                                    project={app}
                                    index={index}
                                    onClick={() => handleAppClick(app)}
                                />
                            ))
                        ) : (
                            <div className="col-span-full py-12 text-center border border-dashed border-white/10 rounded-xl bg-white/5">
                                <p className="text-text-muted font-mono">CLASSIFIED // DECLASSIFICATION IN PROGRESS</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Web Development Section */}
            <section className="relative py-32 px-8 bg-bg">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="font-display text-4xl font-bold mb-2">Web Development Projects</h2>
                        <p className="text-text-muted">Full-stack applications and digital platforms.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                        {apps.filter(app => app.category === 'Web Development').length > 0 ? (
                            apps.filter(app => app.category === 'Web Development').map((app, index) => (
                                <ProjectCard
                                    key={app.id}
                                    project={app}
                                    index={index}
                                    onClick={() => handleAppClick(app)}
                                />
                            ))
                        ) : (
                            <div className="col-span-full py-12 text-center border border-dashed border-white/10 rounded-xl bg-white/5">
                                <p className="text-text-muted font-mono">CLASSIFIED // DECLASSIFICATION IN PROGRESS</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* AI/ML Section */}
            <section className="relative py-32 px-8 bg-panel border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="font-display text-4xl font-bold mb-2">AI/ML Projects</h2>
                        <p className="text-text-muted">Intelligent systems and predictive models.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                        {apps.filter(app => app.category === 'AI/ML').length > 0 ? (
                            apps.filter(app => app.category === 'AI/ML').map((app, index) => (
                                <ProjectCard
                                    key={app.id}
                                    project={app}
                                    index={index}
                                    onClick={() => handleAppClick(app)}
                                />
                            ))
                        ) : (
                            <div className="col-span-full py-12 text-center border border-dashed border-white/10 rounded-xl bg-white/5">
                                <p className="text-text-muted font-mono">CLASSIFIED // DECLASSIFICATION IN PROGRESS</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <PhilosophySection />

            {/* Footer */}
            <footer className="relative py-12 px-8 border-t border-white/5 bg-bg">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="font-display text-xl font-bold mb-1">THE BASE</h3>
                        <p className="text-text-muted text-sm">Innovating since 2025.</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/AMEINo96/platform" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
                        <a href="https://www.instagram.com/potatoplayz96/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="text-text-muted hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
                    </div>

                    <p className="text-text-muted text-xs font-mono opacity-50">
                        © 2025 The Base. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Modal for Embedded Apps */}
            <AnimatePresence>
                {selectedApp && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={() => setSelectedApp(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-panel w-full max-w-6xl h-[90vh] rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="h-16 bg-black/50 flex items-center justify-between px-6 border-b border-white/5 shrink-0">
                                <div>
                                    <h3 className="font-bold text-lg">{selectedApp.title}</h3>
                                    <div className="flex gap-2 text-xs text-text-muted">
                                        {selectedApp.tags?.map(tag => <span key={tag}>#{tag}</span>)}
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedApp(null)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-text-muted hover:text-white"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-1 w-full bg-black relative">
                                <iframe
                                    src={selectedApp.link}
                                    className="w-full h-full border-0"
                                    title={selectedApp.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Home;
