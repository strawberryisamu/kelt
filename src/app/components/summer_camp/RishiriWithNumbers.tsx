import React, { useState } from 'react';
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

    return (
        <section>
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
        </section>
    );
};

export default RishiriWithNumbers;