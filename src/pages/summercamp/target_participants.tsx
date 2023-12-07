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
const TargetPArticipants = () => {
  return (
    <Layout title='Target Participants' subtitle='' imgItems={imgItems}>
        <section>
          <div id="Who Should Participate" className='w-full pt-[5%] '>
            <div className='flex justify-center'>
              <div className='w-3/4'>
                <div className='mb-8'>
                  <h2 className='text-3xl font-bold'>International Students in Japan</h2>
                  <p className='text-lg'>Those who are studying in Japan and wish to delve deeper into experiencing Japanese culture.</p>
                </div>
                <div className='mb-8'>
                  <h2 className='text-3xl font-bold'>International University Students</h2>
                  <p className='text-lg'>Those who not only want to experience Japan's top-tier nature and seafood but also seek various inspirations through interactions with individuals engaged in those fields.</p>
                </div>
              </div>
            </div>
          </div>
          </section>
          <section>
          <div className='w-full pb-[5%] pt-[2.5%]'>
            <div className='flex justify-center'>
              <div className='w-3/4'>
                <div className='mb-8'>
                  <h2 className='text-3xl font-bold'>Young Professionals from Overseas</h2>
                  <p className='text-lg'>Foreigners considering a vacation in Japan, seeking deeper involvement with locals rather than regular tourism, aiming for substantial engagement with excellent businessmen nationwide and seeking deep nature experiences.</p>
                </div>
                <div className='mb-8'>
                  <h2 className='text-3xl font-bold'>Art College Students</h2>
                  <p className='text-lg'>Those who aim to revitalize regions through the art, such as the fusion of art and local areas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  );
};



export default TargetPArticipants;
