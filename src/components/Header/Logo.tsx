import React from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const Logo = () => {
  return (
    <div>
      <a href='/' >
        <Image
          src='/images/misc/logo.svg'
          alt='Netflix logo'
        />
      </a>
    </div>
  )
}

/*---> Styles <---*/
export const Image = styled.img`
  height: 32px;
  width: 108px;
`

export default Logo
