import React, { useEffect, useState } from 'react';
import HowAttendeesFeel from '@/app/components/summer_camp/HowAttendeesFeel';
import Footer from '@/app/components/summer_camp/Footer';
import Layout from '@/app/components/summer_camp/layout';

const imgItems = [
    {src: '/images/friends.png', alt: 'friends'},
    {src: '/images/rishiri_mountain.png', alt: 'first_view_1'},
    {src: '/images/sunrise.png', alt: 'first_view_1'},
    {src: '/images/night_sky.png', alt: 'first_view_1'},
  ];

const ParticipantsTestimonials: React.FC = () => {
  return (
    <Layout title='Participant testinomials' subtitle='' imgItems={imgItems}>
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
    </Layout>
  );
};

export default ParticipantsTestimonials;
