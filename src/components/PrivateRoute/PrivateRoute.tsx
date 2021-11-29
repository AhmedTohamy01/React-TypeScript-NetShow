import React, { ReactNode } from 'react'
import { Route, Redirect } from 'react-router-dom'

/* ---> Component <---*/
const PrivateRoute = ({ children, path, authData, ...rest }: PropsType) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authData ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute

/*---> Interfaces <---*/
interface PropsType {
  children: ReactNode
  path: string
  authData: boolean
}
