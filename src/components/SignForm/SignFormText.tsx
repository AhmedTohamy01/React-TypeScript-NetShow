import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface PropsType {
  children?: string | ReactNode
}

/*---> Component <---*/
function SignFormText({ children }: PropsType) {
  return <Text>{children}</Text>
}

/*---> Styles <---*/
export const Text = styled.p`
  color: #8c8c8c;
  font-size: 16px;
  font-weight: 500;
`

export default SignFormText
