import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './context/FirbaseContext'
import { firebase } from './lib/firebase.prod'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

