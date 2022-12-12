import React from 'react'

const MySkills = () => {
    const webSkills = [
        { width: 'w-[80%]', percentage: '80%', name: 'HTML' },
        { width: 'w-[70%]', percentage: '70%', name: 'CSS' },
        { width: 'w-[85%]', percentage: '85%', name: 'REACT' },
        { width: 'w-[60%]', percentage: '60%', name: 'JAVASCRIPT' },
        { width: 'w-[50%]', percentage: '50%', name: 'NODE.JS' },
        { width: 'w-[40%]', percentage: '40%', name: 'EXPRESS.JS' },
        { width: 'w-[30%]', percentage: '30%', name: 'MONGODB' },
    ]
    return (
        <div id='skills' className='pt-8'>
            <div className='mx-auto w-4/5 my-5'>
                <h1>Skills </h1>
                <div className='grid sm:grid-cols-2 gap-6'>
                    {
                        webSkills.map((skill, idx) => <div key={idx} className='bg-gray-800 sm:px-4 px-2 rounded-md'>
                            <h1 className="  sm:pt-5 pt-5 flex justify-between items-center pb-2 "><span className='font-bold text-xl '>{skill?.name}</span> <span className="bg-primary rounded-md text-white font-bold text-md  sm:px-4 px-2 py-2">{skill?.percentage}</span></h1>
                            <div className="mt-2 h-3  relative   overflow-hidden">
                                <div className={`h-full  bg-primary rounded-full absolute ${skill?.width}`} ></div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    )
}

export default MySkills