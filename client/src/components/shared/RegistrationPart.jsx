import React from 'react'
import registrationImage from '../../assets/registrationPart.svg';

const RegistrationPart = () => {
    return (
        <div className="w-1/2 bg-gray-200 flex items-center justify-center">
            <img src={registrationImage} alt="registration" className="object-cover h-full w-full" />
        </div>
    )
}

export default RegistrationPart