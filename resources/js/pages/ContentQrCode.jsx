import React, { useEffect, useReducer, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Accordian from '../components/UI/Accordian'
import { setContentState } from '../redux/actions/contentActions'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/UI/Button'
import { QR_TYPE } from '../utils/constants'
import Input from '../components/UI/Input'
import CompanyProfileContent from './QrTypes/CompanyProfileContent'
import CompanyProfile from './public/CompanyProfile'
import PersonalProfileContent from './QrTypes/PersonalProfileContent'
import PersonalProfile from './public/PersonalProfile'
// import PersonalProfileContent from './QrTypes/PersonalProfileContent'

const ContentQrCode = () => {
    const content = useSelector(state => state.allContent)
    const navigate = useNavigate()
    const [companyLogo, setCompanyLogo] = useState();
    const [personalPicture, setPersonalPicture] = useState();
    const dispatch = useDispatch();
   const { id } = useParams();
console.log('id', id)
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/qredit/'+id).then(response => {
            console.log('response', response)
            // setName(response.data.name)
            // setWebinfo(response.data.website_info)
            const newObj = {
                name: response.data.name,
                website_info: response.data.qr_info,
                qr_style: response.data.qrStyle,
                eye_style: response.data.eyeStyle,
                bg_color: response.data.bg_color,
                eye_color: response.data.eye_color,
                eye_color: response.data.eye_color,
                qr_type: response.data.qr_type,
                qr_code_color: response.data.qr_code_color,
                qr_code_style: response.data.qr_code_style,
                company_info: response.data.company_info,
                personal_info: response.data.personal_info,
                personal_picture: response.data.personal_picture,
                company_logo: response.data.company_logo,

            }
        dispatch(setContentState(newObj))

        });
    }, []);

    
    useEffect(()=>{
        if (!id && !content.qr_type) navigate('/account/my-qrcodes/choose-qrstyle');
    }, []);

    const handleChange = async (e) => {
        const target = e.target;
        const name = target.name;
        let value = target.value;
        if (name === 'company_logo') {
            value = target.files[0];
            const objectUrl = URL.createObjectURL(target.files[0])
            setCompanyLogo(objectUrl)
        } else if (name === 'personal_picture') {
            value = target.files[0];
            const objectUrl = URL.createObjectURL(target.files[0])
            setPersonalPicture(objectUrl)
        }
        const newObj = { [name]: value };
        dispatch(setContentState(newObj))
    }

    const handleCompanyChnage = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        const company_info = content.company_info;
        const newObj = {...company_info, [name]: value };
        dispatch(setContentState({company_info: newObj}))
    }
  
      
    const handlePersonalChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        const personal_info = content.personal_info;
        const newObj = {...personal_info, [name]: value };
        dispatch(setContentState({personal_info: newObj}))
    }

    let qrcontent = (<Accordian title={"Website information"} >
                        {/* <p className='pb-2'>Website information</p> */}
                        <Input type='text' name="website_info" value={content.website_info} placeholder="Website Link" onChange={handleChange} />
                    </Accordian>);
    let qrContentPreview = '';
    if (content.qr_type === QR_TYPE.TEXT) {
        qrcontent = (<Accordian title={"Write your QR information"} >
                        {/* <p className='pb-2'>QR information</p> */}
                        <Input type='textarea' name="website_info" value={content.website_info} placeholder="QR Information" required onChange={handleChange}></Input>
                    </Accordian>);
    }
    if (content.qr_type === QR_TYPE.COMPANY_PROFILE){
        qrcontent = (<CompanyProfileContent handleChange={handleChange} handleCompanyChnage={handleCompanyChnage} companyLogo={companyLogo}/>);
        qrContentPreview = <CompanyProfile logo={companyLogo}/>;
    }
    else if (content.qr_type === QR_TYPE.PERSONAL_PROFILE) {
        qrcontent = (<PersonalProfileContent handleChange={handleChange} handlePersonalChange={handlePersonalChange} personalpicture={personalPicture}/>);
    qrContentPreview = <PersonalProfile logo={personalPicture}/>;
    }


    return (
        <>
            <div>
                <div className='grid grid-cols-12 gap-3 mb-5'>
                    <div className='col-start-1 col-end-9'>
                        <h1 className='fw-600'>2. Content of your QR code </h1>
                    </div>
                    <div className='col-start-9 col-end-13'>
                        <div className='flex justify-center gap-4'>
                            <Button link={"/account/my-qrcodes/choose-qrstyle"} text="Back" />
                            <Button link={"/account/my-qrcodes/qrdesign"} text="Next" />
                        </div>
                    </div>
                </div>
                
                <div  className='flex gap-4' >
                <div className='w-3/5'>
                    {/* <div className=' w-3/5 md:w-8/12'> */}
                        <div className=''>
                            <Accordian title={"Name of your QR code*"} >
                                <Input type='text' name="name" value={content?.name} placeholder="E.g My QR Code" required onChange={handleChange} />
                            </Accordian>
                        </div>
                        <div className='mt-2'>
                            {qrcontent}
                        </div>
                    {/* </div> */}
                </div>

                <div className='w-2/5'>
                    <div className=''>
                        {qrContentPreview}
                    </div>
                </div>

                </div>
            </div>
        </>
    )
}
export default ContentQrCode
