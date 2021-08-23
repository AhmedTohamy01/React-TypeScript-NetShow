import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface PropsType {
  children: ReactNode
	style: {
		backgroundImage: string
	}
}

/*---> Component <---*/
function CardFeatureWrapper({ children, ...restProps }: PropsType) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;
  padding-top: 30px;
`

export default CardFeatureWrapper
