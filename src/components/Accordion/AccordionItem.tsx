import React, { useState, ReactNode } from "react"
import styled from "styled-components"

interface defaultProps {
  children?: ReactNode
}

/*---> Component <---*/
function AccordionItem({ children, ...restProps }: defaultProps) {
  const [AccordionShow, setAccordionShow] = useState(false)
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  margin-bottom: 10px;
`

export default AccordionItem
