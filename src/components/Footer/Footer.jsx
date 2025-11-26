import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="py-16 px-3 sm:px-6 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#0c1222] dark:to-[#060b14] border-t border-gray-300 dark:border-cyan-500/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    {/* Left: CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                            NOW BOOKING
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            <span className="text-gray-900 dark:text-white">Let's build the next </span>
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                impactful
                            </span>
                            <span className="text-gray-900 dark:text-white"> release.</span>
                        </h2>
                        <p className="text-gray-900 dark:text-gray-400 leading-relaxed max-w-xl">
                            Based in Syria, collaborating remotely on React/Laravel products, design systems, 
                            and e-commerce launches in both Arabic and English.
                        </p>
                    </motion.div>

                    {/* Right: Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-end gap-4"
                    >
                        <Link
                            to="Contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 cursor-pointer"
                        >
                            Book a Call
                        </Link>
                        <a
                            href="/Bashar George Katrib - Full-Stack Developer.pdf"
                            download="Bashar_Katrib_CV.pdf"
                            className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                        >
                            Download CV
                        </a>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 dark:border-slate-800 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <p className="text-gray-900 dark:text-gray-500 text-sm">
                        © 2025 Bashar Katrib. Crafted with React, TypeScript & Framer Motion.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/basharkatrib"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-white hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <FaGithub className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.facebook.com/share/151MJb9EmD/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-white hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <FaFacebookF className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.instagram.com/katribbashar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-white hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
