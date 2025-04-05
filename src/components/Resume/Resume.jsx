import { useEffect, useState } from "react";
import { Collapse, Dropdown, initTWE } from "tw-elements";
import logo from '../../assets/logo.png';
import tikmol from '../../assets/tikmol.png';
import ecomimage from '../../assets/R.jpeg';
import ecomclothes from '../../assets/OIP.jpeg';
import courses from '../../assets/image.svg';
import prodstore from '../../assets/productstore.png';
import photoland from '../../assets/photoland.png';
import weather from '../../assets/weather.png';




import '../../index.css';
import { use } from "react";




function Resume() {

    const data = [
        {
            id: 1,
            title: "Bachelor's degree in information technology",
            subtitle: "University of Lattakia in Syria",
            desc: "My continuous learning at university and my perseverance in studying gave me the opportunity to be able to work as a team and develop.",
            rate: "85/100",
        },
        {
            id: 2,
            title: "JavaScript Course Completion Certificate",
            subtitle: "Armenian University",
            desc: "After completing the JavaScript course and passing all the tests, the SoloLearn platform awarded me a certificate of course completion.",
            rate: "100/100",
        },

    ]

    const data2 = [
        {
            id: 1,
            title: "Photo Land e-commerce",
            desc: "Full Stack Camera e-store where ReactJS front-end and Strapi CMS back-end were used with Redux Toolkit state managenment.",
            src: photoland,
        },
        {
            id: 2,
            title: "Tikmol e-commerce",
            desc: "Full Stack e-store where ReactJS front-end and Laravel back-end were used with Nova admin interface.",
            src: tikmol,
        },
        {
            id: 3,
            title: "Weather App",
            desc: "A simple weather app built with React JS for the frontend, Tailwind CSS for styling, and RESTful API to fetch real-time weather data, offering users an interactive and responsive experience.",
            src: weather,
        },
        {
            id: 4,
            title: "Clothes e-commerce",
            desc: "Full Stack e-store where ReactJS front-end and Strapi CMS Dashboard back-end and Tailwind Css.",
            src: ecomclothes,
        },
        {
            id: 5,
            title: "Educational platform",
            desc: "An educational platform that allows you to choose courses, start watching videos, and comment on any video using Laravel..",
            src: courses,
        },
        {
            id: 6,
            title: "Store management system",
            desc: "A warehouse management system for selling products where you can add, delete, modify and search for a specific product using HTML CSS JavaScript.",
            src: prodstore,
        },
    ]

    const [active, setActive] = useState(1);


    return (
        <>
            <div className="w-full mt-5 md:mt-0 h-auto flex flex-col gap-5 py-5 px-1 md:px-6 items-center border-b-2 border-white" id="Projects">
                <div className="text-red-600">1+ YEARS OF EXPERIENCE</div>
                <div className="text-[50px] text-white font-bold">My Resume</div>
                <div className="w-full h-14 rounded flex bg-black items-center justify-between ">
                    <div onClick={() => setActive(1)} className={`text-[20px] md:text-[30px] basis-1/2 ${active === 1 ? 'border-[1px] border-red-600' : ''} transition-all duration-300 text-white text-2xl text-center h-full flex items-center justify-center hover:bg-zinc-900 rounded`}> Education</div>
                    <div onClick={() => setActive(2)} className={`text-[20px] md:text-[30px] basis-1/2 ${active === 2 ? 'border-[1px] border-red-600' : ''} transition-all duration-300 text-white text-2xl text-center h-full flex items-center justify-center hover:bg-zinc-900 rounded`}>Projects</div>
                </div>
                <div className={`w-full ${active === 1 ? 'flex' : 'hidden'} flex-col mt-8`}>
                    <div className="w-full flex flex-col gap-2 justify-start">
                        <div className="text-4xl text-center md:text-left md:text-[40px] text-white font-bold">Education Quality</div>
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
                        <div className="text-4xl md:text-[40px] text-center md:text-left text-white font-bold">My Projects</div>
                    </div>
                    <div className="w-full flex justify-between items-start flex-wrap p-2 md:p-6 gap-3">
                        {
                            data2.map((item2, index) => {
                                return (

                                    <div className="proj-container flex flex-col items-center h-[450px] basis-full mb-3 md:basis-[32%] py-4 px-2 md:px-7 md:py-7 bg-neutral-900 rounded-xl">
                                        <a href="">
                                            <div className=" w-[98%] flex flex-col gap-5">
                                                <div className="overflow-hidden h-[250px] rounded-xl">
                                                    <img className="imm rounded-xl w-full h-full object-fill" src={item2.src} />
                                                </div>
                                                <div className="rounded-lg text-red-600 text-2xl">{item2.title}</div>
                                                <div className="text-white">{item2.desc}</div>
                                            </div>
                                        </a>
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