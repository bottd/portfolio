import React from 'react';

export default function Icon({ title, url, link, size = 9 }) {
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
            height: ${size}em;
            margin: 0;
            position: relative;
            width: ${size}em;
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
            opacity: 0.85;
            transition: opacity 0.5s;
          }
          .Icon-text {
            color: #fff;
            font-size: ${size/4.5 > 1 ? size/4.5 : 1}em;
            text-align: center;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
