import React, { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import BrowsePage from './pages/BrowsePage'
import NotFoundPage from './pages/NotFoundPage'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import firebase from '../src/lib/firebase.prod'

/*---> Component <---*/
const App = () => {
  const [authData, setAuthData] = useState(false)
  console.log('authData', authData)
  useEffect(() => {
    const getAuthData = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setAuthData(true)
        }
      })
    }
    getAuthData()
  }, [])

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
        <PrivateRoute path='/browse' authData={authData}>
          <BrowsePage />
        </PrivateRoute>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
