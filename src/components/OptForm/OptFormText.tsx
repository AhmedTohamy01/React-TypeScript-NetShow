import React from 'react'
import styled from 'styled-components'

interface PropsType {
  children?: string
}

/*---> Component <---*/
const OptFormText = ({ children }: PropsType) => {
  return <Text>{children}</Text>
}

/*---> Styles <---*/
export const Text = styled.p`
  font-size: 19px;
  color: #fff;
  text-align: center;
  padding: 0 20px;
`

export default OptFormText
