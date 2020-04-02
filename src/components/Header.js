import React from "react";
import styled from "styled-components";

const Main = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  background: radial-gradient(ellipse at top left, #000000 40%, #2c2c2c 90%);
  a {
    font-size: 26px;
    color: #ffffff;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <Main>
      <a href="/">COVID19 Resources</a>
    </Main>
  );
};

export default Header;
