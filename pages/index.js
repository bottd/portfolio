import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import About from '../components/About';

export default function Home(props) {
  let aboutRef = useRef();
  useEffect(() => {
    const nav = document.querySelector('.Navigation');
    nav.style.top = '-500px';
    function toggleNav(event) {
      if (event.pageY === 0) {
        nav.style.top = '-500px';
      } else {
        nav.style.top = '0px';
      }
    }
    document.addEventListener('scroll', toggleNav);
    return () => document.removeEventListener('scroll', toggleNav);
  });

  return (
    <Layout className="Home" title="Drake">
      <Title scrollRef={aboutRef} />
      <div ref={aboutRef} className="About-scroll" />
      <About />
      <style jsx global>
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
          .Navigation {
            top: -500px;
          }
        `}
      </style>
    </Layout>
  );
}
