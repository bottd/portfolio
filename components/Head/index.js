import React from 'react';
import NextHead from 'next/head';

export default function Head(props) {
  return (
    <NextHead>
      <title>Drake</title>
      <link
        href="https://fonts.googleapis.com/css?family=Lobster"
        rel="stylesheet"
      />
    </NextHead>
  );
}
