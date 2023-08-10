import React, { useEffect, useState } from 'react';
import Banner from '../Banner'

const Home = () => {
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
        <div className=' relative my-20'>
            <Banner></Banner>
            <section >'
                <div className={`${windowWidth > 768 ? 'absolute bottom-0  left-0 right-0 my-container' : 'px-12 mt-3'}`}>
                    <div className='w-full h-full my-section' >
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-8'>
                            {
                                info.map(card => (
                                    <div className="card w-full bg-base-100 shadow-xl h-[200px]">
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{card.feature}</h2>
                                            <p>{card.title}</p>
                                            <div className="card-actions justify-end">
                                                <div
                                                    className='bg-[#4baf47] text-white py-6 px-6 rounded mt-10'>
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

export default Home;