import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '@/styles/summer_camp/FirstView.css';
import { subtle } from 'crypto';

interface ImgItem {
  src: string;
  alt: string;
}

interface Props {
  title: string;
  subtitle: string;
  windowHeight: number;
  imgItems: ImgItem[];
}

const FirstView: React.FC<Props> = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const redirectToYouTube = () => {
    window.location.href = 'https://www.youtube.com/watch?v=pupRPedUdQM&pp=ygUV5piG5biD5bmy44GX44CA5paH57aZ';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % props.imgItems.length);
    }, 5000); 

    return () => clearInterval(interval); // コンポーネントのアンマウント時にインターバルをクリアする
  }, []);

  return (
    <div id="Top" style={{height: `${props.windowHeight}px`}}>
      <div className='slideshow-container'>
        {props.imgItems.map((item, index) => (
          <div
            key={index}
            className={`w-full slide fade ${activeIndex === index ? 'active' : ''}`}
            style={{ transition: 'opacity 1s ease-in-out' }}
          >
          <div className='first_title font-surfer play'>
            <h1 className={`text-[7vw] md:text-[6vw] ${index === 3 ? 'text-[white]' : ''}`} >
              {props.title} 
            </h1>
            <button
              onClick={redirectToYouTube}
            >
              <img src='/images/kkrn_icon_saisei_11.svg' alt="Play" style={{ width: '120px', height: '120px' }} />
            </button>
            <p className={`md:text-[3vw] ${index === 3 ? 'text-[white]' : ''}`}>{props.subtitle}</p>
          </div>
              <Image fill sizes='100vw' objectFit='cover' src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstView;
