import React from 'react'
// import InvitationTable from '../components/ui/InvitationsTable'
import InviteDirectors from '../components/ui/InviteLabDirector'

const InviteDirectorsPage = () => {
    return (
        <div className='w-full'>
            <div className='p-5'>
                <InviteDirectors />
            </div>
            {/* <div className='p-5'>
                <InvitationTable />
            </div> */}
            <div className='p-10 absolute bottom-5 text-[#8F9BB3] text-lg font-thin'>
                © Copyright 2024 <span className='text-red-600'>Genes.com</span>
            </div>
        </div>
    )
}

export default InviteDirectorsPage