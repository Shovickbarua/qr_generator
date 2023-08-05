import HeadMeta from "../../../components/HeadMeta";
import FooterNew from "../layouts/FooterNew";
import Header from "../layouts/Header";
import React from "react"

const PrivacyPolicy = () => {
return (
    <>
    <HeadMeta
            title="FlexQR privacy policy page | FlexQR privacy policy"
            description="Read our privacy policies. Let us know if you have any question."
            canonical={window.location.hostname +'/privacy-policy'}
          />
 <div>
    <Header />  
  </div>
<div className=" ">
<h2 className=" pt-24  pb-16   bg-slate-200  text-center font-serif text-6xl">Privacy Policy </h2>

<div  className=" mx-40 pt-6 font-sans text-xl pb-20">


   <h3 >License Grant: </h3>  
  <p>Provider grants You a non-exclusive, non-transferable license to use the Software for the purpose of generating customized QR codes.</p>
 <p> You may use the generated QR codes for personal and commercial purposes, subject to the restrictions outlined in this Agreement</p>

 <h3>Ownership and Intellectual Property: </h3>
  <p>Provider retains all right, title, and interest in and to the Software, including any intellectual property rights.</p>
<p>You acknowledge that the QR codes generated using the Software are owned by You, and You are solely responsible for their content and use.</p>
<h3>User Obligations:</h3>  
<p>You agree to use the Software in compliance with all applicable laws, regulations, and this Agreement.
You shall not use the Software to generate QR codes that are illegal, infringe upon the rights of others, contain offensive content, or violate any third-party terms or policies.</p>
<p> You are responsible for maintaining the confidentiality of your generated QR codes and any associated data.</p>



<h3> Disclaimer of Warranty:</h3> 
<p>The Software is provided "as is" without warranty of any kind, either expressed or implied.</p>
<p>Provider does not warrant that the Software will be error-free or uninterrupted, or that it will meet your specific requirements.</p>
<p>Provider shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the Software.</p>


<h3>Termination:</h3> 
<p> Provider may, at its sole discretion, terminate this Agreement or suspend your access to the Software at any time, without prior notice..</p>
<p>Upon termination, You must cease all use of the Software and destroy any copies of the Software in your possession.</p>




<h3>Modification of Terms:</h3> 
<p>Provider reserves the right to modify or update this Agreement at any time by providing notice to You.</p>
<p>Continued use of the Software after the modifications shall constitute your acceptance of the revised Agreement.</p>

<h3>Governing Law and Jurisdiction:</h3>
<p>This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction]</p>

<p>Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction]</p>

<h3>Entire Agreement:</h3>
<p> This Agreement constitutes the entire agreement between You and Provider regarding the use of the Software and supersedes any prior agreements or understandings.</p>


  </div>

  </div>
  <div  className="mt-10">
  <FooterNew />
  </div>
    </>
)
}
export default PrivacyPolicy;
