import React, { useEffect, useState } from 'react';
import '@/styles/globals.css'; // 必要なスタイルをインポート
import LoadingScreen from '@/app/components/kelp_dry/LoadingScreen';
import FAQ from '@/app/components/summer_camp/FAQ';
import Footer from '@/app/components/summer_camp/Footer';
import Layout from '@/app/components/summer_camp/layout';

const imgItems = [
    {src: '/images/friends.png', alt: 'friends'},
    {src: '/images/rishiri_mountain.png', alt: 'first_view_1'},
    {src: '/images/sunrise.png', alt: 'first_view_1'},
    {src: '/images/night_sky.png', alt: 'first_view_1'},
  ];

// #228ed4,#208d78,#db5518
const Faq = () => {
  return (
    <Layout title='FAQ' subtitle='' imgItems={imgItems}>
        <FAQ/>
    </Layout>
  );
};



export default Faq;
