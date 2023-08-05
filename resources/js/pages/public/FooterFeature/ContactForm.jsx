// import React from 'react'
// import Header from '../layouts/Header';
// import FooterNew from '../layouts/FooterNew';
// import React, { useState } from 'react';

//   const ContactForm = () => {
//       const [name, setName] = useState('');
//       const [email, setEmail] = useState('');
//       const [message, setMessage] = useState('');
   
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = { name, email, message };

//         // Send a POST request to your Laravel backend route
//         fetch('/contact', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(formData),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data.message); // Success message from Laravel
//             // Reset form fields
//             setName('');
//             setEmail('');
//             setMessage('');
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     };

// return (
//  <>
//     <div>
//     <Header /> 
//   </div>
//   <div >
//   <h2 className=" pt-32  pb-16  bg-slate-200  text-center font-serif text-6xl"> Contact Us </h2> 

//   </div>
//   <div>
//   <img src="/img/flexqr-logo.png" className=" pt-16 mx-auto w-3/12 h-auto " alt="" />

//   <form onSubmit={handleSubmit}>
//             <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
//             <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
//             <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" required></textarea>
//             <button type="submit">Submit</button>
//         </form>
  
//   {/* <form className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow-md">
//       <label className="block mb-4">
//         <span className="text-gray-700">Name:</span>
//         <input className="form-input mt-1 block w-full" type="text" name="name" />
//       </label>
//       <label className="block mb-4">
//         <span className="text-gray-700">Email:</span>
//         <input className="form-input mt-1 block w-full" type="email" name="email" />
//       </label>
//       <label className="block mb-4">
//         <span className="text-gray-700">Mobile:</span>
//         <input className="form-input mt-1 block w-full" type="number" name="number" />
//       </label>
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
//     </form> */}
//   </div>
import React, { useState, showAlert} from 'react';
import axios from 'axios';
import Header from '../layouts/Header';
import FooterNew from '../layouts/FooterNew';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/contact', { name, email, message })
    
      .then((response) => {
        console.log(response.data.message);
        setSuccessMessage(response.data.message);
        setTimeout(() => {
          setSuccessMessage('');
        }, 4000);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        // alert("subscribed Successfully!");
        setErrorMessage('An error occurred. Please try again later.');
        
      
      });

      // const showAlert = () => {
      //   alert('This is a sample alert message!');
      // };
  };

  return (
    <div>
      <div>
          <Header /> 
    </div>
    
    <div >
   <h2 className=" pt-24  pb-16   bg-slate-200  text-center font-serif text-6xl"> Contact Us </h2> 
   </div>
      
      {errorMessage && <p>{errorMessage}</p>}
      {/* <img src="/img/flexqr-logo.png" className=" pt-16 pb-8 mx-auto w-3/12 h-auto " alt="" /> */}
      <form className=" shadow-md rounded max-w-md object-center mt-3 p-4 mx-auto pt-6 pb-8 mb-4" onSubmit={handleSubmit} >
      {successMessage && <p>{successMessage}</p>}
      <div className="mb-4">
          <label className="block text-gray-700 text-sm ml-3 font-bold mb-1" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm ml-3 font-bold mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold ml-3 mb-1  " htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          
          <button  
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-5/6 rounded focus:outline-none focus:shadow-outline"
            type="submit" > Submit
          </button>
        </div>


        {/* onClick={showAlert} */}
       {/* <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> <br />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea> <br />
        <button type="submit">Submit</button> */}
      </form>

      
      
  <div  className="mt-10">
  <FooterNew />
  </div>
    </div>
    
  );
};

export default ContactForm;

 
 
 
 
 
 
//  </>
// )


// }

// export default ContactForm;