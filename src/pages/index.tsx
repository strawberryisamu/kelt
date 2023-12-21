import React, { useEffect, useState } from 'react';
import '../styles/globals.css'; // 必要なスタイルをインポート
import FirstView from '../app/components/kelp_dry/FirstView';
import Navbar from '../app/components/kelp_dry/Navbar'; // ナビゲーションバーをインポート
import Logo from '@/app/components/kelp_dry/logo'
import FloatingButton from '../app/components/kelp_dry/FloatingButton';
import NewsSection from '@/app/components/kelp_dry/News';
import MessageSection from '../app/components/kelp_dry/MessageSection';
import SectionWithBackground from '../app/components/kelp_dry/SectionWithBackground';
import CeoMessage from '../app/components/kelp_dry/CeoMessage';
import CarouselType1Section from '../app/components/kelp_dry/CarouselType1';
import Gallery from '@/app/components/kelp_dry/Gallary';
import LoadingScreen from '../app/components/kelp_dry/LoadingScreen';
import RecruitmentDetails from '../app/components/kelp_dry/RecruitmentDetails';
import Card from '../app/components/kelp_dry/Card';
import Grid from '../app/components/kelp_dry/Grid';
import ImageScroll from '../app/components/kelp_dry/ImageScroll';
import ContactForm from '@/app/components/kelp_dry/ContactForm';
import Footer from '@/app/components/kelp_dry/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

