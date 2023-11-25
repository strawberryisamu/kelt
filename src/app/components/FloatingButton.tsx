import React from 'react';
import '@/styles/FloatingButton.css'; // Assuming you have your CSS saved in this file

const FloatingButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      className="floating-button"
      onClick={scrollToContact}
    >
      話を <br /> 聞いてみる
    </button>
  );
};

export default FloatingButton;

