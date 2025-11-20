import { motion } from "framer-motion";
import { FaCode, FaTag, FaCog, FaLightbulb } from "react-icons/fa";

function Services() {
    const services = [
        {
            id: 1,
            number: "01",
            icon: <FaCode className="w-6 h-6" />,
            title: "Frontend Development",
            desc: "Crafting responsive interfaces with React, Next.js, and modern CSS frameworks",
            points: [
                "Component architecture & state management",
                "Tailwind CSS & responsive design",
                "Performance optimization & SEO"
            ]
        },
        {
            id: 2,
            number: "02",
            icon: <FaTag className="w-6 h-6" />,
            title: "Full-Stack Solutions",
            desc: "End-to-end platforms with React frontends and Laravel/PHP backends",
            points: [
                "RESTful API design & integration",
                "Database modeling (MySQL, MongoDB)",
                "Authentication & role-based access"
            ],
        },
        {
            id: 3,
            number: "03",
            icon: <FaCog className="w-6 h-6" />,
            title: "E-commerce Systems",
            desc: "Building scalable shopping experiences with payment gateways and inventory logic",
            points: [
                "Product catalogs & cart systems",
                "Payment integrations (Stripe, etc.)",
                "Order & inventory management"
            ]
        },
        {
            id: 4,
            number: "04",
            icon: <FaLightbulb className="w-6 h-6" />,
            title: "Code Review & Consulting",
            desc: "Auditing React/Laravel codebases for performance, accessibility, and best practices",
            points: [
                "Architecture & refactoring guidance",
                "Team mentoring & pair programming",
                "Documentation & workflow improvement"
            ]
        }
    ];

    return (
        <section className="py-20 px-6 bg-white dark:bg-[#0c1222] transition-colors duration-300" id="Services">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4">
                        SERVICES
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gray-900 dark:text-white">How I </span>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Deliver Value
                        </span>
                    </h2>
                    <p className="text-gray-900 dark:text-gray-400 text-lg max-w-4xl mx-auto">
                        From pixel-perfect UIs to robust backend APIs, I bring the full stack to life—shipped on time, accessible in Arabic and English, and built to scale.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -12 }}
                            className={`group p-6 rounded-xl border transition-all duration-500 ease-out ${
                                service.highlighted
                                    ? 'bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-500/10 dark:to-blue-600/10 border-cyan-500/50 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30'
                                    : 'bg-white dark:bg-slate-900/50 border-gray-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10'
                            }`}
                        >
                            {/* Icon and Number */}
                            <div className="flex items-center justify-between mb-4 group-hover:transform group-hover:scale-105 transition-transform duration-500">
                                <div className={`p-3 rounded-lg transition-all duration-500 ${
                                    service.highlighted ? 'bg-cyan-500/20 dark:bg-cyan-500/20 group-hover:bg-cyan-500/30 dark:group-hover:bg-cyan-500/30' : 'group-hover:bg-cyan-500/10 dark:group-hover:bg-cyan-500/10'
                                }`}>
                                    <div className="text-cyan-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors duration-500">{service.icon}</div>
                                </div>
                                <span className="text-2xl font-bold text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-500 transition-colors duration-500">{service.number}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>

                            {/* Description */}
                            <p className="text-gray-900 dark:text-gray-400 text-sm mb-4 leading-relaxed">{service.desc}</p>

                            {/* Points */}
                            <ul className="space-y-2">
                                {service.points.map((point, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-900 dark:text-gray-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
