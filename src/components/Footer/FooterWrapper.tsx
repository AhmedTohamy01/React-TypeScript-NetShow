import React, { ReactNode } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
function FooterWrapper({ children }: PropsType) {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.footer`
  max-width: 1000px;
  margin: auto;
  padding: 70px 56px;

  @media (max-width: 740px) {
    padding: 70px 30px;
  }

  @media (max-width: 500px) {
    padding: 70px 15px;
  }
`

/*---> Interfaces <---*/
interface PropsType {
  children?: ReactNode
}

export default FooterWrapper
