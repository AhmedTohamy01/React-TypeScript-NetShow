import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface defaultProps {
  children?: ReactNode
}

/*---> Component <---*/
const HeaderWrapper = ({ children, ...restProps }: defaultProps) => {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  background: url('/images/misc/home-bg.jpg');
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 30px 50px;

  @media (max-width: 550px) {
    padding: 15px 20px;
  }
`

export default HeaderWrapper
