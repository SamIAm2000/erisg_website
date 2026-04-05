import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import projects from './projectData';
import projectPages from '../../data/projectPages.json';

const publicBase = process.env.PUBLIC_URL || '';

function ProjectPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);
  const pageData = project ? projectPages[projectId] : undefined;

  const bodyHtml = useMemo(() => {
    const raw = pageData?.bodyHtml || '';
    return raw.replace(/\{\{PUBLIC_URL\}\}/g, publicBase);
  }, [pageData]);

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [navigate, project]);

  useEffect(() => {
    if (!project) return;
    const t = pageData?.title || project.title;
    document.title = t;
    return () => {
      document.title = 'Eris Gao Portfolio';
    };
  }, [project, pageData, projectId]);

  if (!project) {
    return null;
  }

  return (
    <Layout>
      <div className="max-w-[72rem]">
        {bodyHtml ? (
          <div
            className="eris-project-body eris-bodycopy"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
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
        <p className="eris-bodycopy mt-10">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Open this project on erisgao.com
          </a>
        </p>
      </div>
    </Layout>
  );
}

export default ProjectPage;
