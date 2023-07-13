import * as React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Login from './Account/Login';
import Ordering from './Order/Ordering';
import Navbar from '../components/NavBar';
import { CartProvider } from '../components/CartStore';
import bgbeans from './../assets/images/bgbeans.png'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

const App = () => {
  const user = {
    name: 'John Doe',
  };

  const online = true;

  return (
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Box 
        bgImg={bgbeans}
        bgSize="cover"
        bgPosition="center">
          <Box bg="#EFEFEF" maxW="850px" mx="auto">
            <Router basename="/">
            <Navbar user={user} online={online} />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route exact path="/Ordering" element={<Ordering />} />
                <Route exact path="/Login/*" element={<Login />} />
              </Routes>
            </Router>
          </Box>
        </Box>
      </CartProvider>
    </ChakraProvider>
  );
};

export default App;
