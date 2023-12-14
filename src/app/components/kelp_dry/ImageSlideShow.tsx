import React from 'react';
import Image from 'next/image'

interface ImageSlideshowProps {
  images: string[];
  currentImageIndex: number;
  isRight?: boolean;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ images, currentImageIndex , isRight}) => {
  return (
    <div className=' h-[100%] w-[100%] relative'>
      {images.map((image, index) => (
        <div key={index} className={`absolute  h-[100%] w-[100%] flex items-center  ${isRight ? 'justify-end' : 'justify-start'}`}>
          <div className='relative h-[70%] w-[70%] '>
            <Image
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              key={image}
              src={image}
              alt={`Slide ${index}`}
              className={`inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{aspectRatio: "1/1", objectFit: 'cover'}}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlideshow;
