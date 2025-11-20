import { motion } from "framer-motion";

function About() {
    const skills = [
        { name: 'React & Next.js', percentage: 95 },
        { name: 'Laravel & PHP', percentage: 92 },
        { name: 'Tailwind CSS & SCSS', percentage: 90 },
        { name: 'Redux Toolkit & Context API', percentage: 93 },
        { name: 'MySQL & MongoDB', percentage: 88 },
        { name: 'Git & Agile Workflows', percentage: 85 }
    ];

    return (
        <section className="py-20 px-6 bg-gray-50 dark:bg-[#0c1222] transition-colors duration-300" id="About">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gray-900 dark:text-white">About </span>
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>
                    <p className="text-gray-900 dark:text-gray-400 text-lg max-w-3xl mx-auto">
                        Passionate developer with a keen eye for design and a love for creating seamless user experiences
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-gray-900 dark:text-gray-300 leading-relaxed text-lg">
                            I'm Bashar Katrib, a full-stack developer from Syria with 2+ years of experience shipping React.js frontends powered by Laravel and PHP backends. I thrive on translating product ideas into performant interfaces, strong APIs, and reusable component systems.
                        </p>
                        <p className="text-gray-900 dark:text-gray-300 leading-relaxed">
                            I completed intensive full-stack programs at AraTech Company and Techno Home, where I honed my craft in modern JavaScript, database design, and team workflows. Since then I've helped startups craft e-commerce experiences, learning platforms, and internal dashboards that scale.
                        </p>
                        <p className="text-gray-900 dark:text-gray-300 leading-relaxed">
                            Beyond shipping features, I care deeply about collaboration, accessibility, and building in both Arabic and English. Whether it's a design handoff or an API specification, I love keeping teams aligned and outcomes measurable.
                        </p>
                    </motion.div>

                    {/* Right: Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {skills.map((skill, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="text-cyan-500 dark:text-cyan-400">{skill.name.split(' ')[0] === 'React' || skill.name.split(' ')[0] === 'Laravel' ? '⚡' : '🔧'}</span>
                                        <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                                    </div>
                                    <span className="text-gray-900 dark:text-gray-400 font-medium">{skill.percentage}%</span>
                                </div>
                                <div className="h-2 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percentage}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;
