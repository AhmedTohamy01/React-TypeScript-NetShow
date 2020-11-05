import React, { ReactNode } from "react"
import styled from "styled-components"

interface defaultProps {
	children?: ReactNode
	src: string
	alt: string
}

/*---> Component <---*/
function JumboImage({ children, ...restProps }: defaultProps) {
  return <Image {...restProps}>{children}</Image>
}

/*---> Styles <---*/
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`

export default JumboImage
