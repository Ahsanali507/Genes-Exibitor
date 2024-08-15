import React from 'react'
import InvitePhysician from '../components/ui/InvitePhysician'
import InvitationTable from '../components/ui/InvitationsTable'

const InvitePhysicianPage = () => {
    return (
        <div className='w-full'>
            <div className='p-5'>
                <InvitePhysician />
            </div>
            <div className='p-5'>
                <InvitationTable />
            </div>
            <div className='p-10 absolute bottom-5 text-[#8F9BB3] text-lg font-thin'>
                © Copyright 2024 <span className='text-red-600'>Genes.com</span>
            </div>
        </div>
    )
}

export default InvitePhysicianPage