import { motion } from "framer-motion";
import ResumeCard from "../ResumeCard/ResumeCard";

function AdditionalSkills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            id="Experience"
            className="w-full py-20 bg-gradient-to-b from-black via-zinc-900 to-black border-b border-white/10"
        >
            <div className="px-3 sm:px-6">
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-red-600/10 text-red-500 rounded-full text-sm font-medium tracking-wide">
                        MY JOURNEY
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mt-4">
                        Additional Skills & Experience
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {[
                        [
                            {
                                title: "Full Stack Development Training at AraTech Company",
                                subTitle: "Five-month intensive training program",
                                result: "100%",
                                des: "Comprehensive Full Stack training covering React.js, Laravel, database design, and modern web development practices with hands-on project experience."
                            },
                            {
                                title: "Advanced Web Development Course at Techno Home",
                                subTitle: "Four months specialized course",
                                result: "95%",
                                des: "Focused on advanced web development techniques, ASP.NET Core, backend architecture, and modern development methodologies."
                            }
                        ],
                        [
                            {
                                title: "Professional Team Collaboration",
                                subTitle: "Remote & on-site development projects",
                                result: "2+ Years",
                                des: "Successfully collaborated with development teams to build dynamic web applications, e-commerce platforms, and RESTful APIs using React.js and Laravel."
                            },
                            {
                                title: "Continuous Learning & Skill Development",
                                subTitle: "Self-driven & technology-focused",
                                result: "100%",
                                des: "Committed to staying current with the latest technologies, frameworks, and best practices in web development, particularly in React.js ecosystem and Laravel framework."
                            }
                        ]
                    ].map((column, columnIndex) => (
                        <motion.div
                            key={columnIndex}
                            variants={itemVariants}
                            className="relative flex flex-col gap-8"
                        >
                            {/* Vertical timeline line */}

                            <div className="space-y-10">
                                {column.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="relative"
                                    >
                                        {/* Dot */}
                                        
                                        {/* Card */}
                                        <div className="h-full">
                                            <ResumeCard
                                                title={item.title}
                                                subTitle={item.subTitle}
                                                result={item.result}
                                                des={item.des}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default AdditionalSkills;
