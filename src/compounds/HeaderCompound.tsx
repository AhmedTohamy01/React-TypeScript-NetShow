import React, { ReactNode } from "react"
import HeaderWrapper from '../components/Header/HeaderWrapper'
import Logo from './Logo'
import Navbar from './Navbar'

interface defaultProps {
  children?: ReactNode
}

function HeaderCompound({ children }: defaultProps) {
  return (
    <>
			<HeaderWrapper>
				<Navbar>
					<Logo />
				</Navbar>
			</HeaderWrapper>
      {children}
    </>
  )
}

export default HeaderCompound
