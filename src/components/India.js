import React from "react";
import Section from "./Section";

const India = () => {
  return (
    <Section id="india">
      <h2>India-specific information</h2>
      <p>
        Apart from Indian organizations that have created special resources for
        Covid-19, there are some international resources too that have a special
        section dedicated to India.
      </p>
      <ol>
        <li>
          <span className="bold">Government of India:</span> Posters, Videos of
          experts, Data.
          <a
            href="https://www.mygov.in/covid-19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.mygov.in/covid-19/
          </a>
        </li>
        <li>
          <span className="bold">
            Indian Council for Medical Research (ICMR):
          </span>{" "}
          Statewise updates, list of dedicated testing laboratories, list of
          approved government laboratories and private testing laboratories,
          technical documents, etc.
          <a
            href="https://icmr.nic.in/content/covid-19 /"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://icmr.nic.in/content/covid-19 /
          </a>
        </li>
        <li>
          <span className="bold">Indian Scientists’ Response to CoVid-19:</span>{" "}
          <a
            href="https://indscicov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://indscicov.in/
          </a>
        </li>
        <li>
          <span className="bold">India Development Review:</span> News, articles
          and analysis.
          <a
            href="https://idronline.org/latest-news-and-updates-on-covid-19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://idronline.org/latest-news-and-updates-on-covid-19/
          </a>
        </li>
        <li>
          <span className="bold">
            Covid-19 Press Releases from Govt. of India:
          </span>{" "}
          <a
            href="https://www.thehinducentre.com/resources/article31149551.ece"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.thehinducentre.com/resources/article31149551.ece
          </a>
        </li>

        <li>
          <span className="bold">
            Harvard T.H. Chan School of Public Health:
          </span>{" "}
          <a
            href="https://www.hsph.harvard.edu/india-center/covid-19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.hsph.harvard.edu/india-center/covid-19/
          </a>
        </li>

        <li>
          <span className="bold">WHO:</span>{" "}
          <a
            href="https://www.who.int/india/emergencies/novel-coronavirus-2019"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.who.int/india/emergencies/novel-coronavirus-2019
          </a>
        </li>

        <li>
          <span className="bold">Google Covid-19 Information & Resources:</span>{" "}
          Latest updates in India, FAQs, data, videos.
          <a
            href="https://www.google.com/covid19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.google.com/covid19/
          </a>
        </li>
      </ol>
    </Section>
  );
};

export default India;
