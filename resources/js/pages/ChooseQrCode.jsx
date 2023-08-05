import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/UI/Button'
import { setContentState } from '../redux/actions/contentActions'
import { QR_TYPE } from '../utils/constants'

const ChooseQrCode = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [nextButtonToggle, setNextButtonToggle] = useState(false)
    const content = useSelector(state => state.allContent)

    // const handleNextButtonToggle = (qr_type) => {
    //     setNextButtonToggle(!nextButtonToggle)
    //     dispatch(setContentState({"qr_type": qr_type}))
    const handleNextButtonToggle = (qr_type) => {
        // setNextButtonToggle(!nextButtonToggle)
        dispatch(setContentState({"qr_type": qr_type}));
        navigate('/account/my-qrcodes/qrcontent')
        // alert(nextButtonToggle)
    }

    return (
        <div className='mt-5 '>
            <div className='grid grid-cols-2 gap-3'>
                <div className=''>
                    <h1 className='fw-600'>1.Choose a type of QR code</h1>
                </div>
                <div className=''>
                    {nextButtonToggle ? <div className='flex justify-center'>
                        <Button link={"/account/my-qrcodes/qrcontent"} text="Next" />
                    </div> : ""}

                </div>
            </div>
            <div className='grid grid-cols-12 gap-3 mt-3'>
                <div className='col-start-1 col-end-13 md:col-end-10'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                        <div className={`flex justify-center rounded bg-white h-44 drop-shadow-md border  border-slate-300 hover:border-indigo-400 ${content.qr_type === QR_TYPE.WEBSITE ? 'border-red-400' : ''}`} onClick={()=>handleNextButtonToggle(QR_TYPE.WEBSITE)}>
                            <div className='px-5 pt-2'>
                                <div className='rounded flex justify-center'>
                                    <img src='/assets/qr-choose-icon/qr-icon-1.svg' width="90px" height="90px"/>
                                </div>
                                <div className='flex justify-center'>
                                    <div className=''>
                                        <p className='fw-600 flex justify-center'>Website</p>
                                        <p className='text-center'>Open a URL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex justify-center rounded bg-white h-44 drop-shadow-md border  border-slate-300 hover:border-indigo-400 ${content.qr_type === QR_TYPE.TEXT ? 'border-red-400' : ''}`} onClick={()=>handleNextButtonToggle(QR_TYPE.TEXT)}>
                            <div className='px-5 pt-2'>
                                <div className='rounded flex justify-center'>
                                    <img src='/assets/qr-choose-icon/qr-icon-2.svg' width="90px" height="90px"/>
                                </div>
                                <div className='flex justify-center'>
                                    <div className=''>
                                        <p className='fw-600 flex justify-center'>Simple Text</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex justify-center rounded bg-white h-44 drop-shadow-md border border-slate-300 hover:border-indigo-400 ${content.qr_type === QR_TYPE.COMPANY_PROFILE ? 'border-red-400' : ''}`}  onClick={()=>handleNextButtonToggle(QR_TYPE.COMPANY_PROFILE)}>
                            <div className='px-5 pt-2'>
                                <div className='rounded flex justify-center'>
                                    <img src='/assets/qr-choose-icon/qr-icon-7.svg' width="90px" height="90px"/>
                                </div>
                                <div className='flex justify-center'>
                                    <div className=''>
                                        <p className='fw-600 flex justify-center'>Business</p>
                                        <p className=' flex justify-center'>Share business info</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex justify-center rounded bg-white h-44 drop-shadow-md border border-slate-300 hover:border-indigo-400 ${content.qr_type === QR_TYPE.PERSONAL_PROFILE ? 'border-red-400' : ''}`}  onClick={()=>handleNextButtonToggle(QR_TYPE.PERSONAL_PROFILE)}>
                            <div className='px-5 pt-2'>
                                <div className='rounded flex justify-center'>
                                    <img src='/assets/qr-choose-icon/qr-icon-3.svg' width="90px" height="90px"/>
                                </div>
                                <div className='flex justify-center'>
                                    <div className=''>
                                        <p className='fw-600 flex justify-center'>My Profile</p>
                                        <p className=' flex justify-center'>Share your info</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-center rounded bg-white h-60 drop-shadow-md border border-slate-300 hover:border-indigo-400'>
                            <div className='px-5 pb-5 pt-3'>
                                <div className='rounded flex justify-center'>
                                    <img src='/assets/qr-choose-icon/qr-icon-2.svg' width="90px" height="90px"></img>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='mt-4'>
                                        <p className='fw-600 flex justify-center'>PDF</p>
                                        <p className='mt-2 flex justify-center'>Show a PDF</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-center rounded bg-white h-60 drop-shadow-md border border-slate-300 hover:border-indigo-400'>
                            <div className='px-5 pb-5 pt-3'>
                                <div className='rounded flex justify-center'>
                                    <img src='/assets/qr-choose-icon/qr-icon-3.svg' width="90px" height="90px"></img>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='mt-4'>
                                        <p className='fw-600 flex justify-center'>List of links</p>
                                        <p className='mt-2 flex justify-center'>Group links</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center rounded bg-white h-60 drop-shadow-md border border-slate-300 hover:border-indigo-400'>
                            <div className='px-5 pb-5 pt-3'>
                                <div className='rounded flex justify-center'>
                                    <img src='/assets/qr-choose-icon/qr-icon-4.svg' width="90px" height="90px"></img>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='mt-4'>
                                        <p className='fw-600 flex justify-center'>Images</p>
                                        <p className='mt-2 flex justify-center'>Show an image gallery</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='flex justify-center rounded bg-white h-60 drop-shadow-md border border-slate-300 hover:border-indigo-400'>
                            <div className='px-5 pb-5 pt-3'>
                                <div className='rounded flex justify-center'>
                                    <img src='/assets/qr-choose-icon/qr-icon-5.svg' width="90px" height="90px"></img>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='mt-4'>
                                        <p className='fw-600 flex justify-center'>Video</p>
                                        <p className='mt-2 flex justify-center'>Show a Video</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center rounded bg-white h-60 drop-shadow-md border border-slate-300 hover:border-indigo-400'>
                            <div className='px-5 pb-5 pt-3'>
                                <div className='rounded flex justify-center'>
                                    <img src='/assets/qr-choose-icon/qr-icon-6.svg' width="90px" height="90px"></img>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='mt-4'>
                                        <p className='fw-600 flex justify-center'>Wi-Fi</p>
                                        <p className='mt-2 flex justify-center'>Connect to a Wi-Fi</p>
                                        <p className='flex justify-center'>network</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center rounded bg-white h-60 drop-shadow-md border border-slate-300 hover:border-indigo-400'>
                            <div className='px-5 pb-5 pt-3'>
                                <div className='rounded flex justify-center'>
                                    <img src='/assets/qr-choose-icon/qr-icon-8.svg' width="90px" height="90px"></img>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='mt-4'>
                                        <p className='fw-600 flex justify-center'>vCard Plus</p>
                                        <p className='mt-2 flex justify-center'>Share contact details</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center rounded bg-white h-60 drop-shadow-md border border-slate-300 hover:border-indigo-400'>
                            <div className='px-5 pb-5 pt-3'>
                                <div className='rounded flex justify-center'>
                                    <img src='/assets/qr-choose-icon/qr-icon-9.svg' width="90px" height="90px"></img>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='mt-4'>
                                        <p className='fw-600 flex justify-center'>Menu</p>
                                        <p className='mt-2 flex justify-center'>Display the menu of a </p>
                                        <p className='flex justify-center'>restaurant or bar</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center rounded bg-white h-60 drop-shadow-md border border-slate-300 hover:border-indigo-400'>
                            <div className='px-5 pb-5 pt-3'>
                                <div className='rounded flex justify-center'>
                                    <img src='/assets/qr-choose-icon/qr-icon-10.svg' width="90px" height="90px"></img>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='mt-4'>
                                        <p className='fw-600 flex justify-center'>Apps</p>
                                        <p className='mt-2 flex justify-center'>Redirect to an app store</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center rounded bg-white h-60 drop-shadow-md border border-slate-300 hover:border-indigo-400'>
                            <div className='px-5 pb-5 pt-3'>
                                <div className='rounded flex justify-center'>
                                    <img src='/assets/qr-choose-icon/qr-icon-11.svg' width="90px" height="90px"></img>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='mt-4'>
                                        <p className='fw-600 flex justify-center'>MP3</p>
                                        <p className='mt-2 flex justify-center'>Play an audio file</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center rounded bg-white h-60 drop-shadow-md border border-slate-300 hover:border-indigo-400'>
                            <div className='px-5 pb-5 pt-3'>
                                <div className='rounded flex justify-center'>
                                    <img src='/assets/qr-choose-icon/qr-icon-12.svg' width="90px" height="90px"></img>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='mt-4'>
                                        <p className='fw-600 flex justify-center'>Coupon</p>
                                        <p className='mt-2 flex justify-center'>Share a coupon</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className='col-start-10 col-end-13 '>
                    <div className='flex justify-center'>
                        <p className='fw-600 flex justify-center'>Exmaple</p>
                    </div>
                    <div className='rounded bg-gray-400 h-96'>
                        <p className='text-center p-5'>test</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default ChooseQrCode
