import React from 'react';

export default function Footer(props) {
  return (
    <div className="Footer">
      <a href="https://github.com/bottd/">
        <i className="fab fa-github" />
      </a>
      <a href="https://www.linkedin.com/in/bottd/">
        <i className="fab fa-linkedin" />
      </a>
      <a href="mailto:drake@drake.dev">
        <i className="fas fa-envelope" />
      </a>
      <style jsx>
        {`
          .Footer {
            align-items: center;
            background-color: #353535;
            display: flex;
            font-size: 2.5em;
            justify-content: center;
            width: 100%;
            height: 10vh;
          }
          a {
            margin: 0 2% 0 2%;
            color: #fff;
          }
        `}
      </style>
    </div>
  );
}
