import React, { ChangeEvent, useState } from 'react';
import '../../styles/ContactForm.css'; // Assuming you have your CSS saved in this file
type Category = 'student' | 'government' | 'media';
function ContactForm() {
    const [userType, setUserType] = useState<string>('');
    const [showCategories, setShowCategories] = useState<boolean>(false);
  
    const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value); // For debugging purposes
      setUserType(event.target.value);
    };
  
    const handleCategoryClick = () => {
      console.log('Category button clicked'); // For debugging purposes
      setShowCategories(!showCategories); // This toggles the visibility of the categories
    };
  return (
    <div className="contact-form">

      <div className="contact-info">
        <p><i className="fas fa-map-marker-alt"></i> T097-0401 北海道利尻郡利尻町南124</p>
        <p><i className="fas fa-envelope"></i> zenichikosaka2020@gmail.com</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
        </div>
      </div>
      <form>
      <div className="category-selector">
        
        <button type="button" onClick={handleCategoryClick}>Select Category</button>
        {showCategories && (
          <div className={`user-type-section ${showCategories ? 'show' : ''}`}>
            <label>
              <input
                type="radio"
                name="userType"
                value="student"
                checked={userType === 'student'}
                onChange={handleUserTypeChange}
              />
              University Student / Graduate Student
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="government"
                checked={userType === 'government'}
                onChange={handleUserTypeChange}
              />
              Government / Autonomous Body
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="media"
                checked={userType === 'media'}
                onChange={handleUserTypeChange}
              />
              Media / Interview Request
            </label>
          </div>
        )}
      </div>
        <input type="text" id="first-name" placeholder="First Name" />
        <input type="text" id="last-name" placeholder="Last Name" />
        <input type="email" id="email" placeholder="Email" required />
        <textarea id="message" placeholder="Message"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
