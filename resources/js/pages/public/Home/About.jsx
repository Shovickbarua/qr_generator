import React from 'react'
import Header from '../layouts/Header'
import FooterNew from '../layouts/FooterNew'
import { Helmet } from 'react-helmet'
import HeadMeta from '../../../components/HeadMeta'

function About() {
  return (
    <div>
    <HeadMeta 
      title="FlexQR about page | FlexQR QR code generator"
      description="We are here to represent your data with a simple QR code easily."
      canonical={window.location.hostname +'/about'}
    />
    <Header />
    <div >
   <h2 className=" pt-24  pb-16  bg-slate-200  text-center font-serif text-6xl"> About Us </h2> 
   </div>

<div className=' max-w-screen-xl mt-16 mx-auto'>
    <p className='   font-serif text-lg'> At  <b className=' font-bold'> <a href="https://flexibleit.net/" target="_blank" rel="noopener noreferrer">Flexible It</a></b> , we pride ourselves on being a highly flexible and adaptable IT team, capable of handling multiple projects simultaneously. With a proven track record of successfully delivering 3/4 projects and counting, we are poised to embrace the challenges of future endeavors.</p>


<p className=' mt-5   font-serif text-lg'>Our team comprises skilled professionals with diverse backgrounds and expertise. From developers and designers to project managers and quality assurance specialists, we bring together a wealth of talent and experience. We thrive on collaboration, pooling our collective knowledge to devise innovative solutions and overcome any obstacles that come our way.</p>

<p className=' mt-5   font-serif text-lg'>Flexibility is at the core of our work philosophy. We understand that each project is unique, with its own set of requirements and constraints. That's why we approach every undertaking with an open mindset, customizing our strategies to fit the specific needs of each client. Our agile project management approach ensures that we can adapt to changes and deliver results efficiently.</p>

<p className='mt-5   font-serif text-lg'>With a comprehensive range of technical skills and deep industry knowledge, we are well-equipped to handle diverse projects across various domains. Our team is proficient in cutting-edge technologies, frameworks, and programming languages, staying up to date with the latest advancements in the IT landscape. This enables us to provide tailored solutions that align with industry best practices.</p>

<p className='mt-5  font-serif text-lg'>But don't just take our word for it! Our satisfied clients speak for our commitment to excellence. We have garnered testimonials highlighting our professionalism, quality of work, and ability to deliver projects on time. We take pride in building strong, long-lasting partnerships with our clients, and we look forward to adding your project to our success stories.</p>

<p className='mt-5   font-serif text-lg'>As we move forward, we envision expanding our project portfolio, taking on new and exciting challenges. Our passion for continuous learning and growth drives us to push boundaries and embrace emerging technologies. With our team by your side, you can be confident in our ability to transform your ideas into reality.</p>

<p className='mt-5 font-serif text-lg'>We invite you to get in touch with us today to discuss your project requirements and explore how our flexible IT team can bring your vision to life. Together, let's embark on a journey of innovation and success!</p>

</div>
<div className=" mt-10 text-center">
      <a href="/contact-us"> <button type="button" className="text-white font-serif bg-blue-700 hover:bg-blue-800 font-medium lg:rounded-full round md:rounded-full rounded-full lg:text-2xl md:text-xl text-2xl lg:px-10 md:px-10 px-10 lg:py-2 md:py-4 py-3 mb-16 mr-3 ">Contact Us</button></a>
</div>
{/* <div className='  ml-20 font-bold text-lg mb-2'> <a href="https://flexibleit.net/" target="_blank" rel="noopener noreferrer">Flexible It</a> </div> */}
{/* <a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example</a> */}




<FooterNew />
   </div>
  )
}

export default About