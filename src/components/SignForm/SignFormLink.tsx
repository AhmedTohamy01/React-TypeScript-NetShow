import React from 'react'
import styled from 'styled-components'

interface PropsType {
  children?: string
	onClick?: () => void
}


/*---> Component <---*/
function SignFormLink({ children, ...restProps }: PropsType) {
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

export default SignFormLink
