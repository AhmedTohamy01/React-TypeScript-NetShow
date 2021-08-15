import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface defaultProps {
  children?: ReactNode
}

/*---> Component <---*/
const Seperator = ({ children, ...restProps }: defaultProps) => {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  border: 4px solid #222;
`

export default Seperator
