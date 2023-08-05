import React, { useEffect, useReducer, useState } from 'react'
import Accordian from '../components/UI/Accordian'
import { useDispatch, useSelector } from 'react-redux'
import QrcodeServices from '../services/QrcodeServices'
import { useNavigate, useParams } from 'react-router-dom'
import { setContentState } from '../redux/actions/contentActions'
import { QR_TYPE } from '../utils/constants'
import Button from '../components/UI/Button'

const DesignQrCode = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const content = useSelector(state => state.allContent)
    const [qrCode, setQrCode] = useState();
    const [qrStyle, setQrStyle] = useState('square');
    const [eyeStyle, setEyeStyle] = useState('square');
    const [previewLogo, setPreviewLogo] = useState()
    
    const { id } = useParams();
    const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
        qr_code_color: '',
        bg_color: '',
        eye_color: '',
        logo: '',
    })
    // console.log('id', id)
    //     useEffect(()=>{
    //         axios.get('http://127.0.0.1:8000/api/qredit/'+id).then(response => {
    //             console.log('response', response)
    //             const newObj = {
    //                 qrStyle: response.data.qrStyle,
    //                 eyeStyle: response.data.eyeStyle,
    //             }
    //         dispatch(setContentState(newObj))
    
    //         });
    //     }, []);

    useEffect(()=>{
        if (id) {
            setQrCode(content.qrCode);
            setEyeStyle(content.eyeStyle);
            setQrStyle(content.qrStyle);
            setPreviewLogo(content.previewLogo);
            setState({
                qr_code_color: content.qr_code_color,
                bg_color: content.bg_color,
                eye_color: content.eye_color,
            })
        }
    }, [id])

    useEffect(()=>{
        if (!content.name) navigate('/account/my-qrcodes/choose-qrstyle');
    }, []);

    const handleChange = async (e) => {
        const target = e.target
        const name = target.name;
        let value = target.value;
        // alert(target.value)
        if (name == 'media') {
            value = target.files[0];
            setState({
                media: value
            });
            const objectUrl = URL.createObjectURL(target.files[0])
            setPreviewLogo(objectUrl)
        } else {
            setState({
                [name]: value,
            });
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let data = state;
        data.eye_style = eyeStyle;
        data.qr_style = qrStyle;
        data.name = content.name;
        if (content.qr_type === QR_TYPE.COMPANY_PROFILE) {
            data.qr_info = JSON.stringify(content.company_info);
            data.company_logo = content.company_logo;
        } 
         else if (content.qr_type === QR_TYPE.PERSONAL_PROFILE) {
            data.qr_info = JSON.stringify(content.personal_info);
            data.personal_picture = content.personal_picture;
        }
        else {
            data.qr_info = content.website_info;
        }
       
        data.type = content.qr_type;
        const resData = await QrcodeServices.save(data);
        console.log('resdata', resData)
        if (resData.success) {
            setQrCode(resData.data);
            dispatch(setContentState({name: '',
                        website_info: '',
                        qr_code_style: '',
                        eye_style: '',
                        qr_code_color: '',
                        bg_color: '',
                        eye_color: '',
                        qr_type: ''}));
            navigate('/account/my-qrcodes')
        }
    }
    
    return (
        <>
      
            <div className='mt-3'>
                <form onSubmit={handleSubmit}>

                <div className='grid grid-cols-12 gap-3 mb-5'>
            <div className='col-start-1 col-end-9'> <p className='fw-600'>3. Design your QR code</p></div>
           
            <div className='col-start-9 col-end-13'>
                        <div className='flex justify-center gap-4'>
                            <Button link={"/account/my-qrcodes/qrcontent"} text="Back" />
                            {/* <Button type='submit' text={"Submit"}/>  */}
                            <button type='submit' class="py-2 px-8 bg-blue-500 text-white font-semibold rounded ">
                            <span className='font-bold'>Submit</span>
                        </button>
                            {/* <Button link={"/account/my-qrcodes/qrdesign"} text="Next" /> */}
                        </div>
                    </div>
           </div>

                    <div className='grid grid-cols-12'>
                        <div className='col-start-1 col-end-9'>
                            <Accordian title={"QR code style"}>
                                <div className='grid grid-cols-5 gap-4'>
                                    <div className={`${qrStyle === 'square'? 'border-2 border-indigo-600 rounded ' : ''}`}>
                                        <img src='/assets/qr-style/qr-s-4.png' onClick={() => setQrStyle('square')}></img>
                                    </div>
                                    <div className={`${qrStyle === 'round'? 'border-2 border-indigo-600 rounded ' : ''}`}>
                                        <img src='/assets/qr-style/qr-s-5.png' onClick={() => setQrStyle('round')}></img>
                                    </div>
                                    <div className={`${qrStyle === 'dot'? 'border-2 border-indigo-600 rounded ' : ''}`}>
                                        <img src='/assets/qr-style/qr-s-6.png' onClick={() => setQrStyle('dot')}></img>
                                    </div>
                                    <div></div>
                                    <div></div>
                                </div>

                                <div className='bg-gray-100 mt-5 p-5 px-12 rounded'>
                                    {/* <span><RiErrorWarningLine/></span> */}
                                    <p className='px-7'>Remember! For the optimal reading of the QR code, you need to use high contrast colours. We recommend selecting a light and a dark colour for your QR code.</p>
                                    <div className='mt-5 px-7'>
                                        <h1 className='pb-3'>Border and background</h1>
                                        <div className='grid grid-cols-2 gap-3'>
                                            <div className=''>
                                                <label className='pl-1 pb-1' >QR Code Color</label>
                                                <input type="color" id="bg-color" name='qr_code_color' value={state.qr_code_color} class=" h-14 bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-blue-500 dark:border-blue-500 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChange}></input>
                                            </div>
                                            <div className=''>
                                                <label className='pl-1 pb-1'>Background color</label>
                                                <input type="color" id="bg-color" name='bg_color' value={state.bg_color} class="h-14 bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-blue-500 dark:border-blue-500 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChange}></input>
                                                {/* <div class="flex items-center my-4 pl-5">
                                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Transparent background</label>
                                            </div> */}
                                            </div>
                                        </div>
                                        {/* Start Eye Style */}
                                        <div className='mt-5 px-5'>
                                            <h1 className='fs-18'>Eye Style</h1>
                                            <p className='my-2'>Style</p>
                                            <div className='grid grid-cols-5 gap-4'>
                                                <div className={`${eyeStyle === 'square'? 'border-2 border-indigo-600 rounded ' : ''}`}>
                                                    <img src='/assets/qr-style/qr-s-2.png' onClick={() => setEyeStyle('square')}></img>
                                                </div>
                                                <div className={`${eyeStyle === 'circle'? 'border-2 border-indigo-600 rounded ' : ''}`}>
                                                    <img src='/assets/qr-style/qr-s-3.png' onClick={() => setEyeStyle('circle')}></img>
                                                </div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-1 my-5'>
                                            <div className=''>
                                                <label className='pl-1 pb-1' >Eye Color</label>
                                                <input type="color" id="bg-color" name='eye_color' value={state.eye_color} class="h-11 bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-blue-500 dark:border-blue-500 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleChange}></input>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Accordian>

                            <div className='mt-5'>
                                <Accordian title={"Add Logo"}>
                                    <p className=''>Upload your logo</p>
                                    <div className=''>
                                        <div className='pr-2'>
                                            <label className="w-20 h-20 border-dashed border-2 border-black bg-gray-200 flex justify-center items-center" htmlFor='media'>
                                            {previewLogo ? <img className='w-100 object-cover' src={previewLogo} alt="" /> : <p className='text-3xl'> + </p>}
                                            </label>
                                            <input className="hidden" name="media" type="file" id='media' onChange={handleChange} />
                                        </div>
                                    </div>
                                </Accordian>
                            </div>
                        </div>
                        <div className='col-start-9 col-end-13 flex justify-end   '>
                            <div className='p-5'>
                                <img src={qrCode?.data}></img>
                                
                            </div>
                        </div>
                    </div>
                    {/* <div className='my-5'>
                        <button type='submit' class="p-3  px-12 bg-blue-500 text-white font-semibold  border-4  rounded-full">
                            <span className='font-bold'>Submit</span>
                        </button>
                    </div> */}
                </form>
            </div>

        </>
    )
}
export default DesignQrCode
