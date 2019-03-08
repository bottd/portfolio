import React from 'react';
import Title from '../components/Title';

export default function Home(props) {
  return (
    <div className="Home">
      <Title />
      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
              "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
              sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          .Home {
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            width: 100%;
            height: 100vh;
            background-position: center 10%;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </div>
  );
}
