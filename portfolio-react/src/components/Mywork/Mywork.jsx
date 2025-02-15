import React, { useState } from 'react';
import './Mywork.css';

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
      title: 'AI-Powered Quiz Generator',
      description:
        'An AI-based quiz generator that creates quizzes based on selected topics. It uses machine learning algorithms to analyze and generate relevant questions and answers based on user input. This project is designed to help students test their knowledge in a variety of fields.',
      websiteLink: 'https://yourwebsite.com',
      sourceCodeLink: 'https://github.com/yourusername/ai-quiz-generator',
    },
    {
      title: 'Adaptive Learning Platform',
      description:
        'An adaptive learning platform that generates quizzes and questions based on user input. It adjusts the difficulty level based on the learner’s progress and ensures a personalized learning experience for each user.',
      websiteLink: 'https://yourwebsite.com',
      sourceCodeLink: 'https://github.com/yourusername/adaptive-learning-platform',
    },
    {
      title: 'SkillSwap Platform',
      description:
        'A platform for skill-sharing, allowing people to exchange knowledge and experiences. Users can create profiles, offer services, and find experts in various fields to learn and share skills.',
      websiteLink: 'https://yourwebsite.com',
      sourceCodeLink: 'https://github.com/yourusername/skillswap',
    },
  ];

  return (
    <div id='work' className="mywork-container">
      <div className="mywork-title">
        <h1>My Work</h1>
        <p>Here are some of the projects I've worked on. Click on the website to explore or check out the source code!</p>
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
              <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="btn-website">
                View Website
              </a>
              <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer" className="btn-source">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
