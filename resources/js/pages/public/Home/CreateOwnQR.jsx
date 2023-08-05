import React from 'react'
import { MdQrCodeScanner } from 'react-icons/md';
import Container from '../../../components/UI/Container';

const CreateOwnQR = () => {
  return (
    <div>
        
        <div className=" bg-slate-200  lg:py-20 py-10">
        <Container>
    <div>  <h1 className=" lg:text-5xl md:text-2xl text-2xl font-bold text-center ">Create your own QR code in a matter of minutes </h1>
    </div>

    <div className="lg:flex lg:grid-cols-2 lg:mt-16 mt-10 container">
      <div className=" lg:text-right lg:px-10 md:px-5 sm:px-3 md:text-left sm:text-left ">
        <div className="pl-8">
          <p className="text-2xl mt-4 text-black font-bold md:pl-20 ">Choose the content of your QR code</p>
          <p className="text-xl mt-5 mr-3 ">Select from a wide variety of options: PDF, menu, video, business cards, web, apps, etc.</p>
        </div>
        <img src="/img/step.png" className=" lg:mt-24 md:mt-10 mt-0 lg:h-64 h-40 w-auto md:mx-auto mx-auto" alt="" />
        <p className="text-2xl text-black md:pl-20 font-bold  lg:mt-24 md:mt-10 pl-8 ">Download your QR code</p>
        <p className="text-xl mt-5 pl-8">Get your QR code in different formats (pdf, png, svg), print it or show it in a digital format and voila!</p>
      </div>
      <div className=" lg:text-left lg:px-10 lg:mx-auto ">
        <div className=" lg:mt-4 md:mt-10 mt-10  lg:ml-20 mx-20"> <MdQrCodeScanner color="#023373" size="140px" /></div>
        {/* <img src="/img/step1.jpg" alt="" /> */}
        <p className="text-2xl  text-black font-bold lg:mt-32 md:mt-10 mt-10 md:pl-8 pl-8">Customise and design it as you like</p>
        <p className="text-xl mt-5 pl-8">Fill in all the information and use our QR generator to get a unique design.</p>
        <img src="/img/step2.jpg" className=" lg:mt-24 md:mt-10 mt-10 md:mx-auto mx-auto" alt="" />
      </div>
    </div>
    <div className=" mt-20 text-center">
    <a href="/account/my-qrcodes/choose-qrstyle"> <button type="button" className="text-white font-serif bg-blue-700 hover:bg-blue-800 font-medium lg:rounded-full round md:rounded-full rounded-full lg:text-2xl md:text-xl text-2xl lg:px-16 md:px-10 px-10 lg:py-5 md:py-4 py-3  mr-3 ">Create QR code</button></a>
    </div>
    </Container>
  </div>
 
  </div>
  )
}

export default CreateOwnQR;