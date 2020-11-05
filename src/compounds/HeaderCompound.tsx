import React, { ReactNode } from "react"
import FeatureWrapper from '../components/Feature/FeatureWrapper'
import HeaderWrapper from '../components/Header/HeaderWrapper'
import Logo from '../components/Header/Logo'
import Navbar from "../components/Header/Navbar"
import SigninButton from '../components/Header/SigninButton'

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
				<FeatureWrapper></FeatureWrapper>
      </HeaderWrapper>
      {children}
    </>
  )
}

export default HeaderCompound
