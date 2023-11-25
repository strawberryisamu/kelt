import React, { ReactNode } from 'react';
import '../../styles/CeoMessage.css'; // 必要なスタイルをインポート
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';

type CeoMessageProps = {
    imageUrl: string;
    title: string;
    subtitle: string;
    children: ReactNode;
};


const CeoMessage: React.FC<CeoMessageProps> = ({ imageUrl, title, subtitle, children }) => {
    const { ref, inView } = useInView({
        /* オプション: 閾値やトリガー条件を設定 */
        threshold: 0.3, // 例: 要素が50%表示された時にトリガー
        triggerOnce: true, 
      });
    return (
        <div ref={ref} className={`relative gap-2 flex w-full ceo-content  ${inView ? 'animate' : ''}`} >
            <div className="w-1/2 flex justify-center items-center left">
                <Image width={500} height={500} src={imageUrl} alt="Description" className="w-full h-auto" />
            </div>
            <div className="w-1/2 pt-4 right">
                <h2 className=" text-[5vw] md:text-[2vw]">{title}</h2>
                {subtitle && <p className={`mt-1 text-[2.5vw] md:text-[0.95vw] `}>{subtitle}</p>}
                <div className={`mt-8 text-[3vw] md:text-[1.1vw] `}>{children}</div>
            </div>
        </div>
    );
};

export default CeoMessage;
