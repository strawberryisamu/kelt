import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


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
              <div className='w-[75%] md:w-[300px]' onClick={handleOpen}>
                <Image 
                  src='/images/imai.png' 
                  alt='imai' 
                  width={500} 
                  height={500} 
                  className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                  style={{ aspectRatio: "1 / 1", objectFit: "cover", objectPosition: 'left' }} 
                />
                <p className=" md:text-sm text-[3vw] pb-2 text-start">Sota Imai, Faculty of Literature, Kyoto University</p> 
              </div>
      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <Box sx={style}>
                                    <div className='md:text-[1.5vw] text-[3vw] w-[90%] mx-auto'>
                                      <p className='font-light'>
                                        A few years ago, I participated in a kelp drying on Rishiri Island and was fascinated by its nature. With the desire to make the Island known to more people around the world, I have organized this summer camp every summer.
                                        We are well-acquainted with Rishiri Island, so we can tailor the best tour to accommodate the participants. But if you come all the way to Japan's northernmost island, you shouldn't be satisfied with just sightseeing. 
                                        Surrounded by the world's finest nature, we engage in passionate discussions about the future while enjoying the island. After a few intense days, participants will be able to create unforgettable memories and forge deep bonds.
                                        In the northern edge of Japan, an unseen world awaits you!
                                      </p>
                                    </div>
                    </Box>
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
      <Button onClick={handleOpen}>【To Stop the Division in the World】</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: '90%' }}>
                  <p className='font-light '>
                  Conflicts fueling global division continue to arise in various regions. When considering what can be done at the grassroots level, the idea of fostering exchanges among young people who will shape the future, regardless of their nationality, emerged.
                  In this summer camp, young individuals from diverse nationalities and cultures come together on remote islands in Japan for profound interactions. Through this, we hope to advance cross-cultural understanding and multicultural coexistence, even if just a little, aspiring for a more peaceful world.
                  </p>
          <Button onClick={handleClose}>Close</Button>
        </Box>
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
      <Button onClick={handleOpen}>【To Promote Local Revitalization Models Globally】</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: '90%' }}>
                  <p className='font-light'>
                  The challenge of revitalizing local communities is not exclusive to Japan; it is a universal concern. I believe that young people from different countries can breathe new life into local areas and present fresh approaches for the next generation. Consequently, I am committed to sharing Japan's models for regional revitalization with the beautiful towns and villages worldwide.
                  </p>
          <Button onClick={handleClose}>Close</Button>
        </Box>
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
    <div>
        <section>
          <div className='pt-[3%] px-[5%] '>
            <div className='font-bold text-3xl md:text-5xl mt-5 tracking-tight text-start'>
              Organizer
            </div>
            <div className='flex flex-col md:flex-row pt-[1%] justify-center items-start gap-5'>
              <ChildModalOrganizer/>
            </div>
          </div>
        </section>
        <section>
          <div className='pt-[3%] px-[5%] '>
            <div className='font-bold text-3xl md:text-5xl mt-5 tracking-tight text-start'>
              Supervisor 
            </div>
            <div className='flex  flex-col md:flex-row pt-[1%] justify-center items-start gap-5'>
              <div className='w-[75%] md:w-[300px] 'onClick={handleOpen}>
                <Image 
                  src='/images/oji.png' 
                  alt='imai' 
                  width={500} 
                  height={500} 
                  className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                  style={{ aspectRatio: "1 / 1", objectFit: "cover", objectPosition: 'left' }} 
                />
                <p className=" md:text-sm text-[3vw] pb-2 text-start">Yukimune Oji, CEO, Bunkei Corp.</p> 
              </div>
              <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
              >
              <Box sx={style}>
                  <div className='md:text-[1.5vw] text-[3vw] w-[90%] mx-auto'>
                    <ChildModal1/>
                    <ChildModal2/>
                  </div>
              </Box>
              </Modal>
            </div>
          </div>
        </section>
        </div>
  );
};

export default MessageFromTheOrganizers;
