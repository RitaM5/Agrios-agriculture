import React, { useState } from 'react';
import CountUp from 'react-countup'
import Banner from '../Banner'
import bgImage from '../../../assets/background-1.jpg'
import { Parallax } from 'react-parallax';
import ScrollTrigger from 'react-scroll-trigger'
import Projects from '../Projects';
const Home = () => {
    const [counterOn, setCounterOn] = useState(false);
    const data = [
        {
            id: 1,
            logo: 'https://img.icons8.com/ios/40/tractor.png',
            title: 'Agriculture Products',
            image: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/service-01.webp'
        },
        {
            id: 2,
            logo: 'https://img.icons8.com/avantgarde/40/deciduous-tree.png',
            title: 'Organic Products',
            image: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/service-02.webp'
        },
        {
            id: 3,
            logo: 'https://img.icons8.com/fluency/40/carrot.png',
            title: 'Fresh Vegetables',
            image: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/service-03.webp'
        },
        {
            id: 4,
            logo: 'https://img.icons8.com/dusk/40/milk.png',
            title: 'Dairy Products',
            image: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/service-04.webp'
        }
    ];
    return (
        <div className='font-poppins relative'>
            <Banner></Banner>
            <section className='my-container my-14'>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-24 items-center'>
                    <div className='flex items-center'>
                        <div className=''>
                            <img className='w-40 h-40 md:w-60 md:h-60 rounded-full mt-14 md:mt-32 absolute animate-bounce transition duration-1000 ease-in' src="https://tplabs.co/agrios/wp-content/uploads/2022/07/image-02.webp" alt="" srcset="" />
                        </div>
                        <img className='rounded-full' src="https://tplabs.co/agrios/wp-content/uploads/2022/07/image-01.webp" alt="" srcset="" />
                    </div>
                    <div className=' space-y-4 px-4'>
                        <p className=' text-[25px] font-shadow text-amber-600 font-bold'>Our Introductions</p>
                        <h1 className=' text-4xl font-semibold w-[390px]'>Agriculture & Organic Product Farm</h1>
                        <h2 className='text-2xl text-[#4baf47] font-semibold'>Agrios is the largest global organic farm.</h2>
                        <p className=' text-lg'>
                            There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.
                        </p>
                        <div className=' grid grid-cols-1 md:grid-cols-2 py-3'>
                            <div>
                                <img style={{
                                    transformStyle: 'preserve-3d',
                                    transition: 'transform 0.4s',
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'rotateY(180deg)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'rotateY(0deg)';
                                    }} src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/50/external-fruits-weight-loss-program-inipagistudio-mixed-inipagistudio.png" alt="" srcset="" />
                                <h2 className='text-[20px] font-semibold mt-2'>Growing fruits
                                    vegetables</h2>
                            </div>
                            <div>
                                <img style={{
                                    transformStyle: 'preserve-3d',
                                    transition: 'transform 0.4s',
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'rotateY(180deg)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'rotateY(0deg)';
                                    }} src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/50/external-fruits-farm-flaticons-lineal-color-flat-icons.png" alt="" srcset="" />
                                <h2 className='text-[20px] font-semibold mt-2'>Tips for ripening
                                    your fruits</h2>
                            </div>
                        </div>
                        <ul className='text-lg space-y-2'>
                            <li className=' inline-flex items-center gap-2'>
                                <label className="label cursor-pointer">
                                    <input type="checkbox" checked="checked" className="text-lg" />
                                </label>
                                <span>Lorem Ipsum is not simply random text.</span>
                            </li>
                            <li className=' inline-flex items-center gap-2'>
                                <label className="label cursor-pointer">
                                    <input type="checkbox" checked="checked" className="" />
                                </label>
                                <span>Making this the first true generator on the internet.</span>
                            </li>
                        </ul>
                        <button className="px-5 py-3 text-white text-lg font-medium rounded bg-[#4baf47] hover:bg-[#353d1d]">Discover More</button>
                    </div>
                </div>
                <div className=' bottom-36 flex justify-end'>
                    <img className='h-[350px]' src="https://tplabs.co/agrios/wp-content/uploads/2022/07/farm.webp" alt="" srcset="" />
                </div>
            </section>
            <section className='my-14 my-container'>
                <div className=' space-y-2 text-center'>
                    <p className=' text-[25px] font-shadow text-amber-600 font-bold'>Our Services</p>
                    <h1 className=' text-center mx-auto text-4xl font-semibold '>What We Offer</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 pt-14 px-4'>
                    {
                        data.map(info => (
                            <div className="group relative w-full rounded-lg shadow-xl">
                                <div className=''><img src={info.image} alt="Shoes" className=' h-full object-cover group-hover group-hover:scale-125 transition-transform duration-500 rounded-lg w-full' /></div>
                                <div className="bg-base-100 card shadow-xl bottom-14 py-9 w-56 mx-auto">
                                    <div className='bg-[#a1c013] px-4 rounded  py-4 w-20 mx-auto hover:bg-[#c9cb0b]'>
                                        <img src={info.logo} alt="" srcset="" />
                                    </div>
                                    <p className='text-center mt-3 text-xl font-semibold'>{info.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className='py-20'>
                <div className='bg-[#4baf47] my-container rounded-2xl  relative top-44 z-10'>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center pt-12'>
                        <div>
                            <h1 className=' font-shadow text-5xl text-white font-semibold'>
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                    {counterOn && <CountUp start={5480} end={6420} duration={2} delay={0} className="" />}
                                </ScrollTrigger>
                            </h1>
                            <p className='text-white text-2xl mt-3'>Agriculture Products</p>
                        </div>
                        <div>
                            <h1 className=' font-shadow text-5xl text-white font-semibold'>
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                    {counterOn && <CountUp start={7520} end={88000} duration={2} delay={0} className="" />}
                                </ScrollTrigger>
                            </h1>
                            <p className='text-white text-2xl mt-3'>Projects Completed</p>
                        </div>
                        <div>
                            <h1 className=' font-shadow text-5xl text-white font-semibold'>
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                    {counterOn && <CountUp start={6480} end={7280} duration={2} delay={0} className="" />}
                                </ScrollTrigger>
                            </h1>
                            <p className='text-white text-2xl mt-3'>Satisfied Clients</p>
                        </div>
                        <div>
                            <h1 className=' font-shadow text-5xl text-white font-semibold'>
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                    {counterOn && <CountUp start={1706} end={1800} duration={2} delay={0} className="" />}
                                </ScrollTrigger>
                            </h1>
                            <p className='text-white text-2xl mt-3'>Experts Farmers</p>
                        </div>
                    </div>
                    <div className=' flex justify-center'>
                        <img src="https://tplabs.co/agrios/wp-content/uploads/2022/07/wheats-2.webp" alt="" srcset="" />
                    </div>
                </div>
                <Parallax strength={600} bgImage={bgImage} className=" w-full h-[900px] relative"
                >
                    <div className='absolute inset-0 bg-black opacity-60'>
                        <div className='px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 absolute inset-0 items-center my-container'>
                            <div>
                                <h1 className='md:w-[350px] w-[150px] text-white text-4xl  md:text-5xl lg:text-7xl lg:mt-72 mt-52 font-semibold'>Agriculture Matters to the Future of Development</h1>
                            </div>
                            <div>
                                <h2 className='lg:mt-52 lg:ml-80 mt-0 ml-0 font-shadow text-[#efaf03] font-semibold text-2xl'>Watch our video</h2>
                            </div>
                        </div>
                    </div>

                </Parallax>
            </section>
            <section className='my-container my-12'>
                <Projects></Projects>
            </section>
        </div>
    );
};

export default Home;