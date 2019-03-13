import React from 'react';
import Head from '../Head';
import Nav from '../Nav';

export default function Layout({ children, className, title = 'Drake' }) {
  return (
    <div className={className}>
      <Head title={title} />
      <Nav />
      {children}
    </div>
  );
}
