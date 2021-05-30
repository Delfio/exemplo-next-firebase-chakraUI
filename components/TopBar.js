import React from 'react';
import { Flex } from '@chakra-ui/react';

export default function TopBar() {
  const bgColor = '#fff';
  const color = '#1a202c';
  const borderColor = '#ddd';

  return (
    <Flex
      w="full"
      pos="fixed"
      zIndex={99999}
      bg={bgColor}
      color={color}
      borderBottom={`1px solid ${borderColor}`}
    >
      <Flex
        flex={1}
        maxW="1200px"
        margin="0 auto"
        h="60px"
        px={[4, 8]}
        alignItems="center"
        justifyContent="space-between"
      >
        <div>asasd</div>
        <div>asasd222</div>
      </Flex>
    </Flex>
  );
}
