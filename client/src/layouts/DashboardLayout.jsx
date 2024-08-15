import React from 'react'
import Sidebar from '../components/shared/Sidebar'
import DashboardNavbar from '../components/shared/DashboardNavbar.jsx'
import { Outlet } from 'react-router-dom'
const DashboardLayout = () => {
    return (
        <div className='w-screen max-h-screen flex'>
            <div className='h-screen'>
                <Sidebar />
            </div>
            <div className='flex-1 bg-gray-200'>
                <DashboardNavbar />
                <div className=''>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout