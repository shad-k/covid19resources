import React from "react";
import styled from "styled-components";

const Main = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: #ffffff;
  background: radial-gradient(ellipse at top left, #000000 40%, #2c2c2c 90%);
`;

const Header = () => {
  return <Main>COVID19 Resources</Main>;
};

export default Header;
