import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface defaultProps {
  children?: ReactNode
}

/*---> Component <---*/
const JumboImageWrapper = ({ children, ...restProps }: defaultProps) => {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  @media (max-width: 950px) {
    text-align: center;
  }
`

export default JumboImageWrapper
