import React, { ReactNode } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const JumboImageWrapper = ({ children }: PropsType) => {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  @media (max-width: 950px) {
    text-align: center;
  }
`

/*---> Interfaces <---*/
interface PropsType {
  children?: ReactNode
}

export default JumboImageWrapper
