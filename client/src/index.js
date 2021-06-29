import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'

const breakpoints = ['375px', '425px', '768px', '992px', '1024px', '1200px']

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]
breakpoints.xl = breakpoints[5]

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
)
