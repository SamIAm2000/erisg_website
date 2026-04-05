import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div>
      <Link to={`/projects/${project.id}`} className="block no-underline">
        <div className="flex justify-center">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="max-h-[30rem] w-full max-w-full object-contain"
          />
        </div>
        <p className="eris-caption text-center mt-[0.5em] mb-0">
          {project.title}
        </p>
      </Link>
    </div>
  );
}

export default ProjectCard;
