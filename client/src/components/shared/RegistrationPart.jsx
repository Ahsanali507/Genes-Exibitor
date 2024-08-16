import React from 'react';
import image1 from '../../assets/Image.png';
import image2 from '../../assets/Image2.png';
import image3 from '../../assets/Image3.png'; // Make sure you import image3

const RegistrationPart = () => {
    return (
        <div className="w-1/2 bg-black flex flex-col items-center justify-between h-full">
            <img
                src={image1}
                alt="registration"
                className="object-cover w-full h-52 mb-4"
            />
            <div className="max-w-2xl mx-auto mb-8">
                <h4 className="text-lg mb-4 text-white font-zen">Welcome To Genes</h4>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white font-zen">
                    The Ultimate Medical Conference Hub
                </h1>
                <p className="text-md md:text-lg text-gray-500 font-zen">
                    Explore Captivating Event Experiences And Connect With Others At Our Upcoming Events. Join A Dynamic Community For Idea Exchange And Fresh Insights From Industry-Leading Experts.
                </p>
            </div>
            <div className='flex flex-row w-full space-x-2'>
                <img
                    src={image2}
                    alt="registration"
                    className="object-cover w-1/2 h-36"
                />
                <img
                    src={image3}
                    alt="registration"
                    className="object-cover w-1/2 h-36"
                />
            </div>
        </div>
    );
};

export default RegistrationPart;