import React from 'react';
import Layout from '../components/Layout';

export default function(props) {
  return (
    <Layout className="About" title="Drake: About">
      <div
        className="orange-background"
        style={{ backgroundImage: `url("/static/orange.jpg")` }}
      />
      <style jsx>{`
        .orange-background {
          box-sizing: border-box;
          width: 100%;
          height: 100vh;
          background-position: center 10%;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </Layout>
  );
}
