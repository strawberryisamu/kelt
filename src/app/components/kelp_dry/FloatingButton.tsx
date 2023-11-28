import React from 'react';
import '@/styles/kelp_dry/FloatingButton.css'; // Assuming you have your CSS saved in this file

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
      次回の利尻島京大昆布干しに<br />
      興味がある方はこちら
    </button>
  );
};

export default FloatingButton;

