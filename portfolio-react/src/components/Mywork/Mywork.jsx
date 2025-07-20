import React, { useState } from "react";
import "./Mywork.css";

const MyWork = () => {
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const projects = [
    {
      title: "Gym",
      description:
        "A personal fitness-themed website built using HTML, CSS, and JavaScript, showcasing core fitness sections such as Lift Summary, Professional Achievements, Workout Splits, and Mentoring. Designed with a clean and modern layout, this project highlights my frontend development skills and ability to create user-centric fitness pages.",
      websiteLink: "https://gym-trannning-harsh.vercel.app/",
      sourceCodeLink: "https://github.com/mrHarshchoudhary/GYM_Trannning",
    },
    {
      title: "SkillWave",
      description:
        "SkillWave is an AI-based learning platform that helps users generate MCQs, quizzes, long-answer, and short-answer questions based on any topic they provide. This project is designed to assist students, educators, and learners by creating customized learning materials instantly.",
      websiteLink: "https://yourwebsite.com",
      sourceCodeLink: "https://github.com/mrHarshchoudhary/SkillWave",
    },

    {
      title: "CivicEye",
      description:
        "CivicEye is a web-based crime reporting platform that allows users to report incidents they witness, such as accidents or criminal activities. Once reported, the system automatically notifies the nearest police stations online, ensuring quick response and action. This platform helps both citizens and law enforcement agencies to improve safety and security in real time.",
      websiteLink: "https://yourwebsite.com",
      sourceCodeLink: "https://github.com/mrHarshchoudhary/CivicEye1",
    },
  ];

  return (
    <div id="work" className="mywork-container">
      <div className="mywork-title">
        <h1>My Project</h1>
        <p>
          Here are some of the projects I’ve built while learning and improving
          my skills. Feel free to check them out!
        </p>
      </div>

      <div className="mywork-projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>
              {expanded[index]
                ? project.description
                : `${project.description.substring(0, 100)}...`}
              {project.description.length > 100 && (
                <button
                  onClick={() => toggleDescription(index)}
                  className="read-more-btn"
                >
                  {expanded[index] ? (
                    <>
                      Show Less <span className="arrow-up">↑</span>
                    </>
                  ) : (
                    <>
                      Read More <span className="arrow-down">↓</span>
                    </>
                  )}
                </button>
              )}
            </p>
            <div className="project-buttons">
              {/* <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="btn-website">
                View Website
              </a> */}
              {/* <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer" className="btn-source">
                Source Code
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
