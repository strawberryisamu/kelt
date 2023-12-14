import React from 'react';
import Image from 'next/image';

interface HowAttendeesFeelProps {
    id?: string;
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

const HowAttendeesFeel: React.FC<HowAttendeesFeelProps> = ({ id, title, body1, description1,description2, body2, imageSrc1, imageAlt1, imageSrc2, imageAlt2 }) => {
    return (
        <div id={id} className="pb-[5%] pt-[5%]">
            {/* <h1 className="font-bold text-5xl mt-5 tracking-tight text-center">{title}</h1> */}
            <div className="flex flex-col md:flex-row">
                <div className='flex-1 flex flex-col mx-[5%] pb-[5%]'>
                    <div className="">
                        <Image src={imageSrc1} alt={imageAlt1} width={500} height={500} className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                            style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}/>
                    </div>
                    <div className='md:text-[1.5vw] text-[3vw] w-[90%] mx-auto'>
                        <p className="md:text-sm text-[3vw] mt-[1%] pb-[5%] text-center">{description1}</p> 
                        <p className='leading-relaxed '>{body1}</p> 
                    </div>
                </div>
                <div className='flex-1 flex flex-col mx-10'>
                    <div >
                        <Image src={imageSrc2} alt={imageAlt2} width={500} height={500} className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                            style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}/>
                    </div>
                    <div className='md:text-[1.5vw] text-[3vw] w-[90%] mx-auto'>
                        <p className="md:text-sm text-[3vw] mt-[1%] pb-[5%] text-center">{description2}</p>
                        <p className='leading-relaxed '>{body2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowAttendeesFeel;
