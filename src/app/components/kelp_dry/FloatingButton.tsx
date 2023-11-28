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
    <button
      className={`floating-button z-50 ${isFixed ? 'fixed' : ''}`}
      onClick={scrollToContact}
      style={{...buttonStyle}}
    >
      次回の利尻島京大昆布干しに<br />
      興味がある方はこちら
    </button>
  );
};

export default FloatingButton;
