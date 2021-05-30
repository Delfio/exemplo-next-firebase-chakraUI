import React from 'react';
import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export default function ListOfTechs({ techs }) {
  return (
    <Box>
      <Wrap>
        {Array.from(techs).map((el) => (
          <WrapItem>
            <Center
              w="100px"
              h="120px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              flexDirection="column"
            >
              <Flex w="full" h="50px" justifyContent="center">
                <Image
                  src={el.image_url}
                  alt="react"
                  width="auto"
                  height="full"
                  title={el.experiencia}
                />
              </Flex>
              <Text fontSize="sm" textAlign="center" fontWeight="bold" mt={2}>
                {el.nome}
              </Text>
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}
