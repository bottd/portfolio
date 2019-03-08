import React from 'react';

export default function Title(props) {
  return (
    <div className="Title" style={{backgroundImage: `url("/static/orange.jpg")`}}>
      <div className="Title-container">
        <h1 className="Title-name">Drake Bott</h1>
        <hr />
        <h2 className="Title-tagline">Software Developer</h2>
      </div>
      <style jsx>
        {`
          .Title {
            /*animation: 3s background-slide;*/
            background-image: url("/static/orange.jpg")
            box-sizing: border-box;
            width: 100%;
            height: 100vh;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .Title-container {
            font-family: 'Lobster', cursive;
            display: flex;
            flex-direction: column;
            color: #f49032;
            margin: 0;
            margin-top: 21vh;
            text-align: center;
            width: 50%;
          }

          hr {
            width: 70%;
          }

          .Title-name {
            font-size: 8em;
            margin: 0;
          }

          .Title-tagline {
            font-size: 4em;
            margin: 0;
          }
        `}
      </style>
    </div>
  );
}
