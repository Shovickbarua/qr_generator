import { IoIosArrowDown } from 'react-icons/io';
import React from 'react'
import Container from '../../../components/UI/Container';

const HeroSection = () => {
  return (
    <div className=" bg-slate-200 pb-20">
      <Container>
        <div className=" mx-3">
          <h1 className=" max-w-4xl mx-auto pt-36 text-center font-bold font-sans lg:text-6xl  md:text-4xl text-2xl ">Create your own <a className=" text-blue-800">QR codes</a> and boost your business or idea.</h1>
          <h4 className=" text-center lg:text-xl md:text-base text-lg text-slate-500 sm:text-sm lg:pt-6 pt-4">Easily generate, manage and statistically track your QR codes.</h4>
        </div>

        <div className=" mt-10 text-center">
        <a href="/account/my-qrcodes/choose-qrstyle"> <button type="button" className="text-white font-serif bg-blue-700 hover:bg-blue-800 font-medium lg:rounded-full round md:rounded-full rounded-full lg:text-2xl md:text-xl text-2xl lg:px-16 md:px-10 px-10 lg:py-5 md:py-4 py-3  mr-3 ">Create QR code</button></a>
        </div>
        <div className=" mt-20  ">
          <img src="/img/hero_ban2.png" className="mx-auto w-3/4 h-auto" alt="" />
        </div>
        <div className=" lg:mt-20 mt-10 text-center">
          <h2 className="  lg:text-5xl md:text-3xl text-3xl font-bold text-black ">Everything you need to know to get started</h2>
          <h4 className="  lg:text-xl md:text-lg  text-slate-500   text-lg  mt-4 mx-2 ">In this section you will find the basic concepts and the necessary steps to start enjoying the benefits of using QR.</h4>
        </div >
        <div className=" lg:grid lg:grid-cols-2 ">
          <div className="">
            <img src="/img/sidebarqr.png" className=" mx-auto pt-9 " alt="" />
          </div>
          <div>
            <div class=" mt-20 mx-auto ">
              <div class="m-8 rounded overflow-hidden">
                {/* <!-- accordion-tab  --> */}
                <div class="group outline-none accordion-section" tabindex="1">
                  <div class="group  flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer relative">
                    <div class="group-focus:text-black lg:text-2xl text-lg transition ease duration-500">
                      What is a QR code?
                    </div>
                    <div class="lg:h-8 lg:w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180  mb-auto ml-auto mt-2 mr-2">
                      <i class="fas fa-chevron-down"> <IoIosArrowDown /></i>
                    </div>
                  </div>
                  <div class="group-focus:max-h-screen max-h-0  px-4 overflow-hidden ease duration-500">
                    <p class="p-2 text-gray-400 text-justify font-sans lg:text-lg text-sm">
                      The term “QR” stands for “quick response” and refers to instant access to the information contained in the Code. It is, in short, the evolution of the barcode, made up of patterns of black and white pixels. Denso Wave, a Japanese subsidiary of Toyota Denso, developed them in order to mark the components of their cars and thus speed up logistics in their production. Currently, it has gained great popularity, due to its versatility and accessibility, thanks to the functions of smart phones.
                    </p>
                  </div>
                </div>
                {/* <!-- accordion-tab -->
                <!-- accordion-tab  --> */}
                <div class="group outline-none accordion-section" tabindex="2">
                  <div class="group  flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer relative">
                    <div class="group-focus:text-black lg:text-2xl text-lg transition ease duration-500">
                      Know the benefits of using QR
                    </div>
                    <div class="lg:h-8 lg:w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180  mb-auto ml-auto mt-2 mr-2">
                      <i class="fas fa-chevron-down"><IoIosArrowDown /></i>
                    </div>
                  </div>
                  <div class="group-focus:max-h-screen max-h-0  px-4 overflow-hidden ease duration-500">
                    <p class="p-2 text-gray-400 text-justify font-sans lg:text-lg text-sm">
                      You will have noticed that more and more companies choose to include QR, as a fundamental resource for the marketing and commercialization of their products and services. Its growing popularity is due to the multiplicity of uses that you can give it: to receive payments from your clients, share links to web pages, catalogs and price lists, receive comments on your products or services, invite the client to share images or videos , promote your business events and much more, with just a scan!
                    </p>
                  </div>
                </div>
                {/* <!-- accordion-tab -->
                <!-- accordion-tab  --> */}
                <div class="group outline-none accordion-section" tabindex="3">
                  <div class="group  flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer  relative">

                    <div class="group-focus:text-black lg:text-2xl text-lg transition ease duration-500">
                      How to start using QR?
                    </div>
                    <div class="lg:h-8 lg:w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180  mb-auto ml-auto mt-2 mr-2">
                      <i class="fas fa-chevron-down">  <IoIosArrowDown /></i>
                    </div>
                  </div>
                  <div class="group-focus:max-h-screen max-h-0  px-4 overflow-hidden ease duration-500">
                    <p class="p-2 text-gray-400 text-justify font-sans lg:text-lg text-sm">
                      Many devices already have a built-in QR code reader. In this case, all you have to do is open the camera on your mobile phone and hold it over a code for a few seconds, until a notification appears on the screen. In case this does not happen, go to settings to check that QR scanning is enabled. If you don't have the feature, just download and install a QR code reader from your app store.
                    </p>
                  </div>
                </div>
                {/* <!-- accordion-tab --> */}
              </div>
            </div>


          </div>

        </div>
    </Container>
    </div>
  )
}

export default HeroSection