import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NumberWithLoader from "./NumberWithLoader";
import bgMobile from "../assets/bg-mobile.png";
import bg from "../assets/bg.png";

const Main = styled.div`
  background-image: ${`url(${bgMobile})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #000000;
  height: 100vh;
  width: 100vw;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 0px 50px;

  @media screen and (min-width: 768px) {
    background-image: ${`url(${bg})`};
    background-size: cover;
  }
`;

const Jumbo = () => {
  const initialState = {
    loading: true,
    confirmed: 0,
    deaths: 0,
    recovered: 0
  };
  const [stats, setStats] = useState(initialState);

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/")
      .then(data => data.json())
      .then(resp => {
        setStats({
          loading: false,
          confirmed: resp.confirmed.value,
          deaths: resp.deaths.value,
          recovered: resp.recovered.value
        });
      })
      .catch(error => {
        console.log(error);
        setStats({
          loading: false,
          confirmed: 956588,
          deaths: 48583,
          recovered: 202728
        });
      });
  }, []);
  return (
    <Main>
      <p>
        There are{" "}
        <NumberWithLoader loading={stats.loading} value={stats.confirmed} />{" "}
        people around the world confirmed positive for the coronavirus infection
        (Covid-2019),{" "}
        <NumberWithLoader loading={stats.loading} value={stats.deaths} /> people
        have died in 206 countries/territories, and the infection had still
        shown no signs of abating.
      </p>
      <p>
        The numbers are changing almost by the hour, even as scientists and
        doctors around the world race to come out with a viable vaccine or
        treatment regimen and governments are working overtime to contain the
        spread. While misinformation, rumours and unscientific advice floats
        around, several organizations, institutions and agencies have come up
        with authentic information resources. This is an attempt at categorising
        the available information in various resources & providing links.
      </p>
    </Main>
  );
};

export default Jumbo;
