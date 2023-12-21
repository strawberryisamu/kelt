import React, { ReactNode, useState } from 'react';
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
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '90%',
  bgcolor: 'background.paper',
  border: '2px solid black',
  boxShadow: 24,
};

interface ChildModalProps {
    imageSrc: string;
    imageAlt: string;
    description: ReactNode;
    children: React.ReactNode;
}

const ChildModal1: React.FC<ChildModalProps> = ({ imageSrc, imageAlt, description, children }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <React.Fragment>
        <div onClick={handleOpen}>
            <Image src={imageSrc} alt={imageAlt} width={500} height={500} className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}/>
            {description}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          sx={{ 
            height:'100%',
            overflow:'scroll',}}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
            <Fade in={open}>
                <Box sx={{ ...style, width: '90%' }}>
                    <div className='flex mt-[5%] gap-5 px-5 flex-col md:flex-row'>
                        <div className='flex-1'>
                        <Image src={imageSrc} alt={imageAlt} width={500} height={500} className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                            style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}/>
                            {description}
                        </div>
                        <div className='w-[100%] md:w-[50%] text-lg md:text-2xl leading-[2rem] font-serif'>
                            {children}
                        </div>
                    </div>
                    <div className='absolute flex items-center justify-end pr-5 md:justify-center w-[100%] bottm-5 md:bottom-10 '>
                        <Button onClick={handleClose}><span className='text-xl text-black rounded-md'>Close</span></Button>
                    </div>
                </Box>
          </Fade>
        </Modal>
      </React.Fragment>
    );
  };

  const ChildModal2: React.FC<ChildModalProps> = ({ imageSrc, imageAlt, description, children }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <div onClick={handleOpen}>
            <Image src={imageSrc} alt={imageAlt} width={500} height={500} className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}/>
            {description}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          sx={{ 
            height:'100%',
            overflow:'scroll',}}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
            <Fade in={open}>
          <Box sx={{ ...style, width: '90%' }}>
            <div className='flex mt-[5%] gap-5 px-5 flex-col md:flex-row'>
                <div className='flex-1'>
                <Image src={imageSrc} alt={imageAlt} width={500} height={500} className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                    style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}/>
                    {description}
                </div>
                <div className='w-[100%] md:w-[50%] text-lg md:text-2xl leading-[2rem] font-serif'>
                    {children}
                </div>
            </div>
            <div className='absolute flex items-center justify-end pr-5 md:justify-center w-[100%] bottm-5 md:bottom-10 '>
                <Button onClick={handleClose}><span className='text-xl text-black rounded-md'>Close</span></Button>
            </div>
          </Box>
          </Fade>
        </Modal>
      </React.Fragment>
    );
  }

interface HowAttendeesFeelProps {
    id?: string;
    title: string;
    description1: ReactNode;
    description2: ReactNode;
    body1: string;
    body2: string;
    imageSrc1: string;
    imageAlt1: string;
    imageSrc2: string;
    imageAlt2: string;
}

const HowAttendeesFeel: React.FC<HowAttendeesFeelProps> = ({ id, title, body1, description1,description2, body2, imageSrc1, imageAlt1, imageSrc2, imageAlt2 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div id={id} className="pb-[5%] pt-5">
            {/* <h1 className="font-bold text-5xl mt-5 tracking-tight text-center">{title}</h1> */}
            <h2 className='text-5xl px-[5%] font-thin'>These are the voices of the participants. <br /> Please <span className='text-yellow-500 font-normal'>click</span> on the photo to read.</h2>
            <div className="flex flex-col md:flex-row pt-10">
                <div className='flex-1 flex flex-col mx-[5%] pb-[5%]'>
                    <ChildModal1 
                    imageSrc={imageSrc1}
                    imageAlt={imageAlt1}
                    description={description1}

                    >
                        {body1}
                    </ChildModal1>
                </div>
                <div className='flex-1 flex flex-col mx-10'>
                    <ChildModal2
                    imageSrc={imageSrc2}
                    imageAlt={imageAlt2}
                    description={description2}
                    >
                    {body2}
                    </ChildModal2>
                </div>
            </div>
        </div>
    );
};

export default HowAttendeesFeel;
