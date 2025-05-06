import { useEffect, useState } from "react";
import { Collapse, Dropdown, initTWE } from "tw-elements";
import logo from '../../assets/logo.png';
import tikmol from '../../assets/tikmol.gif';
import ecomimage from '../../assets/R.jpeg';
import ecomclothes from '../../assets/OIP.gif';
import courses from '../../assets/courses.gif';
import prodstore from '../../assets/productstore.gif';
import photoland from '../../assets/photoland.gif';
import weather from '../../assets/weather.png';
import Flyza from '../../assets/Flyza.gif';
import restaurant from '../../assets/restaurant.gif'
import { FaGlobe } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';





import '../../index.css';
import { use } from "react";
import ResumeCard from "../ResumeCard/ResumeCard";




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
            title: "Restaurant",
            desc: "I developed a restaurant web application using Next.js, featuring a smooth and user-friendly interface with subtle animations for an enhanced user experience.",
            src: restaurant,
            link: "https://restaurantbaskat.netlify.app"
        },
        {
            id: 2,
            title: "Flyza Airways",
            desc: "Developed a flight booking web app using React.js, ReduxToolkit for state management, Strapi CMS for content handling, and Tailwind CSS for responsive design.",
            src: Flyza,
            link: "https://aesthetic-paprenjak-4b8a9e.netlify.app"
        },
        {
            id: 3,
            title: "Photo Land e-commerce",
            desc: "Full Stack Camera e-store where ReactJS front-end and Strapi CMS back-end were used with Redux Toolkit state managenment.",
            src: photoland,
            link: "https://stupendous-mermaid-f5d7eb.netlify.app"
        },
        {
            id: 4,
            title: "Tikmol e-commerce",
            desc: "Full Stack e-store where ReactJS front-end and Laravel back-end were used with Nova admin interface.",
            src: tikmol,
            
        },
        {
            id: 5,
            title: "Weather App",
            desc: "A simple weather app built with React JS for the frontend, Tailwind CSS for styling, and RESTful API to fetch real-time weather data, offering users an interactive and responsive experience.",
            src: weather,
            link: "https://illustrious-beignet-ae2bfe.netlify.app"
        },
        {
            id: 6,
            title: "Clothes e-commerce",
            desc: "Full Stack e-store where ReactJS front-end and Strapi CMS Dashboard back-end and Tailwind Css.",
            src: ecomclothes,
        },
        {
            id: 7,
            title: "Educational platform",
            desc: "An educational platform that allows you to choose courses, start watching videos, and comment on any video using Laravel..",
            src: courses,
        },
        {
            id: 8,
            title: "Store management system",
            desc: "A warehouse management system for selling products where you can add, delete, modify and search for a specific product using HTML CSS JavaScript.",
            src: prodstore,
            link: "https://basharkatrib.github.io/crud1/"
        },
    ]

    const [active, setActive] = useState(2);

     useEffect(()=>{
            AOS.init({duration: 2000});
        },[])


    return (
        <>
            <div className="w-full mt-5 md:mt-0 h-auto overflow-hidden flex flex-col gap-5 py-5 md:pb-[30px] px-3 md:px-6 items-center border-b-2 border-white" id="Projects">
                <div className="text-red-600">1+ YEARS OF EXPERIENCE</div>
                <div className="text-[50px] text-white font-bold">My Resume</div>
                <div className="w-full h-14 rounded flex bg-black items-center justify-between ">
                    <div onClick={() => setActive(1)} className={`text-[20px] cursor-pointer md:text-[30px] basis-1/2 ${active === 1 ? 'border-[1px] border-red-600' : ''} transition-all duration-300 text-white text-2xl text-center h-full flex items-center justify-center hover:bg-zinc-900 rounded`}> Education</div>
                    <div onClick={() => setActive(2)} className={`text-[20px] cursor-pointer md:text-[30px] basis-1/2 ${active === 2 ? 'border-[1px] border-red-600' : ''} transition-all duration-300 text-white text-2xl text-center h-full flex items-center justify-center hover:bg-zinc-900 rounded`}>Projects</div>
                </div>
                <div className={`w-full ${active === 1 ? 'flex' : 'hidden'} flex-col mt-8`}>
                    <div className="w-full flex flex-col gap-2 justify-start">
                        <div className="text-4xl text-center md:text-left md:text-[40px] text-white font-bold">Education Quality</div>
                    </div>
                    <div className="w-full flex justify-between items-start flex-wrap mt-4 gap-3">
                        {
                            data.map((item, index) => {
                                return (
                                    <div className="flex flex-col basis-full md:basis-[47%] px-2 md:px-7 md:mt-7 py-7 md:py-16 bg-gradient-to-t from-slate-700 to-zinc-900 w-[100px] gap-16 text-slate-300 rounded-md transition-all duration-300 hover:text-white hover:to-black">
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
                    <div className="w-full flex justify-between items-start flex-wrap mt-4 gap-3">
                        {
                            data2.map((item2, index) => {
                                return (

                                    <div data-aos="fade-left" className="proj-container  flex flex-col items-center md:h-[480px] xl:h-[460px]  mb-3  basis-full lg:basis-[32%] md:basis-[48%] px-2 md:px-7 py-4 md:py-7 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] shadow-2xl bg-opacity-90 rounded-xl">
                                        <div className=" w-[98%] flex flex-col gap-3">
                                            <div className="overflow-hidden h-[250px] rounded-xl">
                                                <img className="imm rounded-xl w-full h-full object-fill" src={item2.src} />
                                            </div>
                                            <div className="w-full flex justify-between">
                                                <div className="rounded-lg text-red-600 text-2xl">{item2.title}</div>

                                                <span className={`text-lg ${item2.link ? 'block' : 'hidden'} w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-red-600 duration-300 cursor-pointer`}>
                                                    <a href={item2.link} target="_blank" rel="noopener noreferrer">
                                                        <FaGlobe /></a>
                                                </span>
                                            </div>

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