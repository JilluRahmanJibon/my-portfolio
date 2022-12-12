import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assests/logo.png'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = (
        <React.Fragment>
            <li>
                <a
                    href="/#about"
                    aria-label="About"
                    title="About"
                    className="font-medium tracking-wide md:text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                    ABOUT
                </a>
            </li>
            <li>
                <a
                    href="/#service"
                    aria-label="Service"
                    title="Service"
                    className="font-medium tracking-wide md:text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                    SERVICE
                </a>
            </li>
            <li>
                <a
                    href='#skills'
                    aria-label="Skills"
                    title="Skills"
                    className="font-medium tracking-wide md:text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                    SKILL
                </a>
            </li>
           
            <li>
                <a
                    href="/#projects"
                    aria-label="Project"
                    title="Project"
                    className="font-medium tracking-wide md:text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                    PROJECT
                </a>
            </li>
            <li>
                <Link
                    to='/blog'
                    aria-label="Blog"
                    title="Blog"
                    className="font-medium tracking-wide md:text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                    BLOG
                </Link>
            </li>
            <li>
                <a
                    href="/#contact"
                    aria-label="Contact"
                    title="Contact"
                    className="font-medium tracking-wide md:text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                    CONTACT
                </a>
            </li>
           
        </React.Fragment>
    )

 
    return (
        <div>
            <div className="bg-secondary">
                <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <Link
                            to='/'
                            aria-label="Home"
                            title="Home"
                            className="inline-flex items-center"
                        >
                            <img src={logo} className='rounded-full w-12' alt="" />
                        </Link>
                        <div className='flex  gap-4'>
                            <ul className="flex items-center hidden space-x-8 md:flex">
                                {menuItems}
                            </ul>
                            <ul className="flex items-center hidden space-x-8 md:flex">
                                <li>
                                    
                                    <a
                                        target='_blank' rel="noopener noreferrer" href='https://github.com/JilluRahmanJibon/JilluRahmanJibon/raw/main/assets/MyResume.pdf' 
                                        className=" btn btn-outline  btn-primary"
                                        aria-label="Get Resume "
                                        title="Get Resume "
                                    >
                                        Get Resume
                                    </a>
                                </li>
                            </ul></div>
                        <div className="md:hidden z-50">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                    />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div className="absolute top-0 left-0 w-full">
                                    <div className="p-5 bg-white border rounded shadow-sm">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <Link
                                                    to='/'
                                                    aria-label="Home"
                                                    title="Home"
                                                    className="inline-flex items-center"
                                                >
                                                    <img src={logo} className='w-14' alt="" />
                                                </Link>
                                            </div>
                                            <div>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <ul className="space-y-4">
                                                {menuItems}
                                                <li>
                                                    <button
                                                        href="/"
                                                        className=" btn btn-outline  btn-primary"
                                                        aria-label="Get Resume "
                                                        title="Get Resume "
                                                    >
                                                        Get Resume
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;