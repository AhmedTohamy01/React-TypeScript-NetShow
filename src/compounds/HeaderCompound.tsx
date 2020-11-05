import React from "react"
import FeatureTitle from "../components/Feature/FeatureTitle"
import FeatureWrapper from "../components/Feature/FeatureWrapper"
import HeaderWrapper from "../components/Header/HeaderWrapper"
import Logo from "../components/Header/Logo"
import Navbar from "../components/Header/Navbar"
import SigninButton from "../components/Header/SigninButton"

function HeaderCompound() {
  return (
    <>
      <HeaderWrapper>
        <Navbar>
          <Logo />
          <SigninButton>Sign In</SigninButton>
        </Navbar>
        <FeatureWrapper>
          <FeatureTitle>Unlimited movies, TV shows and more.</FeatureTitle>
        </FeatureWrapper>
      </HeaderWrapper>
    </>
  )
}

export default HeaderCompound
