import React from 'react';

export default function Icon({ title, url, link }) {
  return (
    <div className="Icon" style={{ backgroundImage: `url(${url})` }}>
      <a className="Icon-label" href={link} target="_blank">
        <div className="Icon-text">{title}</div>
      </a>
      <style jsx>
        {`
          .Icon {
            background: no-repeat 50%;
            background-image: none;
            background-size: auto;
            background-size: contain;
            height: 8em;
            position: relative;
            width: 8em;
          }
          .Icon-label {
            align-items: center;
            display: flex;
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .Icon-label:hover {
            background-color: #666666;
            opacity: 0.8;
            transition: opacity 0.5s;
          }
          .Icon-text {
            color: #fff;
            font-size: 1.5em;
            text-align: center;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
