import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);
    const [statusType, setStatusType] = useState("success"); // "success" | "error"

    const contactInfo = [
        {
            icon: <FaEnvelope className="w-5 h-5" />,
            label: "Email",
            value: "bashar2003katrib@gmail.com"
        },
        {
            icon: <FaPhone className="w-5 h-5" />,
            label: "Phone",
            value: "+963 937662759"
        },
        {
            icon: <FaMapMarkerAlt className="w-5 h-5" />,
            label: "Location",
            value: "Latakia, Syria"
        }
    ];

    const validate = () => {
        const newErrors = {};

        if (!formValues.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formValues.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formValues.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formValues.message.trim().length < 10) {
            newErrors.message = "Message should be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user edits
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatusMessage(null);

        if (!validate()) {
            return;
        }

        setIsSubmitting(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formValues.name,
                    from_email: formValues.email,
                    message: formValues.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            setStatusType("success");
            setStatusMessage("Your message has been sent successfully. I will get back to you soon.");

            setFormValues({
                name: "",
                email: "",
                message: ""
            });
            setErrors({});
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatusType("error");
            setStatusMessage("Something went wrong while sending your message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 px-3 sm:px-6 bg-white dark:bg-[#0c1222] transition-colors duration-300" id="Contact">
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
                                    value={formValues.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block text-gray-900 dark:text-white font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block text-gray-900 dark:text-white font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formValues.message}
                                    onChange={handleChange}
                                    rows="6"
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                ></textarea>
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            {statusMessage && (
                                <div
                                    className={`text-sm rounded-lg px-4 py-3 ${statusType === "success"
                                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                                        : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                                        }`}
                                >
                                    {statusMessage}
                                </div>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
