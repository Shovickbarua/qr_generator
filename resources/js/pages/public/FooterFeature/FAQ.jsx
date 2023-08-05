import React from 'react'
import Header from '../layouts/Header'
import { IoIosArrowDown } from 'react-icons/io'
import FooterNew from '../layouts/FooterNew'
import HeadMeta from '../../../components/HeadMeta'

function FAQ() {
  return (<>
        <HeadMeta 
            title="FlexQR faq page | FlexQR faq"
            description="Do you have any question about FlexQR. Let us know if you have any question."
            canonical={window.location.hostname +'/faq'}
          />
          <div><Header /></div>
          <h2 className=" pt-20  pb-16  bg-slate-200  text-center font-serif text-6xl">FAQ </h2>
          <div className=" lg:w-2/3 text-center mx-auto py-14 ">
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
                {/* <!-- accordion-tab --> *

              <!-- accordion-tab  --> */}
                <div class="group outline-none accordion-section" tabindex="3">
                  <div class="group  flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer  relative">

                    <div class="group-focus:text-black lg:text-2xl text-lg transition ease duration-500">
                      How to generate QR code for your website?
                    </div>
                    <div class="lg:h-8 lg:w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180  mb-auto ml-auto mt-2 mr-2">
                      <i class="fas fa-chevron-down">  <IoIosArrowDown /></i>
                    </div>
                  </div>
                  <div class="group-focus:max-h-screen max-h-0  px-4 overflow-hidden ease duration-500">
                    <p class="p-2 text-gray-400 text-justify font-sans lg:text-lg text-sm">
                    Step 1 : create your account on our website sign-in page. <br/>
                    Step 2 : After clicking on the Create QR Code button and click on the Website button. <br/>
                    Step 3 : In this form you have to add the name of your QR code and the link. <br/>
                    Step 4 : Then click on Next button and click on submit button with your preferred size and color or logo. <br/>
                    Step 5 : Download the QR code you created from the My Queer Code page.
                    </p>
                  </div>
                </div>
                {/* <!-- accordion-tab --> 

              <!-- accordion-tab  --> */}
                <div class="group outline-none accordion-section" tabindex="3">
                  <div class="group  flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer  relative">

                    <div class="group-focus:text-black lg:text-2xl text-lg transition ease duration-500">
                    How to generate QR code for your Simple TEXT?
                    </div>
                    <div class="lg:h-8 lg:w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180  mb-auto ml-auto mt-2 mr-2">
                      <i class="fas fa-chevron-down">  <IoIosArrowDown /></i>
                    </div>
                  </div>
                  <div class="group-focus:max-h-screen max-h-0  px-4 overflow-hidden ease duration-500">
                    <p class="p-2 text-gray-400 text-justify font-sans lg:text-lg text-sm">
                    Step 1 : create your account on our website sign-in page. <br/>
                    Step 2 : After clicking on the Create QR Code button and click on the Simple Text button. <br/>
                    Step 3 : In this form you have to add the name of your QR code and the text. <br/>
                    Step 4 : Then click on Next button and click on submit button with your preferred size and color or logo. <br/>
                    Step 5 : Download the QR code you created from the My QRCode page.
                    </p>
                  </div>
                </div>
                {/* <!-- accordion-tab --> 
              <!-- accordion-tab  --> */}
                <div class="group outline-none accordion-section" tabindex="3">
                  <div class="group  flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer  relative">

                    <div class="group-focus:text-black lg:text-2xl text-lg transition ease duration-500">
                    How to generate QR code for your Business Profile?
                    </div>
                    <div class="lg:h-8 lg:w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180  mb-auto ml-auto mt-2 mr-2">
                      <i class="fas fa-chevron-down">  <IoIosArrowDown /></i>
                    </div>
                  </div>
                  <div class="group-focus:max-h-screen max-h-0  px-4 overflow-hidden ease duration-500">
                    <p class="p-2 text-gray-400 text-justify font-sans lg:text-lg text-sm">
                    Step 1 : create your account on our website sign-in page. <br/>
                    Step 2 : After clicking on the Create QR Code button and click on the Business Profile button. <br/>
                    Step 3 : In this form you have to add the name of your QR code,  Company information, Company Address and Contact Information. <br/>
                    Step 4 : Then click on Next button and click on submit button with your preferred size and color or logo. <br/>
                    Step 5 : Download the QR code you created from the My QRCode page.
                    </p>
                  </div>
                </div>
                {/* <!-- accordion-tab --> 
              <!-- accordion-tab  --> */}
                <div class="group outline-none accordion-section" tabindex="3">
                  <div class="group  flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer  relative">

                    <div class="group-focus:text-black lg:text-2xl text-lg transition ease duration-500">
                    How to generate QR code for your Personal Profile?
                    </div>
                    <div class="lg:h-8 lg:w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180  mb-auto ml-auto mt-2 mr-2">
                      <i class="fas fa-chevron-down">  <IoIosArrowDown /></i>
                    </div>
                  </div>
                  <div class="group-focus:max-h-screen max-h-0  px-4 overflow-hidden ease duration-500">
                    <p class="p-2 text-gray-400 text-justify font-sans lg:text-lg text-sm">
                    Step 1 : create your account on our website sign-in page. <br/>
                    Step 2 : After clicking on the Create QR Code button and click on the Personal Profile button. <br/>
                    Step 3 : In this form you have to add the name of your QR code, QR information, Personal Address and Contact Information. <br/>
                    Step 4 : Then click on Next button and click on submit button with your preferred size and color or logo. <br/>
                    Step 5 : Download the QR code you created from the My QRCode page.
                    </p>
                  </div>
                </div>
                {/* <!-- accordion-tab --> */}

              </div>
            </div>
          </div>

          <div className=" mt-10 text-center">
            <a href="/contact-us"> <button type="button" className="text-white font-serif bg-blue-700 hover:bg-blue-800 font-medium lg:rounded-full round md:rounded-full rounded-full lg:text-2xl md:text-xl text-2xl lg:px-10 md:px-10 px-10 lg:py-2 md:py-4 py-3 mb-16 mr-3 ">Contact Us</button></a>
          </div>

        <FooterNew />
    </>)
}

export default FAQ