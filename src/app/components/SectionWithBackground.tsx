import React, { useRef, useState, useEffect, ReactNode } from 'react';
import '../../styles/Section.css'; // 必要なスタイルをインポート
import { useInView } from 'react-intersection-observer';


interface SectionWithBackgroundProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  children?: ReactNode;
  slideFromLeft?: boolean;
  backgroundLeft?: boolean;
  back?: boolean;
  color?: string;
}

const SectionWithBackground: React.FC<SectionWithBackgroundProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundColor,
  children, 
  slideFromLeft = false,
  backgroundLeft = false,
  back = false,
  color
}) => {

  const { ref, inView } = useInView({
    /* オプション: 閾値やトリガー条件を設定 */
    threshold: 0.1, // 例: 要素が50%表示された時にトリガー
    triggerOnce: true, 
    delay: 800
  });

  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundAttachment: 'fixed' }
    : { backgroundColor };

  const Color = color ? {backgroundColor: color} : {}

  const slideFromleft = slideFromLeft
    ? {right: "0vw"} 
    : {left: "0vw"};

  const backgroundleft = backgroundLeft
    ? {left: "0%"} 
    : {left: "-30%"};

  return (
    <section className="relative pt-[6.8376068376%] pb-[5.1282051282%] " style={{}}>
      <div className={``} style={{padding: '0 5% 10%', ...Color}}>
        <div ref={ref} className={`top-0 left-0 ${back? 'visionsss': ''}` } style={{padding: '0 10%'}}>
            <h3  className={`animated-title ${inView ? 'animate' : ''}`}>{title}</h3>
            {subtitle && <p  className={`subtitle ${inView ? 'animate' : ''}`}>{subtitle}</p>}
            <div className={`absolute background ${inView ? 'visible' : ''}`} style={{ ...backgroundleft}} >
                <div style={{...slideFromleft ,...backgroundStyle}}></div>
            </div>
            <div className={`${subtitle ? 'children' : ''} `}>
              {children}
            </div>
          </div>
      </div>
    </section>
  );
};

{/* <h2 ref={titleRef} className="text-2xl title-with-underline"><span>{title}</span></h2> */}

export default SectionWithBackground;

