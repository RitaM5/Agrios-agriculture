import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaFacebookMessenger, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Navbar = () => {
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
        <div className='font-poppins'>
            <header>
                <div className="navbar my-container py-5">
                    <div className="flex-1 justify-center md:justify-normal">
                        <NavLink to='/'><img className='h-14 mx-auto' src={logo} alt="" srcset="" /></NavLink>
                    </div>
                    <div className="flex-none">
                        <div className='hidden md:block'>
                            <ul className="menu menu-horizontal px-1">
                                <li className='animate-bounce duration-500'><a> <FaFacebookMessenger size={30} color="#0084FF" /></a></li>
                                <li className='animate-bounce duration-500'><a><FaFacebook size={30} color="#1877F2" /></a></li>
                                <li className='animate-bounce duration-500'><a><FaInstagram size={30} color="#C13584" /></a></li>
                                <li className='animate-bounce duration-500'><a><FaTwitter size={30} color="#1DA1F2" /></a></li>
                            </ul>
                        </div>
                        <div className={`flex gap-3 items-center ml-2 ${windowWidth > 1280 ? '' : 'hidden'}`}>
                            <div className='flex gap-8 items-center'>
                                <div className='relative'
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        transition: 'transform 0.4s',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'rotateY(180deg)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'rotateY(0deg)';
                                    }}>
                                    <img className='animate-bounce duration-500' src="https://img.icons8.com/fluency/30/phone.png" alt="phone" />
                                </div>
                                <div>
                                    <span className='text-gray-500'>Call anytime</span><br />
                                    <span className=' font-semibold text-lg'>+ 98 (000) - 9630</span>
                                </div>
                            </div>
                            <p className='text-[60px] text-gray-400'>|</p>
                            <div>
                                <div className='flex gap-3 items-center'>
                                    <div className='relative'
                                        style={{
                                            transformStyle: 'preserve-3d',
                                            transition: 'transform 0.4s',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'rotateY(180deg)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'rotateY(0deg)';
                                        }}>
                                        <img src="https://img.icons8.com/ios/30/envelope-dots.png" alt="envelope-dots" />
                                    </div>
                                    <div>
                                        <span className='text-gray-500'>Send email</span><br />
                                        <span className=' font-semibold text-lg'>ambed@agrios.com</span>
                                    </div>
                                </div>
                            </div>
                            <p className='text-[60px] text-gray-400'>|</p>
                            <div>
                                <div className='flex gap-3 items-center'>
                                    <div className='relative'
                                        style={{
                                            transformStyle: 'preserve-3d',
                                            transition: 'transform 0.4s',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'rotateY(180deg)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'rotateY(0deg)';
                                        }}>
                                        <img src="https://img.icons8.com/ios/30/marker--v1.png" alt="marker--v1" />
                                    </div>
                                    <div>
                                        <span className='text-gray-500'>
                                            380 St Kilda Road</span><br />
                                        <span className=' font-semibold text-lg'>Melbourne, Australia</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            {windowWidth < 1024 ? <div className='bg-base-200'>
                <div className="navbar my-container py-4 text-2xl">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><NavLink to='/'><a>Home</a></NavLink></li>
                                <li><NavLink to='/about'><a>About</a> </NavLink></li>
                                <li tabIndex={0} className="relative group">
                                    <details>
                                        <summary className="cursor-pointer">Services</summary>
                                        <ul className="p-2 z-10 absolute left-48 hidden group-hover:block border border-gray-300 shadow bg-gray-200 rounded-box w-52">
                                            <li ><a className='font-bold cursor-pointer hover:bg-green-600 hover:text-white text-lg block px-4 py-2'>Services</a></li>
                                            <li ><a className='font-bold cursor-pointer hover:bg-green-600 hover:text-white text-lg block px-4 py-2'>Agriculture Products</a></li>
                                            <li ><a className='font-bold cursor-pointer hover:bg-green-600 hover:text-white text-lg block px-4 py-2'>Organic Products</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li> <NavLink to='/Projects'><a>Projects</a></NavLink></li>
                                <li><NavLink to='/news'><a>News</a></NavLink></li>
                                <li><NavLink to='/shop'><a>Shop</a></NavLink></li>
                                <li><NavLink to='/contacts'><a>Contacts</a></NavLink></li>
                            </ul>
                        </div>

                    </div>
                    <div className="navbar-end w-full">
                        <NavLink to=''>
                            <button className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </NavLink>
                        <NavLink to=''>
                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-xs badge-primary indicator-item"></span>
                                </div>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
                :
                <div className='bg-base-200'>
                    <div className=' my-container'>
                        <div className={`navbar py-4`}>
                            <div className={`navbar-center flex `}>
                                <ul className="menu menu-horizontal  flex text-2xl gap-3 px-2">
                                    <li><NavLink to='/'><a>Home</a></NavLink></li>
                                    <li><NavLink to='/about'><a>About</a> </NavLink></li>
                                    <li className="dropdown dropdown-bottom relative group">
                                        <label tabIndex={0} className="group-hover:opacity-100 cursor-pointer group">
                                            Services
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transform group-hover:-rotate-180 transition-transform">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </label>
                                        <ul className="dropdown-content mt-3 menu p-2 z-10 shadow bg-gray-200 rounded-box w-52 absolute top-0 left-0 hidden group-hover:block border border-gray-300">
                                            <li ><a className='font-bold cursor-pointer hover:bg-green-600 hover:text-white text-lg'>Services</a></li>
                                            <li ><a className='font-bold cursor-pointer hover:bg-green-600 hover:text-white text-lg'>Agriculture Products</a></li>
                                            <li ><a className='font-bold cursor-pointer hover:bg-green-600 hover:text-white text-lg'>Organic Products</a></li>
                                        </ul>
                                    </li>
                                    <li> <NavLink to='/Projects'><a>Projects</a></NavLink></li>
                                    <li><NavLink to='/news'><a>News</a></NavLink></li>
                                    <li><NavLink to='/shop'><a>Shop</a></NavLink></li>
                                    <li><NavLink to='/contacts'><a>Contacts</a></NavLink></li>
                                </ul>
                            </div>
                            <div className="navbar-end w-full">
                                <NavLink to=''>
                                    <button className="btn btn-ghost btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                </NavLink>
                                <NavLink to=''>
                                    <button className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            <span className="badge badge-xs badge-primary indicator-item"></span>
                                        </div>
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>}

        </div>
    );
};

export default Navbar;