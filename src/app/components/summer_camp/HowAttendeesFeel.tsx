import React from 'react';
import Image from 'next/image';

interface HowAttendeesFeelProps {
    title: string;
    description1: string;
    description2: string;
    body1: string;
    body2: string;
    imageSrc1: string;
    imageAlt1: string;
    imageSrc2: string;
    imageAlt2: string;
}

const HowAttendeesFeel: React.FC<HowAttendeesFeelProps> = ({ title, body1, description1,description2, body2, imageSrc1, imageAlt1, imageSrc2, imageAlt2 }) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex">
                <div className='flex-1 flex-col'>
                    <div className="w-full">
                        <Image src={imageSrc1} alt={imageAlt1} width={500} height={500} className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                            style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}/>
                    </div>
                    <div className="w-full">
                        <p className="text-sm">{description1}</p> 
                        <p>{body1}</p> 
                    </div>
                </div>
                <div className='flex-1 flex-col'>
                    <div className="w-full">
                        <Image src={imageSrc2} alt={imageAlt2} width={500} height={500} className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                            style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}/>
                    </div>
                    <div className="w-full">
                        <p className="text-sm">{description2}</p>
                        <p>{body2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowAttendeesFeel;
