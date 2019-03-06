import React from 'react';
import './Title.css';
import forest from '../../assets/forest.jpg';
import orange from '../../assets/orange.jpg';

export default function Title(props) {
  return (
    <div className="Title" style={{ backgroundImage: `url(${orange})` }}>
      <div className="Title-container">
        <h1 className="Title-name">Drake Bott</h1>
        <hr></hr>
        <h2 className="Title-tagline">Software Developer</h2>
      </div>
    </div>
  );
}
