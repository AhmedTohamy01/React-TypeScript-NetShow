import React  from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const JumboImage = ({ src, alt }: PropsType) => {
  return <Image src={src} alt={alt}/>
}

/*---> Styles <---*/
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`

/*---> Interfaces <---*/
interface PropsType {
  src: string
  alt: string
}

export default JumboImage
