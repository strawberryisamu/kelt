import React, { useEffect, useState } from 'react';
import '../styles/globals.css'; // 必要なスタイルをインポート
import FirstView from '../app/components/FirstView';
import Navbar from '../app/components/Navbar'; // ナビゲーションバーをインポート
import Logo from '@/app/components/logo'
import MessageSection from '../app/components/MessageSection';
import SectionWithBackground from '../app/components/SectionWithBackground';
import CeoMessage from '../app/components/CeoMessage';
import CarouselType1Section from '../app/components/CarouselType1';
import LoadingScreen from '../app/components/LoadingScreen';
import RecruitmentDetails from '../app/components/RecruitmentDetails';
import Card from '../app/components/Card';
import Grid from '../app/components/Grid';
import ImageScroll from '../app/components/ImageScroll';
import ContactForm from '@/app/components/ContactForm';
import Footer from '@/app/components/Footer';

// #228ed4,#208d78,#db5518
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);
  const pageContentClass = isLoading ? "opacity-0" : "fadeIn";
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    // const imageUrls = [
    //   './images/akao.png',
    //   './images/shiosaki.png',
    //   './images/ogino.png',
    //   './images/breakfast.png',
    //   './images/ceomessage.png',
    //   './images/challenge_many_things.png',
    //   './images/firstView.png',
    //   './images/fisherman_student.png',
    //   './images/friends_forever.png',
    //   './images/imai_rakugo.png',
    //   './images/instagram.png',
    //   './images/interaction_with_students.png',
    //   './images/interest_in_1st.png',
    //   './images/kelt_dry.png',
    //   './images/kikyuu.png',
    //   './images/murakami_job.png',
    //   './images/breakfast.png',
    //   './images/breakfast.png',
    // ];
    
    // imageUrls.forEach(url => {
    //   const img = new Image();
    //   img.src = url;
    // });
    // モバイルデバイスかどうかをチェック
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const setRealViewportHeight = (): void => {
      const realViewportHeight: number = window.innerHeight;
      setWindowHeight(realViewportHeight);
    };

    if (isMobile) {
      // モバイルデバイスの場合は初回のみ高さを設定
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
      <FirstView windowHeight={windowHeight}  />
      <MessageSection/>
      <SectionWithBackground
        title="代表メッセージ"
        subtitle="本事業は、株式会社膳と株式会社文継の共同事業です"
        backgroundColor="lightgray"
        color='white'
      >
        <CeoMessage
            imageUrl="/images/ceomessage.png"
            title="利尻島は、若いうちに行け"
            subtitle="今しかできない、大切な何かを求めて"
        ><>
          <h2 className=' text-[3vw] md:text-[1.2vw]'>株式会社 膳  　　代表取締役　小坂 善一　　*写真左側</h2>
          <p>利尻島で20年間昆布漁師をしています。これから各産業で世界のリーダーになっていく京都大学の学生にこそ、学生の間に一次産業のド現場を見てほしいと思っています。心も体もしっかり鍛えますので、私の胸に飛び込んできてください。
          </p>
          <br />
          <br />
          <h2 className='text-[3vw] md:text-[1.2vw]'>株式会社 文継 　代表取締役　​大路 幸宗　　*写真右側</h2>
          <p>京都大学文学部を卒業後、三菱商事に入社しました。社内外で様々な方と交流する中で現場を知らない人が多すぎることを問題視するようになりました。日々の食生活の根本を支えてくれている一次生産者と対峙し、自然に振り回され合理がまかり通らない生産現場を目の当たりにし、多くのことを感じてほしいと思っています。
          </p>
        </></CeoMessage>
      </SectionWithBackground>

      <SectionWithBackground
        title="利尻島昆布干しとは"
        color='lightgray'
      >
        <div>
        <p style={{paddingBottom: 30}}>労働力不足という長年の課題を抱える利尻島の漁師のため、毎年6月〜7月の昆布漁最盛期に、京都大学の学生やその友人までを対象に2019年から実施している昆布干しのプロジェクトです。利尻島に住み込みで昆布干し作業に従事しながら漁師の親方の漁業に向き合う姿勢を学び、島民との様々な交流を通じて本州では得られない一生ものの経験をしていただきます。</p>
        <CarouselType1Section 
        title='参加対象者'
        subtitle='こんな京大生におすすめ'
        images={['/images/interest_in_1st.png', '/images/challenge_many_things.png','/images/friends_forever.png']}
        descriptions={['一次産業や地方創生に興味がある','学生時代に色々な事に挑戦したい','一生付き合える最高の仲間が欲しい']}
        />
        <CarouselType1Section
        title='昆布干しインターンの魅力'
        subtitle=''
        images={['/images/fisherman_student.png', '/images/kelt_dry.png','/images/breakfast.png']}
        descriptions={['非合理な自然と対峙する漁業の現場での、魅力的な漁師との協働','早朝に働いた後、振る舞って頂く朝食の格別な美味しさ','昆布干しに共に従事する島民や他の京大生との交流']}
        right={true}
        />
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

      {/* <SectionWithBackground
      title='実績'
      backgroundColor='lightgray'
      > */}
      <SectionWithBackground
      title='実績'
      subtitle='利尻島昆布干しは、注目を浴びています'
      color='lightgray'
      >
      <div className="grid gap-6 mb-8 grid-cols-1 ">
        <Card
           title='メディア掲載実績'
          >
            <>
            北海道新聞、共同通信社、ザッツ京大、大和書房webメディアIAM他
            </>
          </Card>
        </div>
        <div className="grid gap-6 mb-8 grid-cols-1 md:grid-cols-3">
        <Card
           title='80人'
           isCol={true}
          >
            <>
            利尻島京大昆布干しは2019年に開始以来、毎年実施しています。これまでに延人数で約80人の大学生に参加いただきました。
            </>
          </Card>
          <Card
           title='国内5大学、海外2大学'
           isCol={true}
          >
            <>
            京大生とその友人を対象にこれまで国内は京都大学・東京大学・東北大学・北海道大学・大阪大学、海外はロンドンやケニアの大学から参加をいただきました。
            </>
          </Card>
          <Card
           title='200人'
           isCol={true}
          >
            <>
            京大OBを中心にこれまで多数の企業の方が、利尻島京大昆布干しを支援するため、来島くださりました。
            <br />企業名：三菱商事、三井物産、住友商事、伊藤忠商事、資生堂、マッキンゼーアンドカンパニー、クボタ、JETRO・・・etc）
            </>
          </Card>
        </div>
      </SectionWithBackground>

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


      <SectionWithBackground
      title='京大生の声'
      color='lightgray'
      >
        <ImageScroll/>
      </SectionWithBackground>

      <SectionWithBackground
      title='話を聞いてみる'
      >
        <ContactForm/>
      </SectionWithBackground>
      <Footer/>
    </div>
  );
};

export default Home;

