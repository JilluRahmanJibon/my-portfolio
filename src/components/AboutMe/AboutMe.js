import React from 'react';
import Jibon from '../../Assests/aboutPicture.jpg'
const AboutMe = () => {
    return (
        <div id='about' className='pt-8'>
            <div className="relative px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="max-w-xl mx-auto lg:max-w-screen-xl py-8">
                    <div className="mb-16 lg:max-w-lg lg:mb-0">
                        <div>
                            <h1 className='text-primary'>About</h1>
                            <p className='font-semibold text-justify'>Hello! I'm Jillu Rahman Jibon, a passionate Junior Full Stack Web Developer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most things using JavaScript. I love to make the web more open to the world. I have learned programming from programming hero. I am available for any kind of job opportunity that suits my interests.</p>
                       </div>
                        <div className="flex flex-col gap-2 items-center mt-3 md:flex-row">
                            <a
                                target='_blank' rel="noopener noreferrer" href='https://github.com/JilluRahmanJibon/JilluRahmanJibon/raw/main/assets/MyResume.pdf' 
                                className="btn btn-primary  w-full sm:w-auto px-6 "
                            >
                                Get Resume
                            </a>
                            <a
                                href="#skills"
                                aria-label=""
                                className=" btn-outline btn-primary btn  w-full sm:w-auto px-6 "
                            >
                               MY Skills 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-center lg:bottom-0 lg:right-0 lg:items-end">
                        <img
                            src={Jibon}
                            className="w-80 p-1 border border-primary"
                            alt=""
                        />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;