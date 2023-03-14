import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  Box,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const [error, setError] = useState(false);
  return (
    <Flex p={2} align={'center'} justify={'center'}>
      <Container
        maxW={'4xl'}
        bg={useColorModeValue('#4B4BA4', 'whiteAlpha.100')}
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}
        direction={'column'}
      >
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}
          color={'white'}
        >
          Subscribe
        </Heading>
        <Text color={'white'}>Get instant latest market news and updates.</Text>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          onSubmit={e => {
            e.preventDefault();
            setError(false);

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === 'fail@example.com') {
                setError(true);

                return;
              }
            }, 1000);
          }}
        >
          <FormControl>
            <Stack
              rounded={'md'}
              borderWidth={1}
              direction={'row'}
              bg={'white'}
            >
              <Input
                variant={'unstyled'}
                color={'gray.800'}
                _placeholder={{
                  color: 'gray.400',
                }}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                id={'email'}
                type={'email'}
                required
                placeholder={'Your Email'}
                aria-label={'Your Email'}
                onChange={e => setEmail(e.target.value)}
              />
              <Button
                w={{ base: '100%', md: '15%', sm: ' 10%' }}
                color={'white'}
                bg={'#6666FF'}
                _hover={{
                  bg: ' #6666FF',
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </FormControl>
        </Stack>
      </Container>
    </Flex>
  );
}
