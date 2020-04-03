import React from "react";
import styled from "styled-components";

const Main = styled.footer`
  background-color: #ff4343;
  color: #ffffff;
  display: flex;
  padding: 10px 40px;
  flex-direction: column;
  justify-content: center;

  .link {
    color: #ffffff;
    font-weight: bold;
  }

  .section {
    margin: 5px 0;
    font-size: 16px;

    &.disclaimer {
      font-size: 14px;
    }
  }
`;

const Footer = () => {
  return (
    <Main>
      <div className="section">
        Compiled by Hasan Jawaid Khan:{" "}
        <a
          href="https://twitter.com/hjkhan"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          @hjkhan
        </a>
      </div>
      <div className="section">
        Developed by Shadab Khan:{" "}
        <a
          href="https://github.com/shad-k"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          shad-k
        </a>
      </div>
      <div className="section disclaimer">
        <strong>Disclaimer:</strong> This is an attempt to compile links to
        information resources pertaining to Covid-19 from around the world and
        in no way an acknowledgement of the authenticity of the information
        contained therein.
      </div>
    </Main>
  );
};

export default Footer;
