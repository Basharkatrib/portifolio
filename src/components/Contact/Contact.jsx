import '../../index.css';
import { useI18n } from '../../i18n.jsx';
import ecomimage from '../../assets/R.jpeg';
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import myphoto from '../../assets/Screenshot_2025-05-06_135148-removebg-preview.png';

function Contact() {
    const { t, lang } = useI18n();
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = formData.get('name') || '';
        const email = formData.get('email') || '';
        const phone = formData.get('phone') || '';
        const subject = formData.get('subject') || 'New message from portfolio contact form';
        const message = formData.get('message') || '';

        const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;
        const mailto = `mailto:bashar2003katrib@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
        form.reset();
    };

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            id="Contact"
            className="w-full py-20 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black"
        >
            <div className="px-3 sm:px-6">
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-red-600/10 text-red-600 dark:text-red-500 rounded-full text-sm font-semibold mb-4">
                        {t('contact.badge')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                        {t('contact.title')}
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-1 dark:bg-zinc-900/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/50 hover:border-red-500/20 transition-all duration-300"
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
                        <h3 className="text-2xl font-bold dark:text-white text-zinc-900 mb-2">BASHAR KATRIB</h3>
                        <p className="text-red-500 font-medium mb-4">{t('contact.role')}</p>
                        <p className="dark:text-gray-400 text-zinc-900 mb-6">
                            {t('contact.bio')}
                        </p>
                        <div className="space-y-3 mb-8">
                            <p className="dark:text-gray-400 text-zinc-900">
                                <span className="font-semibold dark:text-white text-zinc-900">{t('contact.phoneLabel')}</span> +963 937662759
                            </p>
                            <p className="dark:text-gray-400 text-zinc-900">
                                <span className="font-semibold dark:text-white text-zinc-900">{t('contact.emailLabel')}</span> bashar2003katrib@gmail.com
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
                        className="lg:col-span-2 dark:bg-zinc-900/30 backdrop-blur-sm rounded-xl p-8 border border-zinc-800/50 hover:border-red-500/20 transition-all duration-300"
                    >
                        <form className="grid gap-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium dark:text-gray-400 text-zinc-900 mb-2">
                                    {t('contact.name')}
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full dark:bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors duration-300"
                                        placeholder={t('contact.placeholder.name')}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium dark:text-gray-400 text-zinc-900 mb-2">
                                        {t('contact.phone')}
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full dark:bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors duration-300"
                                        placeholder={t('contact.placeholder.phone')}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium dark:text-gray-400 text-zinc-900 mb-2">
                                    {t('contact.email')}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full dark:bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors duration-300"
                                    placeholder={t('contact.placeholder.email')}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium dark:text-gray-400 text-zinc-900 mb-2">
                                    {t('contact.subject')}
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="w-full dark:bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors duration-300"
                                    placeholder={t('contact.placeholder.subject')}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium dark:text-gray-400 text-zinc-900 mb-2">
                                    {t('contact.message')}
                                </label>
                                <textarea
                                    rows="6"
                                    name="message"
                                    required
                                    className="w-full dark:bg-black/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors duration-300 resize-none"
                                    placeholder={t('contact.placeholder.message')}
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-medium py-4 rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-300"
                            >
                                {t('contact.send')}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;
