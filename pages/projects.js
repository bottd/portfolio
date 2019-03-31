import React from 'react';
import Layout from '../components/Layout';
import Project from '../components/Project';

export default function Projects(props) {
  const projects = projectInfo.map(project => <Project {...project} />);
  return (
    <Layout className="Projects" title="Drake: Projects">
      <div className="Projects-container">{projects}</div>
      <style jsx global>{`
        .Projects-container {
          justify-content: center;
          display: flex;
          flex-wrap: wrap;
          margin: 9vh 0;
          width: 100%;
          height: 72vh;
        }
      `}</style>
    </Layout>
  );
}

const projectInfo = [
  {
    name: 'Spont',
    description: `Spont is effectively the antithesis of a social network: An App that requires no login and anonymously tracks a user's location for the sole purpose of finding exciting activities based on the user's similiarity of activities to other anonymous users.  Client in React Native, server running on Node.js with TypeScript and GraphQL.  Testing with Jest.`,
    image: '/static/images/spont.png',
    iconInfo: [
      {
        title: 'Client',
        url: '/static/images/github.svg',
        link: 'https://github.com/bottd/spont',
      },
      {
        title: 'Server',
        url: '/static/images/github.svg',
        link: 'https://github.com/bottd/spont-be',
      },
    ],
    screenshot: '/static/images/spont-screenshot.png',
  },
  {
    name: 'HOWL Bot',
    description: `A Discord chat bot developed for use for the Colorado HOWL Discord group of 800+ members.  Bot helps provide utility functions to competitive teams of the community by compiling useful statistics for the teams. Runs on Node.js using Discord.js and Pupeteer.`,
    image: '/static/images/howl.png',
    iconInfo: [
      {
        title: 'Repo',
        url: '/static/images/github.svg',
        link: 'https://github.com/bottd/howl-bot',
      },
    ],
    screenshot: '/static/images/howl-screenshot.png',
  },
  {
    name: 'Movie Tracker',
    description:
      'Movie Tracker gathers the latest movies from The Movie DB so that users can browse and add their favorite movies to their favorites list.  This application uses React and Redux and is tested using Jest and Enzyme',
    image: '/static/images/movie-tracker.svg',
    iconInfo: [
      {
        title: 'Repo',
        url: '/static/images/github.svg',
        link: 'https://github.com/bottd/movie-tracker',
      },
    ],
    screenshot: '/static/images/movie-tracker-screenshot.png',
  },
];
