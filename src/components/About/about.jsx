import React from 'react';
import styles from "./about.module.css";
import serverImage from "../../../assets/about/serverIcon.png";
import cursorIcon from "../../../assets/about/cursorIcon.png";
import uiIcon from "../../../assets/about/uiIcon.png";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Interests</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={cursorIcon} alt="Cursor icon" className={styles.icon} />
                        <div className={styles.aboutItemText}>
                            <h3>Data Science</h3>
                            <p>
                                With a strong background in Mathematics, Numerical Analysis, and Statistics,
                                I am highly motivated to pivot into Data Science. Leveraging my proficiency
                                in Python, I aim to apply my expertise in integral calculus and statistical
                                modeling to solve complex data challenges.
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={uiIcon} alt="UI icon" className={styles.icon} />
                        <div className={styles.aboutItemText}>
                            <h3>Machine Learning</h3>
                            <p>
                                For my Bachelor’s thesis, I am currently developing a Machine Learning model to predict
                                and classify students' academic performance. This project provided me with
                                a solid foundation in ML fundamentals, including Regression, Clustering,
                                and Classification, and I am willing to take this to the next step and dive into more complex , real-world systems. Furthermore, I sharpened my ability to extract insights from data.
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={serverImage} alt="Server icon" className={styles.icon} />
                        <div className={styles.aboutItemText}>
                            <h3>Strategic Planning & Project Management </h3>
                            <p>
                                Beyond technical implementation and skills, I leverage a solid foundation in Change Management and Project Management tools. I am interested in the full lifecycle of a project—integrating strategic thinking with technical execution to drive meaningful organizational change.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};


