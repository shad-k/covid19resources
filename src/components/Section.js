import React from "react";
import styled from "styled-components";

const Main = styled.section`
  background-color: #ffffff;
  padding: 20px;
  width: 100%;
  padding-top: 100px;

  ol {
    line-height: 1.2em;
    padding: 0 20px;
    li {
      margin: 10px 0;
      word-break: break-all;
    }
  }

  .bold {
    font-weight: 600;
  }
`;

const Section = ({ id, children }) => {
  return <Main id={id}>{children}</Main>;
};

export default Section;
