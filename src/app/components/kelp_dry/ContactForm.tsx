import React, { ChangeEvent, useState, useEffect } from 'react';
import '@/styles/kelp_dry/ContactForm.css'; // Assuming you have your CSS saved in this file
import { Mali } from 'next/font/google';
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

  // フォームの状態を管理するステート
  const [formData, setFormData] = useState({
    last_name: '',
    first_name: '',
    email: '',
    message: '',
    inquiry_type: '大学生/大学院生', // デフォルト値
    newsletter_signup: false,
    form_name: 'rishiri'
  });

  const [MailData, setMailData] =  useState({
    subject: "お問い合わせありがとうございます",
    to: '',
    message: "お問い合わせいただいた内容について、後ほどご連絡させていただきます。",
    from_name: "株式会社文継",
    from_email: "info@bun-kei.com"
  });


  const [MailToOwnerData, setMailToOwnerData] = useState({
    subject: "利尻島昆布干しバイト　お問い合わせ",
    to: 'yukimune.oji@bun-kei.com',
    message: "",
    from_name: "利尻島昆布干しバイト",
    from_email: "info@bun-kei.com"
  });

  // フォームの入力値が変更されたときのハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    const { id, value } = e.target as HTMLInputElement;
    setFormData({ ...formData, [id]: value });
  };

  useEffect(() => {
    setMailData({ ...MailData, to: formData.email });
    setMailToOwnerData({ ...MailToOwnerData, message: `${formData.last_name} ${formData.first_name}さんからのお問い合わせです。=====${formData.message}=====` });
    console.log(formData, MailData, MailToOwnerData );
  }, [formData]);

  // フォーム送信時のハンドラ
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await sendContactForm(formData);
      const responseMail = await sendEmail(MailData);
      const responseMailToOwner = await sendEmail(MailToOwnerData);
      console.log('Response:', response + responseMail + responseMailToOwner);
      // 成功時の処理（例: フォームのリセットや成功メッセージの表示）
    } catch (error) {
      console.error('Error:', error);
      // エラー時の処理
    }
  };


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
      <form onSubmit={handleSubmit}>
        <div className='w-[80%] mx-auto'>
          <div className='flex gap-5'>
            <input type="text" id="last_name" value={formData.last_name} onChange={handleChange} placeholder="姓" required/>
            <input type="text" id="first_name" value={formData.first_name} onChange={handleChange} placeholder="名" required/>
          </div>
          <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="メールアドレス" required />
          <textarea id="message" value={formData.message} onChange={handleChange} placeholder="お問い合わせ内容" required></textarea>
        </div>

        <div className='flex flex-col items-center'>
          <div className="category-selector">
            <label className="selectbox-001">
              <select id='inquiry_type' value={formData.inquiry_type} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e)}>
                <option>大学生/大学院生</option>
                <option>官公庁/自治体</option>
                <option>メディア/取材依頼</option>
              </select>
            </label>
          </div>
          <div >
            <label className='flex items-center justify-center mt-2 '>
              <input className='flex-1 m-0' type="checkbox"  id='newsletter_signup' checked={formData.newsletter_signup} onChange={handleChange} required />
              <p className='flex-3 m-0'>メルマガに登録する</p>
            </label>
          </div>
          <button className="button-001">送信</button>
        </div>
      </form>
    </div>
  );
}

// フォームデータを送信する関数
async function sendContactForm(data: any) {
  const response = await fetch('https://bun-kei.com/wp-json/bunkei/v1/contact-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }

  return response.json();
}

async function sendEmail(data: any) {
  const response = await fetch('https://bun-kei.com/wp-json/bunkei/v1/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }

  return response.json();
}

export default ContactForm;
