import React from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const CardTitle = ({ children }: PropsType) => {
  return <Title>{children}</Title>
}

/*---> Styles <---*/
export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 30px;
`

/*---> Interfaces <---*/
interface PropsType {
  children: string
}


export default CardTitle
