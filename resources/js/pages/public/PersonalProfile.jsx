import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import QrcodeServices from "../../services/QrcodeServices"
import { MdLocationPin, MdOutlineEmail,MdMobileScreenShare } from "react-icons/md";
import { useSelector } from "react-redux"
import {TbWorld} from "react-icons/tb";
import {BsFacebook} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import {BsSkype} from "react-icons/bs";


const PersonalProfile = ({logo=null}) =>{
    const {code} = useParams()
    const content = useSelector(state => state.allContent)
    const [personal, setPersonal] = useState();
    console.log("code", code)
    // console.log("companyInfo", companyInfo)

    useEffect(()=>{
        // console.log('in company profile', content)
        if (code) {
            getInfo()
        } else if (!code && content?.personal_info) {
            setPersonal({...personal, qr_info:  content.personal_info})
        }
    }, [code, content?.personal_info])

    const getInfo = async() => {
        const res = await QrcodeServices.show(code);
        console.log('res', res);
        if (res.success) {
            setPersonal(res.data);
        }
    }

    const viewISNotReady = () => {
        if (!personal ) return true;
        if (!personal.qr_info?.name && !personal.qr_info.heading && !personal.qr_info.subheading) return true;
        return false;
    }
    const getlogo = () =>{
        if (personal.qr_info?.personal_logo) return personal.qr_info?.personal_Picture;
        else if(logo) return logo;
        return '';
    }


    if (viewISNotReady()) return <></>;
    return (<div>
        <div className=" bg-blue-400">
            <div className="max-w-2xl text-center mx-auto">
            <h1 className="text-3xl py-5 font-bold">{personal.qr_info?.name}</h1>
                <div className="text-center pb-5">
                    <div className="inline-block">
                        <img className="w-24 h-auto object-contain" src={getlogo()} alt="" />
                    </div>
                </div>    
            </div>
        </div>
        <div className="max-w-2xl mx-auto">
            <div className="text-center">
                <h2 className="text-xl mt-5 mb-3 font-bold">{personal.qr_info.heading}</h2>
                <h3 className="text-lg fornt-medium">{personal.qr_info.subheading}</h3>
                <p className="mb-4">{personal.qr_info?.about}</p>
            </div>
            <div className="shadow-md rounded-md py-5 pr-8">
                <div className="flex items-center">
                    <div className="w-1/4 md:w-1/5 text-center">
                        <div className="inline-block bg-gray-200 rounded-sm p-3"><MdLocationPin className="text-gray-500 " size={"26px"}/></div>
                    </div>
                    <div className="w-3/4 md:w-4/5">{personal.qr_info.address1}
                        {personal.qr_info.address2 ?  ', ' +personal.qr_info.address2 : ''}
                        {personal.qr_info.city ?  ', ' +personal.qr_info.city : ''}
                        {personal.qr_info.state ?  ', ' +personal.qr_info.state : ''}
                        {personal.qr_info.country ?  ', ' +personal.qr_info.country : ''}
                        {personal.qr_info.postcode ?  ', ' +personal.qr_info.postcode : ''}

                    </div>
                </div>
                {personal.qr_info.email ? <div className="flex items-center mt-5">
                    <div className="w-1/4 md:w-1/5 text-center">
                        <div className="inline-block bg-gray-200 rounded-sm p-3"><MdOutlineEmail className="text-gray-500 " size={"26px"}/></div>
                    </div>
                    <div className="w-3/4 md:w-4/5">
                        <a href={"mailto:"+personal.qr_info.email}>{personal.qr_info.email}</a>
                    </div>
                </div>: ''}
                {personal.qr_info.mobile ? <div className="flex items-center mt-5">
                    <div className="w-1/4 md:w-1/5 text-center">
                        <div className="inline-block bg-gray-200 rounded-sm p-3"><MdMobileScreenShare className="text-gray-500 " size={"26px"}/></div>
                    </div>
                    <div className="w-3/4 md:w-4/5">
                        {personal.qr_info.mobile}
                    </div>
                </div>: ''}
                {personal.qr_info.website ? <div className="flex items-center mt-5">
                    <div className="w-1/4 md:w-1/5 text-center">
                        <div className="inline-block bg-gray-200 rounded-sm p-3"><TbWorld className="text-gray-500 " size={"26px"}/></div>
                    </div>
                    <div className="w-3/4 md:w-4/5">
                        {personal.qr_info.website}
                    </div>
                </div>: ''}
                

                <h2 className=" text-center text-xl">  Social Media</h2>
              <div className=" flex gap-6 mt-10  justify-center items-cente " >
              {personal.qr_info.socialmediafb ? 
                  <a href="" className=" ">  < BsFacebook className=" h-8 w-auto" /></a>
                 
                  : ''}
                  {personal.qr_info.socialmediainsta ?
                  <a href="" className=""><BsInstagram className=" h-8 w-auto"/></a> : ''}

                  {personal.qr_info.socialmediatwitter ?
                  <a href="" className=""><AiFillTwitterCircle className=" h-8 w-auto"/></a> : ''}

                   {personal.qr_info.socialmediaskype ?
                  <a href="" className=""><BsSkype className=" h-8 w-auto"/></a> : ''}


              </div>
            </div>
        </div>
        </div>);
}

export default PersonalProfile