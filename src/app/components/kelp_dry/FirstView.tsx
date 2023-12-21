import React, { useEffect, useRef, useState } from 'react';
import '@/styles/kelp_dry/FirstView.css'; // 必要なスタイルをインポート

// YouTube IFrame APIの型拡張
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

interface FirstViewProps {
  windowHeight: number;
  isMobile: boolean;
}

const FirstView: React.FC<FirstViewProps> = ({ windowHeight, isMobile }) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const redirectToYouTube = () => {
    window.location.href = 'https://www.youtube.com/watch?v=pupRPedUdQM&pp=ygUV5piG5biD5bmy44GX44CA5paH57aZ';
  };

  useEffect(() => {
    // スクリプトタグの挿入前にnullチェックを行う
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag.parentNode) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // onYouTubeIframeAPIReady にコールバックを設定
    window.onYouTubeIframeAPIReady = () => {
      // YouTube プレイヤーを初期化する
      // 正しい型注釈をイベントハンドラに適用する
      new YT.Player(playerRef.current!, {
        videoId: 'pupRPedUdQM',
        playerVars: {
          playsinline: 1,
          autoplay: 1,
          fs: 0,
          rel: 0,
          controls: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          showinfo:0,
          start: 0,
        },
        events: {
          onReady: (event: YT.PlayerEvent) => {
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event: YT.OnStateChangeEvent) => {
            if (event.data === YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          },
        }
      });
    };
  });

  return (
    <div className="relative w-full bg-black" style={{ height: `${windowHeight}px`}}>
      <div className='video'>
        <div ref={playerRef} id="player"/>
        <button
        onClick={redirectToYouTube}
        className='play'
      >
        <img src='./images/kkrn_icon_saisei_11.svg' alt="Play" style={{ width: '120px', height: '120px' }} className='max-w-full h-auto mr-4'/>
      </button>
      </div>
      <div className='first_view_title text-start'>
        <h1 className='text-[18px] md:text-[45px] font-bold'>
          利尻島京大昆布干しバイト
        </h1>
      </div>
      <div id="scroll-down-prompt" className="scrolldown-animation">
        <span>Scroll</span>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default FirstView;
