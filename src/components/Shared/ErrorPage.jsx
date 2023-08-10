import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <img className='w-60' src="https://media1.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif?cid=6c09b952buwnjt93kjncekkgzni5btwmch06im4zzk4s2pc0&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" srcset="" />
                <div className='max-w-md text-center'>
                    <p className='text-2xl font-semibold md:text-3xl my-6'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-8 my-4 py-3 rounded-md font-semibold text-lg bg-blue-600 text-white'
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;