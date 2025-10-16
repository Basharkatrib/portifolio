import { motion } from "framer-motion";
import ResumeCard from "../ResumeCard/ResumeCard";
import { useI18n } from '../../i18n.jsx';

function AdditionalSkills() {
    const { t } = useI18n();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            id="Experience"
            className="w-full py-20 overflow-x-hidden bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-black dark:via-zinc-900 dark:to-black border-b border-white/10"
        >
            <div className="px-3 sm:px-6">
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-red-600/10 text-red-600 dark:text-red-500 rounded-full text-sm font-medium tracking-wide">
                        {t('additional.badge')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-zinc-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mt-4">
                        {t('additional.title')}
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {[
                        [
                            {
                                title: t('additional.items.1.title'),
                                subTitle: t('additional.items.1.subtitle'),
                                result: t('additional.items.1.result'),
                                des: t('additional.items.1.desc')
                            },
                            {
                                title: t('additional.items.2.title'),
                                subTitle: t('additional.items.2.subtitle'),
                                result: t('additional.items.2.result'),
                                des: t('additional.items.2.desc')
                            }
                        ],
                        [
                            {
                                title: t('additional.items.3.title'),
                                subTitle: t('additional.items.3.subtitle'),
                                result: t('additional.items.3.result'),
                                des: t('additional.items.3.desc')
                            },
                            {
                                title: t('additional.items.4.title'),
                                subTitle: t('additional.items.4.subtitle'),
                                result: t('additional.items.4.result'),
                                des: t('additional.items.4.desc')
                            }
                        ]
                    ].map((column, columnIndex) => (
                        <motion.div
                            key={columnIndex}
                            variants={itemVariants}
                            className="relative flex flex-col gap-8"
                        >
                            {/* Vertical timeline line */}

                            <div className="space-y-10">
                                {column.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="relative"
                                    >
                                        {/* Dot */}
                                        
                                        {/* Card */}
                                        <div className="h-full">
                                            <ResumeCard
                                                title={item.title}
                                                subTitle={item.subTitle}
                                                result={item.result}
                                                des={item.des}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default AdditionalSkills;
