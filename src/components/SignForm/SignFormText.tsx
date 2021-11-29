import React, { ReactNode } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const SignFormText = ({ children }: PropsType) => {
  return <Text>{children}</Text>
}

/*---> Styles <---*/
export const Text = styled.p`
  color: #8c8c8c;
  font-size: 16px;
  font-weight: 500;
`

/*---> Interfaces <---*/
interface PropsType {
  children?: string | ReactNode
}

export default SignFormText
