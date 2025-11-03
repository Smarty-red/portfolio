import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Software Engineer",
          "Elite MERN Stack Architect",
          "Full Stack Solution Innovator",
          "Technical Lead & Visionary",
          "JavaScript Ecosystem Expert (MERN | MEVN | LAMP)",
          "Cloud-Native Solution Architect",
          "API Integration & Automation Specialist",
          "DevOps and CI/CD Engineer",
          "Open Source Contributor & Community Builder",
          "Software Architecture Strategist",
          "Agile and Scrum Advocate",
          "Technology Mentor & Engineering Coach"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
