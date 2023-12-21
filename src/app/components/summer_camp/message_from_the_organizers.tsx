import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute' as 'absolute',
  overflowY: "scroll", 
  maxHeight: "90%",
  top: `50%`,
  left: '50%',
  transform: 'translate(-50%, -50%)',

  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p:  4,
};

function ChildModalOrganizer() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        <div className='w-[100%]' >
        <div className='flex gap-2' onClick={handleOpen}>
          <div className='lg:w-[500px] text-3xl md:text-8xl  text-start ' >
            <h1 className='font-bold tracking-tight'>Organizer</h1>
            <div className='lg:hidden'>
              <Image 
                src='/images/imai.png' 
                alt='imai' 
                width={500} 
                height={500} 
                className={`lg:hidden w-[100%] lg:flex-1 rounded-md border-2 border-gray-300 `} 
                style={{ aspectRatio: "2 / 1", objectFit: "cover",  }} 
              />
            </div>
            <div className=" md:text-5xl text-5xl pb-2 text-start font-serif">
              <p>Sota Imai</p>
              <p>Faculty of Literature</p>
              <p>Kyoto University</p>
            </div>
            <div className='text-3xl mt-5 flex justify-start font-thin '>
              <p className='border-2 p-2 inline-block cursor-pointer'>Click Here</p>
            </div>
          </div>
          <Image 
            src='/images/imai.png' 
            alt='imai' 
            width={500} 
            height={500} 
            className={`hidden lg:block flex-1 rounded-md border-2 border-gray-300 `} 
            style={{ aspectRatio: "2 / 1", objectFit: "cover",  }} 
          />
        </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div className='flex flex-col lg:flex-row gap-5' style={{overflow: 'hidden'}}>
                <div className='flex-1 flex lg:flex-col flex-row '>
                  <Image 
                    src='/images/imai.png' 
                    alt='imai' 
                    width={500} 
                    height={500} 
                    className={`lg:w-full w-1/2 lg:h-[300px] h-[200px] rounded-md border-2 border-gray-300 `} 
                    style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'left' }} 
                  />
                  <div className='flex-1 m-auto lg:m-0'>
                    <h1 className='font-bold tracking-tight'>Organizer</h1>
                    <div className=" md:text-xl text-md pb-2 text-start font-serif">
                      <p>Sota Imai</p>
                      <p>Faculty of Literature</p>
                      <p>Kyoto University</p>
                    </div>
                  </div>
                </div>
                <div className='md:text-xl leading-relaxed text-lg w-[100%] lg:w-[60%] mx-auto'>
                  <p className='font-light'>
                    A few years ago, I participated in a kelp drying on Rishiri Island and was fascinated by its nature. With the desire to make the Island known to more people around the world, I have organized this summer camp every summer.
                    We are well-acquainted with Rishiri Island, so we can tailor the best tour to accommodate the participants. But if you come all the way to Japan's northernmost island, you shouldn't be satisfied with just sightseeing. 
                    Surrounded by the world's finest nature, we engage in passionate discussions about the future while enjoying the island. After a few intense days, participants will be able to create unforgettable memories and forge deep bonds.
                    In the northern edge of Japan, an unseen world awaits you!
                  </p>
                </div>
              </div>
                <div className='flex items-center justify-end md:justify-center bottom-0 md:bottom-10 '>
                    <Button onClick={handleClose}><span className='text-xl text-black rounded-md'>Close</span></Button>
                </div>
            </Box>
          </Fade>
        </Modal>
    </React.Fragment>
  );
}

function ChildModal1() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className='mt-[5%]'>
        <Button onClick={handleOpen}><span className='text-yellow-500 border-b-[1px] text-[2vw]  normal-case font-serif '>To Stop the Division in the World</span></Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={{ ...style, width: '90%' }}>
            <h1>To Stop the Division in the World</h1>
                    <p className='font-light '>
                    Conflicts fueling global division continue to arise in various regions. When considering what can be done at the grassroots level, the idea of fostering exchanges among young people who will shape the future, regardless of their nationality, emerged.
                    In this summer camp, young individuals from diverse nationalities and cultures come together on remote islands in Japan for profound interactions. Through this, we hope to advance cross-cultural understanding and multicultural coexistence, even if just a little, aspiring for a more peaceful world.
                    </p>
            <Button onClick={handleClose}><span className='text-black'>Close</span></Button>
          </Box>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}

function ChildModal2() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className=' mt-[5%] mb-[5%]'>
        <Button onClick={handleOpen}><span className='text-yellow-500 border-b-[1px] text-[2vw] normal-case font-serif '>To Promote Local Revitalization Models Globally</span></Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={{ ...style, width: '90%' }}>
            <div className='flex flex-col lg:flex-row'>

              <div className='flex-1'>
                <h1>To Promote Local Revitalization Models Globally</h1>
                  <p className='font-light'>
                  The challenge of revitalizing local communities is not exclusive to Japan; it is a universal concern. I believe that young people from different countries can breathe new life into local areas and present fresh approaches for the next generation. Consequently, I am committed to sharing Japan's models for regional revitalization with the beautiful towns and villages worldwide.
                  </p>
              </div>
            </div>
            <Button onClick={handleClose}><span className='text-black'>Close</span></Button>
          </Box>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}


const MessageFromTheOrganizers: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <section>
        <div className='flex flex-col'>
          <div className='pt-[3%] px-[5%] '>
            <div className='pt-[1%] '>
              <ChildModalOrganizer/>
            </div>
          </div>
          <div className='pt-[3%] '>
            <div className='md:flex-row pt-[1%] justify-center items-start gap-5 '>
              <div className='flex flex-col lg:flex-row gap-2 mx-[5%]' onClick={handleOpen} >
                <div className='lg:w-[500px] w-[100%] text-3xl md:text-8xl  text-start ' >
                  <h1 className='font-bold tracking-tight'>Supervisor</h1>
                  <div className='lg:hidden'>
                    <Image 
                      src='/images/oji.png' 
                      alt='oji' 
                      width={500} 
                      height={500} 
                      className={`w-[100%] lg:flex-1 rounded-md border-2 border-gray-300 `} 
                      style={{ objectFit: "cover", aspectRatio: "2 / 1", objectPosition: '10% 10%' }} 
                    />
                  </div>
                  <div className=" md:text-5xl text-5xl pb-2 text-start font-serif">
                    <p>Yukimune Oji</p>
                    <p>CEO</p>
                    <p>Bunkei Corp.</p>
                  </div>
                  <div className='text-3xl mt-5 flex justify-start font-thin '>
                    <p className='border-2 p-2 inline-block cursor-pointer'>Click Here</p>
                  </div>
                </div>
                <Image 
                  src='/images/oji.png' 
                  alt='oji' 
                  width={500} 
                  height={500} 
                  className={`hidden lg:block flex-1 rounded-md border-2 border-gray-300 `} 
                  style={{ objectFit: "cover", aspectRatio: "2 / 1", objectPosition: '10% 10%' }} 
                />
              </div>
              <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  closeAfterTransition
                  slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      timeout: 500,
                    },
                  }}
              >
                <Fade in={open}>
                  <Box sx={{...style, backgroundColor: 'black'}}>
                      <div className='md:text-[1.5vw] text-[3vw] w-[90%] mx-auto '>
                        <ChildModal1/>
                        <ChildModal2/>
                      </div>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div>
        </div>
        </section>
  );
};

export default MessageFromTheOrganizers;
