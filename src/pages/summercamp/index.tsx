import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '@/styles/globals.css'; // 必要なスタイルをインポート
import Layout from '@/app/components/summer_camp/layout';
import FadeInElement from '@/app/components/summer_camp/FadeInElement';
import News from '@/app/components/summer_camp/News';
import Gallery from '@/app/components/summer_camp/Gallery';
import Wave from '@/app/components/summer_camp/wave';
import RishiriWithNumbers from '@/app/components/summer_camp/RishiriWithNumbers';
import MessageFromTheOrganizers from '@/app/components/summer_camp/message_from_the_organizers';
import HowAttendeesFeel from '@/app/components/summer_camp/HowAttendeesFeel';
import Details from '@/app/components/summer_camp/Details';
import Contact from '@/app/components/summer_camp/Contact';
import FAQ from '@/app/components/summer_camp/FAQ';
import TargetParticipants from '@/app/components/summer_camp/target_participants';

const imgItems = [
  {src: '/images/friends.png', alt: 'friends'},
  {src: '/images/rishiri_mountain.png', alt: 'first_view_1'},
  {src: '/images/sunrise.png', alt: 'first_view_1'},
  {src: '/images/night_sky.png', alt: 'first_view_1'},
];

// #228ed4,#208d78,#db5518
const Home = () => {

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
    <Layout title='Rishiri Island Summer Camp' subtitle='In the northern edge of Japan, an unseen world awaits you.' imgItems={imgItems}>
        <News/>
        <section id='Why You Participate'>
          <div className="pb-[5%]" >
            <div className="px-[10%] ">
              <div className="mb-[5%] pt-[10%]">
                <h2 className='text-3xl md:text-5xl text-center mb-5'>DISCOVER THE MAGIC OF RISHIRI ISLAND <br />  A UNIQUE SUMMER CAMP EXPERIENCE</h2>
                <p className='text-2xl text-center'>Embark on a journey to Rishiri Island, where tradition meets adventure. 
                  Our summer camp offers an extraordinary opportunity for young minds to immerse themselves in the age-old art of Kelp drying and the rich cultural heritage of this serene island. 
                  Here’s what makes our camp a must-visit:
                </p>
              </div>
              <div className="block2 ">
                <FadeInElement>
                  <div className="flex flex-col justify-center items-center gap-5">
                    <div className='flex relative items-center justify-center w-[95%] md:w-[70%] h-[300px]'>
                      <Image 
                      src='/images/cycling.png' 
                      alt="cycling "
                      fill
                      style={{aspectRatio: "1/1", objectFit: 'cover'}}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className='rounded-md '
                      />
                    </div>
                    <div className='text-center w-[95%]'>
                      <p className='text-5xl'>Join a Global Community</p>
                      <p className='text-xl mt-5'>Connect with peers from around the world. Our camp is a melting pot of cultures, offering a unique chance to forge international friendships and cultural understanding.</p>
                    </div>
                  </div>
                  </FadeInElement>
                  <FadeInElement>
                  <div className="flex md:flex-row flex-col justify-around items-start mt-5 gap-5">
                    <div className="flex-1 flex flex-col justify-center items-start gap-5">
                      <div className='flex relative items-center justify-center w-[95%] h-[300px]'>
                        <Image               
                          fill
                          style={{aspectRatio: "1/1", objectFit: 'cover'}}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          src='/images/rishiri_over_view.png' 
                          alt="over_view" 
                          className='rounded-md '
                        />
                      </div>
                      <div className='text-center w-[95%]'>
                        <p className='text-5xl'>Engage in Diverse Activities</p>
                        <p className='text-xl mt-5'>YOUR CHOICE: 30+ activities await! From hiking and kayaking to creative arts, our camp offers endless adventures amidst Rishiri's stunning nature.</p>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-start gap-5">
                      <div className='flex relative items-center justify-center w-[95%] h-[300px]'>
                        <Image 
                        src='/images/introduce.png' 
                        alt='introduce'
                        fill
                        style={{aspectRatio: "1/1", objectFit: 'cover'}}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className='rounded-md'
                        />
                      </div>
                      <div className='text-center w-[95%]'>
                        <p className='text-5xl'>Learn the Art of Kombu Drying</p>
                        <p className='text-xl mt-5'>Discover the island's heritage through Kombu drying. Engage in this traditional craft, and unveil the secrets of this ancient practice, integral to Rishiri's culture.</p>
                      </div>
                    </div>
                  </div>
                  </FadeInElement>
              </div>
            </div>
          </div>
        </section>

        <div className='hidden md:block'>
        <Wave 
          index={1}
          color='#2a599e'
          height={200}
        />
        </div>
        <div className='block md:hidden'>
        <Wave 
          index={1}
          color='#2a599e'
          height={100}
        />
        </div>
        <Gallery images={galleryImages} />
        <div className='hidden md:block'>
        <Wave 
          index={2}
          color='black'
          height={200}
        />
        </div>
        <div className='block md:hidden'>
        <Wave 
          index={2}
          color='black'
          height={100}
        />
        </div>
        <section id="What's Rishiri">
          <RishiriWithNumbers
            images={[ 
              {
                src: '/images/183.png',
                alt: '183',
                objectPosition: '50%'
              },
              {
                src: '/images/tourists.png',
                alt: 'tourists',
                objectPosition: '50%'
              },
              {
                src: '/images/4hours.png',
                alt: '4hours',
                objectPosition: '20%'
              },
            ]}
            texts={[
                <div className='text-[8vw]  text-yellow-500 ' >
                    <div className=' absolute text-[20vw]  pt-[30%]'>183</div>
                    <div className=' absolute pt-[100%] pl-[25%]'>㎢  </div>
                </div>,
                <div className=' text-[8vw] font-thin text-white ' >
                    <div className=' text-[9vw] absolute pt-[20%]'>150,000 </div>
                    <div className=' absolute pt-[100%] pl-[15%]'>tourists </div>
                </div>,
                <div className='text-[8vw] font-thin text-white '>
                    <div className=' text-[20vw] absolute text-yellow-500 pb-[10%] pl-[5%]'>4 </div>
                    <div className=' absolute text-yellow-500 pt-[80%] pl-[25%]'>hours </div>
                </div>,
            ]}
            descriptions={[
                  <div className='md:text-[1.7vw] md:bg-white md:bg-opacity-60 mt-[60%] px-2'>
                    Rishiri Island has an area of 183㎢ and is registered as a national park.
                  </div>,
                  <div className='md:text-[1.7vw] md:bg-white md:bg-opacity-60 mt-[60%] px-2'>
                    During summer, Rishiri island welcomes domestic tourists about 150,000 but not yet discovered by foreign visitors.
                  </div>,
                  <div className='md:text-[1.7vw] md:bg-white md:bg-opacity-60 mt-[60%] px-2'>
                    Rishiri island is a remote island located about 50 kilometers west of Japan's northernmost point, Wakkanai.  It takes four hours by airplane from Tokyo.
                  </div>
            ]}
          />
        </section>
        <section>
          <div className='relative'>
            <div className='absolute w-[50%] ml-[50%] mt-[5%]'>
              <p className='md:text-[2.5vw] md:bg-white md:bg-opacity-60'>The kelp produced on Rishiri Island constitutes a vital ingredient in Japan's broth(Dashi) culture. For centuries, it has been transported by ships to various parts of Japan nationwide.</p>
            </div>
            <Image 
              src='/images/kelp_dry.png' 
              alt='kelp_dry' 
              width={500} 
              height={500} 
              className={`w-[100%]`} 
              style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }} 
            />
          </div>
        </section>
        <div className='hidden md:block'>
        <Wave 
          index={3}
          color='#2a599e'
          height={200}
        />
        </div>
        <div className='block md:hidden'>
        <Wave 
          index={3}
          color='#2a599e'
          height={100}
        />
        </div>
        <section>
          <div id='participant_testimonials' className='relative ' style={{backgroundImage: 'url(./images/rishiri_from_above.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundColor: 'rgba(255, 255, 255, 0.5)', backgroundBlendMode :'lighten'}}>
            <div className='h-[300px] flex justify-center items-center'>
              <p className='font-bold text-5xl text-center '>How Attendees Feel</p>
            </div>
          </div>
        </section>
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

        <section>
          <div id='message_from_the_organizers' className='relative mt-[10%]' style={{backgroundImage: 'url(./images/bird.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundColor: 'rgba(255, 255, 255, 0.5)', backgroundBlendMode :'lighten'}}>
            <div className='h-[300px] flex justify-center items-center'>
              <p className='font-bold text-5xl text-center '>Message from Organizers</p>
            </div>
          </div>
        </section>
        <MessageFromTheOrganizers/>
        <section>
          <div id='target_participants' className='relative mt-[10%]' style={{backgroundImage: 'url(./images/firstView.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundColor: 'rgba(255, 255, 255, 0.5)', backgroundBlendMode :'lighten'}}>
            <div className='h-[300px] flex justify-center items-center'>
              <p className='font-bold text-5xl text-center '>Target Participants</p>
            </div>
          </div>
        </section>
        <TargetParticipants/>
        <Details/>
        <FAQ/>
        <Contact/>
        </Layout>
  );
};



export default Home;
