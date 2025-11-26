import React from "react";
import { UilFileAlt } from "@iconscout/react-unicons";
import Data from "@eliascerne/data";

import styles from "./SectionAboutMe.module.css";

/* eslint-disable-next-line */
export interface SectionAboutMeProps {
  languageJSON: any;
}

export function SectionAboutMe(props: SectionAboutMeProps) {
  const { languageJSON } = props;
  return (
    <section className="about section" id="about">
      <h2 className="section_title">
        {Data.language[languageJSON].aboutMe.heading}
      </h2>
      <span className="section_subtitle">
        {Data.language[languageJSON].aboutMe.subheading}
      </span>

      <div className="about_container container grid">
        <img src="" alt="" className="about_img" />

        <div className="about_data">
          <p className="about_description">
            {Data.language[languageJSON].aboutMe.description}
          </p>

          <div className="about_info">
            <div>
              <span className="about_info-title">
                {Data.language[languageJSON].aboutMe.info1Sub}
              </span>
              <span className="about_info-name">
                {Data.language[languageJSON].aboutMe.info1}
              </span>
            </div>

            <div>
              <span className="about_info-title">
                {Data.language[languageJSON].aboutMe.info2Sub}
              </span>
              <span className="about_info-name">
                {Data.language[languageJSON].aboutMe.info2}
              </span>
            </div>

            <div>
              <span className="about_info-title">
                {Data.language[languageJSON].aboutMe.info3Sub}
              </span>
              <span className="about_info-name">
                {Data.language[languageJSON].aboutMe.info3}
              </span>
            </div>
          </div>
          <div className="about_buttons">
            <a
              href="/cv/Lebenslauf_Elias Cerne.pdf"
              download
              className="button button--flex"
            >
              {Data.language[languageJSON].aboutMe.button}{" "}
              <UilFileAlt size="20" className="button_icon" />
            </a>
            <a
              href="https://www.efset.org/cert/8F3Yzc"
              target="_blank"
              rel="noreferrer"
              className="button button--flex"
            >
              {Data.language[languageJSON].aboutMe.button2}{" "}
              <UilFileAlt size="20" className="button_icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionAboutMe;
