import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Swiper componentsを動的にインポートしてSSRを避ける
const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), {
  ssr: false,
});

// Swiperのスタイルをインポート
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewsSlider = () => {
  // Swiperの設定を状態として保持する
  const [swiperSettings, setSwiperSettings] = useState({});

  useEffect(() => {
    const SwiperCore = require('swiper').default;
    const Navigation = require('swiper/modules/navigation/navigation').default;
    const Pagination = require('swiper/modules/pagination/pagination').default;

    // 必要なSwiperモジュールをインストール
    SwiperCore.use([Navigation, Pagination]);

    // Swiperの設定を更新
    setSwiperSettings({
      modules: [Navigation, Pagination],
      spaceBetween: 50,
      slidesPerView: 1,
      navigation: true,
      pagination: { clickable: true },
    });
  }, []);

  return (
    <Swiper {...swiperSettings}>
      <SwiperSlide>
        {/* スライドの内容 */}
      </SwiperSlide>
      {/* 他のSwiperSlide要素を追加 */}
    </Swiper>
  );
};

export default NewsSlider;
