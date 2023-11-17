import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import '../../styles/globals.css'; // 必要なスタイルをインポート
import '../../styles/MessageSection.css'; // 必要なスタイルをインポート
import { useInView } from 'react-intersection-observer';

const MessageSection = () => {

  const { ref, inView } = useInView({
    /* オプション: 閾値やトリガー条件を設定 */
    threshold: 0.7, // 例: 要素が50%表示された時にトリガー
    triggerOnce: true, 
    delay: 300
  });

  return (
    <section className={'relative md:pt-[55%]'} >
      <div  className={`bg-white md:absolute text-black top-0 left-0 w-full h-full flex justify-center items-center  box-border `} style={{padding: '0 10%' }}>
        <div ref={ref} className={`inline-block max-w-screen-md text-left align-baseline  md:[writing-mode:vertical-rl] duration-1000 message-section ${inView ? 'animate' : ''}`}>
          <div className={`message-title` }>今しかできない、<br className='mobile-only' /> 大切な何かを探して</div>
          <div className="message-content">
            <div className='md:ml-12 md:mb-0 mb-8'>大学生のうちにやっておくべきことは何ですか？<br />
            私たちは大学生のうちにしかできないことをやっておくべきと考えます。<br />
            その１つがこの利尻島京大昆布干しです。</div>
            <div className='md:ml-12 md:mb-0 mb-8'>最北極寒の大海原で、日本の和食を支えるため<br />今日も昆布漁に出る漁師の生活はどういうものでしょうか？<br />
            過疎の最前線である離島で、人不足がどう社会に影響を及ぼしているのでしょうか？</div>
            <div className='md:ml-12 md:mb-0 mb-8'>変わりゆく景色の中で、変わらない思いのために。<br />
            そして、同じ屋根の下、共同生活で育まれる一生ものの友情に触れてみませんか？</div>
            <div className='md:ml-12 md:mb-0 mb-8'><span className='inline-block md:-rotate-90'>AI</span>・デジタルが急進する中で敢えて我々は、アナログな現場を通じて<br />人間にとって本質的に大切なものを伝えていきたいと考えています。</div>
            <div className='md:mb-0 mb-8'>さあ、飛び込んでみよう。最果ての離島、利尻島へ。</div>
          </div>
        </div>
      </div>
    </section>
  );
};


// グローバルスタイルにカスタムCSSを注入する方法は、プロジェクトの設定により異なります。
// 例えば、styled-components や emotion などのライブラリを使用している場合は、
// createGlobalStyle や Global などのAPIを使用します。

export default MessageSection;
