import React from 'react';
import './App.css';
import forest from '../../assets/forest.jpg';
import Title from '../components/Title';

export default function Home(props) {
  return (
    <div className="App" style={{ backgroundImage: `url(${forest})` }}>
      <Title />
    </div>
  );
}
