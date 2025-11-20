import { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import { Collapse, Dropdown, initTWE } from "tw-elements";
import logo from '../../assets/logo.png';
import { FaSun, FaMoon } from "react-icons/fa";


function Navbar() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        initTWE({ Collapse, Dropdown });
        const saved = localStorage.getItem('theme');
        const preferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initial = saved || preferred;
        setTheme(initial);
        const root = document.documentElement;
        if (initial === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    }, []);

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        const root = document.documentElement;
        if (next === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
        localStorage.setItem('theme', next);
    };

    const navitems = ['Services', 'About', 'Experience', 'Projects', 'Contact'];

    return (
        <>
            {/* Labtop Navbar */}
            <nav
                className="hidden fixed z-50 w-full flex-nowrap items-center justify-between py-2 md:flex-wrap md:justify-start px-3 md:py-4 md:px-6 md:flex bg-white/90 dark:bg-[#0c1222]/90 backdrop-blur border-b border-gray-200 dark:border-cyan-500/10 text-gray-900 dark:text-white transition-colors duration-300"
                data-twe-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between">
                    <button
                        className="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 md:hidden"
                        type="button"
                        data-twe-collapse-init
                        data-twe-target="#navbarSupportedContent7"
                        aria-controls="navbarSupportedContent7"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span
                            className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clipRule="evenodd" />
                            </svg>
                        </span>
                    </button>

                    <div
                        className="!visible mt-2 hidden flex-grow basis-[100%] items-center md:mt-0 md:!flex md:basis-auto "
                        id="navbarSupportedContent7"
                        data-twe-collapse-item>
                        <div className="flex justify-between items-center w-full">
                            <Link
                                to="Home"
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <div className="w-12 h-12 overflow-hidden">
                                    <img className="w-12 h-12 rounded-full transition duration-300 hover:scale-110" src={logo} />
                                </div>
                                <div className="font-bold text-2xl text-cyan-500 dark:text-cyan-400">
                                    Bashar Katrib
                                </div>
                            </Link>
                            <div className="flex items-center gap-4">
                                <ul
                                    className="list-style-none text-xl ms-auto flex flex-col ps-0 md:mt-1 md:flex-row"
                                    data-twe-navbar-nav-ref>
                                    {navitems.map((item, index) =>
                                        <Link
                                            key={index}
                                            activeClass="active"
                                            to={item}
                                            spy={true}
                                            smooth={true}
                                            offset={-70} 
                                            duration={500}
                                            className="ml-6 cursor-pointer text-gray-600 dark:text-gray-300 transition duration-300 hover:text-cyan-500 dark:hover:text-cyan-400"
                                        >
                                            {item}
                                        </Link>
                                    )}
                                </ul>
                                <button
                                    onClick={toggleTheme}
                                    className="p-2 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                                    aria-label="Toggle theme"
                                >
                                    {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar */}

            <nav
                className="fixed z-50 flex w-full flex-nowrap items-center justify-between bg-white/90 dark:bg-[#0c1222]/90 backdrop-blur py-2 md:hidden lg:flex-wrap lg:justify-start lg:py-4 border-b border-gray-200 dark:border-cyan-500/10 transition-colors duration-300"
                data-twe-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <div className="flex justify-between items-center w-full">
                        <Link
                            to="Home"
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="cursor-pointer"
                        >
                            <div className="w-12 h-12 overflow-hidden">
                                <img className="w-12 h-12 rounded-full transition duration-300 hover:scale-110" src={logo} />
                            </div>
                        </Link>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleTheme}
                                className="block border h-10 border-cyan-500/50 dark:border-cyan-500/30 bg-cyan-100 dark:bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 rounded-md px-3 lg:hidden"
                                type="button"
                                aria-label="Toggle theme">
                                {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                            </button>
                            <button
                                className="block border-0 h-10 bg-gray-100 dark:bg-black rounded-md px-2 text-gray-900 dark:text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
                                type="button"
                                data-twe-collapse-init
                                data-twe-target="#navbarSupportedContent8"
                                aria-controls="navbarSupportedContent8"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span
                                    className="[&>svg]:w-7 text-cyan-500 dark:text-cyan-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                            clipRule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>


                    <div
                        className="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
                        id="navbarSupportedContent8"
                        data-twe-collapse-item>
                        <ul
                            className="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row items-center"
                            data-twe-navbar-nav-ref>
                            {navitems.map((item, index) => <li
                                className="my-4 ps-2 md:my-0 md:pe-1 md:ps-2"
                                data-twe-nav-item-ref key={index}>
                                <Link
                                        key={index}
                                        activeClass="active"
                                        to={item}
                                        spy={true}
                                        smooth={true}
                                        offset={-70} 
                                        duration={500}
                                        className="md:px-2 text-gray-700 dark:text-gray-400 transition duration-300 hover:text-cyan-500 dark:hover:text-cyan-400"
                                    >
                                        {item}
                                    </Link>
                            </li>
                            )}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;