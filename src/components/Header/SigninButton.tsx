import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface PropsType {
  children?: string
}

/*---> Component <---*/
const SigninButton = ({ children }: PropsType) => {
  return (
    <div>
      <Link href='/signin'>{children}</Link>
    </div>
  )
}

/*---> Styles <---*/
export const Link = styled.a`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
`

export default SigninButton
