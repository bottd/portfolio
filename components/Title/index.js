import React from 'react';

export default function Title(props) {
  return (
    <div className="Title" style={{backgroundImage: `url("/static/orange.jpg")`}}>
      <div className="Title-container">
        <h1 className="Title-name">Drake Bott</h1>
        <hr />
        <h2 className="Title-tagline">Web developer in Denver, CO</h2>
      </div>
      <style jsx>
        {`
          .Title {
            box-sizing: border-box;
            width: 100%;
            height: 100vh;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .Title-container {
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
            display: flex;
            flex-direction: column;
            color: #fff;
            margin: 0;
            margin-top: 22vh;
            text-align: center;
            width: 50%;
          }

          hr {
            width: 60%;
            margin: 0 auto;
          }

          .Title-name {
            font-size: 6em;
            margin-bottom: 1vh;
          }

          .Title-tagline {
            font-size: 2em;
            margin-top: 1vh;
          }
        `}
      </style>
    </div>
  );
}
