import React from "react";
import Section from "./Section";

const Trackers = () => {
  return (
    <Section id="trackers">
      <h2>Trackers</h2>
      <p>
        There have been efforts by some organizations and institutions to come
        up with trackers, graphs and other statistics to give a bird’s eye view
        of the latest figures pertaining to the Covid-2019 infection. Here are
        some.
      </p>
      <ol>
        <li className="bold">
          Covid19india.org: Tracking Indian cases statewise.{" "}
          <a
            href="https://www.covid19india.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.covid19india.org/
          </a>
        </li>

        <li className="bold">
          Worldometers: Country-wise case statistics, fatality rate, etc.{" "}
          <a
            href="https://www.worldometers.info/coronavirus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.worldometers.info/coronavirus/
          </a>
        </li>

        <li className="bold">
          World Health Organization (WHO): Statistics, graphs and heatmaps.{" "}
          <a
            href="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd
          </a>
        </li>

        <li className="bold">
          Johns Hopkins University of Medicine Coronavirus Resource Centre:
          Country-wise case tracker.{" "}
          <a
            href="https://coronavirus.jhu.edu/map.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://coronavirus.jhu.edu/map.html
          </a>
        </li>

        <li className="bold">
          World Economic Forum: Publications, videos, data, graphs.{" "}
          <a
            href="https://intelligence.weforum.org/topics/a1G0X000006O6EHUA0?tab=data"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://intelligence.weforum.org/topics/a1G0X000006O6EHUA0?tab=data
          </a>
        </li>

        <li className="bold">
          Ministry of Health and Family Welfare, Government of India (MoHFW):
          Latest official numbers from India.{" "}
          <a
            href="https://www.mohfw.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.mohfw.gov.in/
          </a>
        </li>

        <li className="bold">
          Indian Council for Medical Research (ICMR): State-wise distribution of
          cases in India.{" "}
          <a
            href="http://covidindiaupdates.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://covidindiaupdates.in/
          </a>
        </li>

        <li className="bold">
          Centers for Disease Control and Prevention (CDC): State-wise situation
          reports from the United States.{" "}
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cases-in-us.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cases-in-us.html
          </a>
        </li>

        <li className="bold">
          European Center for Disease Prevention and Control: Global and
          European time trends.{" "}
          <a
            href="https://qap.ecdc.europa.eu/public/extensions/COVID-19/COVID-19.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://qap.ecdc.europa.eu/public/extensions/COVID-19/COVID-19.html
          </a>
        </li>
      </ol>
    </Section>
  );
};

export default Trackers;
