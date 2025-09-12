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
import restaurant from '../../assets/restaurant.gif'
import { FaGlobe, FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";





import '../../index.css';
import { use } from "react";
import ResumeCard from "../ResumeCard/ResumeCard";




function Resume() {
    const [active, setActive] = useState(2);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const data = [
        {
            id: 1,
            title: "Bachelor's degree in information technology",
            subtitle: "University of Lattakia in Syria",
            desc: "My continuous learning at university and my perseverance in studying gave me the opportunity to be able to work as a team and develop.",
            rate: "85/100",
        },
        {
            id: 2,
            title: "JavaScript Course Completion Certificate",
            subtitle: "Armenian University",
            desc: "After completing the JavaScript course and passing all the tests, the SoloLearn platform awarded me a certificate of course completion.",
            rate: "100/100",
        },
    ];

    const data2 = [
        {
            id: 1,
            title: "Restaurant",
            desc: "I developed a restaurant web application using Next.js, featuring a smooth and user-friendly interface with subtle animations for an enhanced user experience.",
            src: restaurant,
            link: "https://restaurantbaskat.netlify.app",
            github: "https://github.com/basharkatrib/restaurant-nextjs"
        },
        {
            id: 2,
            title: "Flyza Airways",
            desc: "Developed a flight booking web app using React.js, ReduxToolkit for state management, Strapi CMS for content handling, and Tailwind CSS for responsive design.",
            src: Flyza,
            link: "https://aesthetic-paprenjak-4b8a9e.netlify.app",
            github: "https://github.com/basharkatrib/flyza-airways"
        },
        {
            id: 3,
            title: "Photo Land e-commerce",
            desc: "Full Stack Camera e-store where ReactJS front-end and Strapi CMS back-end were used with Redux Toolkit state managenment.",
            src: photoland,
            link: "https://stupendous-mermaid-f5d7eb.netlify.app",
            github: "https://github.com/basharkatrib/photo-land-ecommerce"
        },
        {
            id: 4,
            title: "Tikmol e-commerce",
            desc: "Full Stack e-store where ReactJS front-end and Laravel back-end were used with Nova admin interface.",
            src: tikmol,
            github: "https://github.com/basharkatrib/tikmol-ecommerce"
        },
        {
            id: 5,
            title: "Weather App",
            desc: "A simple weather app built with React JS for the frontend, Tailwind CSS for styling, and RESTful API to fetch real-time weather data, offering users an interactive and responsive experience.",
            src: weather,
            link: "https://illustrious-beignet-ae2bfe.netlify.app",
            github: "https://github.com/basharkatrib/weather-app"
        },
        {
            id: 6,
            title: "Clothes e-commerce",
            desc: "Full Stack e-store where ReactJS front-end and Strapi CMS Dashboard back-end and Tailwind Css.",
            src: ecomclothes,
            github: "https://github.com/basharkatrib/clothes-ecommerce"
        },
        {
            id: 7,
            title: "Educational platform",
            desc: "An educational platform that allows you to choose courses, start watching videos, and comment on any video using Laravel..",
            src: courses,
            github: "https://github.com/basharkatrib/educational-platform"
        },
        {
            id: 8,
            title: "Store management system",
            desc: "A warehouse management system for selling products where you can add, delete, modify and search for a specific product using HTML CSS JavaScript.",
            src: prodstore,
            link: "https://basharkatrib.github.io/crud1/",
            github: "https://github.com/basharkatrib/store-management-system"
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full py-20 bg-gradient-to-b from-zinc-900 to-black border-b border-white/10"
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
                        2+ YEARS OF EXPERIENCE
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-bold text-white mt-2"
                    >
                        My Resume
                    </motion.h2>
                </div>

                <div className="mt-12">
                    <div className="bg-zinc-900/50 backdrop-blur-sm p-1 rounded-xl flex gap-2">
                        {['Education', 'Projects'].map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(index + 1)}
                                className={`flex-1 py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300 ${
                                    active === index + 1
                                        ? 'bg-red-600 text-white'
                                        : 'text-gray-400 hover:text-white'
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
                                    className="group bg-gradient-to-b from-zinc-900/80 to-black/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/50 hover:border-red-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5"
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                        <span className="px-4 py-2 bg-red-600/10 text-red-500 rounded-full text-sm font-medium">
                                            {item.rate}
                                        </span>
                                    </div>
                                    <p className="mt-6 text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
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
                                    className="group bg-gradient-to-b from-zinc-900/80 to-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800/50 hover:border-red-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={project.src}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
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
                                                        className="p-2 bg-zinc-800 rounded-full text-gray-400 hover:text-red-500 hover:bg-zinc-700 transition-all duration-300"
                                                        title="View Live Demo"
                                                    >
                                                        <FaGlobe className="w-5 h-5" />
                                                    </a>
                                                )}
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 bg-zinc-800 rounded-full text-gray-400 hover:text-white hover:bg-zinc-700 transition-all duration-300"
                                                        title="View Source Code"
                                                    >
                                                        <FaGithub className="w-5 h-5" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
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