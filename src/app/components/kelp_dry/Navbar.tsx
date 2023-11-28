import React, { useState } from 'react';
import Image from 'next/image'
import '@/styles/kelp_dry/Navbar.css'; // 必要なスタイルをインポート

const smoothScroll = (anchorId: string) => {
  const anchorElement = document.querySelector(anchorId);
  if (anchorElement) {
    anchorElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  const handleNavClick = (anchorId: string) => {
    smoothScroll(anchorId);
    setIsOpen(false);
  };
  

  return (
    <div className="fixed top-0 right-0 p-2 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="navbar relative  z-10 flex flex-col justify-center items-center bg-[#16202e] rounded gap-2"
      >
        <span className={`h-0.5 bar bg-white rounded transform transition duration-300 ease-in-out ${isOpen ? 'translate-y-2.5 rotate-45' : ''}`} />
        <span className={`h-0.5 bar bg-white rounded transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`h-0.5 bar bg-white rounded transform transition duration-300 ease-in-out ${isOpen ? '-translate-y-2.5 -rotate-45' : ''}`} />
      </button>
      <div
        className={`fixed top-0 left-0 w-full  bg-[#16202e] text-white transform transition duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
            <ul className="flex flex-col pt-5 pb-5 items-center justify-center h-full">
            <li className="mb-4"><a href="#ceo-message" onClick={() => handleNavClick('#ceo-message')}>代表メッセージ</a></li>
            <li className="mb-4"><a href="#business-overview" onClick={() => handleNavClick('#business-overview')}>事業概要</a></li>
            <li className="mb-4"><a href="#accomplishment" onClick={() => handleNavClick('#accomplishment')}>実績</a></li>
            <li className="mb-4"><a href="#comment-kyodaisei" onClick={() => handleNavClick('#comment-kyodaisei')}>京大生の声</a></li>
            <li className="mb-4"><a href="#contact" onClick={() => handleNavClick('#contact')}>話を聞いてみる</a></li>
            <li className="mb-4"><a href="/summercamp" >サマーキャンプに興味のある方はこちら</a></li>
            {/* <button> <Link href="/summercamp">サマーキャンプへ</Link> </button> */}
            <li className="">
              <a href="https://www.instagram.com/oji_japon/" target="_blank" rel="noopener noreferrer">
                <Image width={1000} height={1000} src="/images/instagram.png" alt="Instagram" className="w-6 mr-0" />
              </a>
            </li>
            </ul>
        </div>

    </div>
  );
};

export default Navbar;
