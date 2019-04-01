import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Navigation(props) {
  return (
    <nav className="Navigation">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <div className="Navigation-social">
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
      <style jsx global>
        {`
          .Navigation {
            align-items: center;
            background-color: #353535;
            display: flex;
            position: fixed;
            height: 8vh;
            width: 100%;
            top: 0;
            transition: background-color 1s linear;
            z-index: 100;
          }
          .Navigation a {
            border-bottom: 2px solid transparent;
            color: #fff;
            font-size: 1.5em;
            margin-left: 2.5%;
            margin-right: 2.5%;
            text-decoration: none;
          }
          .Navigation a:visited {
            color: #fff;
          }
          .Navigation a:hover {
            border-bottom: 2px solid #fff;
          }
          .Navigation-social {
            align-items: center;
            background-color: transparent;
            display: flex;
            font-size: 2em;
            position: absolute;
            justify-content: flex-end;
            top: 0;
            right: 2%;
            width: 20%;
            height: 100%;
          }
          .fab, .fas {
            font-size: .75em;
          }
        `}
      </style>
    </nav>
  );
}
