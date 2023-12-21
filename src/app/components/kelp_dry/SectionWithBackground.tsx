import React, { useRef, useState, useEffect, ReactNode } from 'react';
import '@/styles/kelp_dry/Section.css'; // 必要なスタイルをインポート
import { useInView } from 'react-intersection-observer';


interface SectionWithBackgroundProps {
  title: string;
  subtitle?: string;
  isHidden?: boolean;
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
  isHidden = true,
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


  const Color = color ? {backgroundColor: color} : {}

  const slideFromleft = slideFromLeft
    ? {right: "0vw"} 
    : {left: "0vw"};

  const backgroundleft = backgroundLeft
    ? {left: "0%"} 
    : {left: "-30%"};

  return (
    <section className="relative pb-[5.1282051282%] " style={{}}>
      <div className={``} style={{padding: '0 0% 10%', ...Color}}>
      {isHidden? <></>
      :<div className={`background ${inView ? 'visible' : ''}`} style={{ ...backgroundleft}} >
          <div style={{...slideFromleft , backgroundColor: 'lightgray'}}></div>
      </div>}
        <div ref={ref} className={`top-0 left-0 ${back? 'visionsss': ''}` } style={{zIndex: 10 ,padding: '0 10%'}}>
            <h1  className={`animated-title font-bold text-xl lg:text-3xl  ${inView ? 'animate' : ''}`}>{title}</h1>
            {subtitle && <p  className={`subtitle leading-relaxed mb-4 lg:text-xl text-lg ${inView ? 'animate' : ''} `}>{subtitle}</p>}
            <div className={`${subtitle ? 'children' : ''} `}>
              {children}
            </div>
          </div>
      </div>
    </section>
  );
};


export default SectionWithBackground;

