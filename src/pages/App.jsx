
import * as React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "./Home";
import Login from "./Login";

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
