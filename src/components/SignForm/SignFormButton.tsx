import React from 'react'
import styled from 'styled-components'

interface PropsType {
  children?: string
}

/*---> Component <---*/
function SignFormBase({ children }: PropsType) {
  return <Button>{children}</Button>
}

/*---> Styles <---*/
export const Button = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
  }
`

export default SignFormBase
