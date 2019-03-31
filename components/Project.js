import React from 'react';
import Icon from './Icon';

export default function Project({
  name,
  description,
  image,
  iconInfo,
  screenshot,
}) {
  const icons = iconInfo.map(icon => <Icon {...icon} size={3} />);
  return (
    <div className="Project">
      <div className="Project-header">
        <div
          className="Project-image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <h1 className="Project-name">{name}</h1>
      </div>
      <p className="Project-description">{description}</p>
      <div className="Project-icons">{icons}</div>
      <div
        className="Project-screenshot"
        style={{ backgroundImage: `url(${screenshot})` }}
      />
      <style jsx>
        {`
          .Project {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12),
              0 2px 4px 0 rgba(0, 0, 0, 0.08);
            color: #353535;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
            margin: 0 1% 0 1%;
            position: relative;
            width: 27%;
          }
          .Project-header {
            display: flex;
            align-items: center;
            width: 100%;
          }
          .Project-image {
            background: no-repeat 51%;
            background-image: none;
            background-size: auto;
            background-size: contain;
            height: 5em;
            margin: 0 5% 0 5%;
            width: 20%;
          }
          .Project-name {
            font-size: 2em;
            widht: 80%;
          }
          .Project-description {
            border-top: 1px solid #353535;
            margin-left: 3%;
            margin-right: 3%;
            padding: 1%;
          }
          .Project-icons {
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
            bottom: 2px;
            width: 100%;
          }
          .Project-screenshot {
            background: no-repeat 51%;
            background-image: none;
            background-size: auto;
            background-size: contain;
            margin: auto;
            width: 80%;
            height: 40%;
          }
        `}
      </style>
    </div>
  );
}
