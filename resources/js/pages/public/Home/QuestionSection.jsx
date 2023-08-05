import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const QuestionSection = () => {
  return (
    <div>
            <div className=" bg-slate-200 pb-20">
        <p className=" text-center text-4xl text-black pt-10 ">Do not leave with doubt</p>
        <div className=" lg:grid lg:grid-cols-5  mt-14 gap-5 text-center  ">

          <button onClick={() => setBasicInfo('info')} type="" className=" col-start-2 text-black border-solid border-2 border-blue-800   mt-4 font-medium rounded-3xl text-xl py-2 px-6   ">Basic Information</button>
          {/* <button onClick={() => setActiveQRtype('website')}>Website</button> */}

          <button type="button" className=" col-start-3 text-black border-solid border-2 border-blue-800 mt-4  font-medium rounded-3xl text-xl py-2 px-6  ">Design and creation</button>

          <button type="button" className=" col-start-4 text-black border-solid border-2 border-blue-800 mt-4   font-medium rounded-3xl text-xl py-2  px-6  ">Scan and Print</button>

        </div>

        {/* <div className=" text-center">
          {basicInformation }
        </div> */}

        <div className=" lg:w-2/3 text-center mx-auto  ">
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
        <div className="mt-20 text-center mb-12">
          <p className=" text-2xl text-black">Want to know more?</p>
          <p className=" text-lg text-gray-500 mt-6">Check our FAQs to find an answer to any questions you <br /> may have about our QR codes.</p>
          <button type="button" className=" mt-8  text-white bg-blue-700 border-solid border-2 border-blue-800 font-medium rounded-3xl text-xl py-2  px-6  "> Answer all your questions</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionSection ;
