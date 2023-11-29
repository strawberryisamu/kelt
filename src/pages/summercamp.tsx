import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../styles/globals.css'; // 必要なスタイルをインポート
import '../styles/summer_camp/summer_camp.css'; // 必要なスタイルをインポート
import Header from '@/app/components/summer_camp/Header';
import FirstView from '../app/components/summer_camp/FirstView';
import LoadingScreen from '@/app/components/kelp_dry/LoadingScreen';
import News from '@/app/components/summer_camp/News';
import WhyYouParticipate1 from '@/app/components/summer_camp/WhyYouParticipate1';
import HowAttendeesFeel from '@/app/components/summer_camp/HowAttendeesFeel';
import Gallery from '@/app/components/summer_camp/Gallery';
import RishiriWithNumbers from '@/app/components/summer_camp/RishiriWithNumbers';
import Footer from '@/app/components/kelp_dry/Footer';

// #228ed4,#208d78,#db5518
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pageContentClass = isLoading ? "opacity-0" : "fadeIn";
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // モバイルデバイスかどうかをチェック
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const setRealViewportHeight = (): void => {
      const realViewportHeight: number = window.innerHeight;
      setWindowHeight(realViewportHeight);
    };

    if (isMobile) {
      // モバイルデバイスの場合は初回のみ高さを設定
      setIsMobile(isMobile);
      setRealViewportHeight();
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
    } else {
      // PCの場合はリサイズイベントで高さを更新
      window.addEventListener('resize', setRealViewportHeight);
      setRealViewportHeight(); // 初期設定
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => {
        window.removeEventListener('resize', setRealViewportHeight);
      };
    }
  }, []);


  if (isLoading) {
    return <LoadingScreen />;
  }

  const generateGalleryImages = (count: number): { src: string, alt: string }[] => {
    const galleryImages = [];

    for (let i = 1; i <= count; i++) {
      galleryImages.push({
        src: `/images/gellery${i}.png`,
        alt: `gelery${i}`,
      });
    }

    return galleryImages;
  };

  const galleryImages = generateGalleryImages(10);
  
  return (
    <div className={`${pageContentClass} summer_camp` }>
      <body>
        <Header />
        <FirstView windowHeight={windowHeight}/>
        <News/>
        <WhyYouParticipate1
        id='Why You Participate'
        title='Why You Participate' 
        content={<>
        <h2>#1 Richest nature and culture</h2>
        <p>You are able to get in touch with the deepest nature and profound culture of Japan's Northernmost Region nurtured by Ainu tribe for centuries</p>
        </>}
        imageSrc='/images/rishiri_over_view.png'
        imageAlt='rishiri_overview'
        isRight={true} 
        imageWidth='40%'
        />
        <WhyYouParticipate1
        content={<>
        <h2>#2 Making lifetime friends from all over the world </h2>
        <p> Young leaders gather in Rishiri island and make the best friendships through a variety of activities. </p>
        </>}
        imageSrc='/images/cycling.png'
        imageAlt='bicycle'
        imageWidth='40%'
        />
        <WhyYouParticipate1
        content={<>
        <h2>#3 Rare experiences you never come across otherwise</h2>
        <p>We tailor plans of summer camp based on your requests and include interactions with islanders such as fisherman, civil servants, and CEO of local companies.</p>
        </>}
        imageSrc='/images/introduce.png'
        imageAlt='introduce'
        isRight={true} 
        imageWidth='40%'
        />
        <HowAttendeesFeel
        id='How Attendees Feel'
        title='How attendees feel'
        body1='Natural wonders. Unexpected Summer festivals. Kelp-cutting. A paradise for cyclists. Chatting with highschoolers that have never talked to a foreigner. Singing Beatles songs until late at night inside a traditional Japanese house. This, and much more, is what Rishiri offered to me.
        I wanted to experience a new way of living, and I got that and much more. I met unforgettable people and made unforgettable memories - the too-good-to-post-on-Instagram kind.
        '
        body2='I wanted to interact with various people, and on top of that, think about my own life. Actually, everyone’s life is different and wonderful. Now I know the best way is to Just follow your heart and hold on yourself.
        I enjoyed having a brief exchange with Hokkaidō Rishiri High School students and teaching them Chinese.
        The ramen noodles soup made with Rishiri kombu are the best ones I have ever eaten in Japan! Everyone should definitely try it!
        '
        description1='Santiago Poveda Gutiérrez from Spain
        Graduate School of Informatics
        '
        description2='Yu Suu Meng from China
        Graduate School of Law'
        imageSrc1='/images/santi.png'
        imageAlt1='santi'
        imageSrc2='/images/feel2.png'
        imageAlt2='feel2'
        />
        <Gallery images={galleryImages} />
        <WhyYouParticipate1
          id="What's Rishiri"
          title='' 
          content={<>
          <h2>What's Rishiri and us?</h2>
          </>}
          imageSrc='/images/rishiri_from_above.png'
          imageAlt='rishiri_from_above'
          isRight={true} 
          imageWidth='70%'
        />
        <RishiriWithNumbers
          images={[ 
            {
              src: '/images/183.png',
              alt: '183',
              objectPosition: '50%'
            },
            {
              src: '/images/4hours.png',
              alt: '4hours',
              objectPosition: '20%'
            },
            {
              src: '/images/tourists.png',
              alt: 'tourists',
              objectPosition: '50%'
            },
          ]}
        />
        <section>
          <div className=''>
            <div className='absolute'>
              <p>text</p>
            </div>
            <Image 
              src='/images/kelp_dry.png' 
              alt='kelp_dry' 
              width={500} 
              height={500} 
              className={`w-[100%] rounded-md border-2 border-gray-300 `} 
              style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }} 
            />
          </div>
        </section>
        <WhyYouParticipate1
          id="Who Organizes"
          title='' 
          content={<>
          <h2>Who organizes?</h2>
          </>}
          imageSrc='/images/bird.png'
          imageAlt='bird'
          imageWidth='70%'
        />
        <section>
          <div className=''>
            <div>
              A Message from Organizer
            </div>
            <div className='flex'>
              <div className='flex-1'>
                <Image 
                  src='/images/imai.png' 
                  alt='imai' 
                  width={500} 
                  height={500} 
                  className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                  style={{ aspectRatio: "1 / 1", objectFit: "cover", objectPosition: 'left' }} 
                />
              </div>
              <div className='flex-1'>
                <p>A few years ago, I participated in a kelp drying on Rishiri Island and was fascinated by its nature. With the desire to make the Island known to more people around the world, I have organized this summer camp every summer.
                    We are well-acquainted with Rishiri Island, so we can tailor the best tour to accommodate the participants. But if you come all the way to Japan's northernmost island, you shouldn't be satisfied with just sightseeing. 
                    Surrounded by the world's finest nature, we engage in passionate discussions about the future while enjoying the island. After a few intense days, participants will be able to create unforgettable memories and forge deep bonds.
                    In the northern edge of Japan, an unseen world awaits you!
                    Sota Imai
                    Faculty of Literature, Kyoto University
                    </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className=''>
            <div>
              A Message from Supervisor 
            </div>
            <div className='flex'>
              <div className='flex-1'>
                  <Image 
                    src='/images/oji.png' 
                    alt='oji' 
                    width={800} 
                    height={800} 
                    className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                    style={{ aspectRatio: "1 / 1", objectFit: "cover", objectPosition: 'left' }} 
                  />
              </div>
              <div className='flex-1'>
                <p>
                  【To Stop the Division in the World】
                  Conflicts fueling global division continue to arise in various regions. When considering what can be done at the grassroots level, the idea of fostering exchanges among young people who will shape the future, regardless of their nationality, emerged.
                  In this summer camp, young individuals from diverse nationalities and cultures come together on remote islands in Japan for profound interactions. Through this, we hope to advance cross-cultural understanding and multicultural coexistence, even if just a little, aspiring for a more peaceful world.

                  【To Promote Local Revitalization Models Globally】
                  The challenge of revitalizing local communities is not exclusive to Japan; it is a universal concern. I believe that young people from different countries can breathe new life into local areas and present fresh approaches for the next generation. Consequently, I am committed to sharing Japan's models for regional revitalization with the beautiful towns and villages worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div id="Who Should Participate" className='w-full'>
            <h2>Who Should Participate</h2>
            <div className='flex'>
              <div className='w-[70%] flex-wrap'>
                <div>
                  <p>International Students in Japan</p>
                  <p>Those who are studying in Japan and wish to delve deeper into experiencing Japanese culture.</p>
                </div>
                <div>
                  <p>International University Students</p>
                  <p>Those who not only want to experience Japan's top-tier nature and seafood but also seek various inspirations through interactions with individuals engaged in those fields.</p>
                </div>
              </div>
              <div className='flex-1'>
                <Image 
                  src='/images/who_should_participate.png' 
                  alt='who_should_participate' 
                  width={500} 
                  height={500}
                  className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                  style={{ aspectRatio: "3 / 2", objectFit: "contain", objectPosition: 'left' }}  
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='w-full'>
            <div className='flex'>
              <div className='w-[70%] flex-wrap'>
                <div>
                  <p>Young Professionals from Overseas</p>
                  <p>Foreigners considering a vacation in Japan, seeking deeper involvement with locals rather than regular tourism, aiming for substantial engagement with excellent businessmen nationwide and seeking deep nature experiences.</p>
                </div>
                <div>
                  <p>Art College Students</p>
                  <p>Those who aim to revitalize regions through the art, such as the fusion of art and local areas.</p>
                </div>
              </div>
              <div className='flex-1'>
                <Image 
                  src='/images/professional.png' 
                  alt='proffessional' 
                  width={500} 
                  height={500}
                  className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                  style={{ aspectRatio: "3 / 2", objectFit: "contain", objectPosition: 'left' }}  
                />
                <Image 
                  src='/images/art_college_student.png' 
                  alt='art_colege_student' 
                  width={500} 
                  height={500}
                  className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                  style={{ aspectRatio: "3 / 2", objectFit: "contain", objectPosition: 'left' }}  
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div id="Details" className='w-full'>
            <h2>Details</h2>
            <div className='flex'>
              <div className='w-[70%] flex-wrap'>
                <div>
                  <p>
                    Date XX/XX-XX/XX
                    <br />Target Age 18-25
                    <br />Capacity XX people
                    <br />Actual Cost XXX
                    (Not included Transportation to and from island)
                    <br />Accommodation XXX
                    ( The participants live under the same roof)

                    <br />Deadline of application XX/XX
                  </p>
                </div>
              </div>
              <div className='flex-1'>
                <Image 
                  src='/images/shimarisu.png' 
                  alt='who_should_participate' 
                  width={500} 
                  height={500}
                  className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                  style={{ aspectRatio: "3 / 2", objectFit: "contain", objectPosition: 'left' }}  
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-5xl mt-5 tracking-tight">
                FAQ
              </h2>
              <p className="text-neutral-500 text-xl mt-3">
                Frequenty asked questions
              </p>
            </div>
            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> What is the official language?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    The official language is English, and the staff members are proficient in both Japanese and English.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> What should I pack?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    ・Cash (for souvenirs and dining expenses)
                    ・Passport (with visa)
                    ・Clothing  (Washing machine available. If you plan to cycle or hike, comfortable clothing and shoes are recommended.)
                    Personal water bottle (Natural water from Rishiri Island can be consumed)
                    ・Laptop
                    ・Charger
                    ・Writing utensils
                    ・Necessary medications

                    A detailed packing list will be provided after your application is confirmed.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> What is the transportation option to Rishiri Island?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    There are options to travel by either plane or ferry, but we recommend using a flight. Details will be provided after your application is confirmed.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> What is the weather like in Rishiri?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Summer on Rishiri Island is often sunny with an average temperature of 20 degrees Celsius, and it's generally dry. However, mornings and evenings can be chilly, so please make sure to bring some jackets and long-sleeved clothing with you.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> What is the food like?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Participants will have the opportunity to cook together, dine at nearby restaurants, and enjoy a barbecue. Rishiri Island, known for its thriving fishing industry, offers an abundance of delicious seafood, which is deeply intertwined with the island's culture.
                    Please note that providing a dedicated menu for vegetarians may be challenging due to the island's culinary culture.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> Do I need to bring a backpack, or can I bring a rolling suitcase on the summer camp?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    You can leave your luggage at the accommodation, so feel free to choose either option.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div id="Contact/Apply Now" className="px-4 md:px-8 2xl:px-16">
            <div className="mx-auto md:w-full lg:w-3/5 2xl:w-4/6 flex h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7">
              <div className="flex pb-7 md:pb-9 mt-7 md:-mt-1.5">
                <h4 className="mx-auto text-2xl 2xl:text-3xl font-bold text-heading">
                  Contact/Apply Now
                </h4>
              </div>
              <form className="w-full mx-auto flex flex-col justify-center" noValidate>
                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="name"
                        className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                      >
                        Your Name (required)
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter Your Name"
                        className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                        autoComplete="off"
                        spellCheck="false"
                        aria-invalid="false"
                      />
                    </div>
                    <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                      <label
                        htmlFor="email"
                        className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
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
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="age"
                        className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
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
                      />
                    </div>
                    <div className="w-full md:w-1/2 ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                      <label
                        htmlFor="country"
                        className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
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
                      />
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-600 font-semibold text-sm leading-none mb-3"
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
                    ></textarea>
                  </div>
                  <div className="relative justify-center flex">
                    <button
                      data-variant="flat"
                      className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer/>
      </body>
    </div>
  );
};



export default Home;
