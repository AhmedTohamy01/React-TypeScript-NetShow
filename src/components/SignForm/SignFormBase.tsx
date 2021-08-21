import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface PropsType {
  children?: ReactNode
}

/*---> Component <---*/
function SignFormBase({ children }: PropsType) {
  return <Form>{children}</Form>
}

/*---> Styles <---*/
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`

export default SignFormBase
