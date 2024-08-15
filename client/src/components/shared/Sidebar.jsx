import React from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import logout from '../../assets/icons/logout.svg'
import info from '../../assets/icons/info.svg'

import { Link } from 'react-router-dom'
import { InviteLabLogo, InvitePhysicianLogo } from '../icons/index.jsx'

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className='bg-[#FFFFFF] w-[364px] flex justify-between flex-col h-full'>
            <div className='flex flex-col w-full justify'>
                <div className='my-5'>
                    <img src={logo} alt='logo' className='w-[200px] h-auto mx-auto' />
                </div>
                <ul className='flex flex-col'>
                    <li className='hover:bg-[#F3F3F3]'>
                        <Link to='/dashboard/invite-physicians' className={`py-4 px-6 flex items-center ${currentPath === '/dashboard/invite-physicians' ? 'bg-[#E01313] text-white' :  'text-[#8F9BB3]'}`}>
                            <InvitePhysicianLogo color={currentPath === '/dashboard/invite-physicians' ? 'white' : '#8F9BB3'} />
                            <span className=' ml-3'>Invite Physicians</span>
                        </Link>
                    </li>
                    <li className='hover:bg-[#F3F3F3]'>
                        <Link to='/dashboard/invite-lab' className={`flex items-center py-4 px-6  ${currentPath === '/dashboard/invite-lab' ? 'bg-[#E01313] text-white' : 'text-[#8F9BB3]'}`}>
                            <InviteLabLogo color={currentPath === '/dashboard/invite-lab' ? 'white' : '#8F9BB3'} />
                            <span className=' ml-3'>Invite Lab Directors</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='my-20'>
                <ul className='flex flex-col'>
                    <li className='hover:bg-[#F3F3F3] text-[#8F9BB3]'>
                        <div className='flex items-center py-4 px-6'>
                            <img src={info} alt='logo' className='size-[18px]' />
                            <span className='ml-3'>Help And Information</span>
                        </div>
                    </li>
                    <li className='hover:bg-[#F3F3F3] text-[#8F9BB3]'>
                        <div className='flex items-center py-4 px-6'>
                            <img src={logout} alt='logo' className='w-[20px] h-auto' />
                            <span className=' ml-3'>Logout</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar