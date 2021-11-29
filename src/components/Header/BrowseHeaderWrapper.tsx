import React, { ReactNode } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const BrowseHeaderWrapper = ({ children }: PropsType) => {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  background: url('/images/misc/patman.jpg');
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 30px 50px;

  @media (max-width: 550px) {
    padding: 15px 20px;
  }
`

/*---> Interfaces <---*/
interface PropsType {
  children?: ReactNode
}

export default BrowseHeaderWrapper
