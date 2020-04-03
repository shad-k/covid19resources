import React from "react";

import Section from "./Section";

const FAQ = () => {
  return (
    <Section id="faq">
      <h2>FAQs</h2>
      <p>
        There are millions around the world who have never experienced such a
        deadly situation in their lives. Evidently, there are questions: How
        deadly is the disease? How does it spread? What should one do to keep
        safe? How can one protect ones near and dear ones? What are the
        symptoms? When should one consult the doctor or health authorities? Are
        there are any medicines or vaccines available yet? When should one use a
        mask? And several others. Here is a list and link to some organizations
        that have answered these and many other queries.
      </p>
      <ol>
        <li className="bold">
          Government of India:{" "}
          <a
            href="https://www.mygov.in/covid-19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.mygov.in/covid-19/
          </a>
        </li>
        <li className="bold">
          Ministry of Health and Family Welfare:{" "}
          <a
            href="https://www.mohfw.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.mohfw.gov.in/
          </a>
        </li>
        <li className="bold">
          Indian Council of Medical Research:{" "}
          <a
            href="https://www.icmr.nic.in/content/covid-19"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.icmr.nic.in/content/covid-19
          </a>
        </li>

        <li className="bold">
          World Health Organisation:{" "}
          <a
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.who.int/emergencies/diseases/novel-coronavirus-2019
          </a>
        </li>
        <li className="bold">
          Harvard T.H. Chan School of Public Health:{" "}
          <a
            href="https://www.hsph.harvard.edu/india-center/covid-19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.hsph.harvard.edu/india-center/covid-19/
          </a>
        </li>
        <li className="bold">
          World Economic Forum:{" "}
          <a
            href="https://intelligence.weforum.org/topics/a1G0X000006O6EHUA0?tab=publications"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://intelligence.weforum.org/topics/a1G0X000006O6EHUA0?tab=publications
          </a>
        </li>
        <li className="bold">
          Centers for Disease Control and Prevention:{" "}
          <a
            href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.cdc.gov/coronavirus/2019-nCoV/index.html
          </a>
        </li>
        <li className="bold">
          Johns Hopkins University of Medicine Coronavirus Resource Centre:{" "}
          <a
            href="https://coronavirus.jhu.edu/covid-19-basics/faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://coronavirus.jhu.edu/covid-19-basics/faq
          </a>
        </li>
      </ol>
    </Section>
  );
};

export default FAQ;
