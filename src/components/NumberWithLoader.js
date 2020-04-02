import React from "react";
import styled from "styled-components";

const Main = styled.span`
  font-weight: bold;
  font-style: italic;

  &.blur {
    filter: blur(4px);
  }
`;

const NumberWithLoader = ({ loading, value }) => {
  return (
    <Main className={`${loading ? "blur" : ""}`}>
      {loading ? "00000" : value}
    </Main>
  );
};

export default NumberWithLoader;
