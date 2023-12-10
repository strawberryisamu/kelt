import React, { useState } from 'react';
import Image from 'next/image'
import '@/styles/summer_camp/Navebar.css'; // 必要なスタイルをインポート
import '@/styles/summer_camp/Header.css'; // 必要なスタイルをインポート

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
    <div className="fixed top-0 right-0 md:p-1 p-3 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="navbar relative  z-10 flex flex-col justify-center items-center  rounded gap-2"
      >
        <span className={`h-0.5 bar bg-white rounded transform transition duration-300 ease-in-out ${isOpen ? 'translate-y-2.5 rotate-45' : ''}`} />
        <span className={`h-0.5 bar bg-white rounded transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`h-0.5 bar bg-white rounded transform transition duration-300 ease-in-out ${isOpen ? '-translate-y-2.5 -rotate-45' : ''}`} />
      </button>
      <div
        className={`fixed top-0 left-0 w-full  bg-[#2a599e] text-white transform transition duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav>
          <ul id="g-navi">
            <li><a href="/summercamp">Top</a></li>
            <li className="has-child">
              <a href="#">About Rishiri and Us</a>
              <ul>
                <li><a onClick={() => setIsOpen(false)} href="/summercamp#Why You Participate">Why You Participate</a></li>
                <li><a onClick={() => setIsOpen(false)}  href="/summercamp#What's Rishiri">What's Rishiri</a></li>
                <li><a onClick={() => setIsOpen(false)} href="/summercamp#participant_testimonials">Participant Testimonials</a></li>
                <li><a onClick={() => setIsOpen(false)} href="/summercamp#message_from_the_organizers">Message from the Organizers</a></li>
                <li><a onClick={() => setIsOpen(false)} href="/summercamp#target_participants">Target Participants</a></li>
              </ul>
            </li>
            <li className="has-child">
              <a href="#">Details</a>
              <ul>
                <li><a href="/summercamp#Details">Details</a></li>
                <li><a href="/summercamp#FAQ">FAQ</a></li>
              </ul>
            </li>
            <li><a href="/summercamp#Contact/Apply Now" onClick={() => setIsOpen(false)}>Contact/Apply Now</a></li>
          </ul>

          <ul>
            <li className="pt-5">
              <a href="https://www.instagram.com/oji_japon/" target="_blank" rel="noopener noreferrer">
                <Image width={1000} height={1000} src="/images/instagram.png" alt="Instagram" className="w-6 mr-0" />
              </a>
            </li>
          </ul>

          <ul className="flex pt-3 gap-5 w-[35%] md:w-[15%]">
            <li className=" flex-1 rounded-md" style={{ backgroundColor: 'lightgray' }} >
              <a target="_blank" rel="noopener noreferrer" href="https://bun-kei.com/">
                <Image src="/images/bunkei.png" width={500} height={500} alt='bunkei_logo' className={`w-[100%]`}
                  style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }} />
              </a>
            </li>
            <li className=" flex-1 rounded-md" style={{ backgroundColor: 'lightgray' }}>
              <a target="_blank" rel="noopener noreferrer" href="http://rishiri-zen.jp/ ">
                <Image src="/images/zen_transparent.png" width={500} height={500} alt='bunkei_logo' className={`w-[100%]`}
                  style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
