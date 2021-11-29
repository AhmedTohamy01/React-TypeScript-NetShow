import React from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const SignFormLink = ({ children, ...restProps }: PropsType) => {
  return <Link {...restProps}>{children}</Link>
}

/*---> Styles <---*/
export const Link = styled.span`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`

/*---> Interfaces <---*/
interface PropsType {
  children?: string
  onClick?: () => void
}

export default SignFormLink
