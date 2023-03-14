import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import TabArea from './components/TabArea';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid h={'100vh'} w="100%">
          <Navbar />
          <Home />
          <TabArea />
          <Newsletter />
          <Footer />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
