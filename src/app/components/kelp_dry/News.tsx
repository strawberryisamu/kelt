import React, { useState, useEffect } from 'react';
// import Modal from '@/app/components/kelp_dry/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import '@/styles/kelp_dry/News.css';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '80%',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const NewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const newsItems = [
    { date: '2023.12', description: 
    <>
    <a onClick={handleOpen}  className="border-b-[1px] border-black cursor-pointer">第１回昆布干し同窓会</a>を開催しました。
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <Image src='/images/reunion1.png' fill alt='' className='p-5' style={{aspectRatio: '1 / 1', objectFit: 'cover'}}/>
      </Box>
    </Modal></> 
    },
    { date: '2023.07', description: <>北海道新聞から取材を受けました。詳しくは<a target="_blank" rel="noopener noreferrer" href='https://www.hokkaido-np.co.jp/article/884337/' className="border-b-[1px] border-black">こちら</a>。</> },
    { date: '2022.02', description: <>京都大学から取材を受けました。詳しくは<a target="_blank" rel="noopener noreferrer" href='https://www.thats.pr.kyoto-u.ac.jp/2022/02/24/11932/' className="border-b-[1px] border-black">こちら</a>。</> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % newsItems.length);
    }, 5000); // 3000ミリ秒ごとに切り替える

    return () => clearInterval(interval); // コンポーネントのアンマウント時にインターバルをクリアする
  }, []);

  return (
    <section className="bg-[lightgray] pt-5 pb-5">
      <div className='px-10 flex flex-col md:flex-row'>
        <div className="md:w-1/4">
          <h2 className="text-lg font-bold  mt-2 mb-1;">最新情報</h2>
        </div>
        <div className="md:w-3/4">
          <div className="flex flex-col gap-3">
            {newsItems.map((item, index) => (
                <div key={index} className='flex '>
                  <div className="">{item.date}</div>
                  <p className="ml-5">{item.description}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
