import React from 'react';
import Icon from './Icon';

export default function Project({ name, description, image, iconInfo }) {
  const icons = iconInfo.map(icon => <Icon {...icon} />);
  return (
    <div className="Project">
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={image} />
      {icons}
      <style jsx>
        {`
          .Project {
            margin-top: 8vh;
          }
        `}
      </style>
    </div>
  );
}
