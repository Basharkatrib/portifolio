import { useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { Collapse, Dropdown, initTWE } from "tw-elements";
import myphoto from '../../assets/photo.png';
import '../../index.css';




function Hero() {

    return (
        <>
            <div className="p-8 border-b-2 border-white flex w-full justify-center items-start md:items-end h-auto md:h-[620px] " id="Home">
                <div className="w-full flex flex-col  md:flex-row">
                    <div className="flex flex-col basis-1/2 gap-4 justify-between">
                        <div className="text-white">WELCOME TO MY WORLD</div>
                        <div className="text-4xl">Hi, I'm <span className="uppercase text-red-600">bashar katrib</span><br />
                            <span><Typewriter
                                words={['FULL STACK DEVELOPER !', 'FRONTEND ENGINEER !', 'BACKEND EXPERT !']}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            /></span>
                        </div>
                        <div className="text-white text-[17px]">I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.
                            I'm not adding motion just to spruce things up, but doing it in ways that.
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <div className="flex flex-col gap-4">
                                <div className="text-xl">Find me in</div>
                                <div className="flex gap-4">
                                    <a href="#!" className="p-2 bg-black rounded-md transition-all duration-300 hover:-translate-y-1" ><span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#969696]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                        </svg>
                                    </span>
                                    </a>
                                    <a href="#!" className="p-2 bg-black rounded-md transition-all duration-300 hover:-translate-y-1">
                                        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="#!" className="p-2 bg-black rounded-md transition-all duration-300 hover:-translate-y-1">
                                        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>

                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="text-xl">Find me in</div>
                                <div className="flex gap-4">
                                    <a href="#!" className="p-2 bg-black rounded-md transition-all duration-300 hover:-translate-y-1">
                                        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#969696]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="#!" className="p-2 bg-black rounded-md transition-all duration-300 hover:-translate-y-1">
                                        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="#!" className="p-2 bg-black rounded-md transition-all duration-300 hover:-translate-y-1">
                                        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path
                                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="flex justify-center items-center basis-1/2">
                        <div className="w-full mt-4 md:mt-0 md:w-3/4 bg-zinc-900 h-[450px] top-2 left-1/3 shadow-2xl rounded-lg overflow-hidden">
                            <img className=" w-full h-full max-h-full transition-all duration-300 hover:scale-105" src={myphoto} />
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Hero;