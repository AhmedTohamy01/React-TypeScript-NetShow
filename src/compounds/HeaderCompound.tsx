import React, { ReactNode } from "react"
import HeaderWrapper from '../components/Header/HeaderWrapper'
import Logo from './Logo'
import Navbar from './Navbar'
import SigninButton from './SigninButton'

interface defaultProps {
  children?: ReactNode
}

function HeaderCompound({ children }: defaultProps) {
  return (
    <>
      <HeaderWrapper>
        <Navbar>
          <Logo />
          <SigninButton>Sign In</SigninButton>
        </Navbar>
      </HeaderWrapper>
      {children}
    </>
  )
}

export default HeaderCompound
