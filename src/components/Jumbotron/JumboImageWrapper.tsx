import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ChildrenType {
  children?: ReactNode
}

/*---> Component <---*/
const JumboImageWrapper = ({ children }: ChildrenType) => {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  @media (max-width: 950px) {
    text-align: center;
  }
`

export default JumboImageWrapper
