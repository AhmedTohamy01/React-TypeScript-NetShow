import React from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const SignFormCaptcha = ({ children }: PropsType) => {
  return <Text>{children}</Text>
}

/*---> Styles <---*/
export const Text = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`

/*---> Interfaces <---*/
interface PropsType {
  children?: string
}

export default SignFormCaptcha
