import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface PropsType {
  children: ReactNode
  key: string
}

/*---> Component <---*/
function CardWrapper({ children, ...restProps }: PropsType) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  &:hover {
    transform: scale(1.25);
  }
`

export default CardWrapper
