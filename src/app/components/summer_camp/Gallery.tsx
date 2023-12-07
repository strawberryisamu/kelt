import React from 'react';
import Image from 'next/image';

interface Props {
    images: {
        src: string;
        alt: string;
    }[];
}

const Gallery: React.FC<Props> = (props: Props) => {
    const { images } = props;

    return (
        <section className='w-full'>
            <div className="w-full" >
                <div className="flex">
                    {images[0] && (
                        <div className="flex-1">
                            <Image 
                                src={images[0].src} 
                                alt={images[0].alt} 
                                width={500} 
                                height={500} 
                                className={`w-[100%]`} 
                                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}
                            />
                        </div>
                    )}
                    {images[1] && (
                        <div className="flex-1">
                            <Image 
                                src={images[1].src} 
                                alt={images[1].alt} 
                                width={500} 
                                height={500} 
                                className={`w-[100%]`} 
                                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}
                            />
                        </div>
                    )}
                    {images[2] && (
                        <div className="flex-1">
                            <Image 
                                src={images[2].src} 
                                alt={images[2].alt} 
                                width={500} 
                                height={500} 
                                className={`w-[100%]`} 
                                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}
                            />
                        </div>
                    )}
                </div>
                <div className="flex">
                    {images[3] && (
                        <div className="flex-1">
                            <Image 
                                src={images[3].src} 
                                alt={images[3].alt} 
                                width={500} 
                                height={500} 
                                className={`w-[100%]`} 
                                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}
                            />
                        </div>
                    )}
                    {images[4] && (
                        <div className="flex-1">
                            <Image 
                                src={images[4].src} 
                                alt={images[4].alt} 
                                width={500} 
                                height={500} 
                                className={`w-[100%]`} 
                                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}
                            />
                        </div>
                    )}
                    {images[5] && (
                        <div className="flex-1">
                            <Image 
                                src={images[5].src} 
                                alt={images[5].alt} 
                                width={500} 
                                height={500} 
                                className={`w-[100%]`} 
                                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}
                            />
                        </div>
                    )}
                    {images[6] && (
                        <div className="flex-1">
                            <Image 
                                src={images[6].src} 
                                alt={images[6].alt} 
                                width={500} 
                                height={500} 
                                className={`w-[100%]`} 
                                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}
                            />
                        </div>
                    )}
                </div>
                <div className="flex">
                    {images[7] && (
                        <div className="flex-1">
                            <Image 
                                src={images[7].src} 
                                alt={images[7].alt} 
                                width={500} 
                                height={500} 
                                className={`w-[100%]`} 
                                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}
                            />
                        </div>
                    )}
                    {images[8] && (
                        <div className="flex-1">
                            <Image 
                                src={images[8].src} 
                                alt={images[8].alt} 
                                width={500} 
                                height={500} 
                                className={`w-[100%] `} 
                                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}
                            />
                        </div>
                    )}
                    {images[9] && (
                        <div className="flex-1">
                            <Image 
                                src={images[9].src} 
                                alt={images[9].alt} 
                                width={500} 
                                height={500} 
                                className={`w-[100%]`} 
                                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
