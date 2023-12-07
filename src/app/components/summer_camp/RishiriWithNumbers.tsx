import React, { ReactNode } from 'react';
import Image from 'next/image';

interface ImageProps {
    src: string;
    alt: string;
    objectPosition?: string;
}

interface RishiriWithNumbersProps {
    images: ImageProps[];
    texts: ReactNode[];
}

const RishiriWithNumbers: React.FC<RishiriWithNumbersProps> = ({ images , texts}) => {
    return (
        <section>
            <div>
                <div className="flex">
                    {images.map((image, index) => (
                        <div className="flex-1" key={index}>
                            <div className='absolute w-[33.333333%] px-5'>
                                <div className='absolute mt-5'>
                                    {texts[index]}
                                </div>
                            </div>
                            <Image src={image.src} alt={image.alt} width={500} height={500} className={` w-[100%] `} 
                            style={{ aspectRatio: "2 / 3", objectFit: "cover", objectPosition:` ${image.objectPosition}` }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RishiriWithNumbers;
