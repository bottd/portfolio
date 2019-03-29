import React from 'react';
import Layout from '../components/Layout';
import Project from '../components/Project';

export default function Projects(props) {
  const displayProjects = projects.map(project => <Project {...project}/>);
  return (
    <Layout className="Projects" title="Drake: Projects">
      {displayProjects}
      <style jsx>{``}</style>
    </Layout>
  );
}
