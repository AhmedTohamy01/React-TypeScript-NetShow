import React, { useContext } from 'react'
import AccordionContext from './AccordionContext'
import styled from 'styled-components'

/*---> Component <---*/
const AccordionBody = ({ children }: PropsType) => {
  const accordionContextValue = useContext(AccordionContext)

  return accordionContextValue!.AccordionShow ? (
    <Wrapper>{children}</Wrapper>
  ) : null
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  background: #303030;
  font-size: 26px;
  font-weight: normal;
  padding: 0.8em 1.2em 0.8em 1.2em;

  @media (max-width: 550px) {
    font-size: 20px;
  }
`

/*---> Interfaces <---*/
interface PropsType {
  children?: string
}

export default AccordionBody
