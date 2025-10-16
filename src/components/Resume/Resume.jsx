import { useEffect, useState } from "react";
import { Collapse, Dropdown, initTWE } from "tw-elements";
import logo from '../../assets/logo.png';
import tikmol from '../../assets/tikmol.gif';
import ecomimage from '../../assets/R.jpeg';
import ecomclothes from '../../assets/OIP.gif';
import courses from '../../assets/courses.gif';
import prodstore from '../../assets/productstore.gif';
import photoland from '../../assets/photoland.gif';
import weather from '../../assets/weather.png';
import Flyza from '../../assets/Flyza.gif';
import Learnova from '../../assets/learnova.png'
import restaurant from '../../assets/restaurant.gif'
import { FaGlobe, FaGithub } from "react-icons/fa";
import { useI18n } from '../../i18n.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";





import '../../index.css';
import { use } from "react";
import ResumeCard from "../ResumeCard/ResumeCard";




function Resume() {
    const { t } = useI18n();
    const [active, setActive] = useState(2);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const data = [
        {
            id: 1,
            title: t('resume.education.1.title'),
            subtitle: t('resume.education.1.subtitle'),
            desc: t('resume.education.1.desc'),
            rate: t('resume.education.1.rate'),
        },
        {
            id: 2,
            title: t('resume.education.2.title'),
            subtitle: t('resume.education.2.subtitle'),
            desc: t('resume.education.2.desc'),
            rate: t('resume.education.2.rate'),
        },
    ];

    const data2 = [
        {
            id: 1,
            title: t('projects.1.title'),
            desc: t('projects.1.desc'),
            src: Learnova,
            link: "https://learnovaeducation.netlify.app",
            github: "https://github.com/Basharkatrib/E-learning-client",
            technologies: ["React", "Tailwind CSS", "Framer Motion", "Laravel API"]
        },
        {
            id: 2,
            title: t('projects.2.title'),
            desc: t('projects.2.desc'),
            src: restaurant,
            link: "https://restaurantbaskat.netlify.app",
            github: "https://github.com/Basharkatrib/My_Next",
            technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"]
        },
        {
            id: 3,
            title: t('projects.3.title'),
            desc: t('projects.3.desc'),
            src: Flyza,
            link: "https://flyzaairways.netlify.app",
            github: "https://github.com/Basharkatrib/Flights_client",
            technologies: ["React", "Redux Toolkit", "Strapi CMS", "Tailwind CSS"]
        },
        {
            id: 4,
            title: t('projects.4.title'),
            desc: t('projects.4.desc'),
            src: photoland,
            link: "https://photola.netlify.app",
            github: "https://github.com/Basharkatrib/PhotoLand-ecommerce",
            technologies: ["React", "Strapi CMS", "Redux Toolkit", "CSS"]
        },
        {
            id: 5,
            title: t('projects.5.title'),
            desc: t('projects.5.desc'),
            src: tikmol,
            github: "https://github.com/Basharkatrib/tikmol-front-addanim-v2",
            technologies: ["React", "Laravel", "Nova", "MySQL"]
        },
        {
            id: 6,
            title: t('projects.6.title'),
            desc: t('projects.6.desc'),
            src: weather,
            link: "https://appwether.netlify.app",
            github: "https://github.com/Basharkatrib/WeatherApp",
            technologies: ["React", "Tailwind CSS", "API", "JavaScript"]
        },
        {
            id: 7,
            title: t('projects.7.title'),
            desc: t('projects.7.desc'),
            src: ecomclothes,
            github: "https://github.com/Basharkatrib/ecom-wear",
            technologies: ["React", "Strapi CMS", "Tailwind CSS", "JavaScript"]
        },
        {
            id: 8,
            title: t('projects.8.title'),
            desc: t('projects.8.desc'),
            src: courses,
            github: "https://github.com/Basharkatrib/Courses-t1",
            technologies: ["Laravel", "PHP", "MySQL", "Blade"]
        },
        {
            id: 9,
            title: t('projects.9.title'),
            desc: t('projects.9.desc'),
            src: prodstore,
            link: "https://basharkatrib.github.io/crud1/",
            github: "https://github.com/Basharkatrib/crud1",
            technologies: ["HTML", "CSS", "JavaScript", "Local Storage"]
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full py-20 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black border-b border-white/10"
            id="Projects"
        >
            <div className="w-full px-3 sm:px-6">
                <div className="text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-red-600 font-semibold"
                    >
                        {t('resume.experienceYears')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mt-2"
                    >
                        {t('resume.title')}
                    </motion.h2>
                </div>

                <div className="mt-12">
                    <div className="dark:bg-zinc-900/50 backdrop-blur-sm p-1 rounded-xl flex gap-2">
                        {[t('resume.tab.education'), t('resume.tab.projects')].map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(index + 1)}
                                className={`flex-1 py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300 ${
                                    active === index + 1
                                        ? 'bg-red-600 text-white dark:text-zinc-900'
                                        : 'dark:text-gray-400'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-16">
                    {/* Education Section */}
                    <div className={`${active === 1 ? 'block' : 'hidden'}`}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="grid md:grid-cols-2 gap-8"
                        >
                            {data.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-gradient-to-b from-white/80 to-white/60 dark:from-zinc-900/80 dark:to-black/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-200 dark:border-zinc-800/50 hover:border-red-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5"
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-red-500 transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-400 mt-2 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                        <span className="px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-medium">
                                            {item.rate}
                                        </span>
                                    </div>
                                    <p className="mt-6 text-gray-700 dark:text-gray-400 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Projects Section */}
                    <div className={`${active === 2 ? 'block' : 'hidden'}`}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                        >
                            {data2.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-gradient-to-b from-white/80 to-white/60 dark:from-zinc-900/80 dark:to-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800/50 hover:border-red-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5"
                                >
                                    <div className="aspect-video overflow-hidden relative">
                                        <img
                                            src={project.src}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Technologies overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                                            <div className="w-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <div className="flex flex-wrap gap-2 justify-center">
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <motion.span
                                                            key={techIndex}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ 
                                                                opacity: 1, 
                                                                scale: 1,
                                                                transition: { 
                                                                    delay: techIndex * 0.1,
                                                                    duration: 0.3
                                                                }
                                                            }}
                                                            className="px-3 py-1 bg-red-600/20 backdrop-blur-sm text-red-400 text-xs font-medium rounded-full border border-red-500/30 hover:bg-red-600/30 hover:border-red-400/50 transition-all duration-300"
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                                <div className="flex gap-2">
                                                {project.link && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-gray-400 hover:text-red-500 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300"
                                                        title={t('projects.viewDemo')}
                                                    >
                                                        <FaGlobe className="w-5 h-5" />
                                                    </a>
                                                )}
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300"
                                                        title={t('projects.viewSource')}
                                                    >
                                                        <FaGithub className="w-5 h-5" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
                                            {project.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Resume;