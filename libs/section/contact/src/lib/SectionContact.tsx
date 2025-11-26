import React, { useRef, useState } from "react";
import {
  UilPhone,
  UilEnvelope,
  UilMessage,
  UilSpinner,
} from "@iconscout/react-unicons";
import Data from "@eliascerne/data";
import emailjs from "@emailjs/browser";

import styles from "./SectionContact.module.css";

/* eslint-disable-next-line */
export interface SectionContactProps {
  languageJSON: any;
}

export function SectionContact(props: SectionContactProps) {
  const form = useRef<HTMLFormElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const [sendStatus, setSendStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const { languageJSON } = props;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendStatus("loading");

    if (!form.current || !email.current || email.current.value === "") {
      setSendStatus("idle");
      return;
    }

    emailjs
      .sendForm(
        "service_elias@eliascerne",
        "erias-awesome-email",
        form.current,
        "user_HlCQLxwv6qviZGhpxPks6"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          setSendStatus("success");
          form.current && form.current.reset();
        },
        (error: any) => {
          console.log(error.text);
          setSendStatus("error");
        }
      );
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">
        {Data.language[languageJSON].contactMe.heading}
      </h2>
      <span className="section_subtitle">
        {Data.language[languageJSON].contactMe.subheading}
      </span>

      <div className="contact_container container grid">
        <div>
          {/* Call me */}
          <div className="contact_information">
            <UilPhone className="contact_icon" size="32" />

            <div>
              <h3 className="contact_title">
                {Data.language[languageJSON].contactMe.phoneText}
              </h3>
              <a
                href={`tel:${Data.language[languageJSON].contactMe.phoneNumber}`}
                className="contact_subtitle"
              >
                {Data.language[languageJSON].contactMe.phoneNumber}
              </a>
            </div>
          </div>
          {/* Mail me*/}
          <div className="contact_information">
            <UilEnvelope className="contact_icon" size="32" />

            <div>
              <h3 className="contact_title">
                {Data.language[languageJSON].contactMe.emailText}
              </h3>
              <a
                href={`mailto:${Data.language[languageJSON].contactMe.emailAddress}`}
                className="contact_subtitle"
              >
                {Data.language[languageJSON].contactMe.emailAddress}
              </a>
            </div>
          </div>
        </div>
        {/* Form */}
        <form
          ref={form}
          id="contact-form"
          onSubmit={sendEmail}
          className="contact_form grid"
        >
          <div className="contact_inputs grid">
            <div className="contact_content" id="contact_name">
              <label className="contact_label">
                {Data.language[languageJSON].contactMe.name}
              </label>
              <input
                type="text"
                className="contact_input"
                id="input_name"
                name="input_name"
              />
            </div>
            <div className="contact_content" id="contact_email">
              <label className="contact_label">
                {Data.language[languageJSON].contactMe.email}
              </label>
              <input
                type="email"
                className="contact_input"
                id="input_email"
                name="input_email"
                ref={email}
              />
            </div>
          </div>
          <div className="contact_content" id="contact_company">
            <label className="contact_label">
              {Data.language[languageJSON].contactMe.company}
            </label>
            <input
              type="text"
              className="contact_input"
              id="input_company"
              name="input_company"
            />
          </div>
          <div className="contact_content" id="contact_message">
            <label className="contact_label">
              {Data.language[languageJSON].contactMe.message}
            </label>
            <textarea
              name="input_message"
              id="input_message"
              cols={0}
              rows={4}
              className="contact_input"
            ></textarea>
          </div>

          <div className="contact_button_container">
            <button
              type="submit"
              className="button button--flex form_button"
              id="contact_send_button"
              disabled={sendStatus === "loading"}
            >
              {Data.language[languageJSON].contactMe.button}
              {sendStatus === "loading" ? (
                <UilSpinner className={`${styles["spinner"]} button_icon`} size="20" />
              ) : (
                <UilMessage className="button_icon" size="20" />
              )}
            </button>
            {sendStatus === "success" && (
              <p className={styles["statusMessage"]} role="status">
                {Data.language[languageJSON].contactMe.successMessage}
              </p>
            )}
            {sendStatus === "error" && (
              <p
                className={`${styles["statusMessage"]} ${styles["statusMessageError"]}`}
                role="status"
              >
                {Data.language[languageJSON].contactMe.errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default SectionContact;
