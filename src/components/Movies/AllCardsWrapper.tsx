import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface PropsType {
  children: ReactNode
}

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

export default AllCardsWrapper
