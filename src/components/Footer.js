import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Image,
  useColorModeValue,
  Divider,
  VStack,
  Heading,
  FormControl,
  Input,
} from '@chakra-ui/react';
import { FormEvent, ChangeEvent, useState } from 'react';

import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('whiteAlpha.900', 'whiteAlpha.400'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('#2D2D51', 'gray.900')}
      color={useColorModeValue('gray.500', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{
            sm: '1fr 1fr',
            md: '2fr 2fr 2fr 2fr 2fr 2fr',
          }}
          spacing={8}
        >
          <Stack spacing={6}>
            <VStack>
              <Image
                borderRadius="full"
                h={'150px'}
                w={'150px'}
                objectFit="contain"
                src="https://www.invostock.com/img/logo/logo.png"
                alt="Logo"
              />
              <Text fontSize={'sm'}>
                Market Analysis . Build Wealth . Financial Literacy
              </Text>
            </VStack>

            <Stack alignSelf={'center'} direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Linkedin'} href={'#'}>
                <FaLinkedin />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack fontSize={'sm'} align={'flex-start'} spacing={3}>
            <Text color={'white'} fontWeight={'bold'}>
              KNOW US
            </Text>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Home
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              About us
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Refer & Earn Program
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Blog
            </Link>
          </Stack>
          <Stack fontSize={'sm'} align={'flex-start'} spacing={3}>
            <Text color={'white'} fontWeight={'bold'}>
              LEARNING CONTENT
            </Text>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Stock Market Basics
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Options Trading Basics
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Chat Patterns
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Pivot Points
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              How to trade
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Trading Strategy
            </Link>
          </Stack>
          <Stack fontSize={'sm'} align={'flex-start'} spacing={3}>
            <Text color={'white'} fontWeight={'bold'}>
              FINANCIAL TOOLS
            </Text>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Portfolio Designer
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Market Forcasting Tool
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Strategy Builder
            </Link>
          </Stack>
          <Stack fontSize={'sm'} align={'flex-start'} spacing={3}>
            <Text color={'white'} fontWeight={'bold'}>
              CATEGORIES
            </Text>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Stock Market
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Company and Finance
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Economy
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Commodity Markets
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              IPO
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Cryptocurrency
            </Link>
          </Stack>
          <Stack fontSize={'sm'} align={'flex-start'} spacing={3}>
            <Text color={'white'} fontWeight={'bold'}>
              LEGAL
            </Text>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Terms and Conditions
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Privacy and Policy
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Contact
            </Link>
            <Link
              _hover={{
                color: 'white',
              }}
              href={'#'}
            >
              Support Center
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Divider />
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2023 Invostock. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
