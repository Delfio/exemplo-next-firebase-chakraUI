import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
// import useAuth from '../hooks/useAuth';

export default function Home() {
  // const { user, signin } = useAuth();

  return (
    <Box bg="gray.100" w="100%" p={6} color="white">
      <Heading as="h2" size="3xl" isTruncated color="blackAlpha.900">
        this is the box
      </Heading>
    </Box>
  );
}
