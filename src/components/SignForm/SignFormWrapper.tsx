import React, { ReactNode } from 'react'
import styled from "styled-components";

interface PropsType {
  children?: ReactNode
}

/*---> Component <---*/
function SignFormWrapper({ children }: PropsType) {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 570px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;

  @media (max-width: 550px) {
    padding: 40px 20px 40px;
    min-height: 500px;
  }
`;

export default SignFormWrapper;
