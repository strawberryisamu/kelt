import React, { useEffect, useRef } from 'react';
import '@/styles/FirstView.css';

// YouTube IFrame APIの型拡張
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

interface FirstViewProps {
  windowHeight: number;
}

const FirstView: React.FC<FirstViewProps> = ({ windowHeight }) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const redirectToYouTube = () => {
    window.location.href = 'https://www.youtube.com/watch?v=KdXUgTywSUo';
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
        videoId: 'KdXUgTywSUo',
        playerVars: {
          playsinline: 1,
          autoplay: 1,
          fs: 0,
          rel: 0,
          controls: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          start: 50,
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
  }, []);

  return (
    <div className="relative w-full mb-10" style={{ height: `${windowHeight}px`}}>
      {/* YouTube 動画を表示するためのコンテナ */}
      <div ref={playerRef} id="player" />

      <h1 style={{
        position: 'absolute',
        top: '5%',

        marginLeft: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '10px 20px',
        borderRadius: '10px',
        fontSize: '3vw',
        color: 'white',
        zIndex:100,
      }}>
        京大昆布干しインターンシップ
      </h1>
      <button
        onClick={redirectToYouTube}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',



          padding: '15px',
          cursor: 'pointer',
          zIndex: 100,
        }}
      >
        <img src='./images/kkrn_icon_saisei_11.svg' alt="Play" style={{ width: '120px', height: '120px' }} />
      </button>
      {/* <img
        src="./images/firstView.png" // 画像のパスを指定
        alt="First View Image"
        className="absolute w-full h-full object-cover"
      /> */}
      <div id="scroll-down-prompt" className="scrolldown-animation">
        <span>Scroll</span>
        <div className="arrow"></div>
      </div>
      {/* ... */}
    </div>
  );
};

export default FirstView;
