import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

/*---> Component <---*/
const Logo = () => {
  const history = useHistory()

  function handleClick() {
    history.push('/')
  }

  return (
    <Image
      src='/images/misc/logo.svg'
      alt='Netflix logo'
      onClick={handleClick}
    />
  )
}

/*---> Styles <---*/
export const Image = styled.img`
  height: 32px;
  width: 108px;
  cursor: pointer;
`

export default Logo
