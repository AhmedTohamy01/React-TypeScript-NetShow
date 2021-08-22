import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SigninPage from './pages/SigninPage'

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
      </Switch>
    </Router>
  )
}

export default App
