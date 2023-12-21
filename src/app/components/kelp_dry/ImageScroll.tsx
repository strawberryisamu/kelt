import React, { ReactNode, use, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image'
import '@/styles/kelp_dry/ImageScroll.css'; // 必要なスタイルをインポート

const ImageScroll = () => {
  const [ref1, inView1] = useInView({ threshold: 0.7});
  const [ref2, inView2] = useInView({ threshold: 0.7});
  const [ref3, inView3] = useInView({ threshold: 0.7});
  useEffect(() => { 

  } ,[]);

  return (
    <div className="container">
      <div className='flex-1 pc'>
        <div className=' sticky-element'>
          <CSSTransition in={inView1} timeout={500} classNames="fade" unmountOnExit>
            <div className="absolute h-[100%] w-[100%]">
              <div className='flex flex-col items-center justify-center h-[100%] w-[100%]'>
                <Image width={500} height={500} className="mx-0 rounded-md border-2 border-gray-300" style={{ aspectRatio: "1 / 1", objectFit: "cover" ,objectPosition: 'right' }} src='/images/akao.png' alt=''/>
              </div>
            </div>
          </CSSTransition>
          <CSSTransition in={inView2} timeout={500} classNames="fade" unmountOnExit>
            <div className="absolute h-[100%] w-[100%]">
              <div className='flex items-center justify-center h-[100%] w-[100%]'>
                <Image width={500} height={500} className="mx-0 rounded-md border-2 border-gray-300" style={{ aspectRatio: "1 / 1", objectFit: "cover" }} src='/images/shiosaki.png' alt=''/>
              </div>
            </div>
          </CSSTransition>
          <CSSTransition in={inView3} timeout={500} classNames="fade" unmountOnExit>
            <div className="absolute h-[100%] w-[100%]">
              <div className='flex items-center justify-center h-[100%] w-[100%]'>
                <Image width={500} height={500} className="mx-0 rounded-md border-2 border-gray-300" style={{ aspectRatio: "1 / 1", objectFit: "cover" }} src='/images/ogino.png' alt=''/>
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
      <div className='description'>
        <div className='flex items-center justify-center w-[100%] mt-10'>
          <Image width={500} height={500} className={`mobile w-[70%] rounded-md border-2 border-gray-300`} style={{ aspectRatio: "1 / 1", objectFit: "cover", objectPosition: 'right' }} src='/images/akao.png' alt={''}/>
        </div>
        <div ref={ref1} className={'centered-content'} >
            <h2 className='text-lg font-bold mt-2 mb-1'>【思い切って利尻に飛び込んだ】</h2>
            <p className='leading-relaxed mb-4'>社会人になって数ヶ月、学生に比べると格段に短い夏休みですが今年も利尻に行きました。
            今振り返ると学生最後の年、思い切って利尻に飛び込んで良かったと心から思います。</p>
            <h2 className='text-lg font-bold mt-2 mb-1'>【利尻に来るには好奇心だけで充分】</h2>
            <p className='leading-relaxed mb-4'>利尻での経験が今の仕事に直接役立っているということではありません。これから先、役に立つ日が来るかも今はわかりません。それでも、役に立つ・立たないという土俵を超えて、利尻の山と海に囲まれた毎日は純粋に楽しく、新しい出会いに溢れていました。利尻が気になる、とりあえず暮らしてみたい、その好奇心だけで利尻に来るには充分だと思います。
            <br /><br />
            赤尾 奏音さん
            <br />（京都大学総合人間学部4回生、2021年度に参加）</p>
        </div>
        <div className='flex items-center justify-center w-[100%]'>
          <Image width={500} height={500} className={`mobile w-[70%] rounded-md border-2 border-gray-300`} style={{ aspectRatio: "1 / 1", objectFit: "cover", objectPosition: 'right' }} src='/images/shiosaki.png' alt={''}/>
        </div>
        <div ref={ref2} className={'centered-content'}>
        <h2 className='text-lg font-bold mt-2 mb-1'>【京大入学前から昆布を干そうと思っていた】</h2>
        <p className='leading-relaxed mb-4'>京大生向けに利尻島での昆布干しバイトがあると知ったのは高校生の頃でした。そのときから昆布を干すという作業がなかなかできないものであるという理由で、京大に入ったら参加しようと心に決めていました。
        2021年度はコロナの影響で大学の講義がオンラインで行われるものも多く、この機会を逃したら参加するのは難しいだろうと考え、応募しました。</p>
        <h2 className='text-lg font-bold mt-2 mb-1'>【利尻の学びを里山保全に活かす】</h2>
        <p className='leading-relaxed mb-4'>学部で里山保全に関して学ぼうとしていますが、応募する段になって僻地の現状を現地の方に聞ける貴重な機会であると思いました。町役場で働いている受入先の漁師さんの弟さんや公営塾の講師の方をはじめとして色々な方にお話を聞くことができました。今後様々なフィールドで現地の方にお話を伺う土台となり大変有意義であったと感じています。
        <br /><br />
        塩崎 翔大さん
        <br />（京都大学農学部1回生、2021年度に参加）</p>
        </div>
        <div className='flex items-center justify-center w-[100%]'>
          <Image width={500} height={500} className={`mobile w-[70%] rounded-md border-2 border-gray-300`} style={{ aspectRatio: "1 / 1", objectFit: "cover", objectPosition: '30%' }} src='/images/ogino.png' alt={''}/>
        </div>
        <div ref={ref3} className={'centered-content'}>
        <h2 className='text-lg font-bold mt-2 mb-1'>【昆布干しは今しかできないと思った】</h2>
        <p className='leading-relaxed mb-4'>「いま行かないと今後人生で昆布を干すことはない気がする」、そう思い立って参加を決めました。昆布干しは朝3時から。朝起きるのは大変でしたが、利尻島の朝の新鮮な空気を吸い込みながら、島の人たちと一緒に汗を流し交流も楽しみながら昆布干しをすることができました。
        　昆布干しで出逢う人たちは本当に暖かく、夏期だけ島に戻ってくるひとも、他の仕事の始業前に昆布を干すひとも、よそものである私たちをとてもやさしく迎え入れてくれました。漁師でないひとも日々天候を気にして昆布干しの有無を話題に出したり、自然とともに生きる島のひとの1日、１年、人生には”昆布”があることはとても新鮮に感じられました。</p>
        <h2 className='text-lg font-bold mt-2 mb-1'>【一生付き合いたいと思える仲間ができた】</h2>
        <p className='leading-relaxed mb-4'>京大荘に帰ればひとつ屋根の下で同じ釜の飯を食べ、毎日大爆笑して、時に夜な夜な語り合い、時に衝突できる、2時半起床で通じ合った最高の仲間がいます。この仲間たちは一生の宝物です。
        <br /><br />
        荻野 なつれさん
        <br />（京都大学大学院 アジア・アフリカ地域研究研究科 、2022年度に参加）</p>
        </div>
      </div>
    </div>
  );
}

export default ImageScroll;
