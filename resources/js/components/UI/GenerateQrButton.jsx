import Button from './Button';
import React from 'react'
import { Link } from 'react-router-dom'

const GenerateQrButton = () => {
    return (
        <>
            <div className='grid grid-cols-2 mt-7'>
                <div className=''>
                    <div className="ant-page-header-heading">
                        <span className="ant-page-header-heading-title"
                             style={{ textTransform: "capitalize" }} >My QR codes</span>
                    </div>
                </div>
                <div className=''>
                    <div className='flex justify-end'>
                        {/* <div className='flex justify-end'>
                            <button class="p-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold  border-4 border-blue-500  rounded-full">
                                <span className='font-bold'>Create Folder</span>
                            </button>
                        </div> */}
                        <div className='flex justify-end'>
                            <Button link={"/account/my-qrcodes/choose-qrstyle" } text="Create QR code" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GenerateQrButton