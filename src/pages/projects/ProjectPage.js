import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { ProjectPageProvider } from '../../components/project';
import projects from './projectData';
import projectContentBySlug from './projectContentRegistry';

function ProjectPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);
  const Content = projectContentBySlug[projectId];

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [navigate, project]);

  useEffect(() => {
    if (!project) return;
    document.title = project.title;
    return () => {
      document.title = 'Eris Gao Portfolio';
    };
  }, [project, projectId]);

  if (!project) {
    return null;
  }

  return (
    <Layout>
      <ProjectPageProvider projectId={projectId}>
        {Content ? (
          <div className="eris-project-body eris-bodycopy w-full">
            <Content />
          </div>
        ) : (
          <>
            <h1 className="eris-h1 mb-8">{project.title}</h1>
            <div className="mb-10">
              <img
                src={project.imageUrl}
                alt=""
                className="w-full max-h-[50rem] object-contain"
              />
            </div>
          </>
        )}
      </ProjectPageProvider>
    </Layout>
  );
}

export default ProjectPage;
