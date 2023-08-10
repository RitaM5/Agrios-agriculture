import React, { useEffect, useState } from 'react';
import img1 from '../../assets/slide-1.jpg'
import img2 from '../../assets/slide-2.jpg'
import img3 from '../../assets/slide-3.jpg'

const Banner = () => {
    const info = [
        {
            id: 1,
            feature: 'Feature 01',
            title: 'We are using a new technology',
            image: 'https://img.icons8.com/color/40/tractor.png'
        },
        {
            id: 2,
            feature: 'Feature 02',
            title: 'Good in smart organic services',
            image: 'https://img.icons8.com/external-justicon-flat-justicon/40/external-tree-autumn-season-justicon-flat-justicon.png'
        },
        {
            id: 3,
            feature: 'Feature 03',
            title: 'Reforming in the systems',
            image: 'https://img.icons8.com/external-itim2101-lineal-itim2101/40/external-farmer-male-occupation-avatar-itim2101-lineal-itim2101-1.png'
        }
    ];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            <div className="carousel w-full h-[800px]">
                <div id="slide1" className={`carousel-item relative w-full`}>
                    <img src={img3} className="w-full" />
                    <div className=" flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 h-full">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h1 className='text-lg font-semibold'>WELCOME TO AGRIOS FARMING</h1>
                            <h2 className='text-6xl font-semibold font-shadow'>Agriculture Eco Farming</h2>
                            <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='inline-flex gap-6 '>
                                <button className="px-5 text-lg font-medium rounded bg-[#4baf47] hover:bg-[#353d1d]">Discover More</button>
                                <img src="https://tplabs.co/agrios/wp-content/uploads/2022/07/leaf-02.webp" alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-0">
                        <a href="#slide1" className="btn btn-circle mr-5 mt-96">❮</a>
                        <a href="#slide3" className="btn btn-circle mt-96">❯</a>
                    </div>
                </div>
                <div id="slide2" className={`carousel-item relative w-full`}>
                    <img src={img2} className="w-full" />
                    <div className=" flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 h-full">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h1 className='text-lg font-semibold'>WELCOME TO AGRIOS FARMING</h1>
                            <h2 className='text-6xl font-semibold font-shadow'>Agriculture Eco Farming</h2>
                            <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='inline-flex gap-6 '>
                                <button className="px-5 text-lg font-medium rounded bg-[#4baf47] hover:bg-[#353d1d]">Discover More</button>
                                <img src="https://tplabs.co/agrios/wp-content/uploads/2022/07/leaf-02.webp" alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-0">
                        <a href="#slide1" className="btn btn-circle mr-5 mt-96">❮</a>
                        <a href="#slide3" className="btn btn-circle mt-96">❯</a>
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
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-0">
                        <a href="#slide2" className="btn btn-circle mr-5 mt-96">❮</a>
                        <a href="#slide4" className="btn btn-circle mt-96">❯</a>
                    </div>
                </div>
            </div>
            <section className='font-poppins '>
                <div className=' my-container'>
                    <div className='w-full h-full my-section py-3' >
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-8 px-4'>
                            {
                                info.map(card => (
                                    <div className="card  w-full bg-base-100 shadow-xl h-[220px] bottom-20">
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title font-shadow text-amber-600">{card.feature}</h2>
                                            <p className='text-lg font-semibold'>{card.title}</p>
                                            <div className="card-actions justify-end">
                                                <div
                                                    className='bg-[#4baf47] text-white py-6 px-6 rounded mt-14'>
                                                    <img src={card.image} style={{
                                                        transformStyle: 'preserve-3d',
                                                        transition: 'transform 0.4s',
                                                    }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.transform = 'rotateY(180deg)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.transform = 'rotateY(0deg)';
                                                        }} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Banner;