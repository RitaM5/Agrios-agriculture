import React from 'react';

const Review = () => {
    const reviews = [
        {
            id: 1,
            name: "Bonni Tolbert",
            image: "https://tplabs.co/agrios/wp-content/uploads/2022/07/avatar-01.webp",
            details: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            id: 2,
            name: "James Albert",
            image: "https://tplabs.co/agrios/wp-content/uploads/2022/07/avatar-02.webp",
            details: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.",
            rating: "⭐⭐⭐⭐⭐"
        },
    ]
    return (
        <div className=' bg-cover bg-no-repeat  bg-[url(https://tplabs.co/agrios/wp-content/uploads/2022/07/farm-02.webp)]'>
            <div className='my-container grid grid-cols-1 lg:grid-cols-2 md:gap-6 gap-2 items-center'>
                <div className='py-32'>
                    <div className=' space-y-8 px-4'>
                        <p className=' text-[25px] font-shadow text-amber-600 font-bold'>
                            Our Testimonials</p>
                        <h1 className=' text-4xl font-semibold w-[240px]'>What They're Talking About Agrios</h1>
                        <p className=' text-lg'>
                            There are many variations of passages of available but the majortity have sufferred alteration in some form by injected humor or random word which don't look even.
                        </p>
                        <p className="px-5 py-4 inline-block text-white text-lg font-medium rounded bg-[#4baf47] hover:bg-[#353d1d]">View All Testimonials</p>
                    </div>
                </div>

                <div className=' font-poppins carousel grid grid-cols-1 gap-12 carousel-vertical rounded-box px-4 mx-4 lg:mx-0'>
                    {
                        reviews.map(review => (
                            <div className="carousel-item bg-base-100 shadow-xl py-4 px-6 h-full w-full grid gap-14 grid-cols-1 md:grid-cols-2 items-center">
                                <div className='md:order-1 order-2'>
                                    <p className='text-lg'>{review.details}</p>
                                    <h1 className=' mt-3 inline-flex gap-4'><span className='text-[22px] font-semibold'>{review.name}</span> <span>{review.rating}</span></h1>
                                </div>
                                <div className='md:order-2 order-1'>
                                    <img className=' rounded-full' src={review.image} alt="" srcset="" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* <div className='flex justify-center w-full mb-24'>
                <img className='w-full' src="https://tplabs.co/agrios/wp-content/uploads/2022/07/farm-02.webp" alt="" srcset="" />
            </div> */}
        </div>
    );
};

export default Review;