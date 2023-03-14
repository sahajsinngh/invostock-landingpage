import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Grid,
  Link,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Text
        p={5}
        fontSize={'lg'}
        color={useColorModeValue('black', 'white')}
        fontFamily={'body'}
        fontWeight={'bold'}
      >
        Need Pre-Market Notification!
        <Link
          _hover={{
            textDecoration: 'none',
          }}
          color={'green.400'}
          fontSize={'lg'}
        >
          {' '}
          Join Free Now!{'>'}
        </Link>
      </Text>
      <Grid
        gap={2}
        justifyItems={'center'}
        templateColumns={{
          sm: '1fr 1fr 1fr 1fr',
          md: '2fr 3fr 3fr 2fr',
        }}
        py={6}
      >
        <Box
          maxW={'250px'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'xl'}
          rounded={'md'}
          overflow={'hidden'}
          border={useColorModeValue('1px solid #E8EBF4', '1px solid white')}
        >
          <Box p={6}>
            <Stack spacing={7} align={'center'}>
              <Heading
                fontSize={'md'}
                fontWeight={'bold'}
                color={useColorModeValue('#45458D', 'white')}
                fontFamily={'body'}
              >
                Discover
              </Heading>
              <Button
                mt={8}
                transition={'all .5s ease'}
                fontSize={'sm'}
                border={'1px solid #45458D '}
                bg={useColorModeValue('white', 'gray.900')}
                color={useColorModeValue('#45458D', 'white')}
                rounded={'sm'}
                _hover={{
                  transform: 'translateY(-5px)',

                  bg: '#45458D',
                  color: 'white',
                }}
              >
                Beginner {'>'} Learn
              </Button>
              <Button
                mt={8}
                transition={'all .5s ease'}
                fontSize={'sm'}
                border={'1px solid #45458D '}
                bg={useColorModeValue('white', 'gray.900')}
                color={useColorModeValue('#45458D', 'white')}
                rounded={'sm'}
                _hover={{
                  transform: 'translateY(-5px)',

                  bg: '#45458D',
                  color: 'white',
                }}
              >
                Stock Trader {'>'} Build
              </Button>
              <Button
                mt={8}
                transition={'all .5s ease'}
                fontSize={'sm'}
                border={'1px solid #45458D '}
                bg={useColorModeValue('white', 'gray.900')}
                color={useColorModeValue('#45458D', 'white')}
                rounded={'sm'}
                _hover={{
                  transform: 'translateY(-5px)',

                  bg: '#45458D',
                  color: 'white',
                }}
              >
                Investor {'>'} Design for Wealth
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          width={['300px', '350px']}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'xl'}
          rounded={'md'}
          overflow={'hidden'}
          border={useColorModeValue('1px solid #E8EBF4', '1px solid white')}
        >
          <Box p={6}>
            <Stack spacing={3} align={'center'} mb={5}>
              <Heading
                fontSize={'md'}
                fontWeight={'bold'}
                color={useColorModeValue('#45458D', 'white')}
                fontFamily={'body'}
              >
                Next Day Market Forecast
              </Heading>
              <Text
                fontSize={'md'}
                fontWeight={'bold'}
                color={useColorModeValue('#45458D', 'white')}
                fontFamily={'body'}
              >
                (AI Forecaster)
              </Text>
              <Text
                fontSize={'sm'}
                color={useColorModeValue('#45458D', 'white')}
                fontFamily={'body'}
              >
                Forecasting Date: 13/Mar/2023 09:15 Generated On 12/Mar/2023
                <Text
                  fontSize={'sm'}
                  color={useColorModeValue('#45458D', 'white')}
                  fontFamily={'body'}
                >
                  IndexName: NIFTY50
                </Text>
              </Text>

              <Button
                mt={8}
                width={20}
                bg={useColorModeValue('red.500', 'red.800')}
                color={'white'}
                rounded={'md'}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                  bg: 'red.600',
                }}
              >
                Bearish
              </Button>
              <Text
                fontSize={'sm'}
                color={useColorModeValue('#45458D', 'white')}
                fontFamily={'body'}
              >
                Model Version: MLV01.11
              </Text>
              <Text
                fontSize={'sm'}
                color={useColorModeValue('#45458D', 'white')}
                fontFamily={'body'}
              >
                Access Next day forecasting
                <Link
                  _hover={{
                    textDecoration: 'none',
                  }}
                  color={'green.400'}
                  fontSize={'sm'}
                >
                  {' '}
                  Now {'>'}
                </Link>
              </Text>
            </Stack>
          </Box>
        </Box>
        <Box
          width={['300px', '350px']}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'xl'}
          rounded={'md'}
          overflow={'hidden'}
          border={'1px solid #E8EBF4'}
        >
          <Box p={2} py={6}>
            <Stack spacing={12} align={'center'} mb={5}>
              <Heading
                fontSize={'md'}
                fontWeight={'bold'}
                color={useColorModeValue('#45458D', 'white')}
                fontFamily={'body'}
              >
                Actual vs Forecasted(Past 5-Trading Days)
              </Heading>
              <Image objectFit="contain" src="/download.png" alt="logo" />
            </Stack>
          </Box>
        </Box>
        <Box
          maxW={'250px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'xl'}
          rounded={'md'}
          overflow={'hidden'}
          border={'1px solid #E8EBF4'}
        >
          <Box p={6}>
            <Stack spacing={5} align={'center'} mb={5}>
              <Heading
                fontSize={'md'}
                fontWeight={'bold'}
                color={useColorModeValue('#45458D', 'white')}
                fontFamily={'body'}
              >
                Discount Broker Partners
              </Heading>
              <Text
                fontSize={'10px'}
                fontWeight={'800'}
                color={useColorModeValue('#6B83A5', 'white')}
                fontFamily={'body'}
              >
                open instant free trading account
              </Text>
              <Stack
                transition={'all .3s ease'}
                _hover={{
                  transform: 'translateY(-3px)',
                }}
                align={'center'}
              >
                <Image
                  w={24}
                  src="https://zerodha.com/static/images/logo.svg"
                />
                <Text fontSize={'11px'}>
                  *Brokage: Rs 20 per executed trade (Intraday & F&O)
                </Text>
              </Stack>
              <Stack
                transition={'all .3s ease'}
                _hover={{
                  transform: 'translateY(-3px)',
                }}
                align={'center'}
              >
                <Image
                  w={24}
                  src="https://www.invostock.com/img/slider/upstrox.png"
                />
                <Text fontSize={'11px'}>
                  *Brokage: Upto 0.05% per order (Intraday & F&O)
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
