import React from 'react';
import './App.css';
import forest from '../../assets/forest.jpg';
import Title from '../Title';

export default function App(props) {
  return (
    <div className="App" style={{ backgroundImage: `url(${forest})` }}>
      <Title />
    </div>
  );
}
