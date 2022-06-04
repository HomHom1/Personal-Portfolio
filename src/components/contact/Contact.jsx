import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_21ipyyb', 'template_mp0ogqx', form.current, 'WSOJE32OaUW7PcoEf')
    e.target.reset()
  };
  return ( 
    <section id='contact' className='contact'>
      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail/>
            <h2>Email Me</h2>
            <h5>homahomen2@gmail.com</h5>
            <a href='mailto:homahomen2@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin/>
            <h2>Stay In Touch</h2>
            <h5>Homen Homa</h5>
            <a href='https://www.linkedin.com/in/homen/'>Connect with me</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required/>
              <input type="email" name='email' placeholder='Your Email' required/>
              <textarea name="message" cols="30" rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
          </form> 
      </div>
    </section>
  ) 
}

export default Contact