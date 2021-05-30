import React from 'react';
import { Flex, Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function TopBar() {
  const bgColor = useColorModeValue('#fff', '#1a202c');
  const color = useColorModeValue('#1a202c', '#EDEEEE');
  const borderColor = useColorModeValue('#ddd', '#27272a');
  const { colorMode, toggleColorMode } = useColorMode();

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
        <Box>Delfio Francisco</Box>
        {colorMode === 'light' ? (
          <MoonIcon w={6} h={6} cursor="pointer" onClick={toggleColorMode} />
        ) : (
          <SunIcon w={6} h={6} cursor="pointer" onClick={toggleColorMode} />
        )}
      </Flex>
    </Flex>
  );
}
