import React, { useRef } from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';

export default function Home(props) {
  let aboutRef = useRef();

  return (
    <Layout className="Home" title="Drake">
      <Title scrollRef={aboutRef} />
      <div ref={aboutRef} className="about" >
        <h1>About</h1>
        <p>

        </p>
      </div>
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
          .about {
            background-color: #fff;
            width: 100%;
            height: 90vh;
          }
        `}
      </style>
    </Layout>
  );
}
