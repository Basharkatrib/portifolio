import { motion } from "framer-motion";

function Experience() {
    const experiences = [
        {
            id: 1,
            title: "Full-Stack Developer (Freelance)",
            company: "Remote & Startup Projects",
            period: "2022 – Present",
            desc: "Building production apps with React, Redux, Laravel APIs, and MySQL/MongoDB",
            points: [
                "Shipped 5+ e-commerce platforms with payment integrations",
                "Architected reusable component libraries for rapid prototyping",
                "Implemented bilingual (AR/EN) UIs with i18n and RTL support"
            ]
        },
        {
            id: 2,
            title: "Junior Web Developer",
            company: "AraTech Company",
            period: "2021 – 2022",
            desc: "Contributed to team projects using modern JavaScript and PHP frameworks",
            points: [
                "Developed admin dashboards with React and Laravel backends",
                "Collaborated on API design and database optimization"
            ]
        },
        {
            id: 3,
            title: "Full-Stack Development Bootcamp",
            company: "AraTech Company – Damascus, Syria",
            period: "2021",
            desc: "Intensive 6-month program covering frontend, backend, and DevOps fundamentals",
            points: [
                "React.js, Redux, Next.js",
                "Laravel, PHP, RESTful APIs",
                "MySQL, Git, Agile methodologies"
            ]
        },
        {
            id: 4,
            title: "Advanced Web Development Training",
            company: "Techno Home – Damascus, Syria",
            period: "2020",
            desc: "Hands-on training in modern web technologies and responsive design",
            points: [
                "HTML5, CSS3, JavaScript ES6+",
                "Bootstrap, Tailwind CSS",
                "Version control with Git & GitHub"
            ]
        }
    ];

    return (
        <section className="py-20 px-6 bg-white dark:bg-[#0c1222] transition-colors duration-300" id="Experience">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4">
                        EXPERIENCE & EDUCATION
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gray-900 dark:text-white">Building </span>
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Real-World
                        </span>
                        <span className="text-gray-900 dark:text-white"> Impact</span>
                    </h2>
                    <p className="text-gray-900 dark:text-gray-400 text-lg max-w-4xl mx-auto">
                        From immersive training programs to real-world launches, I've partnered with teams to design, build, and iterate on experiences that marry thoughtful UX with reliable engineering.
                    </p>
                </motion.div>

                {/* Experience Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -8 }}
                            className="group p-6 bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-xl hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-all duration-500 ease-out hover:shadow-xl hover:shadow-cyan-500/10"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="group-hover:transform group-hover:translate-x-1 transition-transform duration-500">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-500">{exp.title}</h3>
                                    <p className="text-cyan-500 dark:text-cyan-400 text-sm font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-500">{exp.company}</p>
                                </div>
                                <span className="text-gray-900 dark:text-gray-500 text-sm whitespace-nowrap group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-500">{exp.period}</span>
                            </div>
                            <p className="text-gray-900 dark:text-gray-400 mb-4 leading-relaxed">{exp.desc}</p>
                            <ul className="space-y-2">
                                {exp.points.map((point, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-900 dark:text-gray-400 group-hover:transform group-hover:translate-x-1 transition-transform duration-500" style={{ transitionDelay: `${idx * 50}ms` }}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 mr-2 group-hover:bg-cyan-600 dark:group-hover:bg-cyan-300 group-hover:scale-125 transition-all duration-500"></span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
