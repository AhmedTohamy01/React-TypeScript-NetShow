import React, { ReactNode } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const SignFormBase = ({ children, ...restProps}: PropsType) => {
  return <Form {...restProps}>{children}</Form>
}

/*---> Styles <---*/
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`

/*---> Interfaces <---*/
interface PropsType {
  children?: ReactNode
  onSubmit: (event: React.FormEvent) => void
  method: 'POST'
}

export default SignFormBase
