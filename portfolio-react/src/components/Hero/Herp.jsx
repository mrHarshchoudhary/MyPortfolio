import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import resumePDF from '../../assets/Harsh.pdf'; // Import your resume file

const Hero = () => {
  // Scroll to contact section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" className="circle-img" />
      <h1>
        <span>I' am Harsh Choudhary,</span> Software developer based in India
      </h1>
      <p>
        I am a Software developer from Vadodara, Gujarat, pursuing my BTech in Information Technology (3rd year).
      </p>
      <div className="hero-action">
        {/* Connect With Me button */}
        <div className="hero-connect" onClick={handleScrollToContact}>
          Connect With Me
        </div>

        {/* Resume Download button */}
        <div className="hero-resume">
          <a href={resumePDF} download="Harsh_Choudhary_Resume.pdf">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
