import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
    const projects = [
        {
            id: 1,
            details: 'Easy Harvesting nequi porro est qui dolorem ipsum',
            title: 'Easy Harvesting',
            image: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/project-06-370x570.webp'
        },

        {
            id: 2,
            details: 'The majority have suffered alteration in some form inject humour',
            title: 'Agriculture Farming ',
            image: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/project-05-370x570.webp'
        },
        {
            id: 3,
            details: 'The majority have suffered alteration in some form inject humour',
            title: 'Ecological Farming',
            image: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/project-04-370x570.webp'
        },
        {
            id: 4,
            details: 'The majority have suffered alteration in some form inject humour',
            title: 'Organic Solutions',
            image: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/project-03-370x570.webp'
        }
    ];
    return (
        <div className=' font-poppins'>
            <div className=' space-y-2 text-center'>
                <p className=' text-[25px] font-shadow text-amber-600 font-bold'>Recently Completed</p>
                <h1 className=' text-center mx-auto text-4xl font-semibold '>Explore Projects</h1>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                className='mySwiper mt-12 rounded-box min-h-screen items-center justify-center bg-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    projects.map(project => (
                        <SwiperSlide className="group mt-12 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div className="">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={project.image} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute text-left inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 transition-all duration-1000 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white mb-6">{project.title}</h1>
                                <p className="mb-14 text-lg italic  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{project.details}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Projects;
