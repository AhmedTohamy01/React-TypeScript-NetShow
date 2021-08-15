import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ChildrenType {
  children?: string
}

/*---> Component <---*/
const JumboSubTitle = ({ children }: ChildrenType) => {
  return <SubTitle>{children}</SubTitle>
}

/*---> Styles <---*/
export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  line-height: normal;
  padding-right: 100px;

  @media (max-width: 950px) {
    font-size: 1.25rem;
    text-align: center;
    padding-right: initial;
  }

  @media (max-width: 550px) {
    font-size: 1.2rem;
    text-align: center;
  }
`

export default JumboSubTitle
