import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface defaultProps {
  children?: ReactNode
}

/*---> Component <---*/
const JumpoTextWrapper = ({ children, ...restProps }: defaultProps) => {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div``

export default JumpoTextWrapper
