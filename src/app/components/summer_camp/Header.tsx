import React, { useEffect, useState } from 'react';
import '@/styles/summer_camp/Header.css';

const Header: React.FC = () => {
    const [scroll, setScroll] = useState(0);
    const [headerClass, setHeaderClass] = useState('DownMove');

    useEffect(() => {
        function ScrollAnime() {
            const elemTop = document.getElementById('area-2')?.getBoundingClientRect().top || 0;
            const newScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (newScroll === scroll) {
                // IE11対策で処理を入れない
            } else if (elemTop > newScroll || 0 > newScroll - scroll) {
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

    useEffect(() => {
        function mediaQueriesWin() {
            const width = window.innerWidth;
            if (width <= 765) {
                const hasChildLinks = document.querySelectorAll('.has-child > a');
                hasChildLinks.forEach((link) => {
                    link.addEventListener('click', (event) => {
                        event.preventDefault();
                        const parentElem = link.parentElement;
                        if (parentElem) {
                            parentElem.classList.toggle('active');
                            const childUl = parentElem.querySelector('ul');
                            if (childUl) {
                                childUl.style.display = childUl.style.display === 'none' ? '' : 'none';
                            }
                        }
                    });
                });
            } else {
                const hasChildLinks = document.querySelectorAll('.has-child > a');
                hasChildLinks.forEach((link) => {
                    link.removeEventListener('click', () => {});
                });
                const hasChildItems = document.querySelectorAll('.has-child');
                hasChildItems.forEach((item) => {
                    item.classList.remove('active');
                    const childUl = item.querySelector('ul');
                    if (childUl) {
                        childUl.style.display = '';
                    }
                });
            }
        }

        mediaQueriesWin();
        window.addEventListener('resize', mediaQueriesWin);

        return () => {
            window.removeEventListener('resize', mediaQueriesWin);
        };
    }, []);

    return (
        <header id="header" className={headerClass}>

                <div className='flex-1 flex title' >
                    <h1 className=''>Summer Camp in Rishiri </h1>
                </div>
                <div className='summer_camp_header hidden lg:block'>
                    <nav>
                        <ul id="g-navi">
                            <li><a href="/summercamp">Top</a></li>
                            <li className="has-child">
                                <a href="#">About Rishiri and Us</a>
                                <ul>
                                    <li><a href="/summercamp#Why You Participate">Why You Participate</a></li>
                                    <li><a href="/summercamp#What's Rishiri">What's Rishiri</a></li>
                                    <li><a href="/summercamp#participant_testimonials">Participant Testimonials</a></li>
                                    <li><a href="/summercamp#message_from_the_organizers">Message from the Organizers</a></li>
                                    <li><a href="/summercamp#target_participants">Target Participants</a></li>
                                </ul>
                            </li>
                            <li className="has-child">
                                <a href="#">Details</a>
                                <ul>
                                    <li><a href="/summercamp#Details">Details</a></li>
                                    <li><a href="/summercamp#FAQ">FAQ</a></li>
                                </ul>
                            </li>
                            <li><a href="/summercamp#Contact/Apply Now">Contact/Apply Now</a></li>
                        </ul>
                    </nav>
                </div>

        </header>
    );
};

export default Header;
