import '../../index.css';
import ecomimage from '../../assets/R.jpeg';
import myphoto from '../../assets/photo.png';
import { motion } from "motion/react"



function Contact() {

    return (
        <>
            <div className='w-full mt-5 md:mt-0 h-auto flex flex-col md:px-6 md:py-14' id='Contact'>
                <div className='w-full flex flex-col items-center'>
                    <div className=' text-red-600'>CONTACT</div>
                    <div className='text-white text-3xl font-bold'>Contact With Me</div>
                </div>
                <div className='flex flex-col  lg-custom:flex-row justify-between gap-9 mt-5'>
                    <div className='flex flex-col basis-[35%] gap-4 p-3 md:p-5 rounded-sm shadow-5-strong'>
                        <div  className='h-[370px]'>
                            <motion.img animate={{ height: [0 , '100%'] }}
                                transition={{ duration: 3, ease: "easeInOut" }} className=' rounded-sm h-full w-full object-fill' src={myphoto} />
                        </div>
                        <div className='text-white text-3xl font-bold'>BASHAR KATRIB</div>
                        <div className=' text-slate-400'>FULL Stack Developer</div>
                        <div className='text-slate-400'>I am honored to receive any communication from anyone regarding work or receiving a project. You can contact me through:.</div>
                        <div className='text-slate-400'>Phone: +963 937662759</div>
                        <div className='text-slate-400'>Email: bashar2003katrib@gmail.com</div>
                        <div className="flex gap-4">
                            <motion.a animate={{ scale: [0.5 , 1.5 , 0.5]}} transition={{repeat: Infinity, duration: 1.5, ease: "easeInOut" }} href="https://www.facebook.com/share/151MJb9EmD/" className="p-2 bg-black rounded-md transition-all duration-300 hover:-translate-y-1" ><span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#205de0]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                </svg>
                            </span>
                            </motion.a>
                            <motion.a animate={{ scale: [0.5 , 1.5 , 0.5]}} transition={{repeat: Infinity, duration: 1.5, ease: "easeInOut" }} href="https://www.instagram.com/katribbashar?igsh=MW85ZndiNm15eGpqbg==" className="p-2 bg-black rounded-md transition-all duration-300 hover:-translate-y-1">
                                <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                </span>
                            </motion.a>
                        </div>
                    </div>
                    <div className='flex flex-col basis-[65%] shadow-5-strong p-3 md:p-5 rounded-sm'>
                        <form className='w-full flex flex-col justify-between h-full'>
                            <div className='flex flex-col md:flex-row gap-5 '>
                                <div className='flex flex-col basis-1/2 text-slate-400'>
                                    <label>YOUR NAME</label>
                                    <input className='outline-none bg-zinc-900 p-3 rounded-md' type='text' />
                                </div>
                                <div className='flex flex-col basis-1/2 text-slate-400'>
                                    <label >PHONE NUMBER</label>
                                    <input className='outline-none bg-zinc-900 p-3 rounded-md' type='text' />
                                </div>
                            </div>
                            <div className='flex flex-col text-slate-400 mt-5 gap-2'>
                                <label>EMAIL</label>
                                <input className='outline-none bg-zinc-900 p-3 rounded-md' type='text' />
                            </div>
                            <div className='flex flex-col text-slate-400 mt-5 gap-2'>
                                <label>SUBJECT</label>
                                <input className='outline-none bg-zinc-900 p-3 rounded-md' type='text' />
                            </div>
                            <div className='flex flex-col text-slate-400 mt-5 gap-2'>
                                <label>MESSAGE</label>
                                <textarea className='outline-none bg-zinc-900 p-3 rounded-md' type='textaria' rows="11" />
                            </div>
                            <input type="submit" value="Send Message" className='mt-5 bg-black p-3 rounded-md w-full transition-all duration-300 hover:bg-neutral-800 hover:text-white' />

                        </form>

                    </div>

                </div>


            </div>
        </>

    );
}

export default Contact;
