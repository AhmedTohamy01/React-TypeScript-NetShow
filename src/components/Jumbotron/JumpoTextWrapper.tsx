import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ChildrenType {
  children?: ReactNode
}

/*---> Component <---*/
const JumpoTextWrapper = ({ children }: ChildrenType) => {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div``

export default JumpoTextWrapper
