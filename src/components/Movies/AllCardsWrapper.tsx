import React, { ReactNode } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
function AllCardsWrapper({ children }: PropsType) {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`

/*---> Interfaces <---*/
interface PropsType {
  children: ReactNode
}

export default AllCardsWrapper
