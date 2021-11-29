import React, { ReactNode } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const AccordionWrapper = ({ children }: propsType) => {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  max-width: 815px;
  margin: auto;
  padding: 70px 45px;
  display: flex;
  flex-direction: column;

  @media (max-width: 550px) {
    max-width: initial;
    padding: 70px 20px;
  }
`

/*---> Interfaces <---*/
interface propsType {
  children?: ReactNode
}

export default AccordionWrapper
