import React, { ReactNode } from 'react';
import '@/styles/kelp_dry/CeoMessage.css'; // 必要なスタイルをインポート
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
        threshold: 0.5, // 例: 要素が50%表示された時にトリガー
        triggerOnce: true, 
      });
    return (
        <div ref={ref} className={`relative gap-2 flex w-full flex-col lg:flex-row gap-5 ${inView ? 'animate' : ''}`} >
            <div className="flex-1 flex justify-center items-start left ">
                <Image width={500} height={500} src={imageUrl} alt="Description" className="w-full h-[300px] lg:h-[500px]" style={{objectFit: 'cover', aspectRatio: '2/1', objectPosition:'10% '}}/>
            </div>
            <div className="flex-1 right">
                <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>
                {subtitle && <p className={`text-md lg:text-lg leading-relaxed`}>{subtitle}</p>}
                <div className={`text-md lg:text-lg mt-5`}>{children}</div>
            </div>
        </div>
    );
};

export default CeoMessage;
