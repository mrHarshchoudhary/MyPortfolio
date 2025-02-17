import React, { useState } from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Frontend Development",
    description:
      "I create dynamic, user-friendly, and responsive web interfaces using HTML, CSS, JavaScript, and React. My focus is on crafting seamless user experiences while ensuring cross-browser compatibility.",
  },
  {
    title: "Backend Development",
    description:
      "I develop secure and efficient backend systems utilizing Express.js, MySQL, and MongoDB to ensure scalability and reliability in applications.",
  },
  {
    title: "AI-Powered Tools",
    description:
      "I design innovative AI-driven platforms like quiz generators and adaptive learning systems to enhance learning experiences.",
  },
  {
    title: "Problem Solving",
    description:
      "I use my expertise in data structures and algorithms to deliver optimized and scalable solutions tailored to client needs.",
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState(Array(servicesData.length).fill(false));

  const toggleReadMore = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div id="service" className="services-container">
      <h1 className="services-title">My Services</h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service.title}</h2>
            <p>
              {expanded[index]
                ? service.description
                : `${service.description.substring(0, 60)}...`}
            </p>
            <button
              className="read-more-btn"
              onClick={() => toggleReadMore(index)}
            >
            {expanded[index] ? "← Show Less" : "Read More →"}

            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
