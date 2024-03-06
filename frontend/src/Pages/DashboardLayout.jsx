import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardSidebar from '../Components/DashboardSidebar'

const DashboardLayout = () => {
    return (
        <div className='flex gap-4 flex-col md:flex-row'>
            <DashboardSidebar />
            <div className='md:ml-[16rem] '>
            <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout
