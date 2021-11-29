import React, { ReactNode } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const JumboWrapper = ({ children }: PropsType) => {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div``

/*---> Interfaces <---*/
interface PropsType {
  children?: ReactNode
}

export default JumboWrapper
