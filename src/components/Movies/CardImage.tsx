import React from 'react'
import styled from 'styled-components'

interface PropsType {
  onClick: () => void
	src: string
}

/*---> Component <---*/
function CardImage({ ...restProps }: PropsType) {
  return <Image {...restProps} />
}

/*---> Styles <---*/
export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0 5px;
`

export default CardImage
