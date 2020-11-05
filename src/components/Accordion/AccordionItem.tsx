import React, { useState, ReactNode } from "react"
import AccordionContext from "./AccordionContext"
import styled from "styled-components"

interface defaultProps {
  children?: ReactNode
}


/*---> Component <---*/
function AccordionItem({ children, ...restProps }: defaultProps) {
	const [AccordionShow, setAccordionShow] = useState(false)
	const ContextData = [AccordionShow, setAccordionShow]

  return (
    <AccordionContext.Provider value={ContextData}>
      <Wrapper>{children}</Wrapper>
    </AccordionContext.Provider>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  margin-bottom: 10px;
`

export default AccordionItem
