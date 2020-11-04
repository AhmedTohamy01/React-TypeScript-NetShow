import React, { ReactNode } from "react"

interface defaultProps {
  children?: ReactNode
}

function HeaderCompound({ children }: defaultProps) {
  return (
    <>
      header compound
      {children}
    </>
  )
}

export default HeaderCompound
