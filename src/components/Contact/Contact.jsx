import React from "react";
import styles from "./Contact.module.css";

import mailImage from "../../../assets/contact/emailIcon.png";
import gitImage from "../../../assets/contact/githubIcon.png";
import linkImage from "../../../assets/contact/linkedinIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:anastasiamaria.mares@gmail.com">
            <img src={mailImage} alt="Email icon" />
          </a>
        </li>

        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/anastasiamares/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkImage} alt="LinkedIn icon" />
          </a>
        </li>

        <li className={styles.link}>
          <a
            href="https://github.com/Siaaaaaaaaaa"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitImage} alt="GitHub icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;

