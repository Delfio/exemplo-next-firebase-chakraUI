import React from 'react';
import { Global, css } from '@emotion/react';
import Head from 'next/head';
import { CSSReset } from '@chakra-ui/react';

const GlobalCss = ({ children }) => (
  <>
    <Head>
      <meta content="width=devide-witdth, initial-sacale=1" name="viewport" />
    </Head>
    <CSSReset />

    <Global
      style={css`
        html {
          scroll-behavior: smooth;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}
    />
    {children}
  </>
);

export default GlobalCss;
