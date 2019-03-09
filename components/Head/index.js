import React from 'react';
import NextHead from 'next/head';

export default function Head(props) {
  return (
    <NextHead>
      <title>Drake</title>
      <link href="/static/normalize.css" rel="stylesheet" />
    </NextHead>
  );
}
