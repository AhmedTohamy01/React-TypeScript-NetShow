import React, { ReactNode } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const FeatureWrapper = ({ children }: PropsType) => {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  text-align: center;
  border: soild green;
`

/*---> Interfaces <---*/
interface PropsType {
  children?: ReactNode
}

export default FeatureWrapper
