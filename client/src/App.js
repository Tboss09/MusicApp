import React from 'react'
// import { Box } from "@chakra-ui/react";
import 'tachyons'
import Home from './container/home/Home'
import Music from './container/Music/Music'
import Nav from './components/navigation/Nav'
import { BrowserRouter as Router,Route,Switch,  Link
} from 'react-router-dom'

const App = () => {
  return( 
      <Router>
< Nav />

    <Switch>  
      <Route exact path ="/">
      <Home/>
      </Route>

      <Route exact path ="/music">
      <Music/>
      </Route>

      <Route exact path ="/about">
      <Home/>
      </Route>
</Switch>

      </Router>
  )
}
export default App
