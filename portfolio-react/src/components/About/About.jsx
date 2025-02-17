import React from 'react';
import './About.css';
import profileImg from '../../assets/profile_img.jpg';

import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiMysql, SiNumpy, SiPandas, SiHibernate } from 'react-icons/si';

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        {/* Left Section - Profile Image */}
        <div className="about-left">
          {/* <img src={myphoto} alt="Profile" /> */}
        </div>

        {/* Right Section - Content */}
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi there! I’m <strong>Harsh Choudhary</strong>, a third-year B.Tech student in Information Technology at <strong>Parul Institute of Engineering and Technology</strong>.
              I am passionate about leveraging technology to create innovative and impactful solutions.
            </p>
            <p>
              I specialize in frontend and backend development, with a keen interest in problem-solving and AI-powered applications. My journey in tech has been fueled by curiosity and the drive to continuously learn and grow.
            </p>
          </div>

          {/* Skills Section */}
          <div className="about-skills">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <FaJava className="skill-icon" />
                <p>Java</p>
              </div>
              <div className="skill-card">
                <FaPython className="skill-icon" />
                <p>Python</p>
              </div>
              <div className="skill-card">
                <FaHtml5 className="skill-icon" />
                <p>HTML</p>
              </div>
              <div className="skill-card">
                <FaCss3Alt className="skill-icon" />
                <p>CSS</p>
              </div>
              <div className="skill-card">
                <FaJs className="skill-icon" />
                <p>JavaScript</p>
              </div>
              <div className="skill-card">
                <FaReact className="skill-icon" />
                <p>React.js</p>
              </div>
              <div className="skill-card">
                <SiSpringboot className="skill-icon" />
                <p>Spring Boot</p>
              </div>
              <div className="skill-card">
                <FaNodeJs className="skill-icon" />
                <p>Node.js</p>
              </div>
              <div className="skill-card">
                <SiMongodb className="skill-icon" />
                <p>MongoDB</p>
              </div>
              <div className="skill-card">
                <SiMysql className="skill-icon" />
                <p>MySQL</p>
              </div>
              <div className="skill-card">
                <SiNumpy className="skill-icon" />
                <p>NumPy</p>
              </div>
              <div className="skill-card">
                <SiPandas className="skill-icon" />
                <p>Pandas</p>
              </div>
              <div className="skill-card">
                <SiHibernate className="skill-icon" />
                <p>Hibernate</p>
              </div>
            </div>
          </div>

          {/* Hobbies Section */}
          <div className="about-hobbies">
            <h2>Hobbies</h2>
            <ul>
              <li>Reading historical books</li>
              <li>Playing cricket</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Programming Languages</p>
        </div>
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Frameworks & Libraries</p>
        </div>
      </div>
    </div>
  );
};

export default About;