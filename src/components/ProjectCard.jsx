import React from 'react';

const ProjectCard = ({ title, text, image }) => (
  <div className="project-wrapper" style={{ backgroundImage: `url(${image})` }}>
    <div className="project">
      <div className="overlay">
        <p className="project-text" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
    <h3 className="project-title">[ {title} ]</h3>
  </div>
);

export default ProjectCard;
