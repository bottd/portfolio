import React from 'react';
import Head from '../components/Head';

export default function(props) {
  return (
    <div
      className="About"
      style={{ backgroundImage: `url("/static/orange.jpg")` }}>
      <Head />
      <style jsx>{`
        .About {
          box-sizing: border-box;
          width: 100%;
          height: 100vh;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}
