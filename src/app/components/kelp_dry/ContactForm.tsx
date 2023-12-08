import React, { ChangeEvent, useState } from 'react';
import '@/styles/kelp_dry/ContactForm.css'; // Assuming you have your CSS saved in this file
type Category = 'student' | 'government' | 'media';

const MapComponent = () => {
  const mapUrl ="https://www.openstreetmap.org/export/embed.html?bbox=141.144815%2C45.161815%2C141.144815%2C45.161815&layer=mapnik";

  return (
    <div className="map-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2813.2486270667455!2d141.1422400763483!3d45.16181497107052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDA5JzQyLjUiTiAxNDHCsDA4JzQxLjMiRQ!5e0!3m2!1sja!2sjp!4v1700877220389!5m2!1sja!2sjp" 
        width="100%" 
        height="300px" 
        style={{zIndex: 10}}
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      >
        </iframe>
    </div>
  );
};

function ContactForm() {

  return (
    <div className="contact-form">

      <div className="contact-info flex flex-col md:flex-row justify-center items-center md:w-[90%] mx-auto">
        <div className='flex-1 flex flex-col '>
          <div className='flex'>
            <p className='flex-2'>所在地:　</p>
            <div className='flex-1'>
              <p>〒097-0401 北海道利尻郡利尻町南124</p>
            </div>
          </div>
          <div className='flex ]'>
            <p className='flex-2'>メールアドレス:　</p>
            <div className='flex-1'>
              <p>yukimune.oji@bun-kei.com</p>
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <MapComponent/>
        </div>
      </div>
      <form>
        <div className='w-[80%] mx-auto'>
          <div className='flex gap-5'>
            <input type="text" id="first-name" placeholder="姓" />
            <input type="text" id="last-name" placeholder="名" />
          </div>
          <input type="email" id="email" placeholder="メールアドレス" required />
          <textarea id="message" placeholder="お問い合わせ内容"></textarea>
        </div>

        <div className='flex flex-col items-center'>
          <div className="category-selector">
            <label className="selectbox-001">
              <select>
                <option>大学生/大学院生</option>
                <option>官公庁/自治体</option>
                <option>メディア/取材依頼</option>
              </select>
            </label>
          </div>
          <div >
            <label className='flex items-center justify-center mt-2 '>
              <input className='flex-1 m-0' type="checkbox"  />
              <p className='flex-3 m-0'>メルマガに登録する</p>
            </label>
          </div>
          <button className="button-001">送信</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
