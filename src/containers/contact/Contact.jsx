import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted: ', formData);
 
  };

  return (

    <>
    <div style={{marginTop:'70px'}}>
   
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4040142907256!2d77.48702827457466!3d28.67755873203622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf23929d59485%3A0x227f4eeb1aa5ad94!2sGangapuram%2C%20Avantika%20Colony%2C%20Shastri%20Nagar%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201015!5e0!3m2!1sen!2sin!4v1721289101060!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} loading="lazy" ></iframe>
    </div>
    <h1 className='text-white justify-content-center d-flex'>Contact me</h1>
    <form  action='https://formspree.io/f/mblrlelr' method='post'>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
         
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
         
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          
          required
        />
      </div>
      <div style={{textAlign:'center'}}>
      <button type="submit" >Submit</button>
      </div>
    </form>
    </>
  );
};

export default Contact;
