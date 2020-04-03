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
      font-weight: 300;

      a {
        text-decoration: none;
        color: blue;
      }
    }
  }

  .bold {
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

const Section = ({ id, children }) => {
  return <Main id={id}>{children}</Main>;
};

export default Section;
