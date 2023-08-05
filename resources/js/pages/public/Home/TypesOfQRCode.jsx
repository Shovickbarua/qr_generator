import React, { useState } from 'react'
import { BiFoodMenu } from 'react-icons/bi';
import { BsPersonVcardFill } from 'react-icons/bs';
import { SiGooglemybusiness } from 'react-icons/si';
import { FaAppStore, FaFacebook, FaFacebookF } from 'react-icons/fa';
import { BsWifi } from 'react-icons/bs';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { BsFiletypePdf } from 'react-icons/bs';
import { BsFileImage } from 'react-icons/bs';
import { CiViewList } from 'react-icons/ci';
import { BsFileMusic } from 'react-icons/bs';
import { RiCoupon2Line } from 'react-icons/ri';
import { MdOutlineFeedback } from 'react-icons/md';
import { BsChatLeftText } from 'react-icons/bs';
import { BsCalendar4Event } from 'react-icons/bs';
import Container from '../../../components/UI/Container';

const TypesOfQRCode = () => {
   const [activeQRtype, setActiveQRtype] = useState('website');

   let activeQRContent = '';
  if (activeQRtype === 'website') {
    activeQRContent = <div className=" border rounded-3xl lg:w-4/5 w-full mx-auto mt-20">
      <div className=" lg:grid lg:grid-cols-2">
        <div className=" bg-orange-500 lg:px-10 lg:py-10  px-4 py-4 ">
          <img src="/img/qrweb1.png" className="  lg:w-96 lg:h-60 h-60 w-96 mx-auto" alt="" />
        </div>
        <div className=" bg-slate-200 px-10 py-10">
          <h2 className=" text-center font-serif text-2xl font-bold text-neutral-800 ">Website</h2>
          <p className=" text-lg mt-5 ">Link your URL to a QR code so that anyone can access your website in the blink of an eye. The easier it is to access, the greater the chances of increasing traffic to your website.</p>
          <div className=" mt-10 text-center">
          <a href="/account/my-qrcodes/choose-qrstyle"> <button type="button" className="text-white font-serif bg-blue-700 hover:bg-blue-800 font-medium lg:rounded-full round md:rounded-full rounded-full lg:text-2xl md:text-xl text-2xl lg:px-16 md:px-10 px-10 lg:py-5 md:py-4 py-3  mr-3 ">Create QR code</button></a>
          </div>
        </div>
      </div>

    </div>
  }
  if (activeQRtype === 'business') {
    activeQRContent = <div className=" border rounded-3xl lg:w-4/5 w-full mx-auto mt-20">
      <div className=" lg:grid lg:grid-cols-2  ">
        <div className="  bg-sky-500 lg:px-10 lg:py-10  px-4 py-4 ">
          <img src="/img/business.png" className=" lg:w-96 lg:h-60 h-60 w-96 mx-auto" alt="" />
        </div>
        <div className=" bg-slate-200 px-10 py-10">
          <h2 className=" text-center font-serif font-bold text-2xl text-neutral-800 ">Business</h2>
          <p className=" text-lg mt-5 ">Share your business information easily and quickly with everyone: hours, location, contact and all the information that may be of interest to potential customers.</p>
          <div className=" mt-10 text-center">
          <a href="/account/my-qrcodes/choose-qrstyle"> <button type="button" className="text-white font-serif bg-blue-700 hover:bg-blue-800 font-medium lg:rounded-full round md:rounded-full rounded-full lg:text-2xl md:text-xl text-2xl lg:px-16 md:px-10 px-10 lg:py-5 md:py-4 py-3  mr-3 ">Create QR code</button></a>
          </div>
        </div>
      </div>

    </div>
  }
  if (activeQRtype === 'personal') {
    activeQRContent = <div className=" border rounded-3xl lg:w-4/5 w-full mx-auto mt-20">
      <div className=" lg:grid lg:grid-cols-2  ">
        <div className=" bg-emerald-500 lg:px-10 lg:py-10   px-4 py-4 ">
          <img src="/img/vcard.png" className=" lg:w-96 lg:h-60 h-60 w-96 mx-auto my-auto " alt="" />
        </div>
        <div className=" bg-slate-200 px-10 py-10">
          <h2 className=" text-center font-serif font-bold text-2xl text-neutral-800 ">vCard Plus</h2>
          <p className=" text-lg mt-5 ">Take your business card to the next level with a QR code. Share more information about your profile and your company in an innovative and unique way. And the best of all, change the information in the QR code whenever you need to.</p>
          <div className=" mt-10 text-center">
          <a href="/account/my-qrcodes/choose-qrstyle"> <button type="button" className="text-white font-serif bg-blue-700 hover:bg-blue-800 font-medium lg:rounded-full round md:rounded-full rounded-full lg:text-2xl md:text-xl text-2xl lg:px-16 md:px-10 px-10 lg:py-5 md:py-4 py-3  mr-3 ">Create QR code</button></a>
          </div>
        </div>
      </div>
    </div>
  }

  return (
    <div className='lg:my-24 my-10 '>
      < Container>
      <div>
        <h2 className="lg:text-6xl font-bold md:text-2xl text-2xl text-center ">Create different types of QR codes</h2>
        <h4 className="lg:text-2xl md:text-xl text-xl text-slate-500 text-center mt-6 ">QR codes can hold a large amount of content and at FlexQR, we offer them all.</h4>
      </div>

      <div className="flex px-20  text-8xl mt-20 w-full overflow-hidden  ">
        <div className="flex overflow-x-auto mx-auto ">


          {/* <div className=" border-solid border-2 rounded-2xl border-black p-4 mx-8 hover:border-blue-700  "> <  BiFoodMenu /> <p className=" text-xl text-center hover:text-blue-700 "  >  <button onClick={() => setActiveQRtype('website') } >  Website</button></p>    
       </div> */}


          <div className={`border-solid border-2 rounded-2xl border-black p-4 mx-8 hover:border-blue-700 ${activeQRtype === 'website' ? "border-blue-700 bg-white" : ""}`} onClick={() => setActiveQRtype('website')}> <  BiFoodMenu /> <p className=" text-xl text-center hover:text-blue-700 "  >  <button>  Website</button></p>
          </div>
          {/* <button onClick={handleButtonClickBusiness}>Business</button> */}
          <div className={`border-solid border-2 rounded-2xl border-black p-4 mx-8 hover:border-blue-700 ${activeQRtype === 'business' ? "border-blue-700 bg-white" : ""}`} onClick={() => setActiveQRtype('business')}> <BsPersonVcardFill /><p className=" text-xl text-center hover:text-blue-700"><button>Business</button></p> </div>

          <div className={`border-solid border-2 rounded-2xl border-black p-4 mx-8 hover:border-blue-700 ${activeQRtype === 'personal' ? "border-blue-700 bg-white" : ""}`} onClick={() => setActiveQRtype('personal')}> <SiGooglemybusiness /><p className=" text-xl text-center hover:text-blue-700"><button>Personal</button></p> </div>
          {/* <div className=" border-solid border-2 rounded-2xl border-black p-4 mx-8"> <TbWorld /> <p className=" text-xl text-center">Website</p></div>
        <div className=" border-solid border-2 rounded-2xl border-black p-4 mx-8"> <FaAppStore /><p className=" text-xl text-center">Apps</p> </div>
        <div className=" border-solid border-2 rounded-2xl border-black p-4 mx-8"> <BsWifi /><p className=" text-xl text-center">WiFi</p> </div>
        <div className=" border-solid border-2 rounded-2xl border-black p-4 mx-8"> <MdOutlineOndemandVideo /><p className=" text-xl text-center">video</p> </div>
        <div className=" border-solid border-2 rounded-2xl border-black p-4 mx-8"> <BsFiletypePdf /><p className=" text-xl text-center">PDF</p></div>
        <div className=" border-solid border-2 rounded-2xl border-black p-4 mx-8"> <BsFileImage /> <p className=" text-xl text-center">Image</p></div>
        <div className=" border-solid border-2 rounded-2xl border-black p-4 mx-8"> <CiViewList /><p className=" text-xl text-center">List of links</p> </div >
        <div className=" border-solid border-2 rounded-2xl border-black p-4 mx-8"> <BsFileMusic /><p className=" text-xl text-center">Music</p> </div >     
        <div className=" border-solid border-2 rounded-2xl border-black p-4 mx-8"> <RiCoupon2Line /><p className=" text-xl text-center">Coupon</p></div >
        <div className=" border-solid border-2 rounded-2xl border-black p-4 mx-8"> <MdOutlineFeedback /> <p className=" text-xl text-center">Feedback</p></div >
        <div className=" border-solid border-2 rounded-2xl border-black p-4 mx-8"><BsChatLeftText /><p className=" text-xl text-center">Text</p></div>
        <div className=" border-solid border-2 rounded-2xl border-black p-4 mx-8"><BsCalendar4Event /> <p className=" text-xl text-center">Event</p></div> */}
        </div>
      </div>

      {activeQRContent}
      </Container>
    </div>
  )
}

export default TypesOfQRCode