import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import '@/styles/globals.css'; // 必要なスタイルをインポート
import '@/styles/kelp_dry/MessageSection.css'; // 必要なスタイルをインポート
import { useInView } from 'react-intersection-observer';

const MessageSection = () => {

  const { ref, inView } = useInView({
    /* オプション: 閾値やトリガー条件を設定 */
    threshold: 0.7, // 例: 要素が50%表示された時にトリガー
    triggerOnce: true, 
    delay: 300
  });

  return (
    <section className={'relative'} >
      <div  className={`bg-white text-black top-0 left-0 w-full h-full flex justify-center items-center  box-border px-10`} >
        <div ref={ref} className={`inline-block max-w-screen-md text-left align-baseline  duration-1000 message-section ${inView ? 'animate' : ''}`}>
          <div className={`message-title` }>今しかできない、<br className='mobile-only' /> 大切な何かを探して</div>
          <div className="message-content">
            <div className='mb-8'>大学生のうちにやっておくべきことは何ですか？<br />
            私たちは大学生のうちにしかできないことをやっておくべきと考えます。<br />
            その１つがこの利尻島京大昆布干しです。</div>
            <div className='mb-8'>最北極寒の大海原で、日本の和食を支えるため<br />今日も昆布漁に出る漁師の生活を想像したことはありますか？<br />
            毎日人が不足しているニュースを耳にしますが、過疎の最前線である離島で、　実際何が起こっているのか、目にしてみませんか？</div>
            <div className='mb-8'>時代が変わっても、変わらないものとは何なのか。<br />
            同じ屋根の下、共同生活で育まれる一生ものの友情に触れてみませんか？</div>
            <div className='mb-8'>AI・デジタルが急進する中で敢えて我々は、アナログな現場を通じて<br />人間にとって本質的に大切なものを伝えていきたいと考えています。</div>
            <div className='mb-8'>さあ、飛び込んでみよう。最果ての離島、利尻島へ。</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
