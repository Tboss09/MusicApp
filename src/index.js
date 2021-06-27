import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css'

import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
