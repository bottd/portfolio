import React from 'react';
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
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <style jsx>
        {`
        .Navigation {
          align-items: center;
          background-color: #353535;
          display: flex;
          margin: 0;
          position: fixed;
          height: 8vh;
          width: 100%;
          z-index: 100;
          transition: top 1s linear;
        }
        a {
          color: #fff;
          font-size: 1.5em;
          margin-left: 2.5%;
          margin-right: 2.5%;
          text-decoration: none;
        }
        a:visited {
          color: #fff;
        }
        `}
      </style>
    </nav>
  )
}
