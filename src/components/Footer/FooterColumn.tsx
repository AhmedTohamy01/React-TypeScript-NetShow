import React, { ReactNode } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const FooterColumn = ({ children }: PropsType) => {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

/*---> Interfaces <---*/
interface PropsType {
  children?: ReactNode
}

export default FooterColumn
