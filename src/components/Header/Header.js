import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {

    return (
        <div className="relative py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="flex flex-col items-center sm:items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:pr-5">
                    <div className="text-center sm:text-start mb-6">
                        <div>
                            <p className="font-bold text-lg text-primary">
                                Hello! I am
                            </p>
                        </div>
                        <TypeAnimation
                            sequence={[
                                'Jillu',
                                1000, // Waits 1s
                                'Jillu Rahman', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'Jillu Rahman Jibon', // Types 'Three' without deleting 'Two'
                                3000,
                                'Junior Full Stack Developer', // Types 'Three' without deleting 'Two'
                                4000,
                                'I have done 30+ projects', // Types 'Three' without deleting 'Two'
                                5000,

                                () => {
                                    console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            className='lg:text-7xl md:text-6xl sm:text-5xl text-3xl  font-bold pb-4 pt-2'
                        />
                        <p className="text-base md:text-2xl font-bold text-primary">
                            Junior  Full Stack Developer
                        </p>
                        <ul className='sm:flex   gap-8 font-bold '>
                            <li className='list-none'>Web Developer</li>
                            <li className='relative'> <span className='absolute -left-5 hidden sm:block bg-primary w-3 h-3 rounded-full top-1/3'></span>Programmer </li>
                            <li className='relative'><span className='absolute -left-5 hidden sm:block bg-primary w-3 h-3 rounded-full top-1/3'></span>Software Engineer </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 items-center sm:flex-row">
                        <a
                            target='_blank' rel="noopener noreferrer" href='https://github.com/JilluRahmanJibon/JilluRahmanJibon/raw/main/assets/MyResume.pdf'
                            className="btn btn-primary w-full sm:w-auto px-6 "
                        >
                            Get Resume
                        </a>
                        <a
                            href="#about"
                            aria-label=""
                            className=" btn-outline btn-primary btn  w-full sm:w-auto px-6"
                        >
                            About Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;