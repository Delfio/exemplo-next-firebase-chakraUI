import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import theme from '@styles/theme';
// import { AuthProvider } from '../contexts/AuthContext';
import TecProvider from '../contexts/TecContexts';

import GlobalCss from '../styles/global';

function MyApp({ Component, pageProps }) {
  const myThema = React.useMemo(() => extendTheme(theme), []);

  return (
    <ChakraProvider theme={myThema}>
      <TecProvider>
        <GlobalCss />
        <Component {...pageProps} />
      </TecProvider>
    </ChakraProvider>
  );
}
export default MyApp;
