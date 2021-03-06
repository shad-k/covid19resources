import React from "react";
import styled from "styled-components";

import { throttle } from "../utils";

const Main = styled.div`
  height: 50px;
  background-color: #ffffff;
  overflow-x: auto;
  box-shadow: 0 2px 4px 0 #aaa;

  &.tab-fixed {
    position: fixed;
    top: 50px;
    width: 100%;
  }

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
        font-weight: 500;

        &.active {
          background-color: #ff4343;
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
      currentHash: window.location.hash.replace("#", "")
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  scrollHandler = throttle(event => {
    const jumboElem = document.getElementById("jumbo");
    const threshold = jumboElem.offsetTop + jumboElem.offsetHeight - 20;
    if (window.pageYOffset > threshold) {
      document.getElementById("tabs").classList.add("tab-fixed");
    } else if (
      document.getElementById("tabs").classList.contains("tab-fixed")
    ) {
      document.getElementById("tabs").classList.remove("tab-fixed");
    }
  }, 100);

  clickHandler = event => {
    const hash = event.currentTarget.dataset.href;
    window.gtag("event", "tab-click", { hash });
    this.setState({
      currentHash: hash
    });
  };

  render() {
    const tabs = [
      {
        name: "FAQs",
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
        name: "Posters & Videos",
        hash: "posters-videos"
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
