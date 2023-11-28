import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '@/styles/summer_camp/FirstView.css';

const imgItems = [
  {src: '/images/rishiri_mountain.png', alt: 'first_view_1'},
  {src: '/images/sunrise.png', alt: 'first_view_1'},
  {src: '/images/night_sky.png', alt: 'first_view_1'},
];

interface Props {
  windowHeight: number;
}

const FirstView: React.FC<Props> = (p: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const redirectToYouTube = () => {
    window.location.href = 'https://www.youtube.com/watch?v=pupRPedUdQM&pp=ygUV5piG5biD5bmy44GX44CA5paH57aZ';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % imgItems.length);
    }, 5000); 

    return () => clearInterval(interval); // コンポーネントのアンマウント時にインターバルをクリアする
  }, []);

  return (
    <div id="Top" style={{height: `${p.windowHeight}px`}}>
      <div className='slideshow-container'>
        {imgItems.map((item, index) => (
          <div
            key={index}
            className={`w-full slide fade ${activeIndex === index ? 'active' : ''}`}
            style={{ transition: 'opacity 1s ease-in-out' }}
          >
          <button
            onClick={redirectToYouTube}
            className='play'
          >
            <img src='./images/kkrn_icon_saisei_11.svg' alt="Play" style={{ width: '120px', height: '120px' }} />
          </button>
              <Image layout='fill' objectFit='cover' src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstView;
