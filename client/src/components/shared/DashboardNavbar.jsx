import React from 'react'
import avatar from '../../assets/profile_avatar.svg'
import { useLocation } from 'react-router-dom'
const DashboardNavbarw = () => {
  return (
    <div className='w-full bg-white py-5 px-10'>

    </div>
  )
}


const DashboardNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-sm">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          {currentPath === '/dashboard/invite-physicians' && 'Physicians'}
          {currentPath === '/dashboard/invite-lab' && 'Lab Directors'}
          {currentPath !== '/dashboard/invite-physicians' && currentPath !== '/dashboard/invite-lab' && 'Dashboard'}
        </h1>
        <p className="text-sm text-gray-500">Exclusive discounts for all members.</p>
      </div>
      <div className="flex items-center">
        <img
          src={avatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="text-base font-semibold text-gray-800">John Doe</p>
          <p className="text-sm text-gray-500">Genetics Specialist</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar