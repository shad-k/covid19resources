import React from "react";
import Section from "./Section";

const MythBusters = () => {
  return (
    <Section id="myth-busters">
      <h2>Myth Busters</h2>
      <p>
        Rumours, myths and misinformation have had a field day ever since the
        first story of the pandemic broke. These range from potentially
        dangerous medical advice to dietary inclusions without any scientific
        basis. Organizations/agencies round the world have had a hard time
        tackling such misinformation which has been acutely rampant like never
        before. But some efforts at debunking such myths and unscientific
        information are notable.
      </p>
      <ol>
        <li>
          <span className="bold">World Health Organisation:</span>{" "}
          <a
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters
          </a>
        </li>
        <li>
          <span className="bold">Government of India:</span>{" "}
          <a
            href="https://www.mygov.in/covid-19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.mygov.in/covid-19/
          </a>
        </li>
        <li>
          <span className="bold">Harvard T.H. School of Public Health:</span>{" "}
          <a
            href="https://www.hsph.harvard.edu/india-center/myths-vs-facts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.hsph.harvard.edu/india-center/myths-vs-facts/
          </a>
        </li>
        <li>
          <span className="bold">Indian Scientists’ Response to CoVid-19:</span>{" "}
          <a
            href="https://indscicov.in/index.php/busting-hoaxes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://indscicov.in/index.php/busting-hoaxes/
          </a>
        </li>
      </ol>
    </Section>
  );
};

export default MythBusters;
