import React, { ReactNode } from 'react';
import Image from 'next/image'

interface CardProps {
    imageUrl?: string;
    title?: string;
    title_children?: ReactNode;
    children: ReactNode;
    isCol?: boolean;
    isAccomplishment?: boolean;
  }

const Card: React.FC<CardProps> = ({ imageUrl, title,  title_children, children, isCol=false, isAccomplishment=false}) => {
    const cardClass = isCol
    ? 'flex-col' 
    : '';
    const accomplishmentClass = isAccomplishment
    ? 'text-[3vw] md:text-[1.5vw] border-b-2 border-gray-400 mb-2'
    : 'text-[5vw] md:text-[1.1vw]';
    return (
      <div className={`flex items-center p-3 bg-white border-2 border-gray-200 rounded-lg shadow-sm ${cardClass}`}>
        {imageUrl && <Image width={500} height={500} alt={title ? title : ''} className="hidden md:block w-[50%] rounded-md border-2 border-gray-300" src={imageUrl} style={{aspectRatio: "1 / 1",  objectFit: "cover"}}/>}
        <div className="flex flex-col ">
            {imageUrl && <Image width={500} height={500} alt={title ? title : ''} className="block md:hidden w-[100%] rounded-md border-2 border-gray-300" src={imageUrl} style={{aspectRatio: "1 / 1",  objectFit: "cover"}}/>}
            <h4 className={`pt-5 mb-2 ${accomplishmentClass}`}>{title? title : title_children}</h4>
            <p className="text-[3vw] md:text-[1.1vw] text-gray-800 mt-2">{children}</p>
        </div>
      </div>
    );
  }

export default Card