import React from 'react';
import Link from 'next/link';
import Icon from '../Icon';

export default function About(props) {
  const displayIcons = icons.map((icon, i) => (
    <Icon {...icon} key={`icon-${i}`} />
  ));
  return (
    <div className="About">
      <div className="About-text">
        <p className="About-description">
          I am a web developer with a life long love for working with computers.
          I love learning about new ways to use tools I know, and am always
          eager to learn new technologies. Take a look at some of{' '}
          <Link href="/projects">
            <a>my work</a>
          </Link>{' '}
          and a list of some tools I've used as well.
        </p>
        <p>-Drake</p>
      </div>
      <div className="About-icons">{displayIcons}</div>
      <style jsx>
        {`
          .About {
            display: grid;
            grid-template-columns: 40% 60%;
            height: 90vh;
            width: 100%;
          }

          .About-text {
            align-self: center;
            color: #353535;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
            font-size: 2em;
            padding: 1em;
          }

          .About-description {
            text-indent: 1em;
          }

          .About-icons {
            align-self: center;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
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
    link: 'https://www.chaijs.com/',
  },
  {
    title: 'CSS',
    url: '/static/images/css-3.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    title: 'Docker',
    url: '/static/images/docker.svg',
    link: 'https://www.docker.com/',
  },
  {
    title: 'Discord',
    url: '/static/images/discord.svg',
    link: 'https://discordapp.com/developers/docs/intro',
  },
  {
    title: 'Git',
    url: '/static/images/git.svg',
    link: 'https://git-scm.com/',
  },
  {
    title: 'GraphQL',
    url: '/static/images/graphql.svg',
    link: 'https://graphql.org/',
  },
  {
    title: 'HTML',
    url: '/static/images/html-5.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    title: 'JavaScript',
    url: '/static/images/javascript.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    title: 'Jest',
    url: '/static/images/jest.svg',
    link: 'https://jestjs.io/',
  },
  {
    title: 'Mocha',
    url: '/static/images/mocha.svg',
    link: 'https://mochajs.org/',
  },
  {
    title: 'Node',
    url: '/static/images/node.svg',
    link: 'https://nodejs.org/en/',
  },
  {
    title: 'NPM',
    url: '/static/images/npm-2.svg',
    link: 'https://www.npmjs.com/',
  },
  {
    title: 'PostgreSQL',
    url: '/static/images/postgresql.svg',
    link: 'https://www.postgresql.org/',
  },
  {
    title: 'React',
    url: '/static/images/React.svg',
    link: 'https://reactjs.org/',
  },
  {
    title: 'Redux',
    url: '/static/images/redux.svg',
    link: 'https://redux.js.org/',
  },
  {
    title: 'Vim',
    url: '/static/images/vim.svg',
    link: 'https://www.vim.org/',
  },
  {
    title: 'Next.js',
    url: '/static/images/nextjs.svg',
    link: 'https://nextjs.org/',
  },
];
