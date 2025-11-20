import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Learnova from '../../assets/learnova.png';
import restaurant from '../../assets/restaurant.gif';
import Flyza from '../../assets/Flyza.gif';
import photoland from '../../assets/photoland.gif';
import tikmol from '../../assets/tikmol.gif';
import ecomclothes from '../../assets/OIP.gif';
import courses from '../../assets/courses.gif';
import prodstore from '../../assets/productstore.gif';
import weather from '../../assets/weather.png';

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Learnova - E-Learning Platform",
            desc: "A comprehensive online learning platform with course management, video streaming, and progress tracking",
            image: Learnova,
            techs: ["React.js", "Redux Toolkit", "Laravel", "MySQL"],
            github: "https://github.com/Basharkatrib/E-learning-client",
            demo: "https://learnovaeducation.netlify.app"
        },
        {
            id: 2,
            title: "Restaurant Website",
            desc: "Modern restaurant website with online ordering, menu management, and table reservations",
            image: restaurant,
            techs: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
            github: "https://github.com/Basharkatrib/My_Next",
            demo: "https://restaurantbaskat.netlify.app"
        },
        {
            id: 3,
            title: "Flyza - Flight Booking System",
            desc: "Complete flight booking platform with real-time availability, seat selection, and payment processing",
            image: Flyza,
            techs: ["React.js", "Laravel", "MySQL", "Stripe"],
            github: "https://github.com/Basharkatrib/Flights_client",
            demo: "https://flyzaairways.netlify.app"
        },
        {
            id: 4,
            title: "PhotoLand - E-commerce Platform",
            desc: "An e-commerce platform for photography equipment with product catalog, shopping cart, and checkout system",
            image: photoland,
            techs: ["React.js", "Strapi CMS", "Redux Toolkit", "CSS"],
            github: "https://github.com/Basharkatrib/PhotoLand-ecommerce",
            demo: "https://photola.netlify.app"
        },
        {
            id: 5,
            title: "Tikmol - Business Management System",
            desc: "A comprehensive business management system with admin dashboard, inventory tracking, and reporting features",
            image: tikmol,
            techs: ["React.js", "Laravel", "Nova", "MySQL"],
            github: "https://github.com/Basharkatrib/tikmol-front-addanim-v2",
            demo: null
        },
        {
            id: 6,
            title: "Weather App",
            desc: "A weather application with real-time forecasts, location-based weather data, and interactive UI",
            image: weather,
            techs: ["React.js", "Tailwind CSS", "API", "JavaScript"],
            github: "https://github.com/Basharkatrib/WeatherApp",
            demo: "https://appwether.netlify.app"
        },
        {
            id: 7,
            title: "E-Commerce Clothes Store",
            desc: "An online clothing store with product filtering, shopping cart, and user authentication",
            image: ecomclothes,
            techs: ["React.js", "Strapi CMS", "Tailwind CSS", "JavaScript"],
            github: "https://github.com/Basharkatrib/ecom-wear",
            demo: null
        },
        {
            id: 8,
            title: "Courses Management System",
            desc: "A course management platform built with Laravel for creating, managing, and tracking educational courses",
            image: courses,
            techs: ["Laravel", "PHP", "MySQL", "Blade"],
            github: "https://github.com/Basharkatrib/Courses-t1",
            demo: null
        },
        {
            id: 9,
            title: "Product Store - CRUD Application",
            desc: "A product management application with full CRUD operations, local storage, and responsive design",
            image: prodstore,
            techs: ["HTML", "CSS", "JavaScript", "Local Storage"],
            github: "https://github.com/Basharkatrib/crud1",
            demo: "https://basharkatrib.github.io/crud1/"
        }
    ];

    return (
        <section className="py-20 px-6 bg-gray-50 dark:bg-[#0c1222] transition-colors duration-300" id="Projects">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gray-900 dark:text-white">Featured </span>
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <p className="text-gray-900 dark:text-gray-400 text-lg max-w-3xl mx-auto">
                        A curated selection of production-ready platforms I've built from scratch—spanning e-learning, e-commerce, and internal tools
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden bg-slate-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-gray-900 dark:text-gray-400 mb-4 text-sm leading-relaxed">{project.desc}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techs.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white text-sm font-medium hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <FaGithub className="w-4 h-4" />
                                        Code
                                    </a>
                                    {project.demo ? (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <FaExternalLinkAlt className="w-3 h-3" />
                                            Live Demo
                                        </a>
                                    ) : (
                                        <div className="flex-1 py-2 bg-gray-300 dark:bg-slate-700 rounded-lg text-gray-500 dark:text-gray-400 text-sm font-medium flex items-center justify-center gap-2 cursor-not-allowed">
                                            <FaExternalLinkAlt className="w-3 h-3" />
                                            No Demo
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
