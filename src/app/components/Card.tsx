import React, { ReactNode } from 'react';

interface CardProps {
    imageUrl?: string;
    title: string;
    children: ReactNode;
    isCol?: boolean;
  }

const Card: React.FC<CardProps> = ({ imageUrl, title, children, isCol=false}) => {
    const cardClass = isCol
    ? 'flex-col' 
    : '';
    return (
      <div className={`flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm ${cardClass}`}>
        {imageUrl && <img alt={title} className="w-[50%] rounded-md border-2 border-gray-300" src={imageUrl} style={{aspectRatio: "1 / 1",  objectFit: "cover"}}/>}
        <div className="flex flex-col ml-5">
            <h4 className="text-[2vw] md:text-[1.1vw] font-semibold mb-2">{title}</h4>
            <p className="text-[1.8vw] md:text-[0.9vw] text-gray-800 mt-2">{children}</p>
        </div>
      </div>
    );
  }

export default Card