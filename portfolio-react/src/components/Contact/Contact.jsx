import React from 'react';
import './Contact.css';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import mail from '../../assets/mail.png';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "73342602-5114-4d1f-963e-df4da5328a5e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Feel free to contact us 24/7</p>
          
          {/* LinkedIn */}
          <div className="contact-detail">
            <a href="www.linkedin.com/in/harsh-choudhary5" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className='social-img' />
              
            </a>
            <p>Harsh Choudhary
            </p>
          </div>

          {/* GitHub */}
          <div className="contact-detail">
            <a href="https://github.com/mrHarshchoudhary" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className='social-img' />  
            </a>
            <p>mrHarshchoudhary</p>
          </div>
          {/* Email */}
          <div className="contact-detail">
            <a href="harshchoudharyv@gmail.com" target='_blank'>
            <img src={mail} alt="Email" className='social-img' />
            
            </a>
            <p>harshchoudharyv@gmail.com</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter Your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter Your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' id=""></textarea>
          <button type='submit' className="connect-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
