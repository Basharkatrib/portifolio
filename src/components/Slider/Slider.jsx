import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules'; 
import ecomimage from '../../assets/R.jpeg';

function Slider() {
    const swiperRef = useRef(null);

    const data = [
        { id: 1, src: ecomimage, domain: "BOUND TROLA", name: "JOHN DOE", job: "Chief Officer", title: "Travel Mobile App design", subtitle: "via upwork - Mar 4 2015", desc: "I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that." },
        { id: 2, src: ecomimage, domain: "BOUND TROLA", name: "JOHN DOE", job: "Chief Officer", title: "Travel Mobile App design", subtitle: "via upwork - Mar 4 2016", desc: "I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that." },
        { id: 3, src: ecomimage, domain: "BOUND TROLA", name: "JOHN DOE", job: "Chief Officer", title: "Travel Mobile App design", subtitle: "via upwork - Mar 4 2017", desc: "I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that." },
    ];

    return (
        <div className="relative w-full h-auto md:px-32 py-5 border-b-2 border-white" id='Testimonial'>
            <div className='w-full hidden justify-end md:flex relative m-4'>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-4  top-1/2 transform -translate-y-1/2 transition-all duration-300 bg-zinc-700 hover:bg-zinc-900 py-2 px-5 rounded-sm shadow-lg"
                >
                    ▶
                </button>
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute right-20 top-1/2 transform -translate-y-1/2 transition-all duration-300 bg-zinc-700 hover:bg-zinc-900 py-2 px-5 rounded-sm shadow-lg"
                >
                    ◀
                </button>


            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation={false}
                modules={[Pagination]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="mySwiper md:h-[500px] m-8"
            >
                {data.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="flex flex-col md:flex-row w-full justify-center gap-8 relative">
                            <div className="proj-container justify-center  flex flex-col items-center px-7 py-7 shadow-5-strong rounded-sm">
                                <div className="flex h-full flex-col gap-1">
                                    <div className="overflow-hidden rounded-xl">
                                        <img className="imm rounded-xl w-full h-full" src={slide.src} alt="Slider Image" />
                                    </div>
                                    <div className="rounded-lg text-red-600 text-2xl">{slide.domain}</div>
                                    <div className="text-white">{slide.name}</div>
                                    <div className="text-white">{slide.job}</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4 px-5 justify-center shadow-5-strong rounded-sm">
                                <div className="text-gray-300 text-2xl">{slide.title}</div>
                                <div className="text-gray-400 text-xl">{slide.subtitle}</div>
                                <div className="flex w-full justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 576 512"><path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 576 512"><path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 576 512"><path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 576 512"><path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 576 512"><path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                                    </div>
                                <hr className="text-white w-full" />
                                <div className="text-white text-xl">{slide.desc}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>



        </div>
    );
}

export default Slider;
