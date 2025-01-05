import React from 'react';
import './../App.css';
import Keeper from './../assets/keeper.png';
import SkillQuestEdu from './../assets/skillquestedu.png';
import Leaf from './../assets/leafimage.jpeg';
import Botimage from './../assets/botimage.jpg';
function Projects(props) {
  return (
    <div className='project-details'>
      <img className='project-img' src={props.image} alt="Keeper App" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p className='technology'>{props.technology}</p>
      <a href={props.gitHubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}

const Project = () => {
  return (
    <div>
      <div>
        <h2 style={{ marginLeft: '20px' }}>Projects</h2>
        <div className='project-container'>
          <Projects
            image={Keeper}
            title="Keeper App"
            description="Developed a user-friendly interface for users to add, delete, and view notes efficiently using React."
            technology="Technologies: React"
            gitHubLink="https://github.com/sunilkumar1203/KeeperApp"
          />
          <Projects
            image={SkillQuestEdu}
            title="SkillQuestEdu"
            description="Developed a user-friendly interface to learn words for deaf students."
            technology="Technologies: html css javascript"
            gitHubLink="https://github.com/sunilkumar1203/SkillQuestEdu"
          />
          <Projects
            image={Leaf}
            title="leaf disease detection"
            description="Developed a graphical interface for uploading leaf image and obtaining disease detection results."
            technology="Technologies: TensorFlow , Keras"
            gitHubLink="https://github.com/sunilkumar1203/LeafDetect-pro"
          />
          <Projects
            image={Botimage}
            title="ChatBot"
            description="Developed a user friendly interface for predefined bot reply to user message."
            technology="Technologies: React"
            gitHubLink="https://github.com/sunilkumar1203/ChatBot"
          />
          
        </div>
      </div>
    </div>
  );
}

export default Project;
