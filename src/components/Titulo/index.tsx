import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-weight: 600;
  font-size: 32px;
  color: #4B69FD;
  margin-bottom: 36px;
`

const Titulo = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledH1>
      {children}
    </StyledH1>
  );
}

export default Titulo;