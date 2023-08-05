import React from 'react'
import Container from '../../../components/UI/Container';
import { ImArrowRight2 } from 'react-icons/im';
import { MdQrCodeScanner } from 'react-icons/md';
import { FcMultipleSmartphones } from 'react-icons/fc';

const  DifferenceQRfly = () => {
  return (
    <div> 
        <Container> 
        <div className="lg:grid lg:grid-cols-11 mx-auto container  lg:mt-28 mt-10">
        
    <div className=" col-span-5  px-4">
      <h1 className=" lg:text-4xl md:text-2xl font-bold text-2xl">FlexQR makes <br /> all the <br /> difference</h1>
      <h4 className=" lg:text-xl md:text-lg text-base  pt-5 text-slate-500" >If you want to create your own QR code, a good tool for doing so is the FlexQR QR generator, due to its ease of use and all the options it offers to make your ideas come true or your business grow.</h4>

      <div className=" lg:flex md:flex mt-10">
        <div className=" pl-3">
          <p className=" align-center gap-2 text-lg items-center inline-flex justify-center ">  < ImArrowRight2 color="" />  Unlimited QR codes </p>
          <p className="items-center inline-flex justify-center gap-2 text-lg">  < ImArrowRight2 />  Scan without limits </p>
          <p className="items-center inline-flex justify-center gap-2 text-lg">  < ImArrowRight2 />  Mass creation </p>
        </div>
        <div className=" pl-3">


          <p className="items-center inline-flex justify-center gap-2 text-lg">  < ImArrowRight2 />  Add multiple users </p>
          <p className="items-center inline-flex justify-center gap-2 text-lg">  < ImArrowRight2 />  Complete monitoring </p>
          <p className="items-center inline-flex justify-center  gap-2 text-lg">  < ImArrowRight2 />  White label (CNAME) </p>
        </div>
      </div>
      <div className=" mt-10 text-center">
      <a href="/account/my-qrcodes/choose-qrstyle"> <button type="button" className="text-white font-serif bg-blue-700 hover:bg-blue-800 font-medium lg:rounded-full round md:rounded-full rounded-full lg:text-2xl md:text-xl text-2xl lg:px-16 md:px-10 px-10 lg:py-5 md:py-4 py-3  mr-3 ">Create QR code</button></a>

      </div>

    </div>

    <div className="col-span-3 mx-4 mt-5 ">
      <div className=" border border-spacing-9 bg-slate-200 px-4  rounded-2xl pt-2 ">
        {/* <img src="/img/dynamicqr.png" alt="" /> */}
        <MdQrCodeScanner color="#023373" size="80px" />

        <p className="text-xl mt-4 font-bold text-black">Dynamic QR codes</p>
        <p className=" text-lg mt-5 text-slate-700 mb-3">You can edit and manage the content without printing them again.</p>
      </div>
      <div className=" border border-spacing-9 bg-slate-200 px-4 rounded-2xl mt-10 pt-2 ">
        {/* <img src="/img/multiplelanding.png" alt="" /> */}
        <FcMultipleSmartphones color="#023373" size="80px" />
        <p className="text-xl mt-4 font-bold text-black">Multiple landing pages</p>
        <p className=" text-lg mt-5 text-slate-700 mb-3">Code customization with our design tool.</p>
      </div>
    </div>

    <div className="col-span-3  lg:mt-20 mt-10 mb-10 lg:mb-20 mx-4">
      <div className=" border border-spacing-9 bg-slate-200 px-4 rounded-2xl pt-2 ">
        <img src="/img/completestatistics.png" className=" w-36 h-auto" alt="" />
        <p className=" text-xl mt-4 font-bold text-black">Complete statistics</p>
        <p className=" text-lg mt-5 text-slate-700 mb-3">Exports all the information of the scans they have done.</p>
      </div>
      <div className=" border border-spacing-9 bg-slate-200 px-4 rounded-2xl mt-10 pt-2 ">
        <img src="/img/customizeyourqr.png " className=" w-24 h-auto" alt="" />
        <p className="text-xl mt-4 font-bold text-black">Customize your QR code</p>
        <p className=" text-lg mt-5 text-slate-700 mb-3">Customize your QR with your logo, colors and shapes.</p>
      </div>
    </div>
    
    
  </div>
  </Container>
  </div>
  )
}

export default DifferenceQRfly;
