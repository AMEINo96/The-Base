import { motion } from 'framer-motion';
import type { Founder } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface FounderCardProps {
    founder: Founder;
    index: number;
}

import { useNavigate } from 'react-router-dom';

export default function FounderCard({ founder, index }: FounderCardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (founder.portfolioUrl.endsWith('.html')) {
            window.location.href = founder.portfolioUrl;
        } else if (founder.portfolioUrl.startsWith('/')) {
            navigate(founder.portfolioUrl);
        } else {
            window.open(founder.portfolioUrl, '_blank');
        }
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            onClick={handleClick}
            className="group relative bg-panel rounded-2xl p-6 md:p-8 cursor-pointer border border-white/5 hover:border-accent/30 transition-all duration-300"
        >
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                {/* Portrait */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                        src={founder.imageUrl}
                        alt={founder.name}
                        className="w-full h-full object-cover rounded-full border-2 border-white/10 group-hover:border-accent transition-colors duration-300 relative z-10"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-between mb-2">
                        <div>
                            <h3 className="text-2xl font-display font-bold text-white tracking-wide">
                                {founder.codename}
                            </h3>
                            <p className="text-accent text-sm font-mono tracking-wider uppercase">
                                {founder.role}
                            </p>
                        </div>
                        <ArrowUpRight className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300 hidden md:block" />
                    </div>

                    <div className="w-12 h-px bg-accent/30 my-4 mx-auto md:mx-0" />

                    <p className="text-text-muted text-sm leading-relaxed mb-4">
                        {founder.description}
                    </p>

                    <p className="text-text italic font-display text-lg border-l-2 border-accent pl-4 text-left">
                        "{founder.philosophy}"
                    </p>

                    <div className="mt-6 md:hidden">
                        <span className="text-accent text-xs font-mono border border-accent/30 px-3 py-1 rounded-full">
                            VIEW PROFILE
                        </span>
                    </div>
                </div>
            </div>
        </motion.article >
    );
}
