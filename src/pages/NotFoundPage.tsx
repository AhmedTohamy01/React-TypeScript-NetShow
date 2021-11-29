import React from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const NotFoundPage = () => {
  return (
    <>
      <Wrapper>
        <img src='/sorry.png' width='240px' alt='little girl' />
        404 | This page could not be found.
      </Wrapper>
    </>
  )
}

export const Wrapper = styled.div`
  /* border: 1px solid red; */
  margin-top: 50px;
  display: flex;
  align-items: center;
`

export default NotFoundPage
