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
            transition: top 1s linear;
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
        `}
      </style>
    </nav>
  );
}
