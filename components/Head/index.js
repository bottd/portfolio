import React from 'react';
import NextHead from 'next/head';

export default function Head(props) {
  return (
    <NextHead>
      <title>Drake</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="/static/normalize.css" rel="stylesheet" />
      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}
      </style>
    </NextHead>
  );
}
