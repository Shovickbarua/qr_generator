import React from 'react'
import Container from '../../../components/UI/Container';
import PrivacyPolicy from '../FooterFeature/PrivacyPolicy';
import TermCondition from '../FooterFeature/TermCondition';

const FooterNew = () => {
  return (
    <div>

      <div className=" text-center pt-20 pb-7  bg-sky-800 ">
        <Container>
          <p className="lg:text-4xl md:text-2xl sm:text-2xl font-sans text-white">Try our QR code generator for lifetime for free.</p>
          <a href="/register">  <button type="button" className=" mt-8  text-white bg-blue-700 border-solid border-2 border-white font-medium rounded-3xl text-xl py-3  px-10  "> Register now</button> </a>

          <img src="/img/qrpan4.png" className=" pt-16 mx-24 w-10/12 h-auto " alt="" />
        </Container>
      </div>



      <div className=" bg-sky-900 ">
        <Container>
          <div className='md:flex w-full md:gap-4 justify-between pt-20 pl-7 md:pl-0'>
            <div className="w-full md:w-3/7 ">
              <div className=" md:ml-10 ">
                <img src="/img/flexqr-logo.png" className="h-8 mb-3 w-auto" alt="" />
                <h4 className="mx-auto mt-2 text-slate-100 text-lg font-mono">Create your own QR <br /> codes and boost your <br /> business or idea</h4>

              </div>
              {/* <p > <FaFacebook />  </p>
           <p> < BsInstagram /></p> 
            */}
            </div>
            <div className="w-full md:w-4/7 lg:flex justify-between gap-10 md:mt-0 mt-5 pb-10">
              <div className="">
                <h4 className="mt-4 font-serif text-xl text-white">SERVICE</h4>
                <a href="/account/my-qrcodes/choose-qrstyle"> <p className="lg:mt-5  font-sans text-lg text-slate-200"> create QR code</p></a>
                {/* <p className=" font-sans text-lg text-slate-200"> Plan and price </p> */}
              </div>
              <div className="">
                <h4 className="mt-4 font-serif text-xl text-white">COMPANY</h4> 
                <p className="lg:mt-5  font-sans text-lg text-slate-200"> <a href="/terms"> Term & Condition </a> </p>
                <p className=" font-sans text-lg text-slate-200"> <a href="/privacy-policy"> Privacy Policy</a>
                 </p>
                {/* <p className=" font-sans text-lg text-slate-200">Cookies Policy</p> */}
                {/* <p className=" font-sans text-lg text-slate-200">GDPR</p> */}
              </div>
              <div className="">
                <h4 className="mt-4 font-serif text-xl text-white">HELP</h4>
                <p className="lg:mt-5  font-sans text-lg text-slate-200"> <a href="/contact-us"> Contact Us</a> </p>
                <p className=" font-sans text-lg text-slate-200"> <a href="/faq">FAQ</a> </p>
                {/* <p className="font-sans text-lg text-slate-200">API Docs</p> */}
              </div>
              {/* <div className="">
              <h4  className=" mt-4 font-serif text-xl text-white">REVIEWS</h4>
              <p className="lg:mt-5  font-sans text-lg text-slate-200">Trustpilot</p>
              <p className="font-sans text-lg text-slate-200">Google</p>
            </div>
            <div className="">
              <h4  className=" mt-4 font-serif text-xl text-white">SETTING</h4>
              <p className="lg:mt-5  font-sans text-lg text-slate-200">Language</p>
              <p className=" font-sans text-lg text-slate-200">Currency</p>
            </div> */}
            </div>
          </div>
        </Container>
      </div >
      <div className=" border border-spacing-2 border-black">
      </div>
      <div className='bg-sky-900'>
        <Container>
          <div className="md:flex justify-between py-10 px-4">
            <div className="text-base text-center  " >
              <h5 className="text-slate-200"> Developed by <a href="https://flexibleit.net/"  target="_blank" rel="noopener noreferrer" className=" text-amber-400 ">  Flexible It.</a>  © 2023 All rights reserved. </h5>
            </div>
            <div className="flex gap-6 lg:pr-4 text-slate-200 text-center ">
              {/* <p className="text-base"> Plan and price </p> */}
              <p className="text-base"> <a href="/faq">FAQ</a> </p>
            </div>
          </div>
        </Container>
      </div>

    </div>
  )
}

export default FooterNew;

