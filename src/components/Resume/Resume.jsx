import { useEffect, useState } from "react";
import { Collapse, Dropdown, initTWE } from "tw-elements";
import logo from '../../assets/logo.png';
import ecomimage from '../../assets/R.jpeg';
import '../../index.css';
import { use } from "react";




function Resume() {

    const data = [
        {
            id: 1,
            title: "BSc in Computer Science",
            subtitle: "University of DVI (2006 - 2010)",
            desc: "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
            rate: "3.90/4",
        },
        {
            id: 2,
            title: "BSc in Computer Science",
            subtitle: "University of DVI (2006 - 2010)",
            desc: "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
            rate: "3.90/4",
        },
        {
            id: 3,
            title: "BSc in Computer Science",
            subtitle: "University of DVI (2006 - 2010)",
            desc: "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
            rate: "3.90/4",
        },
        {
            id: 4,
            title: "BSc in Computer Science",
            subtitle: "University of DVI (2006 - 2010)",
            desc: "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
            rate: "3.90/4",
        },
    ]

    const data2 = [
        {
            id: 1,
            title: "BSc in Computer Science",
            desc: "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
            src: ecomimage,
        },
        {
            id: 2,
            title: "BSc in Computer Science",
            desc: "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
            src: ecomimage,
        },
        {
            id: 3,
            title: "BSc in Computer Science",
            desc: "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
            src: ecomimage,
        },
        {
            id: 4,
            title: "BSc in Computer Science",
            desc: "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
            src: ecomimage,
        },
    ]

    const [active, setActive] = useState(1);


    return (
        <>
            <div className="w-full h-auto flex flex-col gap-5 py-5 px-1 md:px-3 items-center border-b-2 border-white" id="Projects">
                <div className="text-red-600">7+ YEARS OF EXPERIENCE</div>
                <div className="text-[50px] text-white font-bold">My Resume</div>
                <div className="w-full h-14 rounded flex bg-black items-center justify-between ">
                    <div onClick={() => setActive(1)} className={`text-[20px] md:text-[30px] basis-1/2 ${active === 1 ? 'border-[1px] border-red-600' : ''} transition-all duration-300 text-white text-2xl text-center h-full flex items-center justify-center hover:bg-zinc-900 rounded`}> Education</div>
                    <div onClick={() => setActive(2)} className={`text-[20px] md:text-[30px] basis-1/2 ${active === 2 ? 'border-[1px] border-red-600' : ''} transition-all duration-300 text-white text-2xl text-center h-full flex items-center justify-center hover:bg-zinc-900 rounded`}>Projects</div>
                </div>
                <div className={`w-full ${active === 1 ? 'flex' : 'hidden'} flex-col mt-8`}>
                    <div className="w-full flex flex-col gap-2 justify-start">
                        <div className=" hidden md:block text-red-600 text-[20px] ">1998 - 2010</div>
                        <div className="text-4xl text-center md:text-left md:text-[50px] text-white font-bold">Education Quality</div>
                    </div>
                    <div className="w-full flex justify-between items-start flex-wrap p-2 md:p-6 gap-3">
                        {
                            data.map((item, index) => {
                                return (
                                    <div className="flex flex-col basis-full md:basis-[47%] px-2 md:px-7 py-7 md:py-16 bg-gradient-to-t from-slate-700 to-zinc-900 w-[100px] gap-16 text-slate-300 rounded-md transition-all duration-300 hover:text-white hover:to-black">
                                        <div className="w-full flex justify-between">
                                            <div className="flex flex-col gap-3">
                                                <div className="text-2xl text-white font-bold">{item.title}</div>
                                                <div>{item.subtitle}</div>
                                            </div>
                                            <div className="rate h-fit rounded-lg p-2 text-red-600 font-bold bg-black">{item.rate}</div>
                                        </div>
                                        <div>{item.desc}</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className={`w-full ${active === 2 ? 'flex' : 'hidden'} flex-col mt-8`}>
                    <div className="w-full flex flex-col gap-2 justify-start">
                        <div className="text-red-600 text-[20px]">1998 - 2010</div>
                        <div className="text-[50px] text-white font-bold">My Projects</div>
                    </div>
                    <div className="w-full flex justify-between items-start flex-wrap p-6 gap-3">
                        {
                            data2.map((item2, index) => {
                                return (
                                    <div className="proj-container flex flex-col items-center basis-full md:basis-[32%] px-7 py-7 bg-neutral-900 rounded-xl">
                                        <div className=" w-[90%] flex flex-col gap-5">
                                            <div className="overflow-hidden rounded-xl">
                                                <img className="imm rounded-xl w-full h-full" src={item2.src} />
                                            </div>
                                            <div className="rounded-lg text-red-600 text-2xl">{item2.title}</div>
                                            <div className="text-white">{item2.desc}</div>
                                        </div>

                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default Resume;