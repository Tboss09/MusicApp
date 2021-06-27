import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import './index.css'

import {  BrowserRouter as Router
} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
