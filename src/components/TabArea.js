import React from 'react';
import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Center,
  Heading,
  Stack,
  Avatar,
  Image,
  Divider,
  Link,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Grid,
} from '@chakra-ui/react';

const TabArea = () => {
  return (
    <Flex justifyContent={'space-between'} h={'100%'} w={'100%'}>
      <Divider position={'absolute'} />
      <Grid
        justifyItems={'center'}
        templateColumns={{
          sm: '1fr 1fr 1fr',
          md: '1fr 2fr 1fr',
          lg: '4fr 1fr 4fr',
        }}
      >
        <Box p={6}>
          <Image
            h={200}
            w={300}
            rounded={'md'}
            src={
              'https://www.invostock.com/img/slider/TradingView-partner-program.jpg'
            }
            layout={'fill'}
          />
        </Box>
        <Tabs
          rounded={'md'}
          maxH={'600px'}
          border={useColorModeValue('1px solid #E8EBF4', '1px solid white')}
          size={'md'}
          variant="enclosed"
        >
          <TabList width={'100%'}>
            <Tab>Indian Indices</Tab>
            <Tab>Global Indices</Tab>
            <Tab>Top Stock(India)</Tab>
          </TabList>
          <Text
            m={1}
            height={'25px'}
            rounded={'md'}
            maxW={'130px'}
            fontSize={'md'}
            _hover={{
              textDecoration: 'none',
              color: '#6666FF',
            }}
          >
            Top Stocks(US)
          </Text>
          <TabPanels>
            <TabPanel>
              <Divider />
              <TableContainer width={['280px', '700px']}>
                <Table size="sm" variant="striped">
                  <Thead>
                    <Tr>
                      <Th color={'#6666FF'}>Symbol</Th>
                      <Th color={'#6666FF'}>High</Th>
                      <Th color={'#6666FF'}>Low</Th>
                      <Th color={'#6666FF'}>Open</Th>
                      <Th color={'#6666FF'}>Close</Th>
                      <Th color={'#6666FF'}>Change</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>inches</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>feet</Td>
                      <Td>hello</Td>
                      <Td>hello</Td>
                      <Td>hello</Td>
                      <Td>hello</Td>
                      <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                      <Td>yards</Td>
                      <Td>yards</Td>
                      <Td>yards</Td>
                      <Td>yards</Td>

                      <Td>metres (m)</Td>
                      <Td isNumeric>0.91444</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <Divider />
              <TableContainer width={['280px', '700px']}>
                <Table size="sm" variant="striped">
                  <Thead>
                    <Tr>
                      <Th color={'#6666FF'}>Symbol</Th>
                      <Th color={'#6666FF'}>High</Th>
                      <Th color={'#6666FF'}>Low</Th>
                      <Th color={'#6666FF'}>Open</Th>
                      <Th color={'#6666FF'}>Close</Th>
                      <Th color={'#6666FF'}>Change</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>inches</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>hello</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>feet</Td>
                      <Td>hello</Td>
                      <Td>invostock</Td>
                      <Td>hello</Td>
                      <Td>hello</Td>
                      <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                      <Td>yards</Td>
                      <Td>yards</Td>
                      <Td>yards</Td>
                      <Td>yards</Td>

                      <Td>metres (m)</Td>
                      <Td isNumeric>0.91444</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <Divider />
              <TableContainer width={['280px', '700px']}>
                <Table size="sm" variant="striped">
                  <Thead>
                    <Tr>
                      <Th color={'#6666FF'}>Symbol</Th>
                      <Th color={'#6666FF'}>High</Th>
                      <Th color={'#6666FF'}>Low</Th>
                      <Th color={'#6666FF'}>Open</Th>
                      <Th color={'#6666FF'}>Close</Th>
                      <Th color={'#6666FF'}>Change</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>inches</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td>hi</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>feet</Td>
                      <Td>hello</Td>
                      <Td>hello</Td>
                      <Td>hello</Td>
                      <Td>hello</Td>
                      <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                      <Td>yards</Td>
                      <Td>yards</Td>
                      <Td>yards</Td>
                      <Td>yards</Td>

                      <Td>metres (m)</Td>
                      <Td isNumeric>0.91444</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Stack paddingBottom={4} align={'center'} direction={'column'}>
          <Center p={6}>
            <Box
              maxW={'350px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              rounded={'md'}
              p={4}
              border={useColorModeValue('1px solid #E8EBF4', '1px solid white')}
              overflow={'hidden'}
            >
              <Box
                h={['180px', '210px']}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}
              >
                <Image
                  src={'https://www.invostock.com/img/article/adani-crash.jpg'}
                  layout={'fill'}
                />
              </Box>
              <Stack>
                <Text
                  maxW={20}
                  maxH={10}
                  textTransform={'uppercase'}
                  fontSize={'sm'}
                  rounded={'md'}
                  color={'#F9AA02'}
                  bg={useColorModeValue('#ADB5BD', 'gray.900')}
                >
                  Latest
                </Text>
                <Link
                  textAlign={'left'}
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'sm'}
                  fontFamily={'body'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#6666FF',
                  }}
                >
                  Supreme Court Verdict on Adani Case: Expert Panel Created,
                  SEBI Ordered to Investigate Adani-Hindenburg Case
                </Link>
                <Text fontSize={'sm'} textAlign={'left'} color={'gray.500'}>
                  The Supreme Court has mandated the creation of a six-person
                  expert team led by Justice AM Sapre, a retired Supreme Court
                  justice. OP Bhatt, KV Kamath, Nandan Nilekani, Justice JP
                  Devdatt, and Somsekha...
                </Text>
                <Text fontSize={'sm'} color={'#6666FF'} textAlign={'left'}>
                  March 02, 2023
                </Text>
                <Link
                  _hover={{
                    textDecoration: 'none',
                  }}
                  fontSize={'sm'}
                  textAlign={'left'}
                >
                  Read More {'->'}
                </Link>
              </Stack>
            </Box>
          </Center>
          <Center p={6}>
            <Box
              maxW={'350px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              rounded={'md'}
              p={4}
              border={useColorModeValue('1px solid #E8EBF4', '1px solid white')}
              overflow={'hidden'}
            >
              <Box
                h={['180px', '210px']}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}
              >
                <Image
                  src={'https://www.invostock.com/img/article/adani-crash.jpg'}
                  layout={'fill'}
                />
              </Box>
              <Stack>
                <Text
                  maxW={20}
                  maxH={10}
                  textTransform={'uppercase'}
                  fontSize={'sm'}
                  rounded={'md'}
                  color={'#F9AA02'}
                  bg={useColorModeValue('#ADB5BD', 'gray.900')}
                >
                  Latest
                </Text>
                <Link
                  textAlign={'left'}
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'sm'}
                  fontFamily={'body'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#6666FF',
                  }}
                >
                  Supreme Court Verdict on Adani Case: Expert Panel Created,
                  SEBI Ordered to Investigate Adani-Hindenburg Case
                </Link>
                <Text fontSize={'sm'} textAlign={'left'} color={'gray.500'}>
                  The Supreme Court has mandated the creation of a six-person
                  expert team led by Justice AM Sapre, a retired Supreme Court
                  justice. OP Bhatt, KV Kamath, Nandan Nilekani, Justice JP
                  Devdatt, and Somsekha...
                </Text>
                <Text fontSize={'sm'} color={'#6666FF'} textAlign={'left'}>
                  March 02, 2023
                </Text>
                <Link
                  _hover={{
                    textDecoration: 'none',
                  }}
                  fontSize={'sm'}
                  textAlign={'left'}
                >
                  Read More {'->'}
                </Link>
              </Stack>
            </Box>
          </Center>
          <Center p={6}>
            <Box
              maxW={'350px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              rounded={'md'}
              p={4}
              border={useColorModeValue('1px solid #E8EBF4', '1px solid white')}
              overflow={'hidden'}
            >
              <Box
                h={['180px', '210px']}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}
              >
                <Image
                  src={'https://www.invostock.com/img/article/adani-crash.jpg'}
                  layout={'fill'}
                />
              </Box>
              <Stack>
                <Text
                  maxW={20}
                  maxH={10}
                  textTransform={'uppercase'}
                  fontSize={'sm'}
                  rounded={'md'}
                  color={'#F9AA02'}
                  bg={useColorModeValue('#ADB5BD', 'gray.900')}
                >
                  Latest
                </Text>
                <Link
                  textAlign={'left'}
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'sm'}
                  fontFamily={'body'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#6666FF',
                  }}
                >
                  Supreme Court Verdict on Adani Case: Expert Panel Created,
                  SEBI Ordered to Investigate Adani-Hindenburg Case
                </Link>
                <Text fontSize={'sm'} textAlign={'left'} color={'gray.500'}>
                  The Supreme Court has mandated the creation of a six-person
                  expert team led by Justice AM Sapre, a retired Supreme Court
                  justice. OP Bhatt, KV Kamath, Nandan Nilekani, Justice JP
                  Devdatt, and Somsekha...
                </Text>
                <Text fontSize={'sm'} color={'#6666FF'} textAlign={'left'}>
                  March 02, 2023
                </Text>
                <Link
                  _hover={{
                    textDecoration: 'none',
                  }}
                  fontSize={'sm'}
                  textAlign={'left'}
                >
                  Read More {'->'}
                </Link>
              </Stack>
            </Box>
          </Center>
          <Center p={6}>
            <Box
              maxW={'350px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              rounded={'md'}
              p={4}
              border={useColorModeValue('1px solid #E8EBF4', '1px solid white')}
              overflow={'hidden'}
            >
              <Box
                h={['180px', '210px']}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}
              >
                <Image
                  src={'https://www.invostock.com/img/article/adani-crash.jpg'}
                  layout={'fill'}
                />
              </Box>
              <Stack>
                <Text
                  maxW={20}
                  maxH={10}
                  textTransform={'uppercase'}
                  fontSize={'sm'}
                  rounded={'md'}
                  color={'#F9AA02'}
                  bg={useColorModeValue('#ADB5BD', 'gray.900')}
                >
                  Latest
                </Text>
                <Link
                  textAlign={'left'}
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'sm'}
                  fontFamily={'body'}
                  _hover={{
                    textDecoration: 'none',
                    color: '#6666FF',
                  }}
                >
                  Supreme Court Verdict on Adani Case: Expert Panel Created,
                  SEBI Ordered to Investigate Adani-Hindenburg Case
                </Link>
                <Text fontSize={'sm'} textAlign={'left'} color={'gray.500'}>
                  The Supreme Court has mandated the creation of a six-person
                  expert team led by Justice AM Sapre, a retired Supreme Court
                  justice. OP Bhatt, KV Kamath, Nandan Nilekani, Justice JP
                  Devdatt, and Somsekha...
                </Text>
                <Text fontSize={'sm'} color={'#6666FF'} textAlign={'left'}>
                  March 02, 2023
                </Text>
                <Link
                  _hover={{
                    textDecoration: 'none',
                  }}
                  fontSize={'sm'}
                  textAlign={'left'}
                >
                  Read More {'->'}
                </Link>
              </Stack>
            </Box>
          </Center>
          <Button
            as={'a'}
            h={'50px'}
            maxW={'200px'}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#6666FF'}
            href={'#'}
            _hover={{
              transform: 'translateY(-2px)',
            }}
          >
            LOAD MORE POSTS
          </Button>
        </Stack>
      </Grid>
    </Flex>
  );
};
export default TabArea;
