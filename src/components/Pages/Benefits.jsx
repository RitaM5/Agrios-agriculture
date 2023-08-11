import React from 'react';

const Benefits = () => {
    return (
        <div className='py-20  font-poppins grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            <div className='relative px-4'>
                <div className='w-52 rounded-3xl h-[550px] md:h-[735px] bg-[#4baf47]'>

                </div>
                <div className=' translate-x-6 absolute top-0'>
                    <img className=' rounded-3xl h-[550px] md:h-[735px]' src="https://tplabs.co/agrios/wp-content/uploads/2022/07/farmer.webp" alt="" srcset="" />
                </div>
                <div className="chat chat-end absolute bottom-32 right-0 animate-bounce transition-all duration-1000">
                    <div className="chat-bubble chat-bubble-info flex items-center gap-4 text-white bg-[#eec044] w-[280px] h-[150px]">
                        <img src="https://img.icons8.com/glyph-neue/50/farmer-male.png" alt="farmer-male" />
                        <p className=' font-shadow text-2xl font-semibold'>Agriculture Professional Leader</p>
                    </div>
                </div>
            </div>
            <div className='h-[550px] md:h-[735px] mt-5'>
                <div className='space-y-8 px-4 text-[20px] '>
                    <p className=' text-[25px] font-shadow text-amber-600 font-bold'>
                        Our Farm Benefits</p>
                    <h1 className=' text-4xl font-semibold w-[280px]'>Why Choose Agrios Market</h1>
                    <p className=' text-[21px]'>
                        There are many variations of passages of available but the majortity have sufferred alteration in some form by injected humor or random word which don't look even.
                    </p>
                    <div className=' grid grid-cols-1 gap-6 items-center'>
                        <div className='space-y-3'>
                            <p className=' inline-flex gap-4'>
                                <label className="cursor-pointer label">
                                    <input type="checkbox" checked="checked" className="checkbox checkbox-success" />
                                </label>
                                <span className='text-3xl font-semibold'>Quality Organic Food</span>
                            </p>
                            <p className='ml-12'>
                                There are variation You need to be sure there is anything hidden in the middle of text.
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <p className=' inline-flex gap-4'>
                                <label className="cursor-pointer label">
                                    <input type="checkbox" checked="checked" className="checkbox checkbox-warning" />
                                </label>
                                <span className='text-3xl font-semibold'>QProfessional Farmers</span>
                            </p>
                            <p className='ml-12'>
                                There are variation You need to be sure there is anything hidden in the middle of text.
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <p className=' inline-flex gap-4'>
                                <label className="cursor-pointer label">
                                    <input type="checkbox" checked="checked" className="checkbox checkbox-error" />
                                </label>
                                <span className='text-3xl font-semibold'>Quality Products</span>
                            </p>
                            <p className='ml-12'>
                                There are variation You need to be sure there is anything hidden in the middle of text.
                            </p>
                        </div>
                    </div>
                    <p className="px-5 py-4 inline-block text-white text-lg font-medium rounded bg-[#4baf47] hover:bg-[#353d1d]">Discover More </p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;