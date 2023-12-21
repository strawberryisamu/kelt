import React, { use, useEffect, useState } from 'react';
import Image from 'next/image'
import '@/styles/summer_camp/Navebar.css'; 
import Link from 'next/link';


const smoothScroll = (anchorId: string) => {
  const anchorElement = document.querySelector(anchorId);
  if (anchorElement) {
    anchorElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasChild1, setHasChild1] = useState(true);
  const [hasChild2, setHasChild2] = useState(true);

  useEffect(() => {
    setHasChild1(true);
    setHasChild2(true);
  }, [isOpen]);
  

  return (
    <div className="fixed top-0 right-0 md:p-1 p-3 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="navbar relative  z-10 flex flex-col justify-center items-center  rounded gap-2"
      >
        <span className={`h-0.5 bar bg-white rounded transform transition duration-300 ease-in-out ${isOpen ? 'translate-y-2.5 rotate-45' : ''}`} />
        <span className={`h-0.5 bar bg-white rounded transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`h-0.5 bar bg-white rounded transform transition duration-300 ease-in-out ${isOpen ? '-translate-y-2.5 -rotate-45' : ''}`} />
      </button>
      <div
        className={`fixed top-0 left-0 w-full  bg-[#2a599e] text-white transform transition duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav className='flex flex-col justify-center items-center pt-5 pb-5'>
          <ul id="g-navi flex flex-col gap-5">
            <li><Link href="/summercamp/">Top</Link></li>
            <li className="">
              <a href="#" onClick={() => {setHasChild1(!hasChild1);console.log(hasChild1);}}>About Rishiri and Us</a>
              <ul className={`${hasChild1 ? 'hidden' : ''}`}>
                <li><Link onClick={() => setIsOpen(false)} href="/summercamp/#Why You Participate">Why You Participate</Link></li>
                <li><Link onClick={() => setIsOpen(false)}  href="/summercamp/#What's Rishiri">What's Rishiri</Link></li>
                <li><Link onClick={() => setIsOpen(false)} href="/summercamp/#participant_testimonials">Participant Testimonials</Link></li>
                <li><Link onClick={() => setIsOpen(false)} href="/summercamp/#message_from_the_organizers">Message from the Organizers</Link></li>
                <li><Link onClick={() => setIsOpen(false)} href="/summercamp/#target_participants">Target Participants</Link></li>
              </ul>
            </li>
            <li className="">
              <a href="#" onClick={() => {setHasChild2(!hasChild2);console.log(hasChild2);}}>Details</a>
              <ul className={`${hasChild2 ? 'hidden' : ''}  `}>
                <li><Link  onClick={() => setIsOpen(false)} href="/summercamp/#Details">Details</Link></li>
                <li><Link  onClick={() => setIsOpen(false)} href="/summercamp/#FAQ">FAQ</Link></li>
              </ul>
            </li>
            <li><Link href="/summercamp/#Contact/Apply Now" onClick={() => setIsOpen(false)}>Contact/Apply Now</Link></li>
          </ul>

          <ul>
            <li className="pt-5">
              <Link href="https://www.instagram.com/oji_japon/" target="_blank" rel="noopener noreferrer">
                <Image width={1000} height={1000} src="/images/instagram.png" alt="Instagram" className="w-6 mr-0" />
              </Link>
            </li>
          </ul>

          <ul className="flex pt-3 gap-5 w-[200px]">
            <li className=" flex-1 rounded-md" style={{ backgroundColor: 'lightgray' }} >
              <Link target="_blank" rel="noopener noreferrer" href="https://bun-kei.com/">
                <Image src="/images/bunkei.png" width={500} height={500} alt='bunkei_logo' className={`w-[100%]`}
                  style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }} />
              </Link>
            </li>
            <li className=" flex-1 rounded-md" style={{ backgroundColor: 'lightgray' }}>
              <Link target="_blank" rel="noopener noreferrer" href="http://rishiri-zen.jp/ ">
                <Image src="/images/zen_transparent.png" width={500} height={500} alt='bunkei_logo' className={`w-[100%]`}
                  style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
