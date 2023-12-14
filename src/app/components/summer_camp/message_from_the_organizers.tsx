import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const MessageFromTheOrganizers: React.FC = () => {
  return (
    <div>
        <section>
          <div className='pt-[3%] px-[5%] '>
            <div className='font-bold text-3xl md:text-5xl mt-5 tracking-tight text-start'>
              Organizer
            </div>
            <div className='flex  pt-[1%] justify-center items-start'>
              <div className='flex-1 w-[75%] md:w-[30%]'>
                <Image 
                  src='/images/imai.png' 
                  alt='imai' 
                  width={500} 
                  height={500} 
                  className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                  style={{ aspectRatio: "1 / 1", objectFit: "cover", objectPosition: 'left' }} 
                />
                <p className=" md:text-sm text-[3vw] pb-2 text-start">Sota Imai, Faculty of Literature, Kyoto University</p> 
              </div>
              <div className='flex-[1_0_50%] pt-[2.5%] pb-[5%]  pl-[5%]'>
                <p className='font-light'>
                  A few years ago, I participated in a kelp drying on Rishiri Island and was fascinated by its nature. With the desire to make the Island known to more people around the world, I have organized this summer camp every summer.
                    We are well-acquainted with Rishiri Island, so we can tailor the best tour to accommodate the participants. But if you come all the way to Japan's northernmost island, you shouldn't be satisfied with just sightseeing. 
                    Surrounded by the world's finest nature, we engage in passionate discussions about the future while enjoying the island. After a few intense days, participants will be able to create unforgettable memories and forge deep bonds.
                    In the northern edge of Japan, an unseen world awaits you!
                  </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='pt-[3%] px-[5%] '>
            <div className='font-bold text-3xl md:text-5xl mt-5 tracking-tight text-start'>
              Supervisor 
            </div>
            <div className='flex  pt-[1%] justify-center items-start'>
              <div className='flex-1 w-[75%] md:w-[30%]'>
                <Image 
                  src='/images/oji.png' 
                  alt='imai' 
                  width={500} 
                  height={500} 
                  className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                  style={{ aspectRatio: "1 / 1", objectFit: "cover", objectPosition: 'left' }} 
                />
                <p className=" md:text-sm text-[3vw] pb-2 text-start">Yukimune Oji, CEO, Bunkei Corp.</p> 
              </div>
              <div className='flex-[1_0_50%] pt-[2.5%] pb-[5%] pl-[5%] leading-relaxed'>
                <p className='text-start text-xl font-semibold'>【To Stop the Division in the World】</p>
                  <p className='font-light '>
                  Conflicts fueling global division continue to arise in various regions. When considering what can be done at the grassroots level, the idea of fostering exchanges among young people who will shape the future, regardless of their nationality, emerged.
                  In this summer camp, young individuals from diverse nationalities and cultures come together on remote islands in Japan for profound interactions. Through this, we hope to advance cross-cultural understanding and multicultural coexistence, even if just a little, aspiring for a more peaceful world.
                  </p>
                  <p className='text-start text-xl font-semibold'>【To Promote Local Revitalization Models Globally】 </p>
                  <p className='font-light'>
                  The challenge of revitalizing local communities is not exclusive to Japan; it is a universal concern. I believe that young people from different countries can breathe new life into local areas and present fresh approaches for the next generation. Consequently, I am committed to sharing Japan's models for regional revitalization with the beautiful towns and villages worldwide.
                  </p>
              </div>
            </div>
          </div>
        </section>
        </div>
  );
};

export default MessageFromTheOrganizers;
