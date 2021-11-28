import React, { useState, ReactNode } from 'react'
import AccordionContext from './AccordionContext'
import styled from 'styled-components'

/*---> Component <---*/
const AccordionItem = ({ children }: PropsType) => {
  const [AccordionShow, setAccordionShow] = useState<boolean>(false)

  return (
    <AccordionContext.Provider value={{AccordionShow, setAccordionShow}}>
      <Wrapper>{children}</Wrapper>
    </AccordionContext.Provider>
  )
}

export default AccordionItem

/*---> Styles <---*/
export const Wrapper = styled.div`
  margin-bottom: 10px;
`

/*---> Interfaces <---*/
interface PropsType {
  children?: ReactNode
}