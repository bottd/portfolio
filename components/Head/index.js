import React from 'react';
import NextHead from 'next/head';

export default function Head(props) {
  return (
    <NextHead>
      <title>Drake</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="/static/normalize.css" rel="stylesheet" />
    </NextHead>
  );
}
