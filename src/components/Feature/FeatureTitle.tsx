import React from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const FeatureTitle = ({ children }: PropsType) => {
  return <Title>{children}</Title>
}

/*---> Styles <---*/
export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 700;
  margin: auto;

  @media (max-width: 550px) {
    font-size: 30px;
  }
`

/*---> Interfaces <---*/
interface PropsType {
  children?: string
}

export default FeatureTitle
