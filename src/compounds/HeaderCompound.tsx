import React, { ReactNode } from "react"
import HeaderWrapper from '../components/Header/HeaderWrapper'
import Navbar from './Navbar'

interface defaultProps {
  children?: ReactNode
}

function HeaderCompound({ children }: defaultProps) {
  return (
    <>
			<HeaderWrapper>
				<Navbar>
					
				</Navbar>
			</HeaderWrapper>
      {children}
    </>
  )
}

export default HeaderCompound
