import React, { ReactNode } from "react"
import styled from "styled-components"

interface defaultProps {
  children?: ReactNode
}

/*---> Component <---*/
function OptFormText({ children, ...restProps }: defaultProps) {
  return <Text {...restProps}>{children}</Text>
}

/*---> Styles <---*/
export const Text = styled.p`
  font-size: 19px;
  color: #fff;
  text-align: center;
  padding: 0 20px;
`

export default OptFormText
