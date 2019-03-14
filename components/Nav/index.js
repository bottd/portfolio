import React from 'react';

export default function Nav(props) {
  return (
    <div className="Nav">
      <a href="https://github.com/bottd/">
        <i class="fab fa-github" />
      </a>
      <a href="https://www.linkedin.com/in/bottd/">
        <i class="fab fa-linkedin" />
      </a>
      <a href="mailto:drake@drake.dev">
        <i class="fas fa-envelope" />
      </a>
      <style jsx>
        {`
          .Nav {
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
        `}
      </style>
    </div>
  );
}
