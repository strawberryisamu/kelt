import React from 'react';
import Image from 'next/image';

interface ImageProps {
    src: string;
    alt: string;
    objectPosition?: string;
}

interface RishiriWithNumbersProps {
    images: ImageProps[];
}

const RishiriWithNumbers: React.FC<RishiriWithNumbersProps> = ({ images }) => {
    return (
        <section>
            <div className="">
                <div className="flex">
                    {images.map((image, index) => (
                        <div className="flex-1" key={index}>
                            <div className='absolute'>
                                <p>{`Text ${index + 1}`}</p>
                            </div>
                            <Image src={image.src} alt={image.alt} width={500} height={500} className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                            style={{ aspectRatio: "2 / 3", objectFit: "cover", objectPosition:` ${image.objectPosition}` }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RishiriWithNumbers;
