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

  const rightPosition = right ? {paddingLeft: "20%"} :{ paddingRight: "20%" }
  return (
    <div className="flex h-full gap-3" style={{paddingBottom: 30, width: "100%", ...rightPosition}}>
      { !right && <DescriptionList title={title} subtitle={subtitle} descriptions={descriptions} currentImageIndex={currentImageIndex} onDescriptionClick={handleDescriptionClick} />}
      <ImageSlideshow images={images} currentImageIndex={currentImageIndex} />
      { right && <DescriptionList title={title} subtitle={subtitle} descriptions={descriptions} currentImageIndex={currentImageIndex} onDescriptionClick={handleDescriptionClick} />}
    </div>
  );
};

export default ParentComponent;
