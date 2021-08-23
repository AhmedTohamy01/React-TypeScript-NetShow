import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface PropsType {
  children: ReactNode
}

/*---> Component <---*/
function FeatureWrapperBrowse({ children }: PropsType) {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div``

export default FeatureWrapperBrowse
