import React from 'react';
import { FaUser, FaComment } from 'react-icons/fa';
const News = () => {

    const articles = [
        {
            id: 1,
            date: '05 July 2022',
            name: 'Kevin Martin',
            comment: '1 Comment',
            title: 'Bringing Food Production Back To Cities',
            image: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/news-06-370x300.webp'
        },

        {
            id: 2,
            date: '05 July 2022',
            name: 'Kevin Martin',
            comment: '0 Comment',
            title: 'The Future of Farming, Smart Irrigation Solutions',
            image: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/news-05-370x300.webp'
        },
        {
            id: 3,
            date: '05 July 2022',
            name: 'Kevin Martin',
            comment: '2 Comment',
            title: 'Agronomy and relation to Other Sciences',
            image: 'https://tplabs.co/agrios/wp-content/uploads/2022/07/news-04-370x300.webp'
        },
    ]
    return (
        <div className='py-96 md:py-20  font-poppins'>
            <div className=' space-y-2 text-center my-5 md:my-0'>
                <p className=' text-[25px] font-shadow text-amber-600 font-bold'>From the Blog</p>
                <h1 className=' text-center mx-auto text-4xl font-semibold '>News & Articles</h1>
            </div>
            <div className=' my-14 md:my-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 px-4'>
                {
                    articles.map(article => (
                        <div className="card w-full bg-base-100 shadow-xl my-14">
                            <figure className='group'>
                                <img className='object-cover transition-transform duration-500 group-hover:rotate-3  group-hover:scale-125' src={article.image} alt="" />

                            </figure>
                            <div className='p-3 text-center'>
                                <div className=''>
                                    <p className='bg-[#4baf47] relative bottom-6 mx-auto text-white px-4 py-3 w-40 text-center rounded-2xl'>{article.date}</p>
                                </div>
                                <div className="inline-flex text-lg text-gray-500 my-3 gap-14">
                                    <h2 className="card-title inline-flex gap-2 items-center"><span><FaUser /></span><span>{article.name}</span></h2>
                                    <p className=" inline-flex gap-2 items-center"><span> <FaComment /></span><span>{article.comment}</span></p>
                                </div>
                                <p className=' text-center my-4 text-2xl font-semibold'>{article.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default News;