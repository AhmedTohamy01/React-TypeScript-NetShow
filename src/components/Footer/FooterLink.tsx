import React from 'react'
import styled from 'styled-components'

interface PropsType {
  children?: string
}

/*---> Component <---*/
function FooterLink({ children }: PropsType) {
  return <Link href='#'>{children}</Link>
}

/*---> Styles <---*/
export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
`

export default FooterLink
