import React from 'react'
import { Link } from 'react-router-dom';
import { BsArrowRightCircleFill, BsBoxArrowInUpRight } from 'react-icons/bs';
import ResaleFurniture from '../../Assests/ScreenShot/ResaleFurniture/lg-view.png';
const Projects = () => {
    return (
        <section className='mx-auto w-4/5 my-5 pt-8' id='projects' >
            <h1>Projects </h1>
            <div className=' grid lg:grid-cols-3 sm:grid-cols-2 gap-3 '>
                <div className='bg-gray-800 rounded-t-lg '>
                    <div className='md:h-80 sm:h-64 h-60  md:overflow-y-scroll overflow-hidden'>
                        <img className='w-full rounded-t-lg' src={ResaleFurniture} alt="" />
                    </div>
                    <div className='flex justify-between  px-2 pt-3  items-center'>
                        <h1 className='md:text-2xl text-xl font-bold '>Resale Furnitures</h1>
                        <Link className='btn btn-sm btn-outline btn-primary'>Explore More <BsArrowRightCircleFill className='font-bold text-lg ml-1'/></Link>
                    </div>
                    
                    <a href='https://regal-furniture-ab3ef.web.app/' rel='noreferrer' target='_blank' className='btn btn-primary btn-sm mt-4 w-full rounded-none font-bold'>Live Demo <BsBoxArrowInUpRight className="text-lg font-bold ml-1"/> </a>
                </div>
                <div className='bg-gray-800 rounded-t-lg '>
                    <div className='md:h-80 sm:h-64 h-60  md:overflow-y-scroll overflow-hidden'>
                        <img className='w-full rounded-t-lg' src={ResaleFurniture} alt="" />
                    </div>
                    <div className='flex justify-between  px-2 pt-3  items-center'>
                        <h1 className='md:text-2xl text-xl font-bold '>Resale Furnitures</h1>
                        <Link className='btn btn-sm btn-outline btn-primary'>Explore More <BsArrowRightCircleFill className='font-bold text-lg ml-1'/></Link>
                    </div>
                    
                    <a href='https://regal-furniture-ab3ef.web.app/' rel='noreferrer' target='_blank' className='btn btn-primary btn-sm mt-4 w-full rounded-none font-bold'>Live Demo <BsBoxArrowInUpRight className="text-lg font-bold ml-1"/> </a>
                </div>
                <div className='bg-gray-800 rounded-t-lg '>
                    <div className='md:h-80 sm:h-64 h-60  md:overflow-y-scroll overflow-hidden'>
                        <img className='w-full rounded-t-lg' src={ResaleFurniture} alt="" />
                    </div>
                    <div className='flex justify-between  px-2 pt-3  items-center'>
                        <h1 className='md:text-2xl text-xl font-bold '>Resale Furnitures</h1>
                        <Link className='btn btn-sm btn-outline btn-primary'>Explore More <BsArrowRightCircleFill className='font-bold text-lg ml-1'/></Link>
                    </div>
                    
                    <a href='https://regal-furniture-ab3ef.web.app/' rel='noreferrer' target='_blank' className='btn btn-primary btn-sm mt-4 w-full rounded-none font-bold'>Live Demo <BsBoxArrowInUpRight className="text-lg font-bold ml-1"/> </a>
                </div>
                
            </div>
        </section>
    )
}

export default Projects