import React, { useEffect, useState } from 'react';
import img1 from '../../assets/slide-1.jpg'
import img2 from '../../assets/slide-2.jpg'
import img3 from '../../assets/slide-3.jpg'

const Banner = () => {

    return (
        <div className="carousel w-full h-[800px]">
            <div id="slide1" className={`carousel-item relative w-full`}>
                <img src={img3} className="w-full" />
                <div className=" flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 h-full">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h1 className='text-lg font-semibold'>WELCOME TO AGRIOS FARMING</h1>
                        <h2 className='text-6xl font-semibold font-shadow'>Agriculture Eco Farming</h2>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='inline-flex gap-6'>
                            <button className="px-5 text-lg font-medium rounded bg-[#4baf47] hover:bg-[#353d1d]">Discover More</button>
                            <img src="https://tplabs.co/agrios/wp-content/uploads/2022/07/leaf-02.webp" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className={`carousel-item relative w-full`}>
                <img src={img2} className="w-full" />
                <div className=" flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 h-full">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h1 className='text-lg font-semibold'>WELCOME TO AGRIOS FARMING</h1>
                        <h2 className='text-6xl font-semibold font-shadow'>Agriculture Eco Farming</h2>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='inline-flex gap-6'>
                            <button className="px-5 text-lg font-medium rounded bg-[#4baf47] hover:bg-[#353d1d]">Discover More</button>
                            <img src="https://tplabs.co/agrios/wp-content/uploads/2022/07/leaf-02.webp" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className={`carousel-item relative w-full`}>
                <img src={img1} className="w-full" />
                <div className=" flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 h-full">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h1 className='text-lg font-semibold'>WELCOME TO AGRIOS FARMING</h1>
                        <h2 className='text-6xl font-semibold font-shadow'>Agriculture Eco Farming</h2>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='inline-flex gap-6'>
                            <button className="px-5 text-lg font-medium rounded bg-[#4baf47] hover:bg-[#353d1d]">Discover More</button>
                            <img src="https://tplabs.co/agrios/wp-content/uploads/2022/07/leaf-02.webp" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;