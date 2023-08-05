import React, { useState } from 'react';
import { ImArrowRight2 } from 'react-icons/im';
import { MdQrCodeScanner } from 'react-icons/md';
import { FcMultipleSmartphones } from 'react-icons/fc';
import { IoIosArrowDown } from 'react-icons/io';
import Header from "../layouts/Header";
import TypesOfQRCode from "./TypesOfQRCode";
import HeroSection from './HeroSection';
import DifferenceQRfly from './DifferenceQRfly';
import CreateOwnQR from './CreateOwnQR';
import FooterNew from '../layouts/FooterNew';
import QuestionSection from './QuestionSection';
import { Helmet } from 'react-helmet';
import HeadMeta from '../../../components/HeadMeta';


const Home = () => {

  //  const [showDetailsWebsite, setShowDetailsWebsite] = useState(0);
  //  const [showDetailsBusiness, setShowDetailsBusiness] = useState(false);
  // const [basicInfo, setBasicInfo] = useState('info');
  // const [open, setOpen] = useState(1);

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const images = ['/img/Menu.jpg', '/img/Business.jpg', '/img/vCard Plus.jpg']; // Replace with your image URLs

  //  const handleOpen = (value) => {
  //   setOpen(open === value ? 0 : value);
  // };

  // const [dropdowns, setDropdowns] = useState([
  //   { question: 'Question 1', answer: 'Answer 1', isOpen: false },
  //   { question: 'Question 2', answer: 'Answer 2', isOpen: false },
  //   { question: 'Question 3', answer: 'Answer 3', isOpen: false }
  // ]);


  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  // };

  // const handlePrevious = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  // };

  

  return (<>
    <HeadMeta 
      canonical={window.location.href}
      title="QR code generator with logo and profile page for your company | FlexQR"
      description="Represent your company with a qr code. It is now free to generate qr code to represent your company easily. You will get a company profile page to share with qr code generator"
    />
    <div className="  mx-auto bg-slate-100  items-center ">
     
    <Header />

    <HeroSection />
    <DifferenceQRfly/>   
    <CreateOwnQR />
    <TypesOfQRCode />

    <QuestionSection/>

    <FooterNew />
      
    </div >
  </>
  );
}
export default Home;
