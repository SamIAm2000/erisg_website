import React, { createContext, useContext, useMemo } from 'react';

const ProjectPageContext = createContext(null);

export function ProjectPageProvider({ projectId, children }) {
  const value = useMemo(() => ({ projectId }), [projectId]);
  return (
    <ProjectPageContext.Provider value={value}>
      {children}
    </ProjectPageContext.Provider>
  );
}

export function useProjectPage() {
  const ctx = useContext(ProjectPageContext);
  if (!ctx) {
    throw new Error('useProjectPage must be used inside ProjectPageProvider');
  }
  return ctx;
}

const publicBase = () => process.env.PUBLIC_URL || '';

/** Full URL for a file in public/media/projects/{projectId}/ */
export function useProjectMediaSrc(filename) {
  const { projectId } = useProjectPage();
  return `${publicBase()}/media/projects/${projectId}/${filename}`;
}
