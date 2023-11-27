import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../styles/globals.css'; // 必要なスタイルをインポート
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
    <div className={`${pageContentClass}`}>
      <FirstView windowHeight={windowHeight}/>
      <News/>
      <WhyYouParticipate1
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
            src: '/images/kelt_dry.png',
            alt: 'kelp_dry',
          },
          {
            src: '/images/kelt_dry.png',
            alt: 'kelp_dry',
          },
          {
            src: '/images/kelt_dry.png',
            alt: 'kelp_dry',
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
                  width={500} 
                  height={500} 
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
        <div className='w-full'>
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
        <div className='w-full'>
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
                  <span> What is a SAAS platform?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  SAAS platform is a cloud-based software service that allows users to access
                  and use a variety of tools and functionality.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> How does  billing work?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We offers a variety of billing options, including monthly and annual subscription plans,
                  as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
                  card or other secure online payment method.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Can I get a refund for my subscription?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We offers a 30-day money-back guarantee for most of its subscription plans. If you are not
                  satisfied with your subscription within the first 30 days, you can request a full refund. Refunds
                  for subscriptions that have been active for longer than 30 days may be considered on a case-by-case
                  basis.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> How do I cancel my subscription?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  To cancel your We subscription, you can log in to your account and navigate to the
                  subscription management page. From there, you should be able to cancel your subscription and stop
                  future billing.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Can I try this platform for free?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We offers a free trial of its platform for a limited time. During the trial period,
                  you will have access to a limited set of features and functionality, but you will not be charged.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> How do I access documentation?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Documentation is available on the company's website and can be accessed by
                  logging in to your account. The documentation provides detailed information on how to use the platform,
                  as well as code examples and other resources.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> How do I contact support?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  If you need help with the platform or have any other questions, you can contact the
                  company's support team by submitting a support request through the website or by emailing
                  support@We.com.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Do you offer any discounts or promotions?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We may offer discounts or promotions from time to time. To stay up-to-date on the latest
                  deals and special offers, you can sign up for the company's newsletter or follow it on social media.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> How do we compare to other similar services?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  This platform is a highly reliable and feature-rich service that offers a wide range
                  of tools and functionality. It is competitively priced and offers a variety of billing options to
                  suit different needs and budgets.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
