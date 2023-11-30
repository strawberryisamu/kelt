import React, { ReactNode } from 'react';
import Image from 'next/image';

interface WhyYouParticipate1Props {
    id?: string;
    title?: string;
    onImage?: boolean;
    content?: ReactNode;
    isRight?: boolean;
    imageWidth?: string;
    imageSrc?: string;
    imageAlt?: string;
}

const WhyYouParticipate1: React.FC<WhyYouParticipate1Props> = ({
    id = '',
    title = '',
    onImage = false,
    content = '',
    isRight = false,
    imageWidth = '50%',
    imageSrc = '/images/kelt_dry.png',
    imageAlt = '画像の説明',
}) => {
    return (
        <section id={id} className='flex flex-col pb-5'>
            {title && !onImage && (<div className='flex justify-center'>
                <h1 className="font-bold text-5xl mt-5 tracking-tight">{title}</h1>
            </div>)}
            <div className='flex pt-10'>
                {isRight ? (
                    <>
                        <div style={{ flex: `1 1` }}>
                            {content}
                        </div>
                        <div style={{ flex: `0 0 ${imageWidth}` }}>
                            {onImage ? <h2 className="absolute z-10">{title}</h2> : null}
                            <Image src={imageSrc} alt={imageAlt} width={500} height={500} className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}/>
                        </div>
                    </>
                ) : (
                    <>
                        <div style={{ flex: `0 0 ${imageWidth}` }}>
                            <h2 className="absolute z-10">{title}</h2>
                            <Image src={imageSrc} alt={imageAlt} width={500} height={500}className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }} />
                        </div>
                        <div style={{ flex: '1 1' }}>
                            {content}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default WhyYouParticipate1;
