import React, { useContext } from 'react'
import AccordionContext from './AccordionContext'
import styled from 'styled-components'

/*---> Component <---*/
const AccordionHeader = ({ children }: PropsType) => {
	const accordionContextValue = useContext(AccordionContext)

  const handleClick = () => {
    accordionContextValue?.setAccordionShow(
      !accordionContextValue.AccordionShow
    )
  }

  return (
    <Wrapper onClick={handleClick}>
      {children}
      {accordionContextValue?.AccordionShow ? (
        <Image src='../images/icons/close-slim.png' alt='Close' />
      ) : (
        <Image src='../images/icons/add.png' alt='Open' />
      )}
    </Wrapper>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  background: #303030;
  font-size: 26px;
  font-weight: normal;
  padding: 0.8em 1.2em 0.8em 1.2em;
  margin-bottom: 1px;
  cursor: pointer;

  @media (max-width: 550px) {
    font-size: 20px;
  }
`

export const Image = styled.img`
  filter: brightness(0) invert(1);
  width: 24px;
  float: right;

  img::hover {
    background: #303030;
  }

  @media (max-width: 550px) {
    width: 16px;
  }
`

/*---> Interfaces <---*/
interface PropsType {
  children?: string
}

export default AccordionHeader
