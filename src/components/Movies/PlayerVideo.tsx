import React from 'react'
import styled from 'styled-components'

interface PropsType {
  src: string
	type: string
}

/*---> Component <---*/
function PlayerVideo({ ...restProps }: PropsType) {
  return (
    <Video controls {...restProps}>
      <source {...restProps} />
    </Video>
  )
}

/*---> Styles <---*/
export const Video = styled.video`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
`

export default PlayerVideo
