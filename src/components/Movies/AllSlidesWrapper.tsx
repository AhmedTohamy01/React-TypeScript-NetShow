import React, { ReactNode } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
function AllSlidesWrapper({ children, ...restProps }: PropsType) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

/*---> Interfaces <---*/
interface PropsType {
  children: ReactNode
  id: string
}

export default AllSlidesWrapper
