import React from 'react'
import Input from '../../components/UI/Input'
import { useSelector } from 'react-redux'
import Accordian from '../../components/UI/Accordian'

const CompanyProfileContent = ({ handleChange, handleCompanyChnage, companyLogo }) => {
  const content = useSelector(state => state.allContent)

  return (<><Accordian className="mt-3" title={"Write your Company information"} >
    {/* <p className='pb-2 '>Company information</p> */}
    <div className='mb-4 mt-5'>
      <label className='mr-4 border-2 border-dashed py-3 px-3 block w-full rounded-md' htmlFor="company_logo">Upload Image/Logo</label>
      <input className='absolute -z-0 w-0 h-0 ' type="file" name='company_logo' id='company_logo' onChange={handleChange} />
      {companyLogo ? <img className='block mt-2 rounded-md h-28 w-auto object-contain' src={companyLogo} alt="" /> : ""}
    </div>
    <Input type='text' name="name" value={content.company_info.name} placeholder="Company Name" required onChange={handleCompanyChnage}></Input>
    <Input type='text' name="heading" value={content.company_info.heading} placeholder=" Heading " onChange={handleCompanyChnage}></Input>
    <Input type='text' name="subheading" value={content.company_info.subheading} placeholder="Subheading" onChange={handleCompanyChnage}></Input>

    <Input type='textarea' name="about" value={content.company_info?.about} placeholder="About Company" required onChange={handleCompanyChnage}></Input>
  </Accordian>

    <Accordian className="mt-3" title={"Company Address"} >
      {/* <p className='pb-2'>Company Address</p> */}
      <div className='flex flex-wrap -m-2 mt-4'>
        <div className='w-full md:w-1/2 px-2'>
          <Input type='text' name="address1" value={content.company_info.address1} placeholder="Address 01" onChange={handleCompanyChnage} />
        </div>
        <div className='w-full md:w-1/2 px-2'>
          <Input type='text' name="address2" value={content.company_info.address2} placeholder="Address 02" onChange={handleCompanyChnage}></Input>
        </div>
        <div className='w-full md:w-1/2 px-2'>
          <Input type='text' name="city" value={content.company_info.city} placeholder=" City " onChange={handleCompanyChnage}></Input>
        </div>
        <div className='w-full md:w-1/2 px-2'>
          <Input type='text' name="state" value={content.company_info.state} placeholder="State" onChange={handleCompanyChnage}></Input>
        </div>
        <div className='w-full md:w-1/2 px-2'>
          <Input type='text' name="postcode" value={content.company_info.postcode} placeholder="Postcode" onChange={handleCompanyChnage}></Input>
        </div>
        <div className='w-full md:w-1/2 px-2'>
          <Input type='text' name="country" value={content.company_info.country} placeholder="Country" onChange={handleCompanyChnage}></Input>
        </div>
      </div>
    </Accordian>
    <Accordian className='mt-3' title={"Contact Information"}>
      <div className='mt-4'>
        <Input type='text' name="website" value={content.company_info.website} placeholder="Website" onChange={handleCompanyChnage} />

        <Input type='text' name="mobile" value={content.company_info.mobile} placeholder="Mobile" onChange={handleCompanyChnage} />
        <Input type='email' name="email" value={content.company_info.email} placeholder="Email" onChange={handleCompanyChnage} />
        <Input type='text' name="socialmediafb" value={content.company_info.socialmediafb} placeholder="Facebook" onChange={handleCompanyChnage} />
        <Input type='text' name="socialmediainsta" value={content.company_info.socialmediainsta} placeholder="Instagram" onChange={handleCompanyChnage} />
        <Input type='text' name="socialmediawp" value={content.company_info.socialmediawp} placeholder="Whatsapp" onChange={handleCompanyChnage} />
        <Input type='text' name="socialmediatwitter" value={content.company_info.socialmediatwitter} placeholder="Twitter" onChange={handleCompanyChnage} />
        <Input type='text' name="socialmediaskype" value={content.company_info.socialmediaskype} placeholder="Skype" onChange={handleCompanyChnage} />

      </div>
    </Accordian>

  </>
  )
}

export default CompanyProfileContent