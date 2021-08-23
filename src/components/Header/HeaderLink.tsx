import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface PropsType {
  children: string
  onClick: () => void
}

/*---> Component <---*/
function HeaderLink({ children, ...restProps }: PropsType) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  padding: 5px;
  color: #fff;
  margin-left: 25px;
  cursor: pointer;
  font-weight: normal;
`

export default HeaderLink
