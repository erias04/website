import React, { useState } from 'react';
import {
  UilBracketsCurly,
  UilAngleDown,
  UilServer,
} from '@iconscout/react-unicons';
import Data from '@eliascerne/data';

import styles from './SectionSkills.module.css';

/* eslint-disable-next-line */
export interface SectionSkillsProps {
  languageJSON: any;
}

export function SectionSkills(props: SectionSkillsProps) {
  const { languageJSON } = props;

  const [showSkills1, setShowSkills1] = useState(true);
  const [showSkills2, setShowSkills2] = useState(false);

  function toggleSkills1() {
    setShowSkills1(!showSkills1);
    setShowSkills2(false);
  }

  function toggleSkills2() {
    setShowSkills2(!showSkills2);
    setShowSkills1(false);
  }

  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">
        {Data.language[languageJSON].skills.heading}
      </h2>
      <span className="section_subtitle">
        {Data.language[languageJSON].skills.subheading}
      </span>

      <div className="skills_container container grid">
        <div>
          {/* SKILL 1 */}
          <div
            className={
              'skills_content ' + (showSkills1 ? 'skills_open' : 'skills_close')
            }
          >
            <div className="skills_header" onClick={toggleSkills1}>
              {/* <UilBracketsCurly className="skills_icon" size="32" /> */}

              <div>
                <h1 className="skills_title">
                  {Data.language[languageJSON].skills.tabs[0].heading}
                </h1>
                <span className="skills_subtitle">
                  {Data.language[languageJSON].skills.tabs[0].subheading}
                </span>
              </div>

              <UilAngleDown className="skills_arrow" size="32" />
            </div>

            <div className="skills_list grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">
                    {Data.language[languageJSON].skills.tabs[0].skill1}
                  </h3>
                  <span className="skills_number">
                    {Data.language[languageJSON].skills.tabs[0].skill1Percent}
                  </span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_sub1Skill1"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">
                    {Data.language[languageJSON].skills.tabs[0].skill2}
                  </h3>
                  <span className="skills_number">
                    {Data.language[languageJSON].skills.tabs[0].skill2Percent}
                  </span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_sub2Skill1"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">
                    {Data.language[languageJSON].skills.tabs[0].skill3}
                  </h3>
                  <span className="skills_number">
                    {Data.language[languageJSON].skills.tabs[0].skill3Percent}
                  </span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_sub2Skill1"></span>
                </div>
              </div>
            </div>
          </div>

          {/* SKILL 2 */}
          <div
            className={
              'skills_content ' + (showSkills2 ? 'skills_open' : 'skills_close')
            }
          >
            <div className="skills_header" onClick={toggleSkills2}>
              <UilServer className="skills_icon" size="32" />

              <div>
                <h1 className="skills_title">
                  {Data.language[languageJSON].skills.tabs[1].heading}
                </h1>
                <span className="skills_subtitle">
                  {Data.language[languageJSON].skills.tabs[1].subheading}
                </span>
              </div>

              <UilAngleDown className="skills_arrow" size="32" />
            </div>

            <div className="skills_list grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">
                    {Data.language[languageJSON].skills.tabs[1].skill1}
                  </h3>
                  <span className="skills_number">
                    {Data.language[languageJSON].skills.tabs[1].skill1Percent}
                  </span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_sub1Skill2"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSkills;
