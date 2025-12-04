import { motion } from 'framer-motion';

export default function PhilosophySection() {
    const steps = [
        {
            title: "Research",
            description: "We uncover what others overlook. Through deep analysis and quiet observation, we extract insights from the unseen—guiding decisions with precision and intention"
        },
        {
            title: "Create",
            description: "We prototype with purpose. From rough sketches to refined systems, we build, break, and rebuild until clarity emerges and the solution reveals itself."
        },
        {
            title: "Design",
            description: "Every pixel carries meaning. We craft experiences that feel alive—interfaces shaped as narratives, not just screens, where users move with intuition and purpose"
        }
    ];

    return (
        <section className="relative py-24 px-8 bg-panel border-y border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Behind the Curtain
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Our methodology is a blend of rigorous engineering and narrative alchemy.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="flex-1 md:text-right">
                                    {index % 2 === 0 && (
                                        <div className="md:text-right">
                                            <h3 className="text-xl font-bold text-sand mb-2">{step.title}</h3>
                                            <p className="text-text-muted leading-relaxed">{step.description}</p>
                                        </div>
                                    )}
                                    {index % 2 !== 0 && <div className="hidden md:block" />}
                                </div>

                                {/* Node */}
                                <div className="relative z-10 flex-shrink-0 w-4 h-4 rounded-full bg-bg border-2 border-accent mt-1.5 -ml-2 md:ml-0 md:-translate-x-1/2 shadow-[0_0_10px_rgba(159,122,234,0.5)]" />

                                <div className="flex-1">
                                    {index % 2 !== 0 && (
                                        <div>
                                            <h3 className="text-xl font-bold text-sand mb-2">{step.title}</h3>
                                            <p className="text-text-muted leading-relaxed">{step.description}</p>
                                        </div>
                                    )}
                                    {index % 2 === 0 && <div className="hidden md:block" />}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
