import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Props {
    images: {
        src: string;
        alt: string;
    }[];
}

const Gallery: React.FC<Props> = (props: Props) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const [IsMobile, setIsMobile] = useState<boolean>(false);

    useEffect (() => {
      if(isMobile) {
        setIsMobile(true);
      }
    }, []);
    
    const { images } = props;

    return (
        <section className='w-full'>
            {IsMobile ? (
                <div className="w-full">
                    <div className="grid grid-cols-2 ">
                        {images.map((image, index) => (
                            <div key={index} className="flex-1">
                                <Image 
                                    src={image.src} 
                                    alt={image.alt} 
                                    width={500} 
                                    height={500} 
                                    className={`w-[100%]`} 
                                    style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="w-full">
                    <div className="flex">
                        {images.slice(0, 3).map((image, index) => (
                            <div key={index} className="flex-1">
                                <Image 
                                    src={image.src} 
                                    alt={image.alt} 
                                    width={500} 
                                    height={500} 
                                    className={`w-[100%]`} 
                                    style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex">
                        {images.slice(3, 7).map((image, index) => (
                            <div key={index} className="flex-1">
                                <Image 
                                    src={image.src} 
                                    alt={image.alt} 
                                    width={500} 
                                    height={500} 
                                    className={`w-[100%]`} 
                                    style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex">
                        {images.slice(7, 10).map((image, index) => (
                            <div key={index} className="flex-1">
                                <Image 
                                    src={image.src} 
                                    alt={image.alt} 
                                    width={500} 
                                    height={500} 
                                    className={`w-[100%]`} 
                                    style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
