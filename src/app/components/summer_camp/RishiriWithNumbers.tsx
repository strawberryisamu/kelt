import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageProps {
    src: string;
    alt: string;
    objectPosition: string;
}

interface RishiriWithNumbersProps {
    images: ImageProps[];
    texts: React.ReactNode[];
    descriptions: React.ReactNode[];
}

const RishiriWithNumbers: React.FC<RishiriWithNumbersProps> = ({ images, texts, descriptions }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    useEffect(() => {
        if (!isMobile) {
            return;
        }
        const interval = setInterval(() => {
            setHoveredIndex((prevIndex) => {
                if (prevIndex === null || prevIndex === images.length - 1) {
                    return 0;
                } else {
                    return prevIndex + 1;
                }
            });
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

    return (
        <section>
            {isMobile ? (
                <div className='flex flex-col'>
                        <div
                            className={`h-full w-full relative`}
                        >
                            <div className={`absolute h-full w-full  ${hoveredIndex === 1 ? 'opacity-0 transition-opacity duration-300' : 'transition-opacity duration-300'}`}>
                                {texts[1]}
                            </div>
                            <div className={`absolute h-full w-full ${hoveredIndex === 1 ? 'opacity-100 transition-opacity duration-300' : 'opacity-0 transition-opacity duration-300'}`}>
                                {descriptions[1]}
                            </div>
                            <div>
                                <Image
                                    src={images[1].src}
                                    alt={images[1].alt}
                                    width={500}
                                    height={500}
                                    className="w-[100%]"
                                    style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: ` ${images[1].objectPosition}` }}
                                />
                            </div>
                        </div>
                <div className="flex flex-1">
                    <div className="flex-1">
                        <div
                            className={`h-full w-full relative`}
                        >
                            <div className={`absolute h-full w-full  ${hoveredIndex === 0 ? 'opacity-0 transition-opacity duration-300' : 'transition-opacity duration-300'}`}>
                                {texts[0]}
                            </div>
                            <div className={`absolute h-full w-full ${hoveredIndex === 0 ? 'opacity-100 transition-opacity duration-300' : 'opacity-0 transition-opacity duration-300'}`}>
                                {descriptions[0]}
                            </div>
                            <div>
                                <Image
                                    src={images[0].src}
                                    alt={images[0].alt}
                                    width={500}
                                    height={500}
                                    className="w-[100%]"
                                    style={{ aspectRatio: "2 / 3", objectFit: "cover", objectPosition: ` ${images[0].objectPosition}` }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                       <div
                            className={`flex-1 h-full w-full relative`}
                        >
                            <div className={`absolute h-full w-full ${hoveredIndex === 2 ? 'opacity-0 transition-opacity duration-300' : 'transition-opacity duration-300'}`}>
                                {texts[2]}
                            </div>
                            <div className={`absolute h-full w-full ${hoveredIndex === 2 ? 'opacity-100 transition-opacity duration-300' : 'opacity-0 transition-opacity duration-300'}`}>
                                {descriptions[2]}
                            </div>
                            <div>
                                <Image
                                    src={images[2].src}
                                    alt={images[2].alt}
                                    width={500}
                                    height={500}
                                    className="w-[100%]"
                                    style={{ aspectRatio: "2 / 3", objectFit: "cover", objectPosition: ` ${images[1].objectPosition}` }}
                                />
                            </div>
                        </div>
                        </div>
                </div>
                </div>
            ) : (
                <div>
                    <div className="flex">
                        {images.map((image, index) => (
                            <div
                                className="flex-1"
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={`h-full w-full relative `}>
                                    <div className={`absolute h-full w-full ${hoveredIndex === index ? 'opacity-0 transition-opacity duration-300' : 'transition-opacity duration-300'}`}>
                                        {texts[index]}
                                    </div>
                                    <div className={`absolute h-full w-full ${hoveredIndex === index ? 'opacity-100 transition-opacity duration-300' : 'opacity-0 transition-opacity duration-300'}`}>
                                        {descriptions[index]}
                                    </div>
                                    <div>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={500}
                                            height={500}
                                            className={`w-[100%]`}
                                            style={{ aspectRatio: "2 / 3", objectFit: "cover", objectPosition: ` ${image.objectPosition}` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default RishiriWithNumbers;