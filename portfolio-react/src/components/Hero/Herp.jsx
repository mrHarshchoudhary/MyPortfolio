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
    <span>Hi, I'm Harsh Choudhary!</span> A Passionate Software Developer
  </h1>
  <p>
    I'm a third-year **BTech student in Information Technology from Vadodara, Gujarat.  
    I love building web applications and exploring new technologies in software development.
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