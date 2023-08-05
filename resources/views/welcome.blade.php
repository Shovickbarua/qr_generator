@extends('layouts.app')
@section('canonical', 'https://qr.flexibleit.net')
@section('content')
<div class="flex flex-col min-h-screen overflow-hidden bg-white ">
    <header class="fixed w-full z-30  transition duration-300 ease-in-out false bg-white">
        <div class="max-w-6xl mx-auto px-5 sm:px-6 ">
            <div class="flex items-center justify-between h-16 md:h-20">
                <div class="flex-shrink-0 mr-4"><a class="block" aria-label="Cruip" href="/">
                    <img class=" w-44" src="/img/flexqr-logo.png" alt="" />
                </a></div>
                <nav class="flex flex-grow">
                    <ul class="flex flex-grow justify-end flex-wrap items-center">
                        <li><a class="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                                href="/login">Sign in</a></li>
                        <li><a class="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3" href="/register"><span>Sign
                                    up</span><svg class="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                                    viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                                        fill-rule="nonzero"></path>
                            </svg></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

   



    <main class="flex-grow">
        <section class="relative">
            <div class="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none " aria-hidden="true">
                <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                            <stop stop-color="#FFF" offset="0%"></stop>
                            <stop stop-color="#EAEAEA" offset="77.402%"></stop>
                            <stop stop-color="#DFDFDF" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fill-rule="evenodd">
                        <circle cx="1232" cy="128" r="128"></circle>
                        <circle cx="155" cy="443" r="64"></circle>
                    </g>
                </svg></div>
            <div class="max-w-6xl mx-auto ">
                <div class=" pt-28 pb-12 md:pt-32">
                    <div class="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:pb-24 lg:grid-cols-12">
                        <div class="place-self-left mr-auto lg:col-span-7 flex items-center">
                            <div class="text-left">
                                <h1 class="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate"
                                    data-aos="zoom-y-out">Why <span
                                        class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">FlexQR?</span>
                                </h1>
                                <div class="max-w-3xl mx-auto">
                                    <ul class="list-disc ml-6 mb-4">
                                        <li class="text-lg text-gray-600 mb-3 aos-init aos-animate">It's free for life time</li>
                                        <li class="text-lg text-gray-600 mb-3 aos-init aos-animate">Can create QR for website, text and business profile</li>
                                        <li class="text-lg text-gray-600 mb-3 aos-init aos-animate">You will get a page for your business profile</li>
                                        <li class="text-lg text-gray-600 mb-3 aos-init aos-animate ">User will redirect to your business profile on QR scan</li>
                                    </ul>
                                   
                                    <div class="max-w-xs sm:max-w-none sm:flex sm:justify-start aos-init aos-animate"
                                        data-aos="zoom-y-out" data-aos-delay="300">
                                        <div><a class="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                                                href="#0">Create Now</a></div>
                                        {{-- <div><a class="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                                                href="#0">Learn more</a></div> --}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src="/img/fiqr_home2.png" alt="">
                        </div>
                    </div>
                    <div>
                        <h2 class="text-center text-5xl font-extrabold leading-tighter tracking-tighter mb-12 aos-init aos-animate"
                                    data-aos="zoom-y-out">Generate <span
                                        class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Free QR Code</span> for business
                                </h2>
                        <div class="relative flex justify-center mx-auto max-w-4xl mb-8 h-96 aos-init aos-animate" data-aos="zoom-y-out" data-aos-delay="450">
                            
                                    <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/tBLKmtIo5GQ" frameborder="0"></iframe>
                                <button class="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
                                aria-controls="modal"><svg
                                    class="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z">
                                    </path>
                                    <path d="M10 17l6-5-6-5z"></path>
                                </svg><span class="ml-3">How to create free qr code for your business</span></button>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        {{-- <section class="relative">
            <div class="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
            <div class="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
            <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div class="pt-12 md:pt-20">
                    <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 class="h2 mb-4">Explore the solutions</h1>
                        <p class="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                    </div>
                    <div class="md:grid md:grid-cols-12 md:gap-6">
                        <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6 aos-init aos-animate"
                            data-aos="fade-right">
                            <div class="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                <h3 class="h3 mb-3">Powerful suite of tools</h3>
                                <p class="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa.</p>
                            </div>
                            <div class="mb-8 md:mb-0"><a
                                    class="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-gray-200 border-transparent"
                                    href="#0">
                                    <div>
                                        <div class="font-bold leading-snug tracking-tight mb-1">Building the Simple
                                            ecosystem</div>
                                        <div class="text-gray-600">Take collaboration to the next level with security
                                            and administrative features built for teams.</div>
                                    </div>
                                    <div
                                        class="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg class="w-3 h-3 fill-current" viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z">
                                            </path>
                                        </svg></div>
                                </a><a
                                    class="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg"
                                    href="#0">
                                    <div>
                                        <div class="font-bold leading-snug tracking-tight mb-1">Building the Simple
                                            ecosystem</div>
                                        <div class="text-gray-600">Take collaboration to the next level with security
                                            and administrative features built for teams.</div>
                                    </div>
                                    <div
                                        class="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg class="w-3 h-3 fill-current" viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                                                fill-rule="nonzero"></path>
                                        </svg></div>
                                </a><a
                                    class="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg"
                                    href="#0">
                                    <div>
                                        <div class="font-bold leading-snug tracking-tight mb-1">Building the Simple
                                            ecosystem</div>
                                        <div class="text-gray-600">Take collaboration to the next level with security
                                            and administrative features built for teams.</div>
                                    </div>
                                    <div
                                        class="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg class="w-3 h-3 fill-current" viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                                                fill="#191919" fill-rule="nonzero"></path>
                                        </svg></div>
                                </a></div>
                        </div>
                        <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 aos-init aos-animate"
                            data-aos="zoom-y-out">
                            <div class="relative flex flex-col text-center lg:text-right">
                                <div class="w-full appear-done enter-done" style="">
                                    <div class="relative inline-flex flex-col"><img
                                            class="md:max-w-none mx-auto rounded" src="/assets/features-bg.98e1ab2d.png"
                                            width="500" height="462" alt="Features bg"><img
                                            class="md:max-w-none absolute w-full left-0 transform animate-float"
                                            src="/assets/features-element.02cc9453.png" width="500" height="44"
                                            alt="Element" style="top: 30%;"></div>
                                </div>
                                <div class="w-full" style="display: none;">
                                    <div class="relative inline-flex flex-col"><img
                                            class="md:max-w-none mx-auto rounded" src="/assets/features-bg.98e1ab2d.png"
                                            width="500" height="462" alt="Features bg"><img
                                            class="md:max-w-none absolute w-full left-0 transform animate-float"
                                            src="/assets/features-element.02cc9453.png" width="500" height="44"
                                            alt="Element" style="top: 30%;"></div>
                                </div>
                                <div class="w-full" style="display: none;">
                                    <div class="relative inline-flex flex-col"><img
                                            class="md:max-w-none mx-auto rounded" src="/assets/features-bg.98e1ab2d.png"
                                            width="500" height="462" alt="Features bg"><img
                                            class="md:max-w-none absolute w-full left-0 transform animate-float"
                                            src="/assets/features-element.02cc9453.png" width="500" height="44"
                                            alt="Element" style="top: 30%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> --}}
        <section class="relative">
            <div class="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true">
            </div>
            <div class="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2">
            </div>
            <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div class="py-12 md:py-20">
                    <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 class=" text-3xl font-bold mb-4">How FlexQR works</h2>
                        <p class="text-xl text-gray-600">Just complete 3 simple steps after register to create your QR code with company profile page.</p>
                    </div>
                    <div
                        class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                        <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"><svg
                                class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fill-rule="evenodd">
                                    <rect class="fill-current text-blue-600" width="64" height="64" rx="32"></rect>
                                    <g stroke-width="2">
                                        <path class="stroke-current text-blue-300"
                                            d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"></path>
                                        <path class="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8">
                                        </path>
                                        <path class="stroke-current text-blue-300" stroke-linecap="square"
                                            d="M41.143 34.286l3.428 3.428-3.428 3.429"></path>
                                        <path class="stroke-current text-white" stroke-linecap="square"
                                            d="M41.143 29.714l3.428-3.428-3.428-3.429"></path>
                                    </g>
                                </g>
                            </svg>
                            <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Select QR Type</h4>
                            <p class="text-gray-600 text-center">Select your QR Type, it can be website, text or company profile.</p>
                        </div>
                        <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"><svg
                                class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fill-rule="evenodd">
                                    <rect class="fill-current text-blue-600" width="64" height="64" rx="32"></rect>
                                    <g stroke-width="2" transform="translate(19.429 20.571)">
                                        <circle class="stroke-current text-white" stroke-linecap="square" cx="12.571"
                                            cy="12.571" r="1.143"></circle>
                                        <path class="stroke-current text-white"
                                            d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696">
                                        </path>
                                        <path class="stroke-current text-blue-300"
                                            d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                            <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Add QR Content</h4>
                            <p class="text-gray-600 text-center">Make a name for your QR code and the content of the QR code.</p>
                        </div>
                        <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"><svg
                                class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fill-rule="evenodd">
                                    <rect class="fill-current text-blue-600" width="64" height="64" rx="32"></rect>
                                    <g stroke-linecap="square" stroke-width="2">
                                        <path class="stroke-current text-blue-300"
                                            d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207">
                                        </path>
                                        <path class="stroke-current text-white"
                                            d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                            <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Design Code</h4>
                            <p class="text-gray-600 text-center">Design QR code as your choice, you can add logo in the QR code and finally submit.</p>
                        </div>
                        {{-- <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"><svg
                                class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fill-rule="evenodd">
                                    <rect class="fill-current text-blue-600" width="64" height="64" rx="32"></rect>
                                    <g transform="translate(22.857 19.429)" stroke-width="2">
                                        <path class="stroke-current text-white" stroke-linecap="square"
                                            d="M12.571 4.571V0H0v25.143h12.571V20.57"></path>
                                        <path class="stroke-current text-white" d="M16 12.571h8"></path>
                                        <path class="stroke-current text-white" stroke-linecap="square"
                                            d="M19.429 8L24 12.571l-4.571 4.572"></path>
                                        <circle class="stroke-current text-blue-300" stroke-linecap="square" cx="12.571"
                                            cy="12.571" r="3.429"></circle>
                                    </g>
                                </g>
                            </svg>
                            <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Fast Prototyping</h4>
                            <p class="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.</p>
                        </div>
                        <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"><svg
                                class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fill-rule="evenodd">
                                    <rect class="fill-current text-blue-600" width="64" height="64" rx="32"></rect>
                                    <g stroke-linecap="square" stroke-width="2">
                                        <path class="stroke-current text-white"
                                            d="M20.571 20.571h13.714v17.143H20.571z"></path>
                                        <path class="stroke-current text-blue-300"
                                            d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58"></path>
                                    </g>
                                </g>
                            </svg>
                            <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Design Phase</h4>
                            <p class="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.</p>
                        </div>
                        <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"><svg
                                class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fill-rule="evenodd">
                                    <rect class="fill-current text-blue-600" width="64" height="64" rx="32"></rect>
                                    <g stroke-width="2">
                                        <path class="stroke-current text-white"
                                            d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"></path>
                                        <path class="stroke-current text-white"
                                            d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286">
                                        </path>
                                        <path class="stroke-current text-white"
                                            d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286">
                                        </path>
                                        <path class="stroke-current text-blue-300"
                                            d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                                            stroke-linecap="square"></path>
                                    </g>
                                </g>
                            </svg>
                            <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Develop &amp; Launch</h4>
                            <p class="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.</p>
                        </div> --}}
                    </div>
                </div>
            </div>
        </section>
        <section class="relative">
            <div class="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true"><svg width="1760" height="518" viewBox="0 0 1760 518"
                    xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
                            <stop stop-color="#FFF" offset="0%"></stop>
                            <stop stop-color="#EAEAEA" offset="77.402%"></stop>
                            <stop stop-color="#DFDFDF" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g transform="translate(0 -3)" fill="url(#illustration-02)" fill-rule="evenodd">
                        <circle cx="1630" cy="128" r="128"></circle>
                        <circle cx="178" cy="481" r="40"></circle>
                    </g>
                </svg></div>
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                <div class="py-12 md:py-20">
                    <div class="max-w-3xl mx-auto text-center">
                        <h2 class="h2 mb-4 text-3xl font-bold">Create Your QR Code Now</h2>
                        {{-- <p class="text-xl text-gray-600 aos-init aos-animate" data-aos="zoom-y-out">Arcu cursus vitae
                            congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis.</p> --}}
                    </div>
                    
                    <div class="max-w-xl mx-auto mt-20 aos-init aos-animate" data-aos="zoom-y-out">
                        <div class="relative flex items-start border-2 border-gray-200 rounded bg-white">
                            <div class="flex-grow text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                                <div class="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                                    <img class="relative rounded-full shadow" src="/img/flexqr-register.png" width="96" height="96" alt="Testimonial 01">
                                </div>
                                <form class="space-y-4 md:space-y-6" method="POST" action="{{ route('register') }}">
                                    @csrf
                                <div>
                                    <label for="email" class="block text-left mb-1 text-lg font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                                    @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                                <div>
                                    <label for="password" class="block text-left mb-1 text-lg font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                    @error('name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                    
                                <button type="submit" class=" w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="{{route('login')}}" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </p>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {{-- <section>
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                <div class="pb-12 md:pb-20">
                    <div class="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden aos-init aos-animate"
                        data-aos="zoom-y-out">
                        <div class="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
                            <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%"
                                        id="ni-a">
                                        <stop stop-color="#DFDFDF" offset="0%"></stop>
                                        <stop stop-color="#4C4C4C" offset="44.317%"></stop>
                                        <stop stop-color="#333" offset="100%"></stop>
                                    </radialGradient>
                                </defs>
                                <g fill="none" fill-rule="evenodd">
                                    <g fill="#FFF">
                                        <ellipse fill-opacity=".04" cx="185" cy="15.576" rx="16" ry="15.576"></ellipse>
                                        <ellipse fill-opacity=".24" cx="100" cy="68.402" rx="24" ry="23.364"></ellipse>
                                        <ellipse fill-opacity=".12" cx="29" cy="251.231" rx="29" ry="28.231"></ellipse>
                                        <ellipse fill-opacity=".64" cx="29" cy="251.231" rx="8" ry="7.788"></ellipse>
                                        <ellipse fill-opacity=".12" cx="342" cy="31.303" rx="8" ry="7.788"></ellipse>
                                        <ellipse fill-opacity=".48" cx="62" cy="126.811" rx="2" ry="1.947"></ellipse>
                                        <ellipse fill-opacity=".12" cx="78" cy="7.072" rx="2" ry="1.947"></ellipse>
                                        <ellipse fill-opacity=".64" cx="185" cy="15.576" rx="6" ry="5.841"></ellipse>
                                    </g>
                                    <circle fill="url(#ni-a)" cx="276" cy="237" r="200"></circle>
                                </g>
                            </svg></div>
                        <div class="relative flex flex-col lg:flex-row justify-between items-center">
                            <div class="text-center lg:text-left lg:max-w-xl">
                                <h3 class="h3 text-white mb-2">Powering your business</h3>
                                <p class="text-gray-300 text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit nemo expedita voluptas culpa sapiente.</p>
                                <form class="w-full lg:w-auto">
                                    <div
                                        class="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                                        <input type="email"
                                            class="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                                            placeholder="Your email…" aria-label="Your email…"><a
                                            class="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                                            href="#0">Subscribe</a></div>
                                    <p class="text-sm text-gray-400 mt-3">7 days free trial. No credit card required.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> --}}
    </main>
    
    <footer>
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <div class="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
                <ul class="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                    <li><a class="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                            aria-label="Twitter" href="/"><svg class="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z">
                                </path>
                            </svg></a></li>
                    <li class="ml-4"><a
                            class="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                            aria-label="Github" href="https://github.com/ajitda"><svg class="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z">
                                </path>
                            </svg></a></li>
                    <li class="ml-4"><a
                            class="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                            aria-label="Facebook" href="https://www.facebook.com/flexibleitsolution"><svg class="w-8 h-8 fill-current" viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z">
                                </path>
                            </svg></a></li>
                </ul>
                <div class="text-sm text-gray-600 mr-4">Made by <a class="text-blue-600 hover:underline"
                        href="https://flexibleit.net/">Flexible It</a>. &copy; 2022 All rights reserved.</div>
            </div>
        </div>
    </footer>
</div>
@endsection
