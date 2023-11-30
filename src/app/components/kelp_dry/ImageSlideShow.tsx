import React from 'react';
import Image from 'next/image'

interface ImageSlideshowProps {
  images: string[];
  currentImageIndex: number;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ images, currentImageIndex }) => {
  return (
    <div className=' h-[100%] w-[100%] relative'>
      {images.map((image, index) => (
        <div key={index} className='absolute  h-[100%] w-[100%] flex items-center justify-center'>
          <div className='relative h-[80%] w-[80%] '>
            <Image
              layout='fill' 
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
