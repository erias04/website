import React from "react";
import { UilBrowser } from "@iconscout/react-unicons";
import Data from "@eliascerne/data";

import styles from "./SectionPortfolio.module.css";

/* eslint-disable-next-line */
export interface SectionPortfolioProps {
  languageJSON: any;
}

export function SectionPortfolio(props: SectionPortfolioProps) {
  const { languageJSON } = props;
  return (
    <section className="portfolio section" id="portfolio">
      <div className="portfolio_heading">
        <h2 className="section_title portfolio_title">
          {Data.language[languageJSON].portfolio.heading}
        </h2>
        <span className="section_subtitle portfolio_subtitle">
          {Data.language[languageJSON].portfolio.subheading}
        </span>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card_container">
            <div className="card_left">
              <UilBrowser className="card_icon" size="64" />
              <h1 className="card_header">
                {Data.language[languageJSON].portfolio.tabs[0].heading}
              </h1>
              <p className="card_subheader">
                {Data.language[languageJSON].portfolio.tabs[0].subheading}
              </p>

              <p className="card_text">
                {Data.language[languageJSON].portfolio.tabs[0].description}
              </p>
            </div>
            <div className="card_right">
              <img className="card_img" src="/images/portfolio1.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="card_spacer"></div>

        <div className="card">
          <div className="card_container">
            <div className="card_left">
              <UilBrowser className="card_icon" size="64" />
              <h1 className="card_header">
                {Data.language[languageJSON].portfolio.tabs[1].heading}
              </h1>
              <p className="card_subheader">
                {Data.language[languageJSON].portfolio.tabs[1].subheading}
              </p>

              <p className="card_text">
                {Data.language[languageJSON].portfolio.tabs[1].description}
              </p>
              <a
                href="https://erias04.github.io/pacman/"
                className="button card_button"
              >
                {Data.language[languageJSON].portfolio.tabs[1].button}
              </a>
            </div>
            <div className="card_right">
              <img
                className="card_img"
                src="/images/pacman_erias04.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* <div className="card">
                    <div className="card_container">
                        <div className="card_left">
                            <UilBrowser className="card_icon" size="64" />
                            <h1 className="card_header">{Data.language[languageJSON].portfolio.tabs[2].heading}</h1>
                            <p className="card_subheader">{Data.language[languageJSON].portfolio.tabs[2].subheading}</p>

                            <p className="card_text">{Data.language[languageJSON].portfolio.tabs[2].description}</p>
                            <a href="" className="button card_button">{Data.language[languageJSON].portfolio.tabs[2].button}</a>
                        </div>
                        <div className="card_right">
                            <img className="card_img" src="/images/portfolio1.jpg" alt="" />
                        </div>
                    </div>
                </div> */}
      </div>
    </section>
  );
}

export default SectionPortfolio;
