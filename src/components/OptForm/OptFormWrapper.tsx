import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface defaultProps {
  children?: ReactNode
}

/*---> Component <---*/
const OptFormWrapper = ({ children, ...restProps }: defaultProps) => {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 70px;
  padding: 0 20px;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`

export default OptFormWrapper
