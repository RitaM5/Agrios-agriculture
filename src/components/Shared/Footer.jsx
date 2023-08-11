import React from 'react'; import { FaFacebookMessenger, FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-14'>
            <div className='bg-[#000000e6]'>
                <div className="footer text-white p-10 my-container">
                    <div className=' space-y-3'>
                        <img className='h-20' src='https://tplabs.co/agrios/wp-content/uploads/2022/07/logo@2x-white-1.webp' alt="" srcset="" />
                        <p className='text-lg'>
                            There are many variations of passages of lorem ipsum available, but the majority suffered.
                        </p>
                        <span className="footer-title text-2xl">Services</span>
                        <div className='grid grid-cols-1 lg:grid-cols-4  gap-3'>
                            <a className="link link-hover"><FaFacebookMessenger size={30} /></a>
                            <a className="link link-hover"><FaFacebook size={30} /></a>
                            <a className="link link-hover"><FaInstagram size={30} /></a>
                            <a className="link link-hover"><FaTwitter size={30} /></a>
                        </div>
                    </div>
                    <div className='ml-0 lg:ml-14'>
                        <span className="footer-title text-2xl">Explore</span>
                        <div className='grid grid-cols-1 gap-4 text-lg my-3'>
                            <a className="link link-hover">About</a>
                            <a className="link link-hover">services</a>
                            <a className="link link-hover">Our Projects</a>
                            <a className="link link-hover">Meet the Farmers</a>
                            <a className="link link-hover">Lates News</a>
                            <a className="link link-hover">Contact</a>
                        </div>
                    </div>
                    <div className='ml-0 lg:ml-14'>
                        <span className="footer-title text-2xl">Legal</span>
                        <div className='grid grid-cols-1 gap-8 my-3'>
                            <div className='flex gap-4 items-center'>
                                <img className=' rounded-lg h-20' src="https://tplabs.co/agrios/wp-content/uploads/2022/07/news-06-150x150.webp" alt="" srcset="" />
                                <div className=''>
                                    <p className='text-[20px] font-semibold'>
                                        Brinding Food Production Back To Cities
                                    </p>
                                    <p className='mt-2 text-lg text-[#eec044]'>July 5, 2022</p>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <img className=' rounded-lg h-20' src="https://tplabs.co/agrios/wp-content/uploads/2022/07/news-06-150x150.webp" alt="" srcset="" />
                                <div>
                                    <p className='text-[20px] font-semibold'>
                                        The Future of Farming, Smart Irrigation Solutions
                                    </p>
                                    <p className='mt-2 text-lg text-[#eec044]'>July 5, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ml-0 lg:ml-14'>
                        <span className="footer-title text-2xl">Newsletter</span>
                        <div className="form-control w-80 space-y-5 mt-4">
                            <p className=' inline-flex gap-3 items-center'>
                                <span><FaPhone /></span>
                                <span>666 888 0000</span>
                            </p>
                            <p className=' inline-flex gap-3 items-center'>
                                <span><FaEnvelope /></span>
                                <span>needhelp@company.com</span>
                            </p>
                            <p className=' inline-flex gap-3 items-center'>
                                <span><FaMapMarker /></span>
                                <span>80 broklyn golden street line New York, USA</span>
                            </p>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn bg-[#4baf47] absolute top-0 right-0 rounded-l-none">
                                    <img src="https://img.icons8.com/ios/30/sent--v1.png" alt="sent--v1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className='bg-gradient-to-b from-black to-gray-800'>
                    <div className='py-7 space-y-1 container mx-auto text-white px-20 flex flex-col md:flex-row md:justify-between text-center justify-center'>

                        <p className='text-2xl font-semibold'>© All Copyright 2022 by TPLabs.co</p>

                        <p className='text-gray-400 mt-4 md:mt-0'><span className='mr-3 font-semibold text-lg'>Terms of Use</span>
                            <span className='text-[20px]'>|</span>
                            <span className='font-semibold text-lg ml-3'> Privacy Policy</span></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;