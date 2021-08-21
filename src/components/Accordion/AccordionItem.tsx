import React, { useState, ReactNode } from 'react'
import AccordionContext from './AccordionContext'
import styled from 'styled-components'

interface PropsType {
  children?: ReactNode
}

/*---> Component <---*/
const AccordionItem = ({ children }: PropsType) => {
  const [AccordionShow, setAccordionShow] = useState<boolean>(false)

  return (
    <AccordionContext.Provider value={{AccordionShow, setAccordionShow}}>
      <Wrapper>{children}</Wrapper>
    </AccordionContext.Provider>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  margin-bottom: 10px;
`

export default AccordionItem
