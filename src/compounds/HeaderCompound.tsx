import React, { ReactNode } from "react"
import { Interface } from 'readline'

interface defaultProps {
	children: ReactNode;
}


function HeaderCompound({ children, ...restProps }: defaultProps) {
	return (
		<div {...restProps}>
			{children}
		</div>
	)
}

export default HeaderCompound
