import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import TopBar from './TopBar';

export default function Layout({ children }) {
  const bgColor = '#F4F6F6';

  return (
    <Box bg={bgColor} minH="100vh">
      <TopBar />
      <Flex flexDir="column" pt="62px">
        {children}
      </Flex>
    </Box>
  );
}
