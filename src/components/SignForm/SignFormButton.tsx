import React from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const SignFormButton = ({ children, ...restProps }: PropsType) => {
  return <Button {...restProps}>{children}</Button>
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

/*---> Interfaces <---*/
interface PropsType {
  children?: string
  disabled: boolean
  type: 'submit'
}

export default SignFormButton
