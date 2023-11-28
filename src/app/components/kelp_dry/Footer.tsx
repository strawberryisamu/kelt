import { Economica } from "next/font/google";
import Image from "next/image";
import '@/styles/kelp_dry/Footer.css'
import React from "react";

function Footer (){
    return (
        <footer className="footer-002">
            <a href="#">
                京大昆布干しバイト
                {/* <svg className="footer-002__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1722.9 411.2">
                    <path d="M223 310.5c-30.3 0-55.6-10.1-75.9-30.4-20.3-20.3-30.4-48.8-30.4-85.7s10.5-65 31.5-86.4c21-21.4 46.5-32.1 76.6-32.1s49.4 9.8 68.6 29.4L264.9 140c-12.9-11.9-25.9-17.8-39.2-17.8s-27.7 6.4-37.9 19.1c-10.2 12.8-15.3 29.8-15.3 51.2s4.7 39.8 14.1 52.4c9.4 12.6 22.2 18.9 38.4 18.9s30.2-6.9 43-20.8l28.5 34.1c-19.2 22.2-43.7 33.3-73.6 33.3ZM391 310.5c-15.2 0-30.3-2.8-45.1-8.3s-28-13.6-39.5-24l30.6-37.4c8.1 6.9 17.2 12.5 27.2 16.8 10 4.3 19.3 6.4 28.1 6.4 19.6 0 29.4-6.6 29.4-19.9s-4.4-12.7-13.1-17.2c-2.4-1.4-8.6-4.2-18.7-8.3l-29.1-12.2c-13.3-5.3-24.2-13.2-32.8-23.6-8.6-10.4-12.9-23.2-12.9-38.4s7.7-35.4 23.2-48.5c15.4-13.2 35-19.7 58.8-19.7s26.7 2.5 39.6 7.6c13 5 24.3 12.4 34 22.1l-27 34.1c-15.4-11.7-31-17.5-46.6-17.5s-14.9 1.7-19.7 5c-4.9 3.4-7.3 8-7.3 14s2.3 9.6 7 12.6c4.6 3.1 12.5 6.8 23.6 11.1 1.8.6 3.1 1.1 3.9 1.5l28.2 11.3c29.7 12.1 44.5 32.8 44.5 62s-7.8 36.5-23.3 50.2c-15.5 13.7-36.5 20.5-62.8 20.5ZM579.2 310.5c-15.2 0-30.3-2.8-45.1-8.3s-28-13.6-39.5-24l30.6-37.4c8.1 6.9 17.2 12.5 27.2 16.8 10 4.3 19.3 6.4 28.1 6.4 19.6 0 29.4-6.6 29.4-19.9s-4.4-12.7-13.1-17.2c-2.4-1.4-8.6-4.2-18.7-8.3L549 206.4c-13.3-5.3-24.2-13.2-32.8-23.6-8.6-10.4-12.9-23.2-12.9-38.4s7.7-35.4 23.2-48.5c15.4-13.2 35-19.7 58.8-19.7s26.7 2.5 39.6 7.6c13 5 24.3 12.4 34 22.1l-27 34.1c-15.4-11.7-31-17.5-46.6-17.5s-14.9 1.7-19.7 5c-4.9 3.4-7.3 8-7.3 14s2.3 9.6 7 12.6c4.6 3.1 12.5 6.8 23.6 11.1 1.8.6 3.1 1.1 3.9 1.5L621 178c29.7 12.1 44.5 32.8 44.5 62s-7.8 36.5-23.3 50.2c-15.5 13.7-36.5 20.5-62.8 20.5ZM842.9 310.5c-15.2 0-30.3-2.8-45.1-8.3s-28-13.6-39.5-24l30.6-37.4c8.1 6.9 17.2 12.5 27.2 16.8 10 4.3 19.3 6.4 28.1 6.4 19.6 0 29.4-6.6 29.4-19.9s-4.4-12.7-13.1-17.2c-2.4-1.4-8.6-4.2-18.7-8.3l-29.1-12.2c-13.3-5.3-24.2-13.2-32.8-23.6-8.6-10.4-12.9-23.2-12.9-38.4s7.7-35.4 23.2-48.5c15.4-13.2 35-19.7 58.8-19.7s26.7 2.5 39.6 7.6c13 5 24.3 12.4 34 22.1l-27 34.1c-15.4-11.7-31-17.5-46.6-17.5s-14.9 1.7-19.7 5c-4.9 3.4-7.3 8-7.3 14s2.3 9.6 7 12.6c4.6 3.1 12.5 6.8 23.6 11.1 1.8.6 3.1 1.1 3.9 1.5l28.2 11.3c29.7 12.1 44.5 32.8 44.5 62s-7.8 36.5-23.3 50.2c-15.5 13.7-36.5 20.5-62.8 20.5ZM1030.5 310.5c-20.8 0-36.2-6-46.2-18.1-10-12.1-15-28.8-15-50.2v-66.5h-23.5v-40.1l26.7-2.4 5.9-45.4h45.1v45.4h40.7v42.5h-40.7v65.9c0 17.8 7.2 26.7 21.7 26.7s9.1-1 16-3l8.3 38.9c-14.3 4.2-27.3 6.2-39.2 6.2ZM1169.7 310.5c-23.2 0-43.1-8.2-59.8-24.6-16.7-16.4-25.1-38.4-25.1-65.9s8.4-49.5 25.1-66.1c16.7-16.5 36.7-24.8 59.8-24.8s42.8 8.3 59.4 24.8 24.9 38.5 24.9 66.1-8.3 49.5-24.9 65.9c-16.6 16.4-36.4 24.6-59.4 24.6Zm0-43.6c19.4 0 29.1-15.6 29.1-46.9s-9.7-47.2-29.1-47.2-29.7 15.7-29.7 47.2 9.9 46.9 29.7 46.9ZM1364.5 310.5c-25.1 0-45.8-8.1-61.9-24.3-16.1-16.2-24.2-38.3-24.2-66.2s8.8-49.8 26.4-66.2c17.6-16.4 39.1-24.6 64.4-24.6s36.2 6.1 50.5 18.4l-25.2 34.7c-7.5-6.3-14.9-9.5-22.3-9.5-11.9 0-21.3 4.3-28.2 12.8-6.9 8.5-10.4 20-10.4 34.4s3.4 25.4 10.2 34c6.8 8.6 15.7 12.9 26.6 12.9s20.2-4.1 30.3-12.2l20.5 35.6c-15 13.5-33.9 20.2-56.7 20.2ZM1451.2 306.4V63.5h52.5v135.7h1.2l52.5-65.9h58.8l-61.2 71.6 65.3 101.5h-58.8l-37.1-65.6-20.8 23.5v42.2h-52.5Z"
                          fill="black"/>
                </svg> */}
            </a>
            <li className=" flex justify-center items-center pt-2">
                <a href="https://www.instagram.com/oji_japon/">
                    <svg className="footer-002__sns-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#black"
                                d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/>
                    </svg>
                </a>
            </li>
            <nav className="footer-002__list">
                <ul className="flex gap-5">
                    <li className="">
                        <a href="http://rishiri-zen.jp/">
                            <Image src="/images/bunkei.png" width={500} height={500} alt='bunkei_logo'className={`w-[100%] rounded-md  `} 
                                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}/>
                        </a>
                    </li>
                    <li className="">
                        <a href="https://bun-kei.com/">
                            <Image src="/images/zen.png" width={500} height={500} alt='bunkei_logo'className={`w-[100%] rounded-md  `} 
                                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}/>
                        </a>
                    </li>
                </ul>
            </nav>
            <p className="footer-002__copyright">@ 2023 株式会社文継 All rights reserved.</p>
        </footer>
    )
}

export default Footer