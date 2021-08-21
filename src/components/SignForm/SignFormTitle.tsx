import React from 'react'
import styled from 'styled-components'

interface PropsType {
  children?: string
}

/*---> Component <---*/
function SignFormTitle({ children }: PropsType) {
  return <Title>{children}</Title>
}

/*---> Styles <---*/
export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`

export default SignFormTitle
