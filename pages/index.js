import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import MarketingCopy from '../components/MarketingCopy';
import MiddleGrid from '../components/MiddleGrid';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header text="Bourbon Forge" />
      <MiddleGrid>
        <MarketingCopy />
      </MiddleGrid>
    </div>
  )
};
