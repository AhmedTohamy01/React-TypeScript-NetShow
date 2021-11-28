import React, { ReactNode } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const CardWrapper = ({ children, ...restProps }: PropsType) => {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  &:hover {
    transform: scale(1.25);
  }
`

/*---> Interfaces <---*/
interface PropsType {
  children: ReactNode
  key: string
}

export default CardWrapper
