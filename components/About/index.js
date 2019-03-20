import React from 'react';
import Icon from '../Icon';

export default function About(props) {
  const displayIcons = icons.map((icon, i) => (
    <Icon {...icon} key={`icon-${i}`} />
  ));
  return (
    <div className="About">
      <h1>about</h1>
      <div className="About-icons">{displayIcons}</div>
      <style jsx>
        {`
          .About {
            height: 90vh;
            width: 100%;
          }
          .About-icons {
            display: flex;
          }
        `}
      </style>
    </div>
  );
}

const icons = [
  {
    title: 'Chai',
    url: '/static/images/chai.svg',
  },
  {
    title: 'CSS',
    url: '/static/images/css-3.svg',
  },
  {
    title: 'Docker',
    url: '/static/images/docker.svg',
  },
  {
    title: 'Git',
    url: '/static/images/git.svg',
  },
  {
    title: 'GraphQL',
    url: '/static/images/graphql.svg',
  },
  {
    title: 'HTML',
    url: '/static/images/html-5.svg',
  },
  {
    title: 'JavaScript',
    url: '/static/images/javascript.svg',
  },
  {
    title: 'Jest',
    url: '/static/images/jest.svg',
  },
  {
    title: 'Mocha',
    url: '/static/images/mocha.svg',
  },
  {
    title: 'Node',
    url: '/static/images/node.svg',
  },
  {
    title: 'NPM',
    url: '/static/images/npm-2.svg',
  },
  {
    title: 'PostgreSQL',
    url: '/static/images/postgresql.svg',
  },
  {
    title: 'React',
    url: '/static/images/React.svg',
  },
  {
    title: 'Redux',
    url: '/static/images/redux.svg',
  },
  {
    title: 'Vim',
    url: '/static/images/vim.svg',
  },
];
