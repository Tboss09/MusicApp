import React from 'react'
// import { Box } from "@chakra-ui/react";
import 'tachyons'
import Home from './container/home/Home'
import Music from './container/Music/Music'
import Contact from './container/contact/Contact'
import About from './container/about/About'
import Nav from './components/navigation/Nav' 
import Footer from './components/footer/Footer' 
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

      <Route exact path ="/contact">
      <Contact/>
      </Route>

      <Route exact path ="/about">
      <About/>
      </Route>

</Switch>
<Footer/>
      </Router>
  )
}
export default App
