import React from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const CardFeatureClose = ({ ...restProps }: PropsType) => {
  return (
    <Button {...restProps}>
      <img src='../images/icons/close.png' alt='Close' />
    </Button>
  )
}

/*---> Styles <---*/
export const Button = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: none;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`

/*---> Interfaces <---*/
interface PropsType {
  onClick: () => void
}


export default CardFeatureClose
