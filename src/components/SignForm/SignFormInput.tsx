import React, { ReactNode }  from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const SignFormWInput = ({ children, ...restProps }: PropsType) => {
  return <FormInput {...restProps}>{children}</FormInput>
}

/*---> Styles <---*/
export const FormInput = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
`

/*---> Interfaces <---*/
interface PropsType {
  children?: ReactNode
  type?: string
  placeholder?: string
  value?: string
  autoComplete?: string
  onChange?: ({ target }: { target: any }) => void
}

export default SignFormWInput
