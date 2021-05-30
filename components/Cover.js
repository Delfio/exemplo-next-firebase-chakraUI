import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import ListOfTechs from './ListOfTechs';
import Modal from './DefaultModal';

const Cover = ({ bgColor, techs }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} />
      <Box bgColor={bgColor}>
        <Flex justifyContent="center" alignItems="center" py={20}>
          <Flex
            px={[4, 8]}
            py={[0, 20]}
            w="full"
            maxW="1200px"
            direction="column"
          >
            <Heading
              as="h1"
              fontSize={{ base: '42px', md: '52x', lg: '72px' }}
              mb={4}
              fontWeight="xBold"
            >
              Desenvolvedor Fullstack
              <Box bgGradient="linear(to-l, #f7e018,#f7b918)" bgClip="text">
                Javascript
              </Box>
              {/* Em busca de experiências */}
            </Heading>
            <Text
              fontSize={{
                base: '16px',
                md: '20px',
                lg: '22px',
              }}
            >
              <Box>
                Programador e designer, focado principalmente em técnologias web
              </Box>
            </Text>
            <Box>
              <Button
                as="a"
                my={10}
                colorScheme="purple"
                variant="outline"
                size="lg"
                cursor="pointer"
                onClick={onOpen}
              >
                Entre em contato !
              </Button>
            </Box>
            <Box>Técnologia de domínio</Box>
            <ListOfTechs techs={techs} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Cover;
