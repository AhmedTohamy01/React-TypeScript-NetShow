import React from "react";
import styled from "styled-components";

interface PropsType {
  children?: string
}

/*---> Component <---*/
function FooterTitle({ children }: PropsType) {
  return (
    <Link href='#'>
      {children}
    </Link>
  )
}

/*---> Styles <---*/
export const Link = styled.a`
  font-size: 16px;
  color: #757575;
  margin-bottom: 50px;
`;

export default FooterTitle;
