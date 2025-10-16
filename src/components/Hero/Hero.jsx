import { useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import myphoto from '../../assets/Screenshot_2025-05-06_135148-removebg-preview.png';
import '../../index.css';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useI18n } from '../../i18n.jsx';


function Hero() {
    const { t, lang } = useI18n();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" relative px-3 pt-24 py-3 md:px-6 md:pt-32 md:pb-9 border-b-2 border-white/10 flex w-full justify-center items-start bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black"
            id="Home"
        >
            {/* Bubble background layer */}
            <div className="bubble-bg">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </div>
            <div className="w-full flex h-full flex-col lg:flex-row lg:justify-between max-w-7xl mx-auto">
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative z-10 h-full flex flex-col basis-1/2 gap-8 justify-center items-stretch"
                >
                    <div className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white">
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {t('hero.hi')} <span className="text-red-600 uppercase bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">bashar katrib</span>
                        </motion.span>
                        <br />
                        <span className="text-2xl md:text-4xl">
                            <Typewriter
                                words={t('hero.roles')}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed"
                    >
                       {t('hero.about')}
                    </motion.div>

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 mt-4"
                    >
                        <Link
                        to='Contact'
                        spy={true}
                        smooth={true}
                        offset={-70} 
                        duration={500}
                         className="px-6 py-3 cursor-pointer bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {t('hero.contact')}
                        </Link>
                        <Link
                                        to='Projects'
                                        spy={true}
                                        smooth={true}
                                        offset={-70} 
                                        duration={500} className="px-6 cursor-pointer py-3 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            {t('hero.projects')}
                        </Link>
                        <a
                            href="/Bashar George Katrib - Full-Stack Developer.pdf"
                            download="Bashar_Katrib_CV.pdf"
                            className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-red-500/25"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {t('hero.download')}
                        </a>
                    </motion.div>

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="text-xl font-semibold">{t('hero.findMeIn')}</div>
                        <motion.div 
                            animate={{ y: [0, -5, 0] }} 
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
                            className="flex gap-4"
                        >
                            {/* Social media links remain the same */}
                            <a href="https://www.facebook.com/share/151MJb9EmD/" className="p-2 bg-red-600/20 hover:bg-red-600/30 rounded-md transition-all duration-300 hover:-translate-y-1 border border-red-600/30" ><span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#205de0]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                </svg>
                            </span>
                            </a>
                            <a href="https://www.instagram.com/katribbashar?igsh=MW85ZndiNm15eGpqbg==" className="p-2 bg-red-600/20 hover:bg-red-600/30 rounded-md transition-all duration-300 hover:-translate-y-1 border border-red-600/30">
                                <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                </span>
                            </a>
                            <a href="https://github.com/basharkatrib" className="p-2 bg-red-600/20 hover:bg-red-600/30 rounded-md transition-all duration-300 hover:-translate-y-1 border border-red-600/30">
                                <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#f0f6fc]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </span>
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="relative z-10 justify-center items-center basis-1/2 relative hidden lg:flex"
                >
                    <div className="absolute w-full flex justify-center mt-4 md:mt-0 md:w-4/6 bg-gradient-to-b from-zinc-800 to-zinc-900 h-4/5 shadow-2xl rounded-2xl overflow-hidden backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent"></div>
                    </div>
                    <motion.img 
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="absolute object-cover h-[450px] -mt-[85px] hover:scale-105 transition-transform duration-300"
                        src={myphoto}
                        alt="Bashar Katrib"
                    />
                </motion.div>

                {/* Mobile version */}
                <div className="flex justify-center items-center basis-1/2 lg:hidden">
                    <div className="w-full flex justify-center mt-4 md:mt-0 md:w-full bg-zinc-900 h-[480px] top-2 left-1/3 shadow-2xl rounded-lg overflow-hidden">
                        <img className="h-full object-fill max-h-full" src={myphoto} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Hero;