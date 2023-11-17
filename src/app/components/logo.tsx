import React from 'react';
import '@/styles/logo.css'; // 必要なスタイルをインポート

const Logo: React.FC = () => {
  return (
    <div className="logo top-0 left-0 p-2 z-50 ">
      <a href="/" className="flex items-center">
        <img src='./images/logo.svg' alt="サイトロゴ" className="symbol" style={{aspectRatio: 1 / 1}}/> {/* ロゴのサイズは必要に応じて調整してください */}
      </a>
    </div>
  );
};

export default Logo;
