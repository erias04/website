import React, { useMemo, useState } from "react";
import {
  UilGraduationCap,
  UilBriefcaseAlt,
  UilWebGrid,
} from "@iconscout/react-unicons";
import Data from "@eliascerne/data";

import styles from "./SectionQualification.module.css";

/* eslint-disable-next-line */
export interface SectionQualificationProps {
  languageJSON: any;
}

export function SectionQualification(props: SectionQualificationProps) {
  const { languageJSON } = props;
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const icons = [UilGraduationCap, UilBriefcaseAlt, UilWebGrid];

  const qualificationTabs = useMemo(() => {
    const tabs = Data.language[languageJSON].qualification.tabs ?? [];

    return tabs.map((tab: any) => {
      const entries = Object.keys(tab)
        .map((key) => {
          const match = key.match(/^title(\d+)$/);
          if (!match) {
            return null;
          }

          const order = Number(match[1]);
          const title = tab[key];
          const subtitle = tab[`subheading${order}`];
          const date = tab[`date${order}`];

          if (!title && !subtitle && !date) {
            return null;
          }

          return {
            order,
            title,
            subtitle,
            date,
          };
        })
        .filter(Boolean)
        .sort((a: any, b: any) => a.order - b.order);

      return {
        heading: tab.heading,
        entries,
      };
    });
  }, [languageJSON]);

  const qualificationData = Data.language[languageJSON].qualification;

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">{qualificationData.heading}</h2>
      <span className="section_subtitle">{qualificationData.subheading}</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          {qualificationTabs.map((tab: any, index: number) => {
            const Icon = icons[index] ?? UilWebGrid;

            return (
              <div
                key={tab.heading}
                className={
                  "qualification_button button--flex " +
                  (index === activeTabIndex
                    ? "qualification_active"
                    : undefined)
                }
                onClick={() => setActiveTabIndex(index)}
                data-target={`#tab-${index}`}
              >
                <Icon className="qualification_icon" size="28.8" />
                {tab.heading}
              </div>
            );
          })}
        </div>

        <div className="qualification_sections">
          {qualificationTabs.map((tab: any, tabIndex: number) => (
            <div
              key={`${tab.heading}-section`}
              className={
                "qualification_content " +
                (tabIndex === activeTabIndex
                  ? "qualification_active"
                  : undefined)
              }
              data-content
              id={`tab-${tabIndex}`}
            >
              {tab.entries.map((entry: any, entryIndex: number) => {
                const isEven = entryIndex % 2 === 0;
                const showLine = entryIndex !== tab.entries.length - 1;

                return (
                  <div
                    className="qualification_data"
                    key={`${entry.title}-${entryIndex}`}
                  >
                    {isEven ? (
                      <div>
                        <h3 className="qualification_title">{entry.title}</h3>
                        <span className="qualification_subtitle">
                          {entry.subtitle}
                        </span>
                        <div className="qualification_calendar">
                          <i className="uil uil-calender"></i>
                          {entry.date}
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}

                    <div>
                      <span className="qualification_rounder"></span>
                      {showLine ? (
                        <span className="qualification_line"></span>
                      ) : null}
                    </div>

                    {!isEven ? (
                      <div>
                        <h3 className="qualification_title">{entry.title}</h3>
                        <span className="qualification_subtitle">
                          {entry.subtitle}
                        </span>
                        <div className="qualification_calendar">
                          <i className="uil uil-calender"></i>
                          {entry.date}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionQualification;