// #228ed4,#208d78,#db5518
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pageContentClass = isLoading ? 'opacity-0': 'opacity-100 transition-opacity duration-1000' ;
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    // Get the current URL
    const currentURL = router.asPath;

    // Define the expected URL
    const expectedURL = '/';
    console.log(currentURL);
    // Check if the current URL matches the expected URL
    if (currentURL === expectedURL) {
      // The URLs match, you can perform actions here
      console.log('Current URL matches expected URL');
    } else {
      // The URLs don't match
      console.log('Current URL does not match expected URL');
      router.push(currentURL);
    }
  }, [router.asPath]); 

  useEffect(() => {
    // モバイルデバイスかどうかをチェック
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const setRealViewportHeight = (): void => {
      const realViewportHeight: number = window.innerHeight;
      setWindowHeight(realViewportHeight);
    };

    if (isMobile) {
      // モバイルデバイスの場合は初回のみ高さを設定
      setIsMobile(isMobile);
      setRealViewportHeight();
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
    } else {
      // PCの場合はリサイズイベントで高さを更新
      window.addEventListener('resize', setRealViewportHeight);
      setRealViewportHeight(); // 初期設定
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => {
        window.removeEventListener('resize', setRealViewportHeight);
      };
    }
  }, []);


  if (isLoading) {
    return <LoadingScreen />;
  }


  return (
    <div className={`font-serif text-gray-800 ${pageContentClass}`}>
      <Logo/>
      <Navbar /> {/* ナビゲーションバーを追加 */}
      <FloatingButton />
      <FirstView windowHeight={windowHeight} isMobile={isMobile} />
      <NewsSection />
      <MessageSection/>
      <div id='ceo-message'>
        <SectionWithBackground
          title="代表メッセージ"
          subtitle="本事業は、株式会社膳と株式会社文継の共同事業です"
          isHidden={false}
          backgroundColor="lightgray"
          color='white'
        >
          <CeoMessage
              imageUrl="/images/ceomessage.png"
              title="利尻島は、若いうちに行け"
              subtitle="今しかできない、大切な何かを求めて"
          >
          <div className='flex flex-col gap-5'>
            <div className='flex-1 '>
              <div className='pb-2'>
                <Link href="https://note.com/doors_hokkaido/n/n4026f2b09a77">
                <h2 className='text-lg md:text-xl  font-semibold'>株式会社 膳  　代表取締役　<span className="border-b-[1px] border-black text-3xl"><span className='sm:hidden'><br /></span>小坂 善一</span>  <span className='text-xs md:text-md font-normal pl-5'>*写真左側</span>
                </h2></Link>
              </div>
              <p className='leading-relaxed '>利尻島で20年間昆布漁師をしています。これから各産業で世界のリーダーになっていく京都大学の学生にこそ、学生の間に一次産業のド現場を見てほしいと思っています。心も体もしっかり鍛えますので、私の胸に飛び込んできてください。
              </p>
            </div>
            <div className='flex-1'>
              <div className='pb-2'>
                <Link href="https://bun-kei.com/company/">
                <h2 className='text-lg md:text-xl  font-semibold'>株式会社 文継 　代表取締役　<span className="border-b-[1px] border-black text-3xl"><span className='sm:hidden'><br /></span>​大路 幸宗</span>  <span className='text-xs md:text-md font-normal pl-5'>*写真右側</span>
                </h2></Link>
              </div>
              <p className='leading-relaxed '>京都大学文学部を卒業後、三菱商事に入社しました。政治家・官僚・商社マンなど様々な方と仕事をする中で、現場を知らずに物事を進める現実を問題視するようになりました。大学生には、自然に振り回され合理がまかり通らない生産現場、その現場で働く生産者の精神から、多くのことを感じてほしいと思っています。
              </p>
            </div>
          </div>
          </CeoMessage>
        </SectionWithBackground>
      </div>

      <div id='business-overview'>
        <SectionWithBackground
          title="利尻島昆布干しとは"
          color='lightgray'
        >
          <div>
          <p className='leading-relaxed mb-4' style={{paddingTop: 10, paddingBottom: 30}}>労働力不足という長年の課題を抱える利尻島の漁師のため、毎年6月〜7月の昆布漁最盛期に、京都大学の学生やその友人までを対象に2019年から実施している昆布干しのプロジェクトです。利尻島に住み込みで昆布干し作業に従事しながら漁師の親方の漁業に向き合う姿勢を学び、島民との様々な交流を通じて本州では得られない一生ものの経験をしていただきます。</p>
          
          <div className="hidden md:block">
            <CarouselType1Section 
            title='参加対象者'
            subtitle=''
            images={['/images/interest_in_1st.png', '/images/challenge_many_things.png','/images/friends_forever.png']}
            descriptions={['一次産業や地方創生に興味がある','学生時代に色々な事に挑戦したい','一生付き合える最高の仲間が欲しい']}
            />
          </div>
          <div className="block md:hidden">
            <Gallery images={[{src: '/images/interest_in_1st.png', alt:'recomenndation1'}, {src:'/images/challenge_many_things.png', alt: 'recomenndation2'},{src: '/images/friends_forever.png', alt: 'recomenndation3'}]} 
            text={<><p className='leading-relaxed mb-4'>一次産業や地方創生に興味がある</p>
            <p className='leading-relaxed mb-4'> 学生時代に色々な事に挑戦したい </p>
            <p className='leading-relaxed mb-4'> 一生付き合える最高の仲間が欲しい</p></>} 
            title="こんな京大生におすすめ" />
          </div>

          <div className="hidden md:block">
            <CarouselType1Section
            title='昆布干しの魅力'
            subtitle=''
            images={['/images/fisherman_student.png', '/images/breakfast.png','/images/kelt_dry.png']}
            descriptions={['非合理な自然と対峙する漁業の現場での、魅力的な漁師との協働','早朝に働いた後、振る舞って頂く朝食の格別な美味しさ','昆布干しに共に従事する島民や他の京大生との交流']}
            right={true}
            />
          </div>
          <div className="block md:hidden">
            <Gallery images={[{src: '/images/fisherman_student.png', alt:'temptaion1'}, {src:'/images/breakfast.png', alt: 'temptaion2'},{src: '/images/kelt_dry.png', alt: 'temptaion3'}]} 
            text={<><p className='leading-relaxed mb-4'>非合理な自然と対峙する漁業の現場での魅力的な漁師との協働</p>
            <p className='leading-relaxed mb-4'> 早朝に働いた後振る舞って頂く朝食の格別な美味しさ </p> 
            <p className='leading-relaxed mb-4'> 昆布干しに共に従事する島民や他の京大生との交流</p> </>} title="昆布干しバイトの魅力" />
          </div>
          </div>

        </SectionWithBackground>
        <SectionWithBackground
          title="募集要項"
          color='white'
        >
          <div>
            <RecruitmentDetails/>
          </div>
        </SectionWithBackground>
      </div>

      <div id='accomplishment'>
        <SectionWithBackground
        title='実績'
        color='lightgray'
        backgroundColor='white'
        >
          
        <div className="grid mb-8 grid-cols-1 ">
          <Card
            title_children={<><span className='text-[5vw] md:text-[2vw]'>メディア掲載</span></>}
            isAccomplishment={true}
            >
              <span className='text-[6vw] md:text-[2vw] leading-[1.8] '>
                <Link href="https://www.hokkaido-np.co.jp/article/884337/">
                  <span className="border-b-[1px] border-black">北海道新聞</span>
                </Link>
                <span className='hidden md:inline'>　</span>
                <span className='inline md:hidden'><br /></span>
                <Link href="https://prtimes.jp/main/html/rd/p/000000001.000107188.html">
                  <span className="border-b-[1px] border-black">PRTIMES</span>
                </Link>
                <span className='hidden md:inline'>　</span>
                <span className='inline md:hidden'><br /></span>
                <Link href="https://www.thats.pr.kyoto-u.ac.jp/2022/02/24/11932/">
                  <span className="border-b-[1px] border-black">ザッツ京大</span>
                </Link>
                <span className='hidden md:inline'>　</span>
                <span className='inline md:hidden'><br /></span>
                <Link href="https://iam-iam.jp/28909/">
                  <span className="border-b-[1px] border-black">webメディア IAM</span>
                </Link>
                <span className='hidden md:inline'>　</span>
                <span className='inline md:hidden'><br /></span>
                他
              </span>
            </Card>
          </div>
          <div className="grid gap-1 mb-8 grid-cols-1 md:grid-cols-3">
          <Card
            title_children={<><span  className='text-[20vw] md:text-[10vw] text-sky-600'>100</span>人</>}
            isCol={true}
            isAccomplishment={true}
            >
              <>
              利尻島京大昆布干しは2019年に開始以来、毎年実施しています。これまでに延人数で約100人の大学生に参加いただきました。
              </>
            </Card>
            <Card
            title_children={<><span className='text-[0.8em]'>国内</span><span  className='text-[20vw] md:text-[10vw] text-sky-600'>5</span>　<span className='text-[0.8em]'>海外</span><span  className='text-[20vw] md:text-[10vw] text-sky-600'>2</span>　<span className='text-[0.8em]'>大学</span></>}
            isCol={true}
            isAccomplishment={true}
            >
              <>
              京大生とその友人を対象にこれまで国内は京都大学・東京大学・東北大学・北海道大学・大阪大学、海外はロンドンやケニアの大学から参加をいただきました。
              </>
            </Card>
            <Card
            title_children={<><span  className='text-[20vw] md:text-[10vw] text-sky-600'>200</span>人</>}
            isCol={true}
            isAccomplishment={true}
            >
              <>
              京大OBを中心にこれまで多数の企業の方が、利尻島京大昆布干しを支援するため、来島くださりました。
              <br />企業名：三菱商事、三井物産、住友商事、伊藤忠商事、資生堂、マッキンゼーアンドカンパニー、クボタ、JETRO・・・etc）
              </>
            </Card>
          </div>
        </SectionWithBackground>
      </div>

      
      <SectionWithBackground
      title='学生の活動実績'
      subtitle='昆布干し以外にも島の様々な産業と関わることができます。'
      color='white'
      >
        <Grid>
          <Card
           title='【観光】気球係留体験の実施'
           imageUrl='/images/kikyuu.png'
          >
            <>
            気球部に所属する京都大学の学生が島民向けに気球係留体験を実施しました。<br /><br />
          ​離島という難しい環境で、​必要な人や機材を集め、足りない資金を利尻町の補助金を活用しながら補填し、プロジェクトマネジメントを学んで頂きました。
            </>
          </Card>
          <Card
           title='【教育】落語体験の実施'
           imageUrl='/images/imai_rakugo.png'
          >
            <>
            落語研究会に所属する京都大学の学生が、島の子どもたちに落語体験を実施しました。
            <br />
            <br />
            ​島の子どもたちに、はじめて生で日本の伝統芸能である落語を見ていただく機会を提供しました。
            </>
          </Card>
          <Card
           title='【商工業】飲食店の支援'
           imageUrl='/images/murakami_job.png'
          >
            <>
            年間15万人の観光客が訪れる利尻島はまさに6-8月がその繁忙期。人手不足に困っている飲食店を支援しました。
            ​<br />
            <br />
            同じお店で働く島民とも交流でき、より深く利尻島の暮らしを知っていただくことができました。
            </>
          </Card>
          <Card
           title='【教育】利尻高校との交流'
           imageUrl='/images/interaction_with_students.png'
          >
            <>
            昆布干しに参加した京大生が、修学旅行で京都を訪問した利尻高校生をガイドとして案内しました。
            ​<br />
            <br />
            再会を果たすことで、京都大学の学生はより深く島の高校生と深い関係性を築くことができました。
            </>
          </Card>
        </Grid>
      </SectionWithBackground>

      <div id='comment-kyodaisei'>
        <SectionWithBackground
        title='京大生の声'
        color='lightgray'
        >
          <ImageScroll/>
        </SectionWithBackground>
      </div>

      <div id='contact'>
        <SectionWithBackground
        title='話を聞いてみる'
        subtitle='次回の利尻島京大昆布干しに興味がある方はこちら'
        >
          <p className='leading-relaxed mb-4'>募集の案内など昆布干しに関するメルマガを発信しますので、登録お願いします。募集を見逃したくない方は登録がおすすめです！</p>
          <ContactForm/>
        </SectionWithBackground>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;

