import React from 'react';

export default function Icon({ title, url }) {
  return (
    <div className="Icon" backgroundImage={{ backgroundImage: `url(${url})` }}>
      <h1>{title}</h1>
    </div>
  );
}
