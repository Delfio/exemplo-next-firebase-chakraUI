import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Flex,
  Box,
  Link,
} from '@chakra-ui/react';

export default function DefaultModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Principais meios de contato</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="row" justifyContent="space-evenly">
            <Box w={50} h="auto">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/delfio-francisco-dutra-teixeira-5a4051169/"
              >
                <Image src="https://image.flaticon.com/icons/png/512/174/174857.png" />
              </Link>
            </Box>
            <Box w={50} h="auto">
              <Link target="_blank" href="https://github.com/Delfio">
                <Image src="https://image.flaticon.com/icons/png/512/25/25231.png" />
              </Link>
            </Box>
            <Box w={50} h="auto">
              <Link target="_blank" href="mailto:delfio_eu@hotmail.com">
                <Image src="https://seeklogo.com/images/O/outlook-logo-7117D18788-seeklogo.com.png" />
              </Link>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
