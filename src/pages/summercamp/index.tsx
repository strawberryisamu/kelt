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
import { useRouter } from 'next/router';

const imgItems = [
  {src: '/images/friends.png', alt: 'friends'},
  {src: '/images/rishiri_mountain.png', alt: 'first_view_1'},
  {src: '/images/sunrise.png', alt: 'first_view_1'},
  {src: '/images/night_sky.png', alt: 'first_view_1'},
];

// #228ed4,#208d78,#db5518
const Home = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // Get the current URL
    const currentURL = router.asPath;

    // Define the expected URL
    const expectedURL = '/summercamp/';
    console.log(currentURL);
    // Check if the current URL matches the expected URL
    if (currentURL === expectedURL) {
      // The URLs match, you can perform actions here
      console.log('Current URL matches expected URL');
    } else {
      // The URLs don't match
      console.log('Current URL does not match expected URL');
      router.push(currentURL);
    }
  }, [router.asPath]); 

  useEffect (() => {

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if(isMobile) {
      setIsMobile(true);
    }
  }, []);

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
              <div className="px-[5%] bg-black pt-10 pb-10 leading-none">
                <h2 className='text-5xl font-bold text-start text-white'><span className='text-yellow-500'>Discover</span> The Magic of Rishiri <span className='pr-5'>Island</span><span className='md:hidden'><br /></span><span className='text-lg font-thin'>A Unique Summer Camp Experience</span></h2>
              </div>
              <div className='  px-[10%] pt-1 pb-5 text-4xl text-start leading-none'>
                <span className='text-yellow-500 text-5xl'>Here’s</span> what makes our camp a <span className='font-semibold'>must-visit</span>
              </div>
              <div className='px-[10%]'>
                 <FadeInElement>
                    <div className="flex flex-col justify-center items-start ">
                      <div className='flex relative items-center justify-center w-[100%] h-[300px]'>
                        <Image 
                        src='/images/cycling.png' 
                        alt="cycling "
                        fill
                        style={{aspectRatio: "1/1", objectFit: 'cover'}}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className='rounded-md '
                        />
                      </div>
                      <div className='text-center w-[100%]'>
                        <p className='text-3xl md:text-4xl text-start'><span className='text-yellow-500 text-5xl'>Making</span> lifetime friends from all over the world</p>
                        <p className='text-xl  text-start leading-relaxed font-extralight'>Promising young people gather in Rishiri island and make the best friendships through a variety of activities.</p>
                      </div>
                    </div>
                  </FadeInElement>
                  <FadeInElement>
                  <div className="flex flex-col justify-center items-start mt-5">
                    <div className='flex relative items-center w-[100%] justify-center h-[300px]'>
                      <Image               
                        fill
                        style={{aspectRatio: "1/1", objectFit: 'cover', objectPosition: '50% 60%'}}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        src='/images/rishiri_over_view.png' 
                        alt="over_view" 
                        className='rounded-md '
                      />
                    </div>
                    <div className='text-center w-[100%]'>
                      <p className='text-3xl md:text-4xl text-start'><span className='text-yellow-500 text-5xl'>Richest</span> nature and cultures</p>
                      <p className='text-xl leading-relaxed text-start font-extralight'>You are able to get in touch with the deepest nature and profound culture of Japan's Northernmost Region nurtured by Ainu tribe for centuries.</p>
                    </div>
                  </div>
                  </FadeInElement>
                  <FadeInElement>
                    <div className="flex flex-col justify-center items-start mt-5">
                      <div className='flex relative items-center justify-center w-[100%] h-[300px]'>
                        <Image 
                        src='/images/introduce.png' 
                        alt='introduce'
                        fill
                        style={{aspectRatio: "1/1", objectFit: 'cover', objectPosition: '50% 0%'}}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className='rounded-md'
                        />
                      </div>
                      <div className='text-center w-[100%]'>
                        <p className='text-3xl md:text-4xl text-start'><span className='text-yellow-500 text-5xl'>Rare</span> experiences you never come across otherwise</p>
                        <p className='text-xl leading-relaxed text-start font-extralight'>We tailor plans of summer camp based on your requests and include interactions with islanders such as fisherman, civil servants, and CEO of local companies.</p>
                      </div>
                    </div>
                  </FadeInElement>
              </div>
          </div>
        </section>

        <div className='hidden md:block'>
        <Wave 
          index={1}
          color='black'
          height={200}
        />
        </div>
        {/* <div className='block md:hidden'>
        <Wave 
          index={1}
          color='#2a599e'
          height={50}
        />
        </div> */}
        <Gallery images={galleryImages} />
        <div className='hidden md:block'>
        <Wave 
          index={2}
          color='black'
          height={200}
        />
        </div>
        {/* <div className='block md:hidden'>
        <Wave 
          index={2}
          color='black'
          height={100}
        />
        </div> */}
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
              isMobile ?
                (<div className='text-[8vw]  text-yellow-500 font-serif' >
                    <div className=' absolute text-[30vw]  pt-[30%]'>183</div>
                    <div className=' absolute text-[15vw] pt-[100%] pl-[25%]'>㎢  </div>
                </div> ):
                (<div className='text-[8vw]  text-yellow-500 font-serif' >
                    <div className=' absolute text-[20vw]  pt-[30%]'>183</div>
                    <div className=' absolute pt-[100%] pl-[25%]'>㎢  </div>
                </div>),

              isMobile ?
                <div className=' text-[8vw] font-thin text-yellow-500 font-serif' >
                    <div className=' text-[20vw] absolute pl-[10%]'>150,000 </div>
                    <div className=' absolute pl-[50%] pt-[30%]'>tourists </div>
                </div> :
                <div className=' text-[8vw] font-thin text-yellow-500 font-serif' >
                    <div className=' text-[9vw] absolute pt-[20%]'>150,000 </div>
                    <div className=' absolute pt-[100%] pl-[15%]'>tourists </div>
                </div>,

                isMobile ?
                <div className='text-[8vw] font-thin text-white font-serif'>
                    <div className=' text-[30vw] absolute text-yellow-500 pb-[10%] pl-[15%]'>4 </div>
                    <div className=' text-[15vw] absolute text-yellow-500 pt-[70%] pl-[25%]'>hours </div>
                </div> :
                <div className='text-[8vw] font-thin text-white font-serif'>
                    <div className=' text-[20vw] absolute text-yellow-500 pb-[10%] pl-[5%] inline'>4 </div>
                    <div className=' absolute text-yellow-500 pt-[80%] pl-[25%] inline'>hours </div>
                </div>,
            ]}
            descriptions={[
                  isMobile ? <div className='text-[4vw] md:text-[1.7vw] bg-white bg-opacity-60 px-5 mt-[20%] ml-[15%] w-[70%]'>
                    Rishiri Island has an area of 183㎢ and is registered as a national park.
                  </div> 
                  : <div className='text-[2vw] md:text-3xl bg-black text-white bg-opacity-60 mt-[60%] px-[10%] pt-2 pb-2 text-start'>
                    Rishiri Island has an area of <span className='text-yellow-500 text-[2vw] md:text-[1.7vw] font-semibold'>183㎢ </span>
                      and is registered as a <span className='font-semibold text-[2vw] md:text-[1.7vw]'>national park.</span>
                  </div>,

                  isMobile ? <div className='text-[4vw] md:text-[1.7vw] bg-white bg-opacity-60 px-5 mt-[10%] ml-[15%] w-[70%]'>
                    During summer, Rishiri island welcomes domestic tourists about 150,000.
                  </div> :
                  <div className='text-[2vw] md:text-3xl bg-black text-white bg-opacity-60 mt-[60%] px-[10%] pt-2 pb-2 text-start'>
                    During summer, Rishiri island welcomes <span className='text-yellow-500 text-[2vw] md:text-[1.7vw] font-semibold'>150,000</span> <span className='text-[2vw] md:text-[1.7vw] font-semibold'>tourists</span>.
                  </div>,

                  isMobile ? 
                  <div className='text-[3vw] md:text-[1.7vw] bg-white bg-opacity-60 px-5 mt-[20%] ml-[15%] w-[70%]'>
                    Rishiri island is a remote island located about 50 kilometers west of Japan's northernmost point, Wakkanai.  It takes four hours by airplane from Tokyo.
                  </div> :
                  <div className='text-[2vw] md:text-[1.7vw] bg-black text-white bg-opacity-60 mt-[60%] px-[10%] pt-2 pb-2  text-start'>
                    Rishiri island is located at Japan's <span className='text-yellow-500 text-[2vw] md:text-[1.7vw] font-semibold'>northernmost </span> point.  It takes <span className='text-yellow-500 text-[2vw] md:text-[1.7vw] font-semibold'>4 hours </span>by airplane from Tokyo.
                  </div>
            ]}
          />
        </section>
        <section>
          <div className='relative'>
            <div className='absolute w-[100%]  mt-[5%] font-serif'>
              <p className='md:text-[2.5vw] text-[3vw] text-white bg-black bg-opacity-60 text-start px-[5%] pt-5 pb-5'>The kelp produced on Rishiri Island constitutes a vital ingredient in Japan's broth(Dashi) culture. For centuries, it has been transported by ships to various parts of Japan nationwide.</p>
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
        {/* <div className='block md:hidden'>
        <Wave 
          index={3}
          color='#2a599e'
          height={100}
        />
        </div> */}
        <section>
          <div id='participant_testimonials' className={`'relative  bg-no-repeat bg-cover ${isMobile ? ' bg-scroll' : 'bg-fixed'}`}
                style={{
                    backgroundImage: 'url(/images/rishiri_from_above.png)', 
                    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
                    backgroundBlendMode :'lighten'
                }}
            >
            <div className='h-[200px] flex justify-start items-center'>
              <p className='font-bold text-3xl md:text-5xl text-center pl-[5%] pt-2'>How Attendees Feel</p>
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
            description1={<p className='text-lg'>
            <span className='w-[80px] inline-block text-sm font-serif'>Name</span><span className='inline-block text-2xl font-serif'>Santiago Poveda Gutiérrez</span> 
            <br /><span className='w-[80px] inline-block text-sm font-serif'>Nationality</span><span className='inline-block text-2xl font-serif pr-5'>Spain</span>
            <br /><span className='w-[80px] inline-block text-sm font-serif'>University</span><span className='inline-block text-2xl font-serif'>Graduate School of Informatics</span></p>}

            description2={<p className='text-lg'>
            <span className='w-[80px] inline-block text-sm font-serif'>Name</span><span className='inline-block text-2xl font-serif'>Yu Suu Meng</span> 
            <br /><span className='w-[80px] inline-block text-sm font-serif'>Nationality</span><span className='inline-block text-2xl font-serif pr-5'>China</span>
            <br /><span className='w-[80px] inline-block text-sm font-serif'>University</span><span className='inline-block text-2xl font-serif'>Graduate School of Law</span></p>}
            descriptionInModal1={<p className='text-sm lg:text-lg font-serif'>Santiago Poveda Gutiérrez, Spain, Graduate School of Informatics</p>}
            descriptionInModal2={<p className='text-sm lg:text-lg font-serif'>Yu Suu Meng, China, Graduate School of Law</p>}
            imageSrc1='/images/santi.png'
            imageAlt1='santi'
            imageSrc2='/images/feel2.png'
            imageAlt2='feel2'
        />

        <section>
          <div id='message_from_the_organizers' className={`'relative bg-no-repeat bg-cover ${isMobile ? ' bg-scroll' : 'bg-fixed'}`}
                style={{
                    backgroundImage: 'url(/images/bird.png)', 
                    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
                    backgroundBlendMode :'lighten'
                }}
            >
            <div className='h-[200px] flex justify-start items-center pl-[5%]'>
              <p className='font-bold text-3xl md:text-5xl text-start '>Message from Organizers</p>
            </div>
          </div>
        </section>
        <MessageFromTheOrganizers/>
        <section>
          <div id='target_participants'  className={`'relative mt-[10%] bg-no-repeat bg-cover ${isMobile ? ' bg-scroll' : 'bg-fixed'}`}
                style={{
                    backgroundImage: 'url(/images/firstView.png)', 
                    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
                    backgroundBlendMode :'lighten'
                }}
            >
            <div className='h-[200px] flex justify-start items-center'>
              <p className='font-bold text-3xl md:text-5xl text-start pl-[5%]'>Who should participate</p>
            </div>
          </div>
        </section>
        <TargetParticipants/>
          <section>
                <div id='Details' className={`relative bg-no-repeat bg-cover ${isMobile ? ' bg-scroll' : 'bg-fixed'}`}
                    style={{
                        backgroundImage: 'url(/images/shimarisu.png)', 
                        backgroundColor: 'rgba(255, 255, 255, 0.5)', 
                        backgroundBlendMode :'lighten'
                    }}
                >
                    <div className='h-[200px] flex justify-start  items-center pl-[5%]'>
                        <p className='font-bold text-3xl md:text-5xl text-center '>Details</p>
                    </div>
                </div>
            </section>
        <Details/>
        <FAQ/>
        <Contact/>
        </Layout>
  );
};



export default Home;
