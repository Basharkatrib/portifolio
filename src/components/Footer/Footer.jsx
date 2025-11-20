import { useEffect } from "react";
import { Collapse, Dropdown, initTWE } from "tw-elements";
import logo from '../../assets/logo.png';
import { FaGithub, FaLinkedin, FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { useI18n } from '../../i18n.jsx';

function Footer() {
    const { t } = useI18n();
    useEffect(() => {
        initTWE({ Collapse, Dropdown });
    }, []);

    return (
        <>
            <footer className="bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black border-t border-white/10">
                <div className="px-3 sm:px-6 py-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Logo & Description */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="md:col-span-2"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <img 
                                    src={logo} 
                                    alt="Bashar Katrib" 
                                    className="w-12 h-12 rounded-full"
                                />
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Bashar Katrib</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-400 mb-6 leading-relaxed">
                                {t('footer.bio')}
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="https://github.com/basharkatrib" 
                                    className="p-3 bg-zinc-800 rounded-lg text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="w-5 h-5" />
                                </a>
                                <a 
                                    href="https://www.facebook.com/share/151MJb9EmD/" 
                                    className="p-3 bg-zinc-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebookF className="w-5 h-5" />
                                </a>
                                <a 
                                    href="https://www.instagram.com/katribbashar" 
                                    className="p-3 bg-zinc-800 rounded-lg text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">{t('footer.quickLinks')}</h4>
                            <ul className="space-y-3">
                                <li><a href="#Home" className="text-zinc-700 dark:text-gray-400 hover:text-red-500 transition-colors duration-300">{t('nav.home')}</a></li>
                                <li><a href="#Features" className="text-zinc-700 dark:text-gray-400 hover:text-red-500 transition-colors duration-300">{t('nav.features')}</a></li>
                                <li><a href="#Projects" className="text-zinc-700 dark:text-gray-400 hover:text-red-500 transition-colors duration-300">{t('nav.projects')}</a></li>
                                <li><a href="#Experience" className="text-zinc-700 dark:text-gray-400 hover:text-red-500 transition-colors duration-300">{t('nav.experience')}</a></li>
                                <li><a href="#Contact" className="text-zinc-700 dark:text-gray-400 hover:text-red-500 transition-colors duration-300">{t('nav.contact')}</a></li>
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">{t('footer.getInTouch')}</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="w-4 h-4 text-red-500" />
                                    <span className="text-zinc-700 dark:text-gray-400 text-sm">bashar2003katrib@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaPhone className="w-4 h-4 text-red-500" />
                                    <span className="text-zinc-700 dark:text-gray-400 text-sm">+963 937662759</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Bar */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="border-t border-white/10 mt-8 pt-8"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-zinc-700 dark:text-gray-400 text-sm">
                                © 2024 Bashar Katrib. {t('footer.rights')}
                            </p>
                            <p className="text-zinc-500 dark:text-gray-500 text-sm">
                                {t('footer.builtWith')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </footer>
        </>
    );
}

export default Footer;