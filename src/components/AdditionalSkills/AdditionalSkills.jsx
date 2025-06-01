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
                                title: "Training grant at AraTech Company",
                                subTitle: "Five-month training opportunity",
                                result: "100%",
                                des: "A Full Stack training that gave me strong skills in web development through hands-on experience."
                            },
                            {
                                title: "Web Development Course at Techno Home",
                                subTitle: "Four months intensive course",
                                result: "95%",
                                des: "Focused on web development with strong emphasis on ASP.NET Core and backend logic."
                            }
                        ],
                        [
                            {
                                title: "Working within a passionate team",
                                subTitle: "Remote collaboration & team synergy",
                                result: "Online",
                                des: "Collaborated with a team to build dynamic websites, enhancing my skills in teamwork and project management."
                            },
                            {
                                title: "Continuous learning",
                                subTitle: "Self-driven & up-to-date",
                                result: "100%",
                                des: "Tech is evolving rapidly, and I keep pace by constantly learning and refining my skills."
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
