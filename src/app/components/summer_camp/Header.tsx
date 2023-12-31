import React, { useEffect, useState } from 'react';
import '@/styles/summer_camp/Header.css';
import Navbar from '@/app/components/summer_camp/Navbar';
import Link from 'next/link';

const Header: React.FC = () => {
    const [scroll, setScroll] = useState(0);
    const [headerClass, setHeaderClass] = useState('DownMove');

    useEffect(() => {
        function ScrollAnime() {
            const elemTop = document.getElementById('area-2')?.getBoundingClientRect().top || 0;
            const newScroll = window.scrollY;
    
            if (newScroll === scroll) {
                // IE11対策で処理を入れない
            } else if (elemTop > newScroll || 0 > newScroll - scroll || newScroll === 0) {
                setHeaderClass('DownMove');
            } else {
                setHeaderClass('UpMove');
            }
    
            setScroll(newScroll);
        }
    
        window.addEventListener('scroll', ScrollAnime);
        window.addEventListener('load', ScrollAnime);
    
        return () => {
            window.removeEventListener('scroll', ScrollAnime);
            window.removeEventListener('load', ScrollAnime);
        };
    }, [scroll]);



    return (
        <header id="header" className={`${headerClass} pt-[20px] pb-[20px] `}>
                <div className='flex-1 flex title pl-[5%]' >
                    <h1 className=''>Rishiri Island Summer Camp </h1>
                </div>
                <div className='block lg:hidden'>
                    <Navbar/>
                </div>
                <div className='summer_camp_header hidden lg:block'>
                    <nav>
                        <ul id="g-navi">
                            <li><Link href="/summercamp/">Top</Link></li>
                            <li className="has-child">
                                <a href="#">About Rishiri and Us</a>
                                <ul>
                                    <li><Link href="/summercamp#Why You Participate">Why You Participate</Link></li>
                                    <li><Link href="/summercamp#What's Rishiri">What's Rishiri</Link></li>
                                    <li><Link href="/summercamp#participant_testimonials">Participant Testimonials</Link></li>
                                    <li><Link href="/summercamp#message_from_the_organizers">Message from the Organizers</Link></li>
                                    <li><Link href="/summercamp#target_participants">Target Participants</Link></li>
                                </ul>
                            </li>
                            <li className="has-child">
                                <a href="#">Details</a>
                                <ul>
                                    <li><Link href="/summercamp#Details">Details</Link></li>
                                    <li><Link href="/summercamp#FAQ">FAQ</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/summercamp#Contact/Apply Now">Contact/Apply Now</Link></li>
                        </ul>
                    </nav>
                </div>

        </header>
    );
};

export default Header;
