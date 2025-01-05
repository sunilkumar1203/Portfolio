import React from 'react';
import './../App.css'; // Make sure you link the correct CSS file

const Skill = () => {
  const skills = [
    { name: 'C', level: 0 },
    { name: 'Java', level: 25 },
    { name: 'HTML', level: 50 },
    { name: 'CSS', level: 75 },
    { name: 'JS', level: 100 },
    { name: 'MySQL', level: 50 },
    { name: 'React', level: 75 },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skill-indicators">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="skill-indicator"
            style={{ '--level': `${skill.level}%` }} // Percentage for easier understanding
          >
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;