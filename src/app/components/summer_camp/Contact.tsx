import React, { useEffect, useState } from 'react';

const Contact = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [age, setAge] = useState<string>('');
    const [country, setCountry] = useState<string>('');

  // フォームの状態を管理するステート
    const [formData, setFormData] = useState({
        last_name: '',
        first_name: '',
        email: '',
        message: '',
        inquiry_type: '', // デフォルト値
        newsletter_signup: false,
        form_name: 'summer_camp'
    });

    const [MailData, setMailData] =  useState({
        subject: "お問い合わせありがとうございます",
        to: '',
        message: "お問い合わせいただいた内容について、後ほどご連絡させていただきます。",
        from_name: "株式会社文継",
        from_email: "info@bun-kei.com"
    });


    const [MailToOwnerData, setMailToOwnerData] = useState({
        subject: "サマーキャンプ　お問い合わせ",
        to: 'yukimune.oji@bun-kei.com',
        message: "",
        from_name: "サマーキャンプ",
        from_email: "info@bun-kei.com"
    });

  // フォームの入力値が変更されたときのハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    const { id, value } = e.target as HTMLInputElement;
    if(id === 'age' || id === 'country'){
        setAge(id === 'age' ? value : age);
        setCountry(id === 'country' ? value : country);
    }
    setFormData({ ...formData, [id]: value });
  };

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if(isMobile) {
        setIsMobile(true);
    }
    setMailData({ ...MailData, to: formData.email });
    setMailToOwnerData({ ...MailToOwnerData,  message: `${formData.last_name} ${formData.first_name}さんからのお問い合わせです。=====${formData.message}=====` });
    console.log(formData, MailData, MailToOwnerData );
  }, [formData]);

  // フォーム送信時のハンドラ
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    try {
      formData.message = 'Age: ' + age + ' Country: ' + country + '\n' + 'Message: ' + formData.message;
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
        <section>
            <div id="Contact/Apply Now" className={`relative mb-[200px] pt-[5%] bg-no-repeat bg-cover ${isMobile ? ' bg-scroll' : 'bg-fixed'}`}
                style={{
                    backgroundImage: 'url(./images/sea_kayack.png)', 
                    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
                    backgroundBlendMode :'lighten'
                }}
            >
                <div className="flex  md:w-full px-[5%]">
                    <div className="w-[400px] ">
                        <h4 className="font-bold text-3xl md:text-7xl tracking-tight  ">
                            Contact <br /> Apply Now
                        </h4>
                    </div>
                    <div className='flex-1'>
                    <form className=" w-full  flex flex-col justify-center" noValidate onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-5">
                            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
                                <div className="w-full md:w-1/2">
                                    <label
                                        htmlFor="name"
                                        className="block font-semibold text-sm leading-none mb-3 cursor-pointer"
                                    >
                                        first name (required)
                                    </label>
                                    <input
                                        id="first_name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter Your First Name"
                                        className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                                        autoComplete="off"
                                        spellCheck="false"
                                        aria-invalid="false"
                                        onChange={handleChange}
                                    />

                                </div>
                                <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                                    <label
                                        htmlFor="name"
                                        className="block font-semibold text-sm leading-none mb-3 cursor-pointer"
                                    >
                                        last name (required)
                                    </label>
                                    <input
                                        id="last_name"
                                        name="last_name"
                                        type="text"
                                        placeholder="Enter Your Last Name"
                                        className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                                        autoComplete="off"
                                        spellCheck="false"
                                        aria-invalid="false"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="w-full ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                                <label
                                    htmlFor="email"
                                    className="block font-semibold text-sm leading-none mb-3 cursor-pointer"
                                >
                                    Your Email (required)
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                                    autoComplete="off"
                                    spellCheck="false"
                                    aria-invalid="false"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
                                <div className="w-full md:w-1/2">
                                    <label
                                        htmlFor="age"
                                        className="block font-semibold text-sm leading-none mb-3 cursor-pointer"
                                    >
                                        Age
                                    </label>
                                    <input
                                        id="age"
                                        name="age"
                                        type="text"
                                        placeholder="Enter Your Age"
                                        className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                                        autoComplete="off"
                                        spellCheck="false"
                                        aria-invalid="false"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                                    <label
                                        htmlFor="country"
                                        className="block font-semibold text-sm leading-none mb-3 cursor-pointer"
                                    >
                                        Country
                                    </label>
                                    <input
                                        id="country"
                                        name="country"
                                        type="text"
                                        placeholder="Enter Your Country"
                                        className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                                        autoComplete="off"
                                        spellCheck="false"
                                        aria-invalid="false"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="message"
                                    className="block font-semibold text-sm leading-none mb-3"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body"
                                    autoComplete="off"
                                    spellCheck="false"
                                    rows={4}
                                    placeholder="Write your message here"
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="relative justify-center flex">
                                <button
                                    data-variant="flat"
                                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-black text-white mx-20 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

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

export default Contact;
