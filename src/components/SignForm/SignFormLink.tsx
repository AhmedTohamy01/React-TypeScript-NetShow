import React from 'react'
import styled from 'styled-components'

interface PropsType {
  children?: string
	href: string
}


/*---> Component <---*/
function SignFormLink({ children }: PropsType) {
  return <Link>{children}</Link>
}

/*---> Styles <---*/
export const Link = styled.a`
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
