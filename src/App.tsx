import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import BrowsePage from './pages/BrowsePage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/signin'>
          <SigninPage />
        </Route>
        <Route path='/signup'>
          <SignupPage />
        </Route>
        <Route path='/browse'>
          <BrowsePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
