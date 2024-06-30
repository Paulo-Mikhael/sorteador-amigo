import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledMain = styled.main`
  background-color: white;
  width: 99.7%;
  height: 557px;
  border-radius: 60px 60px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 87px;
  border: 2px solid black;
  z-index: 0;
`

const MainBackground = () => {
  return (
    <StyledMain>
      <Outlet />
    </StyledMain>
  );
}

export default MainBackground;