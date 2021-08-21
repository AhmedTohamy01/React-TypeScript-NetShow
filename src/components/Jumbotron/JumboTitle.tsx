import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface PropsType {
  children?: string
}

/*---> Component <---*/
const JumboTitle = ({ children }: PropsType) => {
  return <Title>{children}</Title>
}

/*---> Styles <---*/
export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 8px;
  padding-right: 100px;

  @media (max-width: 950px) {
    font-size: 2.5rem;
    text-align: center;
    padding-right: initial;
  }

  @media (max-width: 550px) {
    font-size: 1.5rem;
    text-align: center;
  }
`

export default JumboTitle
