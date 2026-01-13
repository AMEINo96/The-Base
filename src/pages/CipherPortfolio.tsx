import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CipherPortfolio() {
    const [activeTab, setActiveTab] = useState<'overview' | 'education' | 'contact'>('overview');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    return (
        <div className="min-h-screen bg-bg text-text p-8">
            <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-8">
                <ArrowLeft size={20} />
                Back to Base
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="font-display text-5xl font-bold mb-4">CIPHER</h1>
                <p className="text-xl text-text-muted mb-8">Creative Director</p>

                {/* Navigation Tabs */}
                <div className="flex gap-4 mb-12 border-b border-white/10 pb-4 overflow-x-auto">
                    {['overview', 'education', 'contact'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`px-4 py-2 rounded-lg capitalize font-medium transition-colors ${activeTab === tab
                                ? 'bg-accent text-white'
                                : 'text-text-muted hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="min-h-[500px]">
                    {activeTab === 'overview' && (
                        <div className="space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Hero / Intro */}
                            <section className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 shrink-0 relative group">
                                    <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img src="/portfolio/cipher/pfp.jpeg" alt="Syed Khizar Abbas" className="w-full h-full object-cover relative z-10" />
                                </div>
                                <div className="text-center md:text-left">
                                    <h2 className="text-3xl font-bold mb-4">Syed Khizar Abbas</h2>
                                    <p className="text-accent font-mono mb-6">AI & Machine Learning Enthusiast</p>
                                    <p className="text-text-muted leading-relaxed max-w-2xl">
                                        BSAI student at NUST passionate about artificial intelligence, machine learning,
                                        and building innovative solutions. Experienced with internships at top tech companies.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                                        {["BSAI Student", "AI & ML", "Python Developer", "Creative Designer"].map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-accent">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Stats */}
                            <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { label: "Courses Completed", value: "5+" },
                                    { label: "Internships", value: "4" },
                                    { label: "Skills Mastered", value: "6+" },
                                    { label: "Years Learning", value: "3+" }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-panel border border-white/5 p-6 rounded-xl text-center hover:border-accent/30 transition-colors">
                                        <div className="text-3xl font-display font-bold text-white mb-2">{stat.value}</div>
                                        <div className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </section>

                            {/* Featured Projects */}
                            <section>
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
                                    <span className="w-8 h-px bg-accent"></span>
                                    Featured Projects
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {[
                                        {
                                            title: "AI & ML Projects",
                                            subtitle: "Machine Learning Models",
                                            desc: "Developed various machine learning models and AI applications, including neural networks, computer vision, and NLP.",
                                            tags: ["Python", "TensorFlow", "PyTorch"],
                                            icon: "🤖"
                                        },
                                        {
                                            title: "Web Development",
                                            subtitle: "Full-Stack Applications",
                                            desc: "Created modern, responsive web applications using HTML, CSS, and JavaScript. Focus on user experience.",
                                            tags: ["HTML/CSS", "JavaScript", "Responsive"],
                                            icon: "💻"
                                        },
                                        {
                                            title: "Creative Design",
                                            subtitle: "Graphic & UI Design",
                                            desc: "Designed engaging user interfaces and graphics. Combining aesthetics with functionality.",
                                            tags: ["UI/UX", "Graphics", "Branding"],
                                            icon: "🎨"
                                        }
                                    ].map((project, i) => (
                                        <div key={i} className="bg-panel border border-white/5 rounded-xl overflow-hidden hover:translate-y-1 transition-transform">
                                            <div className="h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-4xl">
                                                {project.icon}
                                            </div>
                                            <div className="p-6">
                                                <h4 className="font-bold text-lg mb-1">{project.title}</h4>
                                                <p className="text-xs text-accent mb-4">{project.subtitle}</p>
                                                <p className="text-text-muted text-sm mb-6">{project.desc}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags.map(t => (
                                                        <span key={t} className="text-[10px] px-2 py-1 bg-white/5 rounded text-text-muted">{t}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Courses & Internships */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold mb-8">Courses</h3>
                                    <div className="space-y-4">
                                        {[
                                            { title: "AI & ML", details: "Artificial Intelligence & Machine Learning" },
                                            { title: "Python Basic", details: "by Codecourse" },
                                            { title: "Crypto Trading", details: "Cryptocurrency & Trading Fundamentals" },
                                            { title: "Git & GitHub", details: "by Udemy" },
                                            { title: "CS50", details: "by Harvard University" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 p-4 bg-panel border border-white/5 rounded-lg">
                                                <span className="text-accent">✓</span>
                                                <div>
                                                    <h4 className="font-bold text-sm">{item.title}</h4>
                                                    <p className="text-xs text-text-muted">{item.details}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-8">Internships</h3>
                                    <div className="space-y-4">
                                        {[
                                            { title: "NVIDIA", details: "AI & GPU Computing" },
                                            { title: "Meta", details: "Software Engineering" },
                                            { title: "Google", details: "Remote Internship" },
                                            { title: "NSTP", details: "Technology & Innovation" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 p-4 bg-panel border border-white/5 rounded-lg">
                                                <span className="text-accent">🚀</span>
                                                <div>
                                                    <h4 className="font-bold text-sm">{item.title}</h4>
                                                    <p className="text-xs text-text-muted">{item.details}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {activeTab === 'education' && (
                        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4">Education Journey</h2>
                                <p className="text-text-muted">My academic path in technology and artificial intelligence</p>
                            </div>

                            <div className="relative pl-8 border-l-2 border-accent/20 space-y-12 max-w-3xl mx-auto">
                                {[
                                    {
                                        degree: "Bachelor of Science in Artificial Intelligence",
                                        school: "NUST (National University of Sciences & Technology)",
                                        years: "2025 – 2029",
                                        status: "Current",
                                        desc: "Pursuing a comprehensive degree in AI, focusing on machine learning, deep learning, computer vision, and NLP.",
                                        icon: "🎓"
                                    },
                                    {
                                        degree: "Intermediate (FSc Pre-Engineering)",
                                        school: "KIPS College, Wah Cantt",
                                        years: "2023 – 2025",
                                        status: "Completed",
                                        desc: "Focus on Mathematics, Physics, and Chemistry. Built a strong foundation in analytical thinking.",
                                        icon: "📚"
                                    },
                                    {
                                        degree: "Matriculation (Science)",
                                        school: "Sir Syed College, Wah Cantt",
                                        years: "2021 – 2023",
                                        status: "Completed",
                                        desc: "Science focus, establishing fundamental knowledge in core scientific subjects.",
                                        icon: "🏫"
                                    }
                                ].map((edu, i) => (
                                    <div key={i} className="relative">
                                        <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-accent border-4 border-bg shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                                        <div className="bg-panel border border-white/5 rounded-xl p-6 hover:border-accent/30 transition-colors">
                                            <div className="flex gap-4 items-start mb-4">
                                                <span className="text-4xl">{edu.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl">{edu.degree}</h3>
                                                    <p className="text-accent">{edu.school}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 mb-4 text-xs font-mono">
                                                <span className="px-2 py-1 bg-white/5 rounded">{edu.years}</span>
                                                <span className="px-2 py-1 bg-white/5 rounded text-green-400">{edu.status}</span>
                                            </div>
                                            <p className="text-text-muted leading-relaxed">{edu.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'contact' && (
                        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                                <p className="text-text-muted">Let's connect and discuss opportunities</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                    {[
                                        { label: "Email", value: "khizarabbas@gmail.com", href: "mailto:khizarabbas@gmail.com", icon: "📧" },
                                        { label: "Phone", value: "+92 345-560911-0", href: "tel:+923455609110", icon: "📱" },
                                        { label: "GitHub", value: "github.com/khizar", href: "https://github.com/khizar", icon: "🌐" },
                                        { label: "Location", value: "Wah Cantt, Pakistan", href: null, icon: "📍" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 bg-panel border border-white/5 rounded-xl hover:border-accent/30 transition-colors">
                                            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-2xl">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-text-muted mb-1">{item.label}</p>
                                                {item.href ? (
                                                    <a href={item.href} className="text-white hover:text-accent font-medium">{item.value}</a>
                                                ) : (
                                                    <p className="text-white font-medium">{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-panel border border-white/5 rounded-xl p-8">
                                    <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                                    <form className="space-y-4" onSubmit={(e) => {
                                        e.preventDefault();
                                        const subject = `Portfolio Contact from ${formData.name}`;
                                        const body = `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`;
                                        window.location.href = `mailto:khizarabbas@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                                    }}>
                                        <div>
                                            <label className="block text-sm text-text-muted mb-2">Your Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-text-muted mb-2">Your Email</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-text-muted mb-2">Message</label>
                                            <textarea
                                                rows={4}
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-accent focus:outline-none transition-colors"
                                                placeholder="Tell me about your project..."
                                            />
                                        </div>
                                        <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-lg transition-colors">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </motion.div>
        </div>
    );
}
