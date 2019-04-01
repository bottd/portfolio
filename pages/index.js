import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import About from '../components/About';

export default function Home(props) {
  let aboutRef = useRef();
  useEffect(() => {
    const nav = document.querySelector('.Navigation');
    function toggleNav(event) {
      console.log(nav.style);
      if (event.pageY === 0) {
        nav.style.borderBottom = '1px solid #fff';
        nav.style.backgroundColor= 'transparent';
      } else {
        nav.style.borderBottom = 'none';
        nav.style.backgroundColor = '#353535';
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
            background-color: transparent;
            border-bottom: 1px solid #fff;
          }
        `}
      </style>
    </Layout>
  );
}
