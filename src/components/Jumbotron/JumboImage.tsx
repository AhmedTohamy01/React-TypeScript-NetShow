import React  from 'react'
import styled from 'styled-components'

interface PropsType {
  src: string
  alt: string
}

/*---> Component <---*/
const JumboImage = ({ src, alt }: PropsType) => {
  return <Image src={src} alt={alt}/>
}

/*---> Styles <---*/
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`

export default JumboImage
