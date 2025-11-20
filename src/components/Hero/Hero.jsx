import { motion } from "framer-motion";
import myphoto from '../../assets/Screenshot_2025-05-06_135148-removebg-preview.png';
import { Link } from 'react-scroll';
import { FaChevronDown } from "react-icons/fa";

function Hero() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-[90vh] px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0c1222] dark:to-[#0c1222] transition-colors duration-300"
            id="Home"
        >
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="text-gray-900 dark:text-gray-100">Hi, I'm </span>
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Bashar Katrib
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-gray-900 dark:text-gray-300 font-medium">
                            Full Stack Developer · React.js & Laravel Specialist
                        </p>

                        <p className="text-sm sm:text-base md:text-lg text-gray-900 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            I build modern web platforms with a strong focus on DX and measurable outcomes. With 2+ years working across React, Redux Toolkit, Tailwind CSS, and Laravel APIs, I help startups launch fast, keep code maintainable, and deliver delightful product experiences in both Arabic and English.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
                            <Link
                                to="Projects"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 cursor-pointer shadow-lg shadow-cyan-500/20 text-sm sm:text-base"
                            >
                                View My Work
                            </Link>
                            <Link
                                to="Contact"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-500 text-cyan-500 dark:text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer text-sm sm:text-base"
                            >
                                Get In Touch
                            </Link>
                            <a
                                href="/Bashar George Katrib - Full-Stack Developer.pdf"
                                download="Bashar_Katrib_CV.pdf"
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-200 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-gray-800 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-700 transition-all duration-300 text-sm sm:text-base"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Image with Glowing Circle */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="relative flex justify-center items-center order-1 lg:order-2 mb-6 lg:mb-0"
                    >
                        <div className="relative w-[320px] h-[320px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]">
                            {/* Glowing Circle */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-500/30 dark:from-cyan-500/20 dark:to-blue-600/20 blur-3xl"></div>
                            <div className="absolute inset-4 rounded-full border-2 border-cyan-500/50 dark:border-cyan-500/30"></div>
                            <div className="absolute inset-8 rounded-full border border-cyan-500/30 dark:border-cyan-500/20"></div>
                            
                            {/* Image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    src={myphoto}
                                    alt="Bashar Katrib"
                                    className="w-full h-56 md:h-72 object-contain rounded-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <Link
                to="Projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 cursor-pointer"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <FaChevronDown className="text-cyan-500 dark:text-cyan-400 text-xl hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors" />
                </motion.div>
            </Link>
        </motion.div>
    );
}

export default Hero;
