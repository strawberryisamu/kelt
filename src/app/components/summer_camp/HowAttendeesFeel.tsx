import React, { ReactNode, useState } from 'react';
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

interface ChildModalProps {
    imageSrc: string;
    imageAlt: string;
    description: string;
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
        <div className="" onClick={handleOpen}>
            <Image src={imageSrc} alt={imageAlt} width={500} height={500} className={`w-[100%] rounded-md border-2 border-gray-300 `} 
                style={{ aspectRatio: "2 / 1", objectFit: "cover", objectPosition: 'right' }}/>
            <p className="md:text-sm text-[3vw] mt-[1%] pb-[5%] text-center">{description}</p> 
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: '90%' }}>
            {children}
            <Button onClick={handleClose}>Close</Button>
          </Box>
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
            <p className="md:text-sm text-[3vw] mt-[1%] pb-[5%] text-center">{description}</p>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: '90%' }}>
            {children}
            <Button onClick={handleClose}>Close</Button>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }

interface HowAttendeesFeelProps {
    id?: string;
    title: string;
    description1: string;
    description2: string;
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
        <div id={id} className="pb-[5%] pt-[5%]">
            {/* <h1 className="font-bold text-5xl mt-5 tracking-tight text-center">{title}</h1> */}
            <div className="flex flex-col md:flex-row">
                <div className='flex-1 flex flex-col mx-[5%] pb-[5%]'>
                    <ChildModal1 
                    imageSrc={imageSrc1}
                    imageAlt={imageAlt1}
                    description={description1}
                    children={body1}
                    />
                </div>
                <div className='flex-1 flex flex-col mx-10'>
                    <ChildModal2
                    imageSrc={imageSrc2}
                    imageAlt={imageAlt2}
                    description={description2}
                    children={body2}
                    />
                </div>
            </div>
        </div>
    );
};

export default HowAttendeesFeel;
