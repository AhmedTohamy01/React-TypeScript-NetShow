import React from 'react'
import styled from 'styled-components'

interface PropsType {
  type?: string
  placeholder?: string
  value?: string
  autoComplete?: string
  onChange?: ({ target }: { target: any }) => void
}

/*---> Component <---*/
function SignFormWInput(props: PropsType) {
  return <FormInput />
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

export default SignFormWInput
