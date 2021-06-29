import React from 'react'
import 'tachyons'
import Home from './container/home/Home'
import Music from './container/Music/Music'
import Contact from './container/contact/Contact'
import About from './container/about/About'
import Nav from './components/navigation/Nav'
import Footer from './components/footer/Footer'
import { Route, Switch, useLocation } from 'react-router-dom'
import Admin from './admin/Admin'
import Dashboard from './admin/Dashboard'

const App = () => {
  const location = useLocation().pathname
  const [changeNav, setChangeNav] = React.useState(false)

  React.useEffect(() => {
    location === '/admin' || location === '/dashboard' ? setChangeNav(true) : setChangeNav(false)
  }, [location])

  return (
    <>
      {!changeNav && <Nav /> }
      

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/music'>
          <Music />
        </Route>

        <Route exact path='/contact'>
          <Contact />
        </Route>

        <Route exact path='/about'>
          <About />
        </Route>

        <Route exact path='/admin'>
          <Admin />
        </Route>

        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        
      </Switch>

      {!changeNav && <Footer/> }
    </>
  )
}
export default App
