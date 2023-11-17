import React, { useState } from 'react';
import Image from 'next/image'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 right-0 p-2 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-20 h-20 z-10 flex flex-col justify-center items-center bg-[#208d78] rounded gap-2"
      >
        <span className={`h-0.5 w-10 bg-white rounded transform transition duration-300 ease-in-out ${isOpen ? 'translate-y-2.5 rotate-45' : ''}`} />
        <span className={`h-0.5 w-10 bg-white rounded transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`h-0.5 w-10 bg-white rounded transform transition duration-300 ease-in-out ${isOpen ? '-translate-y-2.5 -rotate-45' : ''}`} />
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#db5518] transform transition duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
            <ul className="flex flex-col items-center justify-center h-full">
            <li className="mb-4"><a href="#ceo-message">代表メッセージ</a></li>
            <li className="mb-4"><a href="#business-overview">事業概要</a></li>
            <li className="mb-4"><a href="#accomplishment">実績</a></li>
            <li className="mb-4"><a href="#comment-kyodaisei">京大生の声</a></li>
            <li className="mb-4"><a href="#contact">話を聞いてみる</a></li>
            <li className="mb-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="./images/instagram.png" alt="Instagram" className="w-6 h-6" />
              </a>
            </li>
            </ul>
        </div>

    </div>
  );
};

export default Navbar;
