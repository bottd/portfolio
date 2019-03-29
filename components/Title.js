import React from 'react';

export default function Title({ scrollRef }) {
  function scrollToRef() {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div
      className="Title"
      style={{ backgroundImage: `url("/static/images/orange.jpg")` }}>
      <div className="social-container">
        <a href="https://github.com/bottd/">
          <i className="fab fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/bottd/">
          <i className="fab fa-linkedin" />
        </a>
        <a href="mailto:drake@drake.dev">
          <i className="fas fa-envelope" />
        </a>
      </div>
      <div className="Title-container">
        <h1 className="Title-name">Drake Bott</h1>
        <hr />
        <h2 className="Title-tagline">Web developer</h2>
      </div>
      <div className="btn-container">
        <button className="Title-scroll" onClick={scrollToRef}>
          <i className="fas fa-chevron-down" />
        </button>
      </div>
      <style jsx>
        {`
          .Title {
            positon: relative;
            box-sizing: border-box;
            color: #fff;
            width: 100%;
            height: 100vh;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .social-container {
            align-items: center;
            background-color: transparent;
            display: flex;
            font-size: 2em;
            position: absolute;
            justify-content: flex-end;
            top: 0;
            width: 100%;
            height: 6vh;
          }
          a {
            margin: 0 1% 0 1%;
            color: #fff;
          }

          .Title-container {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
            display: flex;
            flex-direction: column;
            position: absolute;
            text-align: center;
            top: 22vh;
            width: 50%;
          }

          hr {
            color: #fff;
            width: 31em;
            opacity: 0;
            margin: 0 auto;
            animation-name: line-animation;
            animation-delay: 1s;
            animation-duration: 2s;
            animation-fill-mode: forwards;
            animation-timing-function: linear;
          }

          .Title-name {
            font-size: 6em;
            margin-bottom: 1vh;
            animation-name: fade-in;
            animation-duration: 2s;
            animation-timing-function: linear;
          }

          .Title-tagline {
            font-size: 2em;
            margin-top: 1vh;
            animation-name: fade-in;
            animation-duration: 2s;
            animation-timing-function: linear;
          }

          .btn-container {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            bottom: 0;
            width: 100%;
          }

          .Title-scroll {
            background: none;
            border: none;
            color: #fff;
            font-size: 3em;
          }

          .Title-scroll:focus {
            outline: 0;
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes line-animation {
            from {
              opacity: 1;
              width: 0px;
            }
            to {
              opacity: 1;
              width: 31em;
            }
          }
        `}
      </style>
    </div>
  );
}
