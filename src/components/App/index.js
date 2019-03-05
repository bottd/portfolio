import React from 'react';
import './App.css';
import forest from '../../assets/forest.jpg';

export default function App(props) {
  return (
    <div className="App" style={{ backgroundImage: `url(${forest})` }}>
      <div className="title-container">
        <h1 className="title-name">Drake Bott</h1>
        <h2 className="title-tagline">Software Developer</h2>
      </div>
    </div>
  );
}
