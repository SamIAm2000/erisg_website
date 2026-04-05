import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import projects from './projectData';

function ProjectPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [navigate, project]);

  if (!project) {
    return null;
  }

  return (
    <Layout>
      <div className="max-w-[72rem]">
        <p className="eris-bodycopy mb-8">
          <Link to="/">← Index</Link>
        </p>
        <h1 className="eris-h1 mb-8">{project.title}</h1>
        <div className="mb-10">
          <img
            src={project.imageUrl}
            alt=""
            className="w-full max-h-[50rem] object-contain"
          />
        </div>
        <p className="eris-bodycopy">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Open this project on erisgao.com
          </a>
        </p>
      </div>
    </Layout>
  );
}

export default ProjectPage;
