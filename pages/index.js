import React from 'react';
import Title from '../components/Title';
import Head from '../components/Head';

export default function Home(props) {
  return (
    <div className="Home">
      <Head />
      <Title />
      <style jsx>
        {`
          .Home {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            box-sizing: border-box;
            width: 100%;
            background-position: center 10%;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </div>
  );
}
