import React, { useState } from 'react'

const Accordian = ({ title, children, showFrame = false, className='' }) => {
    const [accordianStatus, setAccordianStatus] = useState(true)

    const toggleAccordian = () => {
        setAccordianStatus(!accordianStatus)
    }

    return (
        <div className={`p-3  h-auto rounded drop-shadow-md bg-white ${className}`}>
            <div className='grid grid-cols-12 '>
                <div className='col-start-1 col-end-12 my-3 px-3'>
                    <p className='fs-18 text-black'>{title}</p>
                </div>
                <div className='col-start-12 col-end-13' onClick={toggleAccordian}>
                    {accordianStatus ? <img className='my-3' src='/assets/icons/up-angel.png'></img> : <img className='my-3' src='/assets/icons/chevron-down-sharp.svg' ></img>}
                </div>
            </div>
            {accordianStatus && <div className='px-3'>{children}</div> }
        </div>
    )
}

export default Accordian
