import React from 'react';
import Head from '../Head';
import Footer from '../Footer';

export default function Layout({ children, className, title = 'Drake' }) {
  return (
    <div className={className}>
      <Head title={title} />
      {children}
      <Footer />
    </div>
  );
}
