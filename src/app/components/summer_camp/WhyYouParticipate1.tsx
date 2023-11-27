import React, { ReactNode } from 'react';
import Image from 'next/image';

interface WhyYouParticipate1Props {
    title?: string;
    content?: ReactNode;
    isRight?: boolean;
    imageWidth?: string;
    imageSrc?: string;
    imageAlt?: string;
}

const WhyYouParticipate1: React.FC<WhyYouParticipate1Props> = ({
    title = '',
    content = '',
    isRight = false,
    imageWidth = '50%',
    imageSrc = '/images/kelt_dry.png',
    imageAlt = '画像の説明',
}) => {
    return (
        <section style={{ display: 'flex' }}>
            {isRight ? (
                <>
                    <div style={{ flex: `1 1` }}>
                        <p>{content}</p>
                    </div>
                    <div style={{ flex: `0 0 ${imageWidth}` }}>
                        <h2 className="absolute z-10">{title}</h2>
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
                        <p>{content}</p>
                    </div>
                </>
            )}
        </section>
    );
};

export default WhyYouParticipate1;
