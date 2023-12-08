import React, { useEffect, useRef } from 'react';
import '@/styles/summer_camp/wave.css';

interface WaveProps {
    color: string;
    index: number;
    height: number;
}

const Wave: React.FC<WaveProps> = ({ color, index , height}) => {
    const requestId = useRef<number>();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const info = useRef({ seconds: 0, t: 0 });

    const drawWave = (canvas: HTMLCanvasElement, color: string, alpha: number, zoom: number, delay: number) => {
        const context = canvas.getContext("2d");
        if (context) {
            context.fillStyle = color;
            context.globalAlpha = alpha;
    
            // 上部の波形の描画
            context.beginPath();
            context.moveTo(0, 0);
            drawSine(canvas, info.current.t / 2, zoom, delay, canvas.height/5); // 上部の波形
            context.lineTo(canvas.width + 10, 3*canvas.height/5);
            context.lineTo(0, 3*canvas.height/5);
            context.closePath();
            context.fill();
    
            // 下部の波形の描画
            context.beginPath();
            context.moveTo(0, canvas.height);
            drawSine(canvas, info.current.t / 2, zoom, delay, 4*canvas.height/5); // 下部の波形
            context.lineTo(canvas.width + 10, 3*canvas.height/5);
            context.lineTo(0, 3*canvas.height/5);
            context.closePath();
            context.fill();
        }
    };



    const drawSine = (canvas: HTMLCanvasElement, t: number, zoom: number, delay: number, startY: number) => {
        const xAxis = Math.floor(startY);
        const yAxis = 0;
        const context = canvas.getContext("2d");
        if (context) {
            const unit = 30; // Define the 'unit' variable here
            let x = t;
            let y = Math.sin(x) / zoom;
            context.moveTo(yAxis, unit * y + xAxis);
    
            for (let i = yAxis; i <= canvas.width + 10; i += 10) {
                x = t + (-yAxis + i) / unit / zoom;
                y = Math.sin(x - delay) / 3;
                context.lineTo(i, unit * y + xAxis);
            }
        }
    };


    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            canvas.width = document.documentElement.clientWidth;
            canvas.height = height;
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        const draw = () => {
            if (!canvas) return;

            const context = canvas.getContext("2d");
            if (!context) return;

            context.clearRect(0, 0, canvas.width, canvas.height);
            drawWave(canvas, color, 1, 10, 0);

            info.current.seconds += 0.014;
            info.current.t = info.current.seconds * Math.PI;

            requestId.current = requestAnimationFrame(draw);
        };

        requestId.current = requestAnimationFrame(draw);

        return () => {
            if (requestId.current) cancelAnimationFrame(requestId.current);
            window.removeEventListener('resize', handleResize);
        };
    }, [color, index]);


    return (
        <div className="wave relative" style={{zIndex: 10}}>
            <canvas ref={canvasRef} id={`waveCanvas${index}`}></canvas>
        </div>
    );
};

export default Wave;