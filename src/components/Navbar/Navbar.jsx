import { useEffect } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { Collapse, Dropdown, initTWE } from "tw-elements";
import logo from '../../assets/logo.png';


function Navbar() {
    useEffect(() => {
        initTWE({ Collapse, Dropdown });
    }, []);

    const navitems = ['Home', 'Features', 'Projects', 'Testimonial', 'Contact'];

    return (
        <>
            {/* Labtop Navbar */}
            <nav
                className="hidden fixed z-10 bg-black w-full flex-nowrap items-center justify-between bg-bodyColor  py-2 shadow-white border-b-2 border-white md:flex-wrap md:justify-start md:py-4 md:flex text-white"
                data-twe-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
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
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-12 overflow-hidden">
                                    <img className="w-12 h-12 rounded-full transition duration-300 hover:scale-110" src={logo} />
                                </div>
                                <div className="font-bold text-2xl text-gray-400">
                                    BASHAR
                                </div>
                            </div>
                            <ul
                                className="list-style-none text-xl ms-auto flex flex-col ps-0 md:mt-1 md:flex-row"
                                data-twe-navbar-nav-ref>
                                {/* {navitems.map((item, index) => <li
                                    className="my-4 ps-2 md:my-0 md:pe-1 md:ps-2"
                                    data-twe-nav-item-ref key={index}>
                                    <a
                                        className="md:px-2 text-gray-400 transition duration-300 hover:text-red-600"
                                        aria-current="page"
                                        href="#"
                                        data-twe-nav-link-ref
                                    >{item}</a
                                    >
                                </li>
                                )} */}
                                {navitems.map((item, index) =>
                                    <Link
                                        key={index}
                                        activeClass="active"
                                        to={item}
                                        spy={true}
                                        smooth={true}
                                        offset={-70} 
                                        duration={500}
                                        className="ml-6 cursor-pointer text-gray-400 transition duration-300 hover:text-red-600"
                                    >
                                        {item}
                                    </Link>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar */}

            <nav
                class="navmob relative flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 md:hidden lg:flex-wrap lg:justify-start lg:py-4"
                data-twe-navbar-ref>
                <div class="flex w-full flex-wrap items-center justify-between px-3">
                    <div className="flex justify-between items-center w-full">
                        <div className="w-12 h-12 overflow-hidden">
                            <img className="w-12 h-12 rounded-full transition duration-300 hover:scale-110" src={logo} />
                        </div>
                        <button
                            class="block border-0 bg-black rounded-md px-2  hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                            type="button"
                            data-twe-collapse-init
                            data-twe-target="#navbarSupportedContent8"
                            aria-controls="navbarSupportedContent8"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span
                                class="[&>svg]:w-7 text-red-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    </div>


                    <div
                        class="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
                        id="navbarSupportedContent8"
                        data-twe-collapse-item>
                        <ul
                            class="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row items-center"
                            data-twe-navbar-nav-ref>
                            {navitems.map((item, index) => <li
                                className="my-4 ps-2 md:my-0 md:pe-1 md:ps-2"
                                data-twe-nav-item-ref key={index}>
                                <a
                                    className="md:px-2 text-gray-400 transition duration-300 hover:text-red-600"
                                    aria-current="page"
                                    href="#"
                                    data-twe-nav-link-ref
                                >{item}</a
                                >
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