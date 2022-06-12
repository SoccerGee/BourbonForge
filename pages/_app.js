import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import '../styles/globals.css'
import theme from '../components/theme';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp
