import React from 'react';
import Head from './Head';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children, className, title = 'Drake' }) {
  return (
    <div className={className}>
      <Head title={title} />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
