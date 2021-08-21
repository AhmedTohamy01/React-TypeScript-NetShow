import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface PropsType {
  children?: ReactNode
}

/*---> Component <---*/
const FeatureWrapper = ({ children }: PropsType) => {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  text-align: center;
  border: soild green;
`

export default FeatureWrapper
