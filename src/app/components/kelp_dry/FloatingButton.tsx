import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import '@/styles/kelp_dry/FloatingButton.css'; // Assuming you have your CSS saved in this file
import Link from 'next/link';

const FloatingButton = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [buttonHeight, setButtonHeight] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true); // Add state for transparency

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toSummerCamp = () => {
    window.location.href = '/summercamp/'; // Add the implementation to navigate to the summercamp page
  };

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.scrollY;
      const footHeight = document.querySelector('footer')?.clientHeight || 0;
      setButtonHeight(footHeight - pageHeight + scrollPosition + 20);

      if (pageHeight - scrollPosition <= footHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      // Check if scroll position is at the top
      if (window.scrollY <= 0) { // Modify this condition
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [buttonHeight]);

  const buttonStyle = isFixed ? { bottom: `${buttonHeight}px` } : {};
  const buttonClass = isTransparent ? 'opacity-0 transition-opacity duration-500' : 'transition-opacity duration-500'; // Add class for transparency with transition

  return (
    <div className={`flex flex-col justify-center items-center fixed z-50 right-0 bottom-0 ${buttonClass}`} style={{...buttonStyle}}>
      <Link href="/summercamp/" >
      <div className='flex flex-1 floating-button w-full'  >
        <div className='w-[150px] h-[60px] md:w-[220px] md:h-[110px]  flex-1 relative runded'>
          <Image fill  style={{aspectRatio: "1 / 1", objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, 50vw" src="/images/international.png" alt="Logo" />
        </div>
          <div className='w-[75px] h-[60px] md:w-[220px] md:h-[110px]  flex-1 text-center  justify-center flex items-center'>
            サマーキャンプに <br /> 興味のある方は<br />
            こちらへ
          </div>
      </div>
      </Link>
      <div className='flex flex-1 floating-button' onClick={scrollToContact}>
        <div className='w-[150px] h-[60px] md:w-[220px] md:h-[110px]  flex-1 relative'>
          <Image fill className='' style={{aspectRatio: "1 / 2", objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, 50vw"  src="/images/firstView.png" alt="Logo"  />
        </div>
        <div className='w-[75px] h-[60px] md:w-[220px] md:h-[110px]  flex-1 text-center  justify-center flex items-center'>
            <a>次回の昆布干しは<br />
            こちらへ</a>
        </div>
      </div>
    </div>
  );
};

export default FloatingButton;
