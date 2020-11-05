import React, { ReactNode } from "react"
import styled from "styled-components"

interface defaultProps {
  children?: ReactNode
}

/*---> Component <---*/
function FeatureWrapper({ children, ...restProps }: defaultProps) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  text-align: center;
  border: soild green;
`

export default FeatureWrapper
