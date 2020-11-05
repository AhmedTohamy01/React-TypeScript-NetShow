import React, { ReactNode } from "react"
import styled from "styled-components"

interface defaultProps {
  children?: ReactNode
}

/*---> Component <---*/
function FeatureTitle({ children, ...restProps }: defaultProps) {
  return <Title {...restProps}>{children}</Title>
}

/*---> Styles <---*/
export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 700;
  margin: auto;

  @media (max-width: 550px) {
    font-size: 30px;
  }
`

export default FeatureTitle
