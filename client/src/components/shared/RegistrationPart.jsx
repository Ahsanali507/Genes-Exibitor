import React from 'react';
import image1 from '../../assets/Image.png';
import image2 from '../../assets/Image2.png';
import image3 from '../../assets/Image3.png'; // Make sure you import image3

const RegistrationPart = () => {
    return (
        <div className="w-1/2 bg-black flex flex-col items-center justify-between h-full p-4">
            <img 
                src={image1} 
                alt="registration" 
                className="object-cover w-full h-48 mb-4"
            />
            <div className='flex flex-col justify-center px-4 mb-4'>
                <h4 className='text-white font-zen font-semibold text-lg mb-2'>Welcome to Genes</h4>
                <h1 className='text-white font-zen font-bold text-5xl mb-4'>
                    The Ultimate Medical <br /> Conference Hub
                </h1>
                <p className='text-[#CCCCCC] font-zen text-base'>
                    Explore captivating event experiences and connect with others at our upcoming events.
                    Join a dynamic community for idea exchange and fresh insights from industry-leading experts.
                </p>
            </div>
            <div className='flex flex-row w-full space-x-2'>
                <img 
                    src={image2} 
                    alt="registration" 
                    className="object-cover w-1/2 h-32"
                />
                <img 
                    src={image3} 
                    alt="registration" 
                    className="object-cover w-1/2 h-32"
                />
            </div>
        </div>
    );
};

export default RegistrationPart;