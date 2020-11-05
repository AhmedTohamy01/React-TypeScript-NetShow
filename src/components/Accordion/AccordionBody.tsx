import React, { useContext, ReactNode } from "react"
import AccordionContext from "./AccordionContext"
import styled from "styled-components"

interface defaultProps {
  children?: ReactNode
}

/*---> Component <---*/
function AccordionBody({ children, ...restProps }: defaultProps) {
	const [AccordionShow, setAccordionShow] = useContext(AccordionContext)
	
  return AccordionShow ? <Wrapper {...restProps}>{children}</Wrapper> : null
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

export default AccordionBody
