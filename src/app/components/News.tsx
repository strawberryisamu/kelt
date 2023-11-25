import React, { useState, useEffect } from 'react';
import '@/styles/News.css';

const newsItems = [
  { date: '2022-08', description: <a>2022年度昆布干しインターンシップが終わりました。</a> },
  { date: '2022-07', description: <a>共同通信社から取材を受けました</a> },
  { date: '2022-02', description: <a>京都大学から取材を受けました。記事は<a href='https://www.thats.pr.kyoto-u.ac.jp/2022/02/24/11932/'>こちら</a></a> }
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
    <section className="flex flex-col md:flex-row bg-[lightgray] px-20 pt-5 pb-5">
      <div className="md:w-1/4">
        <h2 className="text-lg font-bold">最新情報</h2>
      </div>
      <div className="md:w-3/4">
        <div className="slideshow-container">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`slide fade ${activeIndex === index ? 'active' : ''}`}
              style={{ transition: 'opacity 1s ease-in-out' }}
            >
              <div>
                <p className="news-date">{item.date}</p>
                <p className="news-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
