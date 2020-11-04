import React, { ReactNode } from "react"
import HeaderWrapper from '../components/Header/HeaderWrapper'

interface defaultProps {
  children?: ReactNode
}

function HeaderCompound({ children }: defaultProps) {
  return (
    <>
      <HeaderWrapper></HeaderWrapper>
      {children}
    </>
  )
}

export default HeaderCompound
