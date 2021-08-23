import React from 'react'
import styled from 'styled-components'

interface PropsType {
  children: string
}

/*---> Component <---*/
function FeatureTitleBrowse({ children }: PropsType) {
  return <Title>{children}</Title>
}

/*---> Styles <---*/
export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 700;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin-bottom: 20px;

  @media (max-width: 550px) {
    font-size: 30px;
  }
`

export default FeatureTitleBrowse
