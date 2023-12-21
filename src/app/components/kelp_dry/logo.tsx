import React from 'react';
import '@/styles/kelp_dry/logo.css'; // 必要なスタイルをインポート
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <div className="logo top-0 left-0 p-2 z-50 ">
      <Link href="/" className="flex items-center">
        <img src='./images/logo.svg' alt="サイトロゴ" className="symbol" style={{aspectRatio: 1 / 1}} /> {/* ロゴのサイズは必要に応じて調整してください */}
      </Link>
    </div>
  );
};

export default Logo;
