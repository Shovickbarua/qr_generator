import React from "react";
import { Helmet } from "react-helmet";

const HeadMeta = ({title='', description='', keywords='', image='', author='', copyright='', application_name='', canonical=''}) => {
   let ttitle = title ? title : "QR code generator with logo and profile page for your company | FlexQR";
   let tdescription = description ? description : "Represent your company with a qr code. It is now free to generate qr code to represent your company easily. You will get a company profile page to share with qr code generator";
   return (
      <Helmet>
        <title>{ttitle}</title>
        <meta name="description" content={tdescription} />
        {keywords && <meta name="keywords" content={keywords} />}
         <meta name="author" content={author ? author : 'Flexible It'} />
         <meta name="copyright" content={copyright ? copyright : "Flexible It"} />
         <meta name="application-name" content={application_name ? application_name : 'FlexQR'} />
         <meta property="og:title" content={ttitle} />
         <meta property="og:type" content="website" />
         <meta property="og:url" content={window.location.href} />
         {image && <meta property="og:image" content={image} />}
         <meta property="og:description" content={tdescription} />
         <meta name="twitter:card" content="summary" />
         <meta name="twitter:title" content={ttitle} />
         <meta name="twitter:description" content={tdescription} />
         {image && <meta name="twitter:image" content={image} />}
         {canonical && <link rel="canonical" href={canonical}></link>}
    </Helmet>
   )
}

export default HeadMeta;