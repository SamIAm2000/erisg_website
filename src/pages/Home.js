import React from 'react';
import Layout from '../components/layout/Layout';
import ProjectCard from '../components/ui/ProjectCard';
import projects from './projects/projectData';

function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[2rem] gap-y-[2rem]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
