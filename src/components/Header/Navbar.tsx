import React, { ReactNode } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const Navbar = ({ children }: PropsType) => {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.nav`
  /* border: 1px solid green; */
  max-width: 1850px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 175px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 550px) {
    margin-bottom: 100px;
  }
`

/*---> Interfaces <---*/
interface PropsType {
  children?: ReactNode
}

export default Navbar
