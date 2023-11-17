import React from 'react';
import lllll from '../../../public/images/logo.svg'; // ロゴ画像のパスに置き換えてください

const Logo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 p-2 z-50">
      <a href="/" className="flex items-center">
        <img src='./images/logo.svg' alt="サイトロゴ" className="w-[100%]" style={{aspectRatio: 1 / 1}}/> {/* ロゴのサイズは必要に応じて調整してください */}
      </a>
    </div>
  );
};

export default Logo;
