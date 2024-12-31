import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      
      const formElements = form.current.elements;
      const isValid = Array.from(formElements).every(input => input.value !== '');
      
      if (!isValid) {
          alert('Please fill out all fields.');
          return;
      }

      emailjs.sendForm('service_7p7jz0a', 'template_ouwkkbg', form.current, 'J_nRaWFpvOZgAuOxb')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

   };
   
    return (
    <section className="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'></input>
                <input type="email" className="email" placeholder='Your Email' name='your_email'></input>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>  
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
            </form>
        </div>
        
        <div className="socialLinks">
          <a
            href="https://www.linkedin.com/in/julio68"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="http://github.com/julioabcde"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcon"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
    </section>
  )
}
export default Contact