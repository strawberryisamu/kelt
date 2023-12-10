import { ReactNode, useEffect, useState } from 'react';
import '@/styles/summer_camp/layout.css';
import Header from '@/app/components/summer_camp/Header';
import Footer from '@/app/components/summer_camp/Footer';
import FloatingButton from '@/app/components/summer_camp/FloatingButton';
import LoadingScreen from '../kelp_dry/LoadingScreen';
import FirstView from '../summer_camp/FirstView';



interface ImgItem {
    src: string;
    alt: string;
}

interface LayoutProps {
    title: string;
    subtitle: string;
    children: ReactNode;
    imgItems: ImgItem[];
}

const Layout: React.FC<LayoutProps> = ({ children , title, subtitle, imgItems}) => {
    const [windowHeight, setWindowHeight] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

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

        } else {
            // PCの場合はリサイズイベントで高さを更新
            window.addEventListener('resize', setRealViewportHeight);
            setRealViewportHeight(); // 初期設定

            return () => {
                window.removeEventListener('resize', setRealViewportHeight);
            };
        }
    }, []);

    return (
        <div className={`fadeIn summer_camp font-serif` } style={{backgroundColor: 'white'}}>
            <Header/>
            <FirstView title={title} subtitle={subtitle} windowHeight={windowHeight} imgItems={imgItems}/>
            <FloatingButton/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
