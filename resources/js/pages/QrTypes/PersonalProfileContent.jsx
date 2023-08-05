import React from 'react'
import Accordian from '../../components/UI/Accordian'
import Input from '../../components/UI/Input'
import { useSelector } from 'react-redux'

const PersonalProfileContent = ({handleChange, handlePersonalChange, personalpicture }) => { 
    const content = useSelector(state => state.allContent)


  return ( <><Accordian className='mt-3' title={"Write your QR information"} >
                        <div className='mb-4 mt-5'>
                            <label className='mr-4 border-2 border-dashed py-3 px-3 block w-full rounded-md' htmlFor="personal_picture">Upload Image/Logo</label>
                            <input className='absolute -z-0 w-0 h-0 ' type="file" name='personal_picture' id='personal_picture' onChange={handleChange} />
                            {personalpicture ? <img className='block mt-2 rounded-md h-28 w-auto object-contain' src={personalpicture} alt="" /> : ""}
                        </div>
                        <Input type='text' name="name" value={content.personal_info.name} placeholder="Personal Name" required onChange={handlePersonalChange}></Input>
                        <Input type='text' name="heading" value={content.personal_info.heading} placeholder=" Heading "  onChange={handlePersonalChange}></Input>
                        <Input type='text' name="subheading" value={content.personal_info.subheading} placeholder="Subheading"  onChange={handlePersonalChange}></Input>
                        
                        <Input type='textarea' name="about" value={content.personal_info?.about} placeholder="About Personal" required onChange={handlePersonalChange}></Input>  
                    </Accordian>;

                    <Accordian className="mt-3" title={"Personal Address"}>
                     <div className='flex flex-wrap -m-2 mt-4'>
                         <div className='w-full md:w-1/2 px-2'>
                             <Input type='text' name="address1" value={content.personal_info.address1} placeholder="Address 01" onChange={handlePersonalChange} />
                         </div>
                         <div className='w-full md:w-1/2 px-2'>
                             <Input type='text' name="address2" value={content.personal_info.address2} placeholder="Address 02" onChange={handlePersonalChange}></Input>
                         </div>
                         <div className='w-full md:w-1/2 px-2'>
                             <Input type='text' name="city" value={content.personal_info.city} placeholder=" City "  onChange={handlePersonalChange}></Input>
                         </div>
                         <div className='w-full md:w-1/2 px-2'>
                             <Input type='text' name="state" value={content.personal_info.state} placeholder="State" onChange={handlePersonalChange}></Input>
                         </div>
                         <div className='w-full md:w-1/2 px-2'>
                             <Input type='text' name="postcode" value={content.personal_info.postcode} placeholder="Postcode" onChange={handlePersonalChange}></Input>
                         </div>
                         <div className='w-full md:w-1/2 px-2'>
                             <Input type='text' name="country" value={content.personal_info.country} placeholder="Country" onChange={handlePersonalChange}></Input>
                         </div>
                     </div>
                 </Accordian>;
                   <Accordian className='mt-3' title={"Contact Information"}>
                   <div className='mt-4'>
                   <Input type='text' name="website" value={content.personal_info.website} placeholder="Website"  onChange={handlePersonalChange}/>
                  
                   <Input type='text' name="mobile" value={content.personal_info.mobile} placeholder="Mobile"  onChange={handlePersonalChange}/>
                   <Input type='email' name="email" value={content.personal_info.email} placeholder="Email"  onChange={handlePersonalChange}/>
                   <Input type='text' name="socialmediawp" value={content.personal_info.socialmediawp} placeholder="Whatsapp"  onChange={handlePersonalChange}/>
                   <Input type='text' name="socialmediafb" value={content.personal_info.socailmediafb} placeholder="Facebook"  onChange={handlePersonalChange}/>
                   <Input type='text' name="socialmediainsta" value={content.personal_info.socailmediainsta} placeholder="Instagram"  onChange={handlePersonalChange}/>
                   <Input type='text' name="socialmediatwitter" value={content.personal_info.socialmediatwitter} placeholder="Twitter"  onChange={handlePersonalChange}/>
                   <Input type='text' name="socialmediaskype" value={content.personal_info.socailmediaskype} placeholder="Skype"  onChange={handlePersonalChange}/>
                 

                   </div>
               </Accordian>
            </>
  )
}

export default PersonalProfileContent;