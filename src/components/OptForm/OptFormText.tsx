import React from 'react'
import styled from 'styled-components'

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

/*---> Interfaces <---*/
interface PropsType {
  children?: string
}

export default OptFormText
