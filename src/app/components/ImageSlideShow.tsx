import React from 'react';
import Image from 'next/image'

interface ImageSlideshowProps {
  images: string[];
  currentImageIndex: number;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ images, currentImageIndex }) => {
  return (
    <div className="relative w-1/2">
      {images.map((image, index) => (
        <Image
        width={500} height={500}
          key={image}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

export default ImageSlideshow;
