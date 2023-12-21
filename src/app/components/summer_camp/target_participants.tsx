import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '@/styles/globals.css'; // 必要なスタイルをインポート
import LoadingScreen from '@/app/components/kelp_dry/LoadingScreen';
import Footer from '@/app/components/summer_camp/Footer';
import Layout from '@/app/components/summer_camp/layout';

const imgItems = [
  {src: '/images/friends.png', alt: 'friends'},
  {src: '/images/rishiri_mountain.png', alt: 'first_view_1'},
  {src: '/images/sunrise.png', alt: 'first_view_1'},
  {src: '/images/night_sky.png', alt: 'first_view_1'},
];

// #228ed4,#208d78,#db5518
const TargetParticipants = () => {
  return (
    <section>
      <div className='flex px-[5%] pt-[5%] pb-[5%] flex-wrap'>
        <div className='flex-1 justify-center items-center'>
          <h1 className='text-xl lg:text-3xl font-bold h-[150px] font-serif '>International students in Japan as well as overseas</h1>
          <div className='h-[100px] lg:h-[200px] mb-5'>
            <div className='flex justify-around items-center'>
              <img src='/images/earth.svg' alt='student' className='w-[20%] h-[10%]'/>
              <img src='/images/japan.svg' alt='student' className='w-[20%] h-[10%]'/>
            </div>
            <img src='/images/student.svg' alt='student' className='w-[100%] h-[50%]'/>
          </div>
          <p>
            International students living in Japan or coming all the way from other countries to appreciate deep japanese culture
          </p>
        </div>
        <div className='flex-1'>
          <h1  className='text-xl lg:text-3xl font-bold h-[150px] font-serif'>Young professionals in Japan as well as overseas</h1>
          <div className='h-[100px] lg:h-[200px] mb-5'>
            <div className='flex justify-around items-center'>
              <img src='/images/earth.svg' alt='student' className='w-[20%] h-[10%]'/>
              <img src='/images/japan.svg' alt='student' className='w-[20%] h-[10%]'/>
            </div>
            <img src='/images/bag.svg' alt='student' className='w-[100%] h-[50%]'/>
          </div>
          <p>
            Young people just graduated from a college in Japan or overseas who want to enjoy Japan on vacation by deeply appreciating japanese culture
          </p>
        </div>
        <div className='flex-1'>
          <h1  className='text-xl lg:text-3xl font-bold h-[50px] lg:h-[150px] font-serif'>Art university students</h1>
          <div className='h-[100px] lg:h-[200px] mb-9 lg:mb-5'>
            <div className='flex justify-around items-center'>
              <img src='/images/earth.svg' alt='student' className='w-[20%] h-[10%]'/>
              <img src='/images/japan.svg' alt='student' className='w-[20%] h-[10%]'/>
            </div>
            <img src='/images/ink.svg' alt='student' className='w-[100%] h-[50%]'/>
          </div>
          <p>
            Art students living in Japan or coming all the way from other countries to appreciate deep japanese culture and at the same time to engage in art production activities in perfect enviroment
          </p>
        </div>
      </div>
    </section>
  );
};



export default TargetParticipants;


// <div>
// <section>
//   <div id="Who Should Participate" className='w-full pt-[5%] px-[5%]'>
//     <div className='flex justify-center'>
//       <div className=''>
//         <div className='mb-8'>
//           <h2 className='text-xl md:text-3xl font-bold'>International Students in Japan</h2>
//           <p className='text-lg'>Those who are studying in Japan and wish to delve deeper into experiencing Japanese culture.</p>
//         </div>
//         <div className='mb-8'>
//           <h2 className='text-xl md:text-3xl font-bold'>International University Students</h2>
//           <p className='text-lg'>Those who not only want to experience Japan's top-tier nature and seafood but also seek various inspirations through interactions with individuals engaged in those fields.</p>
//         </div>
//       </div>
//     </div>
//   </div>
//   </section>
//   <section>
//   <div className='w-full pb-[5%] pt-[2.5%] px-[5%]'>
//     <div className='flex justify-center'>
//       <div className=''>
//         <div className='mb-8'>
//           <h2 className='text-xl md:text-3xl font-bold'>Young Professionals from Overseas</h2>
//           <p className='text-lg'>Foreigners considering a vacation in Japan, seeking deeper involvement with locals rather than regular tourism, aiming for substantial engagement with excellent businessmen nationwide and seeking deep nature experiences.</p>
//         </div>
//         <div className='mb-8'>
//           <h2 className='text-xl md:text-3xl font-bold'>Art College Students</h2>
//           <p className='text-lg'>Those who aim to revitalize regions through the art, such as the fusion of art and local areas.</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
// </div>