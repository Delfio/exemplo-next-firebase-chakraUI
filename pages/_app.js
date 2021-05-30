import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AuthProvider } from '../contexts/AuthContext';
import theme from '../styles/theme';

import GlobalCss from '../styles/global';

function MyApp({ Component, pageProps }) {
  const myThema = React.useMemo(() => extendTheme(theme), []);

  return (
    <ChakraProvider theme={myThema}>
      <AuthProvider>
        <GlobalCss />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}
export default MyApp;
