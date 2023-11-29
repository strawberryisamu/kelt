import React, { useState, useEffect } from 'react';
import ImageSlideshow from './ImageSlideShow';
import DescriptionList from './DescriptionList';

interface ParentComponentProps {
  title: string;
  subtitle: string;
  images: string[];
  descriptions: string[];
  right?: boolean;
}

const ParentComponent: React.FC<ParentComponentProps> = ({ title, subtitle, images, descriptions, right=false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // 3秒ごとに画像を切り替え

    return () => clearInterval(timer);
  }, [images.length, currentImageIndex]);

  const handleDescriptionClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const rightPosition = right ? {paddingLeft: "0%"} :{ paddingRight: "0%" }
  return (
    <div className="flex h-[350px]" style={{ width: "100%", ...rightPosition}}>
      { !right && <div className='flex-1 flex flex-col items-center justify-center'><DescriptionList title={title} subtitle={subtitle} descriptions={descriptions} currentImageIndex={currentImageIndex} onDescriptionClick={handleDescriptionClick} /></div>}
      <div className='w-[60%] '>
        <ImageSlideshow images={images} currentImageIndex={currentImageIndex} />
      </div>
      { right &&  <div className='flex-1'><DescriptionList title={title} subtitle={subtitle} descriptions={descriptions} currentImageIndex={currentImageIndex} onDescriptionClick={handleDescriptionClick} /></div>}
    </div>
  );
};

export default ParentComponent;
