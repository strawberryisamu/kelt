import React, { useEffect, useState } from 'react';
import '@/styles/kelp_dry/FloatingButton.css'; // Assuming you have your CSS saved in this file

const FloatingButton = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [buttonHeight, setButtonHeight] = useState(0);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.scrollY;
      const footHeight = document.querySelector('footer')?.clientHeight || 0;
      setButtonHeight( footHeight - pageHeight + scrollPosition + 20);

      if (pageHeight - scrollPosition <= footHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [buttonHeight]);

  const buttonStyle = isFixed ? { bottom: `${buttonHeight}px` } : {};

  return (
    <div className='flex flex-col justify-center items-center fixed z-50 right-2 bottom-5 md:right-10 md:bottom-10 gap-3'>
      <button
        className={`floating-button-to-summer-camp `}
        onClick={() => window.location.href = '/summercamp'}
        style={{...buttonStyle}}
      >
        サマーキャンプに <br /> 興味のある方は<br />
        こちらへ
      </button>
      <button
        className={`floating-button `}
        onClick={scrollToContact}
        style={{...buttonStyle}}
      >
        次回の <br /> 利尻島京大昆布干しは<br />
        こちらへ
      </button>
    </div>

  );
};

export default FloatingButton;
