import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
    const contactInfo = [
        {
            icon: <FaEnvelope className="w-5 h-5" />,
            label: "Email",
            value: "bashar2003katrib@gmail.com"
        },
        {
            icon: <FaPhone className="w-5 h-5" />,
            label: "Phone",
            value: "+963 963 996 833"
        },
        {
            icon: <FaMapMarkerAlt className="w-5 h-5" />,
            label: "Location",
            value: "Damascus, Syria"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = formData.get('name') || '';
        const email = formData.get('email') || '';
        const message = formData.get('message') || '';

        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
        const mailto = `mailto:bashar2003katrib@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
        form.reset();
    };

    return (
        <section className="py-20 px-6 bg-white dark:bg-[#0c1222] transition-colors duration-300" id="Contact">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gray-900 dark:text-white">Get In </span>
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>
                    <p className="text-gray-900 dark:text-gray-400 text-lg max-w-3xl mx-auto">
                        Need a bilingual React/Laravel engineer for your next launch? Tell me about the problem and I'll reply within a day with the best way to collaborate.
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-xl hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-3 bg-cyan-100 dark:bg-cyan-500/10 rounded-lg text-cyan-500 dark:text-cyan-400">
                                        {info.icon}
                                    </div>
                                    <h3 className="text-gray-900 dark:text-white font-semibold">{info.label}</h3>
                                </div>
                                <p className="text-gray-900 dark:text-gray-400 text-sm">{info.value}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-xl">
                            <div>
                                <label className="block text-gray-900 dark:text-white font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-900 dark:text-white font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-900 dark:text-white font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows="6"
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/20"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
