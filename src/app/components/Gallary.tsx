import React, { ReactNode, useRef } from 'react';
import Image from 'next/image'
import '../../styles/Gallary.css'; // CSSをインポート

// 画像の型を定義します
type Image = {
  src: string;
  alt: string;
};

type SectionProps = {
  images: Image[];
  text: ReactNode;
  title?: string; // オプショナルなプロパティとして追加
  id?: string;
};

// ImageGalleryコンポーネントのPropsの型を定義します
type ImageGalleryProps = {
  images: Image[];
};

// DescriptionSectionコンポーネントのPropsの型を定義します
type DescriptionSectionProps = {
  text: ReactNode;
  title?: string;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <Image width={500} height={500} key={index} src={image.src} alt={image.alt} className={`mobile w-[100%] rounded-md border-2 border-gray-300`} style={{ aspectRatio: "1 / 1", objectFit: "cover", objectPosition: '55%' ,animationDelay: `${index * 500}ms`  }}/>
      ))}
    </div>
  );
};

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ text, title }) => {
  return (
    <div className="fullscreen description-section">
      {title && <h2 className='text-[4vw] md:text-[2.5vw]'>{title}</h2>}
      {text}
    </div>
  );
};


const Gallery: React.FC<SectionProps> = ({ images, text, title, id }) => {
    const sectionRef = useRef<HTMLElement>(null);
    return (
            <section ref={sectionRef}  id={id} style={{paddingBottom: 30}}>
                <div className="content-container pb-2"> {/* コンテンツを中央に配置するためのコンテナ */}
                <ImageGallery images={images} />
                </div>
                <div className="content-container"> {/* コンテンツを中央に配置するためのコンテナ */}
                    <DescriptionSection text={text} title={title} />
                </div>
            </section>
    );
  };

export default Gallery;
