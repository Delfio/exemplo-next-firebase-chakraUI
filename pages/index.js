import React from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
// import useAuth from '../hooks/useAuth';
import Layout from '@components/Layout';

const bgColor = '#fff';

const Cover = () => (
  <Box bgColor={bgColor}>
    <Flex justifyContent="center" alignItems="center" py={20}>
      <Flex px={[4, 8]} py={[0, 20]} w="full" maxW="1200px" direction="column">
        <Heading
          as="h1"
          fontSize={{ base: '42px', md: '52x', lg: '72px' }}
          mb={4}
          fontWeight="xBold"
        >
          Desenvolvedor Fullstack
          <Box>Nodejs</Box>
          <Box bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">
            100% free
          </Box>
        </Heading>
        <Text
          fontSize={{
            base: '16px',
            md: '20px',
            lg: '22px',
          }}
        >
          <Box>Mantenha seus conhecimentos atualizados com as manis novas </Box>
          <Box>Técnologia do mercado</Box>
        </Text>
        <Box>
          <Button
            as="a"
            my={10}
            colorScheme="purple"
            variant="outline"
            size="lg"
            href="#series"
          >
            Bora começar !
          </Button>
        </Box>
      </Flex>
    </Flex>
  </Box>
);

export default function Home() {
  // const { user, signin } = useAuth();

  return (
    <Layout>
      <Cover />
    </Layout>
  );
}
