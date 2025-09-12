import '../../index.css';
import ecomimage from '../../assets/R.jpeg';
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import myphoto from '../../assets/Screenshot_2025-05-06_135148-removebg-preview.png';

function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            id="Contact"
            className="w-full py-20 bg-gradient-to-b from-zinc-900 to-black"
        >
            <div className="px-3 sm:px-6">
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-red-600/10 text-red-500 rounded-full text-sm font-semibold mb-4">
                        GET IN TOUCH
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Contact With Me
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-1 bg-zinc-900/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/50 hover:border-red-500/20 transition-all duration-300"
                    >
                        <div className="aspect-square overflow-hidden rounded-xl mb-6">
                            <motion.img
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-contain"
                                src={myphoto}
                                alt="Profile"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">BASHAR KATRIB</h3>
                        <p className="text-red-500 font-medium mb-4">Full Stack Developer | React.js & Laravel Expert</p>
                        <p className="text-gray-400 mb-6">
                            I am a passionate Full Stack Developer with 2+ years of experience in React.js and Laravel. I specialize in building modern web applications, e-commerce platforms, and RESTful APIs. I'm always excited to discuss new opportunities and projects.
                        </p>
                        <div className="space-y-3 mb-8">
                            <p className="text-gray-400">
                                <span className="font-semibold text-white">Phone:</span> +963 937662759
                            </p>
                            <p className="text-gray-400">
                                <span className="font-semibold text-white">Email:</span> bashar2003katrib@gmail.com
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/share/151MJb9EmD/"
                                className="p-3 bg-blue-600/10 text-blue-500 rounded-lg hover:bg-blue-600/20 transition-all duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookF className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/katribbashar"
                                className="p-3 bg-pink-600/10 text-pink-500 rounded-lg hover:bg-pink-600/20 transition-all duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-2 bg-zinc-900/30 backdrop-blur-sm rounded-xl p-8 border border-zinc-800/50 hover:border-red-500/20 transition-all duration-300"
                    >
                        <form className="grid gap-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        YOUR NAME
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        PHONE NUMBER
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors duration-300"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    EMAIL
                                </label>
                                <input
                                    type="email"
                                    className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors duration-300"
                                    placeholder="example@domain.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    SUBJECT
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors duration-300"
                                    placeholder="Project Discussion"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    MESSAGE
                                </label>
                                <textarea
                                    rows="6"
                                    className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors duration-300 resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-medium py-4 rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-300"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;
