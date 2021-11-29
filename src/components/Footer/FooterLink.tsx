import React from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const FooterLink = ({ children }: PropsType) => {
  return <Link href='#'>{children}</Link>
}

/*---> Styles <---*/
export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
`

/*---> Interfaces <---*/
interface PropsType {
  children?: string
}

export default FooterLink
