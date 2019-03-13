import React from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';

export default function Home(props) {
  return (
    <Layout className="Home" title="Drake">
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
    </Layout>
  );
}
