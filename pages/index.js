import React, { useRef } from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import About from '../components/About';

export default function Home(props) {
  let aboutRef = useRef();

  return (
    <Layout className="Home" title="Drake">
      <Title scrollRef={aboutRef} />
      <div ref={aboutRef} className="About-scroll" />
      <About />
      <style jsx>
        {`
          .Home {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 100%;
            background-position: center 10%;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </Layout>
  );
}
