import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const Root = () => {
    return (
        <div className='bg-secondary'>
            <Navbar />
            <Outlet />

        </div>
    )
}

export default Root