import React, { useState, useEffect } from 'react';
import '@/styles/kelp_dry/News.css';

const newsItems = [
    { date: '2023.12', description: <a>第１回昆布干し同窓会を開催しました。</a> },
    { date: '2023.07', description: <a>北海道新聞から取材を受けました。詳しくは<a href='https://www.hokkaido-np.co.jp/article/884337/' className="border-b-[1px] border-black">こちら</a>。</a> },
    { date: '2022.02', description: <a>京都大学から取材を受けました。詳しくは<a href='https://www.thats.pr.kyoto-u.ac.jp/2022/02/24/11932/' className="border-b-[1px] border-black">こちら</a>。</a> }
  ];

const NewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % newsItems.length);
    }, 5000); // 3000ミリ秒ごとに切り替える

    return () => clearInterval(interval); // コンポーネントのアンマウント時にインターバルをクリアする
  }, []);

  return (
    <section className="bg-[lightgray] pt-5 pb-5">
      <div className='px-10 flex flex-col md:flex-row'>
        <div className="md:w-1/4">
          <h2 className="text-lg font-bold">最新情報</h2>
        </div>
        <div className="md:w-3/4">
          <div className="slideshow-container">
            {newsItems.map((item, index) => (
                <div className='flex'>
                  <p className="news-date">{item.date}</p>
                  <p className="news-description flex-1">{item.description}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
