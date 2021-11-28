import React, { ReactNode } from 'react'
import FeatureTitle from '../components/Feature/FeatureTitle'
import FeatureWrapper from '../components/Feature/FeatureWrapper'
import Warning from '../components/Feature/Warning'
import HeaderWrapper from '../components/Header/HeaderWrapper'
import Logo from '../components/Header/Logo'
import Navbar from '../components/Header/Navbar'
import SigninButton from '../components/Header/SigninButton'

/*---> Component <---*/
const HeaderCompound = ({ children }: PropsType) => {
  return (
    <>
      <HeaderWrapper>
        <Navbar>
          <Logo />
          <SigninButton>Sign In</SigninButton>
        </Navbar>
        <FeatureWrapper>
          <FeatureTitle>Unlimited movies, TV shows and more.</FeatureTitle>
          <Warning>This is NOT official Netflix</Warning>
        </FeatureWrapper>
        {children}
      </HeaderWrapper>
    </>
  )
}

/*---> Interfaces <---*/
interface PropsType {
  children?: ReactNode
}

export default HeaderCompound
