import React from 'react';
import Footer from './components/footer/Footer'

// internal files
import Nav from './components/navigation/Nav'
import Home from './components/home/Home'
import { Box } from "@chakra-ui/react";


const App = () => {
  return (
    <>
      <Nav/>
      <Home/>
      <Footer />
    </>
  );
}
export default App;