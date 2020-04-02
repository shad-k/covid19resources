import React from "react";
import styled from "styled-components";

import { debounce } from "../utils";

const Main = styled.div`
  height: 50px;
  background-color: #ffffff;
  overflow-x: auto;

  ul {
    display: flex;
    height: 100%;
    margin: 0;
    padding: 0;

    flex-wrap: nowrap;
    width: 170%;
    justify-content: space-evenly;

    li {
      list-style: none;
      display: flex;
      justify-content: center;

      a {
        display: block;
        min-width: 50px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-size: 18px;
        color: #2a2a2a;
        font-weight: 600;

        &.active {
          background-color: #000000;
          color: #ffffff;
        }
      }
    }

    @media screen and (min-width: 768px) {
      width: 100%;
    }
  }
`;

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabFixed: false,
      currentHash: window.location.hash.replace("#", "")
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  scrollHandler = debounce(event => {
    const tabsElem = document.getElementById("tabs");
    const { tabFixed } = this.state;
    if (window.pageYOffset > tabsElem.offsetTop - 20) {
      this.setState({
        tabFixed: true
      });
    } else if (tabFixed) {
      this.setState({
        tabFixed: false
      });
    }
  }, 200);

  clickHandler = event => {
    const hash = event.currentTarget.dataset.href;
    this.setState({
      currentHash: hash
    });
  };

  render() {
    const tabs = [
      {
        name: "FAQ",
        hash: "faq"
      },
      {
        name: "Trackers",
        hash: "trackers"
      },
      {
        name: "Research Results",
        hash: "research"
      },
      {
        name: "Myth Busters",
        hash: "myth-busters"
      },
      {
        name: "India Specific Info",
        hash: "india"
      },
      {
        name: "Other",
        hash: "other"
      }
    ];
    const { currentHash } = this.state;
    return (
      <Main id="tabs">
        <ul>
          {tabs.map(tab => {
            return (
              <li key={tab.hash}>
                <a
                  onClick={this.clickHandler}
                  href={`#${tab.hash}`}
                  data-href={tab.hash}
                  className={`${currentHash === tab.hash ? "active" : ""}`}
                >
                  {tab.name}
                </a>
              </li>
            );
          })}
        </ul>
      </Main>
    );
  }
}

export default Tabs;
